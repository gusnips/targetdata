import { BaseModule } from "./base";
import type {
  MonitoraPjCancelarCnpjResponse,
  MonitoraPjConsultarCarteiraResponse,
  MonitoraPjConsultarCnpjResponse,
  MonitoraPjIncluirCnpjResponse,
} from "../types/monitora";
import type { CnpjRequest } from "../types/common";

export class MonitoraModule extends BaseModule {
  /**
   * Monitora PJ > Consultar Carteira
   */
  pjConsultarCarteira(): Promise<MonitoraPjConsultarCarteiraResponse> {
    return this.http.post("/v1/monitora/pj/consultar_carteira");
  }

  /**
   * Monitora PJ > Incluir CNPJ
   */
  pjIncluirCnpj(params: CnpjRequest): Promise<MonitoraPjIncluirCnpjResponse> {
    return this.http.post("/v1/monitora/pj/incluir_cnpj", params);
  }

  /**
   * Monitora PJ > Consultar CNPJ
   */
  pjConsultarCnpj(params: CnpjRequest): Promise<MonitoraPjConsultarCnpjResponse> {
    return this.http.post("/v1/monitora/pj/consultar_cnpj", params);
  }

  /**
   * Monitora PJ > Cancelar CNPJ
   */
  pjCancelarCnpj(params: CnpjRequest): Promise<MonitoraPjCancelarCnpjResponse> {
    return this.http.post("/v1/monitora/pj/cancelar_cnpj", params);
  }
}
