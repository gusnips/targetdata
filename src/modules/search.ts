import { BaseModule } from "./base";
import type {
  SearchPfRequest,
  SearchPfResponse,
  SearchPjRequest,
  SearchPjResponse,
} from "../types/search";

export class SearchModule extends BaseModule {
  /**
   * Search > PF - Pessoa Física
   */
  pf(params: SearchPfRequest): Promise<SearchPfResponse> {
    return this.http.post("/v1/search/pf", params);
  }

  /**
   * Search > PJ - Pessoa Jurídica
   */
  pj(params: SearchPjRequest): Promise<SearchPjResponse> {
    return this.http.post("/v1/search/pj", params);
  }
}
