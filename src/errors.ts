/** Every failed TargetData call throws this: HTTP errors, API error codes and no-answer cases. */
export class TargetDataError extends Error {
  /** HTTP status. `0` when no answer came back (network down, timeout). */
  readonly status: number;
  /** TargetData's own `code_error`, e.g. `1104` for "Saldo insuficiente". */
  readonly code: number | undefined;
  /** `request_id` of the failed call. Send it to TargetData support. */
  readonly requestId: string | undefined;
  /** The raw response body, when there was one. */
  readonly body: unknown;

  constructor(init: {
    status: number;
    message: string;
    code?: number;
    requestId?: string;
    body?: unknown;
  }) {
    super(init.message);
    this.name = "TargetDataError";
    this.status = init.status;
    this.code = init.code;
    this.requestId = init.requestId;
    this.body = init.body;
  }
}

function isRecord(value: unknown): value is Record<string, unknown> {
  return typeof value === "object" && value !== null && !Array.isArray(value);
}

/**
 * TargetData reports a failure in three shapes: `{ code_error, message_error }` before login,
 * the same two fields inside `header` after it, and `{ code, message }` for the rate limit.
 */
export function errorFromResponse(status: number, body: unknown): TargetDataError {
  const root = isRecord(body) ? body : {};
  const header = isRecord(root.header) ? root.header : root;

  const rawCode = header.code_error ?? root.code;
  const code = rawCode === undefined || rawCode === null ? NaN : Number(rawCode);
  const vendorMessage = header.message_error ?? root.message;
  const requestId = typeof header.request_id === "string" ? header.request_id : undefined;

  const detail = typeof vendorMessage === "string" && vendorMessage ? vendorMessage : undefined;
  const where = Number.isNaN(code) ? `HTTP ${status}` : `code ${code}, HTTP ${status}`;

  return new TargetDataError({
    status,
    code: Number.isNaN(code) ? undefined : code,
    requestId,
    body,
    message: detail
      ? `${detail} (TargetData ${where})`
      : `TargetData answered with an error (${where})`,
  });
}
