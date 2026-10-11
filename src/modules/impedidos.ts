import { BaseModule } from "./base";
import type { ImpedidosPfResponse } from "../types/impedidos";
import type { CpfRequest } from "../types/common";

export class ImpedidosModule extends BaseModule {
  /**
   * Impedidos
   */
  pf(params: CpfRequest): Promise<ImpedidosPfResponse> {
    return this.http.post("/v1/impedidos/pf", params);
  }
}
