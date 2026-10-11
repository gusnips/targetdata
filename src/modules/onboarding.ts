import { BaseModule } from "./base";
import type { OnboardingPjResponse } from "../types/onboarding";
import type { DocumentRequest } from "../types/common";

export class OnboardingModule extends BaseModule {
  /**
   * Onboarding > PJ - Pessoa Jurídica > Onboarding PJ
   */
  pj(params: DocumentRequest): Promise<OnboardingPjResponse> {
    return this.http.post("/v1/onboarding/pj", params);
  }
}
