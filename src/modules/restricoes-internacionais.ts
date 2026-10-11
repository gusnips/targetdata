import { BaseModule } from "./base";
import type {
  RestricoesInternacionaisQueryResponse,
  RestricoesInternacionaisRequest,
} from "../types/restricoes-internacionais";

export class RestricoesInternacionaisModule extends BaseModule {
  /**
   * PEP - Listas Restritivas Internacionais
   */
  query(params: RestricoesInternacionaisRequest): Promise<RestricoesInternacionaisQueryResponse> {
    return this.http.post("/v1/restricoes-internacionais", params);
  }
}
