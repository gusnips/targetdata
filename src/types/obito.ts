import type { ResponseHeader } from "./common";

export interface ObitoQueryResults {
  code?: number;
  cpf?: string;
  type?: string;
  name?: string;
  death_date?: string;
  register_date?: string;
  born_date?: string;
  parent1_name?: string;
  parent2_name?: string;
  registry_office_name?: string;
  cnj_number?: string;
  registration?: string;
  message?: string;
}

/** Óbitos Cartório > Óbito. POST /v1/obito. Shape inferred from the examples in TargetData's docs. */
export interface ObitoQueryResponse {
  results: ObitoQueryResults;
  header: ResponseHeader;
}
