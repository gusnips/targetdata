import { BaseModule } from "./base";
import type {
  MonteSuaConsultaQueryResponse,
  MonteSuaConsultaReprocessamentoResponse,
  MonteSuaConsultaRequest,
  MonteSuaConsultaStatusResponse,
} from "../types/monte-sua-consulta";
import type { RequestIdRequest } from "../types/common";

export class MonteSuaConsultaModule extends BaseModule {
  /**
   * Monte a sua consulta veicular > Requisição
   */
  query(params: MonteSuaConsultaRequest): Promise<MonteSuaConsultaQueryResponse> {
    return this.http.post("/v1/monte-sua-consulta", params);
  }

  /**
   * Monte a sua consulta veicular > Reprocessamento
   */
  reprocessamento(params: RequestIdRequest): Promise<MonteSuaConsultaReprocessamentoResponse> {
    return this.http.post("/v1/monte-sua-consulta/reprocessamento", params);
  }

  /**
   * Monte a sua consulta veicular > Status
   */
  status(params: RequestIdRequest): Promise<MonteSuaConsultaStatusResponse> {
    return this.http.post("/v1/monte-sua-consulta/status", params);
  }
}
