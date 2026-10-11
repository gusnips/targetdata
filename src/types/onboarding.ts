import type { ResponseHeader } from "./common";

export interface OnboardingDocument {
  type?: string;
  number?: string;
  status?: string;
  last_updated?: string;
  legal_nature?: unknown;
  legal_status?: string;
}

export interface OnboardingAddress {
  street?: string;
  number?: string;
  complement?: string;
  neighborhood?: string;
  city?: unknown;
  state?: string;
  zip_code?: string;
}

export interface OnboardingFinancial {
  social_capital?: string;
  income_bracket?: string;
}

export interface OnboardingMemberDocument {
  type?: string;
  number?: string;
  status?: string;
  last_updated?: string;
}

export interface OnboardingIndicators {
  death?: boolean;
  pep?: boolean;
  regulation_restriction?: boolean;
  social_beneficiary?: boolean;
}

export interface OnboardingMemberAddress {
  street?: string;
  number?: string;
  complement?: string;
  neighborhood?: string;
  city?: string;
  state?: string;
  zip_code?: string;
}

export interface OnboardingMemberFinancial {
  income_bracket?: string;
}

export interface OnboardingOwnership {
  total?: unknown;
  percent?: unknown;
}

export interface OnboardingMember {
  name?: string;
  social_name?: string;
  birth?: string;
  mother_name?: string;
  gender?: string;
  document?: OnboardingMemberDocument;
  indicators?: OnboardingIndicators;
  address?: OnboardingMemberAddress;
  financial?: OnboardingMemberFinancial;
  age?: number;
  ownership?: OnboardingOwnership;
}

export interface OnboardingPjResults {
  name?: string;
  birth?: string;
  age?: number;
  document?: OnboardingDocument;
  address?: OnboardingAddress;
  financial?: OnboardingFinancial;
  members?: OnboardingMember[];
  constitutionForm?: unknown;
  size?: string;
  legalNatureCode?: unknown;
  legalNatureDescription?: unknown;
}

/** Onboarding > PJ - Pessoa Jurídica > Onboarding PJ. POST /v1/onboarding/pj. Shape inferred from the examples in TargetData's docs. */
export interface OnboardingPjResponse {
  results: OnboardingPjResults;
  header: ResponseHeader;
}
