import { BaseModule } from "./base";
import type {
  ProcessosJudiciaisPfResponse,
  ProcessosJudiciaisPjResponse,
} from "../types/processos-judiciais";
import type { CnpjRequest, CpfRequest } from "../types/common";

export class ProcessosJudiciaisModule extends BaseModule {
  /**
   * Processos Judiciais > PF - Pessoa Física > Processos Judiciais PF
   */
  pf(params: CpfRequest): Promise<ProcessosJudiciaisPfResponse> {
    return this.http.post("/v1/processos-judiciais/pf", params);
  }

  /**
   * Processos Judiciais > PJ - Pessoa Jurídica > Processos Judiciais PJ
   */
  pj(params: CnpjRequest): Promise<ProcessosJudiciaisPjResponse> {
    return this.http.post("/v1/processos-judiciais/pj", params);
  }
}
