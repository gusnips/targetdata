import { BaseModule } from "./base";
import type {
  PerfilEconomicoSocialPfBeneficioSocialResponse,
  PerfilEconomicoSocialPfPatrimonioResponse,
  PerfilEconomicoSocialPfSaudeFinanceiraResponse,
  PerfilEconomicoSocialPjPatrimonioResponse,
  PerfilEconomicoSocialPjSaudeFinanceiraResponse,
} from "../types/perfil-economico-social";
import type { CnpjRequest, CpfRequest } from "../types/common";

export class PerfilEconomicoSocialModule extends BaseModule {
  /**
   * Perfil Economico e Social > PF - Pessoa Física > Benefício Social PF
   */
  pfBeneficioSocial(params: CpfRequest): Promise<PerfilEconomicoSocialPfBeneficioSocialResponse> {
    return this.http.post("/v1/perfil_economico_social/pf/beneficio-social", params);
  }

  /**
   * Perfil Economico e Social > PF - Pessoa Física > Patrimonio
   */
  pfPatrimonio(params: CpfRequest): Promise<PerfilEconomicoSocialPfPatrimonioResponse> {
    return this.http.post("/v1/perfil_economico_social/pf/patrimonio", params);
  }

  /**
   * Perfil Economico e Social > PF - Pessoa Física > Saúde Financeira
   */
  pfSaudeFinanceira(params: CpfRequest): Promise<PerfilEconomicoSocialPfSaudeFinanceiraResponse> {
    return this.http.post("/v1/perfil_economico_social/pf/saude-financeira", params);
  }

  /**
   * Perfil Economico e Social > PJ - Pessoa Jurídica > Patrimonio
   */
  pjPatrimonio(params: CnpjRequest): Promise<PerfilEconomicoSocialPjPatrimonioResponse> {
    return this.http.post("/v1/perfil_economico_social/pj/patrimonio", params);
  }

  /**
   * Perfil Economico e Social > PJ - Pessoa Jurídica > Saude Financeira
   */
  pjSaudeFinanceira(params: CnpjRequest): Promise<PerfilEconomicoSocialPjSaudeFinanceiraResponse> {
    return this.http.post("/v1/perfil_economico_social/pj/saude-financeira", params);
  }
}
