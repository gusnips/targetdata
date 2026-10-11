import type { ResponseHeader } from "./common";

export interface SearchMaePfResults {
  nm_completo?: string;
  nm_mae?: string;
  nr_cpf?: string;
  nr_cpf_mae?: unknown;
}

/** Search Mãe > PF - Pessoa Física. POST /v1/pf/search_mae. Shape inferred from the examples in TargetData's docs. */
export interface SearchMaePfResponse {
  results: SearchMaePfResults;
  header: ResponseHeader;
}
