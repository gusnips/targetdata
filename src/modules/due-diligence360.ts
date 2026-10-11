import { BaseModule } from "./base";
import type {
  DueDiligence360PfResponse,
  DueDiligence360PjResponse,
  DueDiligence360ReprocessamentoResponse,
} from "../types/due-diligence360";
import type { CnpjRequest, CpfRequest, RequestIdRequest } from "../types/common";

export class DueDiligence360Module extends BaseModule {
  /**
   * Due Diligence 360 > PF - Pessoa Física > Due Diligence 360 - PF
   * @experimental TargetData marks this product as under construction.
   */
  pf(params: CpfRequest): Promise<DueDiligence360PfResponse> {
    return this.http.post("/v1/due-diligence-360/pf", params);
  }

  /**
   * Due Diligence 360 > PJ - Pessoa Jurídica > Due Diligence 360 - PJ
   * @experimental TargetData marks this product as under construction.
   */
  pj(params: CnpjRequest): Promise<DueDiligence360PjResponse> {
    return this.http.post("/v1/due-diligence-360/pj", params);
  }

  /**
   * Due Diligence 360 > Reprocessamento Indisponibilidade - PF/PJ > Reprocessamento
   * @experimental TargetData marks this product as under construction.
   */
  reprocessamento(params: RequestIdRequest): Promise<DueDiligence360ReprocessamentoResponse> {
    return this.http.post("/v1/due-diligence-360/reprocessamento", params);
  }
}
