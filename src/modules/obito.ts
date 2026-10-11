import { BaseModule } from "./base";
import type { ObitoQueryResponse } from "../types/obito";
import type { CpfRequest } from "../types/common";

export class ObitoModule extends BaseModule {
  /**
   * Óbitos Cartório > Óbito
   * @experimental TargetData marks this product as under construction.
   */
  query(params: CpfRequest): Promise<ObitoQueryResponse> {
    return this.http.post("/v1/obito", params);
  }
}
