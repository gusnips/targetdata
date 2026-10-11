import { BaseModule } from "./base";
import type {
  ProveInstantLinkRequest,
  ProveInstantLinkResponse,
  ProveInstantLinkResultRequest,
  ProveInstantLinkResultResponse,
  ProvePrefillRequest,
  ProvePrefillResponse,
  ProveTrustScoreRequest,
  ProveTrustScoreResponse,
  ProveVerifyRequest,
  ProveVerifyResponse,
} from "../types/prove";

export class ProveModule extends BaseModule {
  /**
   * Instant Link
   */
  instantLink(params: ProveInstantLinkRequest): Promise<ProveInstantLinkResponse> {
    return this.http.post("/v1/prove/instant_link", params);
  }

  /**
   * Instant Link > Instant Link Result
   */
  instantLinkResult(
    params: ProveInstantLinkResultRequest,
  ): Promise<ProveInstantLinkResultResponse> {
    return this.http.post("/v1/prove/instant_link/result", params);
  }

  /**
   * Trust Score
   */
  trustScore(params: ProveTrustScoreRequest): Promise<ProveTrustScoreResponse> {
    return this.http.post("/v1/prove/trust_score", params);
  }

  /**
   * Verify
   */
  verify(params: ProveVerifyRequest): Promise<ProveVerifyResponse> {
    return this.http.post("/v1/prove/verify", params);
  }

  /**
   * Prefill
   */
  prefill(params: ProvePrefillRequest): Promise<ProvePrefillResponse> {
    return this.http.post("/v1/prove/prefill", params);
  }
}
