import { BaseModule } from "./base";
import type {
  CompliancePfBasicResponse,
  CompliancePfCompleteResponse,
  CompliancePjBasicResponse,
  CompliancePjCompleteResponse,
} from "../types/compliance";
import type { CnpjRequest, CpfRequest } from "../types/common";

export class ComplianceModule extends BaseModule {
  /**
   * Compliance > PF - Pessoa Física > Compliance Basic
   */
  pfBasic(params: CpfRequest): Promise<CompliancePfBasicResponse> {
    return this.http.post("/v1/compliance/pf/basic", params);
  }

  /**
   * Compliance > PF - Pessoa Física > Compliance Complete
   */
  pfComplete(params: CpfRequest): Promise<CompliancePfCompleteResponse> {
    return this.http.post("/v1/compliance/pf/complete", params);
  }

  /**
   * Compliance > PJ - Pessoa Jurídica > Compliance Basic
   */
  pjBasic(params: CnpjRequest): Promise<CompliancePjBasicResponse> {
    return this.http.post("/v1/compliance/pj/basic", params);
  }

  /**
   * Compliance > PJ - Pessoa Jurídica > Compliance Complete
   */
  pjComplete(params: CnpjRequest): Promise<CompliancePjCompleteResponse> {
    return this.http.post("/v1/compliance/pj/complete", params);
  }
}
