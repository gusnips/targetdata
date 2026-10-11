import { BaseModule } from "./base";
import type {
  HotphonePfResponse,
  HotphonePfV2Response,
  HotphonePjResponse,
  HotphonePjV2Response,
} from "../types/hotphone";
import type { CnpjRequest, CpfRequest } from "../types/common";

export class HotphoneModule extends BaseModule {
  /**
   * Hotphone > PF - Pessoa Física
   */
  pf(params: CpfRequest): Promise<HotphonePfResponse> {
    return this.http.post("/v1/hotphone/pf", params);
  }

  /**
   * Hotphone > PF - Pessoa Física > Hotphone v2
   */
  pfV2(params: CpfRequest): Promise<HotphonePfV2Response> {
    return this.http.post("/v2/hotphone/pf", params);
  }

  /**
   * Hotphone > PJ - Pessoa Jurídica
   */
  pj(params: CnpjRequest): Promise<HotphonePjResponse> {
    return this.http.post("/v1/hotphone/pj", params);
  }

  /**
   * Hotphone > PJ - Pessoa Jurídica > Hotphone v2
   */
  pjV2(params: CnpjRequest): Promise<HotphonePjV2Response> {
    return this.http.post("/v2/hotphone/pj", params);
  }
}
