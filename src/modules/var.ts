import { BaseModule } from "./base";
import type { VarQueryResponse } from "../types/var";
import type { CpfsRequest } from "../types/common";

export class VarModule extends BaseModule {
  /**
   * VAR
   */
  query(params: CpfsRequest): Promise<VarQueryResponse> {
    return this.http.post("/v1/var", params);
  }
}
