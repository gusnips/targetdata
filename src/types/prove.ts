import type { ResponseHeader } from "./common";

export interface ProveInstantLinkRequest {
  requestId: string;
  phoneNumber: string;
  callbackUrl: string;
  ipAddress: string;
  sendSms: boolean;
  generateQR: boolean;
  prefill: boolean;
}

export interface ProveNumberInfo {
  carrier?: string;
  countryCode?: string;
}

export interface ProveSmsInfo {
  smsSent?: boolean;
  smsTransactionId?: number;
}

export interface ProveResponse {
  numberInfo?: ProveNumberInfo;
  redirectUrl?: string;
  smsInfo?: ProveSmsInfo;
  troubleshootingId?: string;
  verificationCode?: string;
}

export interface ProveInstantLinkResults {
  requestId?: string;
  response?: ProveResponse;
  status?: number;
}

/** Instant Link. POST /v1/prove/instant_link. Shape inferred from the examples in TargetData's docs. */
export interface ProveInstantLinkResponse {
  header: ResponseHeader;
  results: ProveInstantLinkResults;
}

export interface ProveInstantLinkResultRequest {
  requestId: string;
  vfp: string;
}

export interface ProveResultsResponse {
  authenticated?: boolean;
  troubleshootingId?: string;
}

export interface ProveInstantLinkResultResults {
  requestId?: string;
  response?: ProveResultsResponse;
  status?: number;
}

/** Instant Link > Instant Link Result. POST /v1/prove/instant_link/result. Shape inferred from the examples in TargetData's docs. */
export interface ProveInstantLinkResultResponse {
  header: ResponseHeader;
  results: ProveInstantLinkResultResults;
}

export interface ProveTrustScoreRequest {
  requestId: string;
  phoneNumber: string;
  country: string;
  details: boolean;
  prefill: boolean;
}

export interface ProveResponseNumberInfo {
  carrier?: string;
  countryCode?: string;
  lineType?: string;
}

export interface ProveTrustScoreResultsResponse {
  numberInfo?: ProveResponseNumberInfo;
  troubleshootingId?: string;
  trustScore?: number;
}

export interface ProveTrustScoreResults {
  requestId?: string;
  response?: ProveTrustScoreResultsResponse;
  status?: number;
}

/** Trust Score. POST /v1/prove/trust_score. Shape inferred from the examples in TargetData's docs. */
export interface ProveTrustScoreResponse {
  header: ResponseHeader;
  results: ProveTrustScoreResults;
}

export interface ProveNationalId {
  country: string;
  idType: string;
  idNumber: string;
}

export interface ProveVerifyRequest {
  requestId: string;
  phoneNumber: string;
  firstName: string;
  lastName: string;
  address: string;
  extendedAddress: string;
  city: string;
  region: string;
  postalCode: string;
  dob: string;
  nationalIds: ProveNationalId[];
  country: string;
  ipAddress: string;
  amlConsentStatus: string;
  prefill: boolean;
}

export interface ProveAddress {
  addressScore?: number;
}

export interface ProveName {
  firstName?: number;
  lastName?: number;
  nameScore?: number;
}

export interface ProveVerifyResultsResponse {
  address?: ProveAddress;
  dob?: boolean;
  identifiers?: Record<string, unknown>;
  indicators?: string[];
  name?: ProveName;
  numberInfo?: ProveResponseNumberInfo;
  troubleshootingId?: string;
  verified?: boolean;
}

export interface ProveVerifyResults {
  requestId?: string;
  response?: ProveVerifyResultsResponse;
  status?: number;
}

/** Verify. POST /v1/prove/verify. Shape inferred from the examples in TargetData's docs. */
export interface ProveVerifyResponse {
  header: ResponseHeader;
  results: ProveVerifyResults;
}

export interface ProvePrefillRequest {
  requestId: string;
  phoneNumber: string;
  identifier: string;
  numberOfAddresses: number;
}

export interface ProveAddresse {
  address?: string;
  city?: string;
  region?: string;
  postalCode?: string;
}

export interface ProveIndividual {
  firstName?: string;
  lastName?: string;
  addresses?: ProveAddresse[];
  dob?: string;
  identifier?: string;
}

export interface ProvePrefillResultsResponse {
  troubleshootingId?: string;
  numberInfo?: ProveResponseNumberInfo;
  individual?: ProveIndividual;
}

export interface ProvePrefillResults {
  status?: number;
  requestId?: string;
  response?: ProvePrefillResultsResponse;
}

/** Prefill. POST /v1/prove/prefill. Shape inferred from the examples in TargetData's docs. */
export interface ProvePrefillResponse {
  results: ProvePrefillResults;
  header: ResponseHeader;
}
