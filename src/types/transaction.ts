import type { ResponseHeader } from "./common";

export interface TransactionDocument {
  type?: string;
  number?: string;
  status?: string;
  last_updated?: string;
}

export interface TransactionIndicators {
  death?: boolean;
  pep?: boolean;
  regulation_restriction?: boolean;
  social_beneficiary?: boolean;
}

export interface TransactionAddress {
  street?: string;
  number?: string;
  complement?: string;
  neighborhood?: string;
  city?: string;
  state?: string;
  zip_code?: string;
}

export interface TransactionFinancial {
  income_bracket?: string;
}

export interface TransactionPfResults {
  name?: string;
  social_name?: string;
  birth?: string;
  mother_name?: string;
  gender?: string;
  document?: TransactionDocument;
  indicators?: TransactionIndicators;
  address?: TransactionAddress;
  financial?: TransactionFinancial;
  age?: number;
}

/** Transacional > PF - Pessoa Física > Transacional PF. POST /v1/transaction/pf. Shape inferred from the examples in TargetData's docs. */
export interface TransactionPfResponse {
  results: TransactionPfResults;
  header: ResponseHeader;
}

export interface TransactionResultsDocument {
  type?: string;
  number?: string;
  status?: string;
  last_updated?: string;
  legal_nature?: unknown;
  legal_status?: string;
}

export interface TransactionResultsAddress {
  street?: string;
  number?: string;
  complement?: string;
  neighborhood?: string;
  city?: unknown;
  state?: string;
  zip_code?: string;
}

export interface TransactionResultsFinancial {
  social_capital?: string;
  income_bracket?: string;
}

export interface TransactionOwnership {
  total?: unknown;
  percent?: unknown;
}

export interface TransactionMember {
  name?: string;
  social_name?: string;
  birth?: string;
  mother_name?: string;
  gender?: string;
  document?: TransactionDocument;
  indicators?: TransactionIndicators;
  address?: TransactionAddress;
  financial?: TransactionFinancial;
  age?: number;
  ownership?: TransactionOwnership;
}

export interface TransactionPjResults {
  name?: string;
  birth?: string;
  age?: number;
  document?: TransactionResultsDocument;
  address?: TransactionResultsAddress;
  financial?: TransactionResultsFinancial;
  members?: TransactionMember[];
}

/** Transacional > PJ - Pessoa Jurídica > Transacional PJ. POST /v1/transaction/pj. Shape inferred from the examples in TargetData's docs. */
export interface TransactionPjResponse {
  results: TransactionPjResults;
  header: ResponseHeader;
}
