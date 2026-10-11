import axios, { isAxiosError, type AxiosInstance } from "axios";
import { TargetDataError, errorFromResponse } from "./errors";
import type { TargetDataConfig } from "./types/common";

export const DEFAULT_BASE_URL = "https://api.targetdata.com.br/api";
const DEFAULT_TIMEOUT_MS = 60_000;
const DEFAULT_RETRIES = 2;
const RETRY_BASE_DELAY_MS = 500;

const sleep = (ms: number) => new Promise<void>((resolve) => setTimeout(resolve, ms));

/** Sends every call as a POST, with the API key and secret added to the JSON body. */
export class Http {
  private readonly axios: AxiosInstance;
  private readonly credentials: { api_key: string; api_secret: string };
  private readonly retries: number;

  constructor(config: TargetDataConfig) {
    if (!config.apiKey || !config.apiSecret) {
      throw new Error(
        "TargetData needs both apiKey and apiSecret. Create them in the Smart platform, then pass them to new TargetDataClient({ apiKey, apiSecret }).",
      );
    }
    this.credentials = { api_key: config.apiKey, api_secret: config.apiSecret };
    this.retries = config.retries ?? DEFAULT_RETRIES;
    this.axios = axios.create({
      baseURL: config.baseUrl ?? DEFAULT_BASE_URL,
      timeout: config.timeout ?? DEFAULT_TIMEOUT_MS,
      headers: { "Content-Type": "application/json", Accept: "application/json" },
    });
  }

  /**
   * Retries only on HTTP 500, as TargetData recommends. Only a 200 is billed, so a retry costs
   * nothing extra.
   */
  async post<T>(path: string, params?: object): Promise<T> {
    for (let attempt = 0; ; attempt++) {
      try {
        const { data } = await this.axios.post<T>(path, { ...params, ...this.credentials });
        return data;
      } catch (error) {
        const failure = toTargetDataError(error);
        if (failure.status !== 500 || attempt >= this.retries) throw failure;
        await sleep(RETRY_BASE_DELAY_MS * 2 ** attempt);
      }
    }
  }
}

/**
 * Never pass the Axios error on as `cause`: it carries the request body, which holds the API
 * secret, and would end up in any log or error tracker that prints the cause.
 */
function toTargetDataError(error: unknown): TargetDataError {
  if (!isAxiosError(error)) throw error;
  if (error.response) return errorFromResponse(error.response.status, error.response.data);
  const reason = error.code === "ECONNABORTED" ? "it took too long" : (error.code ?? error.message);
  return new TargetDataError({
    status: 0,
    message: `No answer from TargetData (${reason}). Check your connection and try again, or raise the timeout option.`,
  });
}
