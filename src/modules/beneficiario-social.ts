import { BaseModule } from "./base";
import type { BeneficiarioSocialPfResponse } from "../types/beneficiario-social";
import type { CpfRequest } from "../types/common";

export class BeneficiarioSocialModule extends BaseModule {
  /**
   * Benefício Social PF
   */
  pf(params: CpfRequest): Promise<BeneficiarioSocialPfResponse> {
    return this.http.post("/v1/beneficiario_social/pf", params);
  }
}
