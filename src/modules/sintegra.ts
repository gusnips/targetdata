import { BaseModule } from "./base";
import type { SintegraQueryResponse } from "../types/sintegra";
import type { CnpjRequest } from "../types/common";

export class SintegraModule extends BaseModule {
  /**
   * Sintegra PJ
   */
  query(params: CnpjRequest): Promise<SintegraQueryResponse> {
    return this.http.post("/v1/sintegra", params);
  }
}
