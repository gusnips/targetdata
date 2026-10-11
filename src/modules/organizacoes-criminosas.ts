import { BaseModule } from "./base";
import type { OrganizacoesCriminosasPfResponse } from "../types/organizacoes-criminosas";
import type { CpfRequest } from "../types/common";

export class OrganizacoesCriminosasModule extends BaseModule {
  /**
   * Organizações Criminosas > Organizações Criminosas - PF
   */
  pf(params: CpfRequest): Promise<OrganizacoesCriminosasPfResponse> {
    return this.http.post("/v1/organizacoes-criminosas/pf", params);
  }
}
