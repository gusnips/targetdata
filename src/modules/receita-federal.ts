import { BaseModule } from "./base";
import type {
  ReceitaFederalCheckTimestampRequest,
  ReceitaFederalCheckTimestampResponse,
  ReceitaFederalPfResponse,
  ReceitaFederalPjDiffResponse,
  ReceitaFederalPjResponse,
} from "../types/receita-federal";
import type { CnpjRequest, CpfRequest } from "../types/common";

export class ReceitaFederalModule extends BaseModule {
  /**
   * Receita Federal > PF - Pessoa Física > Consulta em Tempo Real
   */
  pf(params: CpfRequest): Promise<ReceitaFederalPfResponse> {
    return this.http.post("/v1/receita_federal/pf", params);
  }

  /**
   * Receita Federal > PJ - Pessoa Jurídica > Consulta em Tempo Real
   */
  pj(params: CnpjRequest): Promise<ReceitaFederalPjResponse> {
    return this.http.post("/v1/receita_federal/pj", params);
  }

  /**
   * Receita Federal > PJ - Pessoa Jurídica > Detector de Mudanças
   */
  pjDiff(params: CnpjRequest): Promise<ReceitaFederalPjDiffResponse> {
    return this.http.post("/v1/receita_federal/pj_diff", params);
  }

  /**
   * Receita Federal > Validação de Autenticidade
   */
  checkTimestamp(
    params: ReceitaFederalCheckTimestampRequest,
  ): Promise<ReceitaFederalCheckTimestampResponse> {
    return this.http.post("/v1/receita_federal/check_timestamp", params);
  }
}
