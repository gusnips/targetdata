import { BaseModule } from "./base";
import type { SearchMaePfResponse } from "../types/search-mae";
import type { CpfRequest } from "../types/common";

export class SearchMaeModule extends BaseModule {
  /**
   * Search Mãe > PF - Pessoa Física
   */
  pf(params: CpfRequest): Promise<SearchMaePfResponse> {
    return this.http.post("/v1/pf/search_mae", params);
  }
}
