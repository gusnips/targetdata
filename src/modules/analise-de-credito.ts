import { BaseModule } from "./base";
import type {
  AnaliseDeCreditoPfBasicResponse,
  AnaliseDeCreditoPfCompleteResponse,
  AnaliseDeCreditoPfEssencialResponse,
  AnaliseDeCreditoPfPlusResponse,
  AnaliseDeCreditoPfPositiveResponse,
  AnaliseDeCreditoPjBasicResponse,
  AnaliseDeCreditoPjBusinessResponse,
  AnaliseDeCreditoPjLimitResponse,
  AnaliseDeCreditoPjPositiveResponse,
  AnaliseDeCreditoPjRiskResponse,
} from "../types/analise-de-credito";
import type { CnpjRequest, CpfRequest } from "../types/common";

export class AnaliseDeCreditoModule extends BaseModule {
  /**
   * Análise de Crédito > PF - Pessoa Física > Basic
   */
  pfBasic(params: CpfRequest): Promise<AnaliseDeCreditoPfBasicResponse> {
    return this.http.post("/v1/analise_de_credito/pf/basic", params);
  }

  /**
   * Análise de Crédito > PF - Pessoa Física > Essencial
   */
  pfEssencial(params: CpfRequest): Promise<AnaliseDeCreditoPfEssencialResponse> {
    return this.http.post("/v1/analise_de_credito/pf/essencial", params);
  }

  /**
   * Análise de Crédito > PF - Pessoa Física > Relatório Positivo
   */
  pfPositive(params: CpfRequest): Promise<AnaliseDeCreditoPfPositiveResponse> {
    return this.http.post("/v1/analise_de_credito/pf/positive", params);
  }

  /**
   * Análise de Crédito > PF - Pessoa Física > Plus
   */
  pfPlus(params: CpfRequest): Promise<AnaliseDeCreditoPfPlusResponse> {
    return this.http.post("/v1/analise_de_credito/pf/plus", params);
  }

  /**
   * Análise de Crédito > PF - Pessoa Física > Complete
   */
  pfComplete(params: CpfRequest): Promise<AnaliseDeCreditoPfCompleteResponse> {
    return this.http.post("/v1/analise_de_credito/pf/complete", params);
  }

  /**
   * Análise de Crédito > PJ - Pessoa Jurídica > Basic
   */
  pjBasic(params: CnpjRequest): Promise<AnaliseDeCreditoPjBasicResponse> {
    return this.http.post("/v1/analise_de_credito/pj/basic", params);
  }

  /**
   * Análise de Crédito > PJ - Pessoa Jurídica > Risk
   */
  pjRisk(params: CnpjRequest): Promise<AnaliseDeCreditoPjRiskResponse> {
    return this.http.post("/v1/analise_de_credito/pj/risk", params);
  }

  /**
   * Análise de Crédito > PJ - Pessoa Jurídica > Relatório Positivo
   */
  pjPositive(params: CnpjRequest): Promise<AnaliseDeCreditoPjPositiveResponse> {
    return this.http.post("/v1/analise_de_credito/pj/positive", params);
  }

  /**
   * Análise de Crédito > PJ - Pessoa Jurídica > Business
   */
  pjBusiness(params: CnpjRequest): Promise<AnaliseDeCreditoPjBusinessResponse> {
    return this.http.post("/v1/analise_de_credito/pj/business", params);
  }

  /**
   * Análise de Crédito > PJ - Pessoa Jurídica > Limit
   */
  pjLimit(params: CnpjRequest): Promise<AnaliseDeCreditoPjLimitResponse> {
    return this.http.post("/v1/analise_de_credito/pj/limit", params);
  }
}
