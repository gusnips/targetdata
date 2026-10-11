export interface TargetDataConfig {
  /** API Key from the Smart platform (Integração > Chaves da API). */
  apiKey: string;
  /** API Secret that goes with the key. Keep it on your server. */
  apiSecret: string;
  /** Defaults to `https://api.targetdata.com.br/api`. */
  baseUrl?: string;
  /** Milliseconds to wait for an answer. Defaults to 60000. */
  timeout?: number;
  /** Extra attempts after an HTTP 500. Defaults to 2. Other errors are never retried. */
  retries?: number;
}

/** The `header` that comes back with most answers. */
export interface ResponseHeader {
  request_id: string;
  /** `DD/MM/YYYY HH:MM:SS` */
  request_date: string;
  elapsed_time_seconds: number;
  amount_sent: number;
  amount_found: number;
  code_error: number | string | null;
  message_error: string | null;
  parent_request_id?: string | null;
  product_id?: string;
}

/** For the endpoints whose docs have no example answer, so the `results` shape is not known. */
export interface RawResponse {
  header?: ResponseHeader;
  results?: unknown;
}

export interface CpfRequest {
  /** With or without mask. */
  cpf: string;
}

export interface CnpjRequest {
  /** With or without mask. */
  cnpj: string;
}

export interface CpfsRequest {
  cpfs: string[];
}

export interface CpfCnpjRequest {
  cpf_cnpj: string;
}

/** A CPF or a CNPJ. */
export interface DocumentRequest {
  document: string;
}

export interface CnhRequest {
  cnh: string;
}

export interface PlacaRequest {
  placa: string;
}

/** Send the plate, the chassis number, or both. */
export type PlacaOrChassiRequest =
  { placa: string; chassi?: string } | { chassi: string; placa?: string };

/** The `request_id` of an earlier answer, to reprocess it or read its status. */
export interface RequestIdRequest {
  request_id: string;
}
