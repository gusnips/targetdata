import { BaseModule } from "./base";
import type { CapivaraPfResponse, CapivaraPjResponse } from "../types/capivara";
import type { DocumentRequest } from "../types/common";

export class CapivaraModule extends BaseModule {
  /**
   * Capivara > PF - Pessoa Física > Capivara PF
   */
  pf(params: DocumentRequest): Promise<CapivaraPfResponse> {
    return this.http.post("/v1/capivara/pf", params);
  }

  /**
   * Capivara > PJ - Pessoa Jurídica > Capivara PJ
   */
  pj(params: DocumentRequest): Promise<CapivaraPjResponse> {
    return this.http.post("/v1/capivara/pj", params);
  }
}
