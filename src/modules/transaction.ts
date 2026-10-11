import { BaseModule } from "./base";
import type { TransactionPfResponse, TransactionPjResponse } from "../types/transaction";
import type { DocumentRequest } from "../types/common";

export class TransactionModule extends BaseModule {
  /**
   * Transacional > PF - Pessoa Física > Transacional PF
   */
  pf(params: DocumentRequest): Promise<TransactionPfResponse> {
    return this.http.post("/v1/transaction/pf", params);
  }

  /**
   * Transacional > PJ - Pessoa Jurídica > Transacional PJ
   */
  pj(params: DocumentRequest): Promise<TransactionPjResponse> {
    return this.http.post("/v1/transaction/pj", params);
  }
}
