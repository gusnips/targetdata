import { BaseModule } from "./base";
import type {
  NegativacaoCadastroNegativadorAlterarRequest,
  NegativacaoCadastroNegativadorAlterarResponse,
  NegativacaoCadastroNegativadorBuscarRequest,
  NegativacaoCadastroNegativadorBuscarResponse,
  NegativacaoCadastroNegativadorCriarRequest,
  NegativacaoCadastroNegativadorCriarResponse,
  NegativacaoCadastroNegativadorDesativarRequest,
  NegativacaoCadastroNegativadorDesativarResponse,
  NegativacaoCadastroNegativadorListarResponse,
  NegativacaoListarRequest,
  NegativacaoListarResponse,
  NegativacaoPfConsultarRequest,
  NegativacaoPfConsultarResponse,
  NegativacaoPfExcluirRequest,
  NegativacaoPfExcluirResponse,
  NegativacaoPfIncluirRequest,
  NegativacaoPfIncluirResponse,
  NegativacaoPjConsultarRequest,
  NegativacaoPjConsultarResponse,
  NegativacaoPjExcluirRequest,
  NegativacaoPjExcluirResponse,
  NegativacaoPjIncluirRequest,
  NegativacaoPjIncluirResponse,
} from "../types/negativacao";

export class NegativacaoModule extends BaseModule {
  /**
   * Negativação > PF - Pessoa Física > Incluir
   * @experimental TargetData marks this product as under construction.
   */
  pfIncluir(params: NegativacaoPfIncluirRequest): Promise<NegativacaoPfIncluirResponse> {
    return this.http.post("/v1/negativacao/pf/incluir", params);
  }

  /**
   * Negativação > PF - Pessoa Física > Excluir
   * @experimental TargetData marks this product as under construction.
   */
  pfExcluir(params: NegativacaoPfExcluirRequest): Promise<NegativacaoPfExcluirResponse> {
    return this.http.post("/v1/negativacao/pf/excluir", params);
  }

  /**
   * Negativação > PF - Pessoa Física > Consultar
   * @experimental TargetData marks this product as under construction.
   */
  pfConsultar(params: NegativacaoPfConsultarRequest): Promise<NegativacaoPfConsultarResponse> {
    return this.http.post("/v1/negativacao/pf/consultar", params);
  }

  /**
   * Negativação > PJ - Pessoa Jurídica > Incluir
   * @experimental TargetData marks this product as under construction.
   */
  pjIncluir(params: NegativacaoPjIncluirRequest): Promise<NegativacaoPjIncluirResponse> {
    return this.http.post("/v1/negativacao/pj/incluir", params);
  }

  /**
   * Negativação > PJ - Pessoa Jurídica > Excluir
   * @experimental TargetData marks this product as under construction.
   */
  pjExcluir(params: NegativacaoPjExcluirRequest): Promise<NegativacaoPjExcluirResponse> {
    return this.http.post("/v1/negativacao/pj/excluir", params);
  }

  /**
   * Negativação > PJ - Pessoa Jurídica > Consultar
   * @experimental TargetData marks this product as under construction.
   */
  pjConsultar(params: NegativacaoPjConsultarRequest): Promise<NegativacaoPjConsultarResponse> {
    return this.http.post("/v1/negativacao/pj/consultar", params);
  }

  /**
   * Negativação > Cadastro do Negativador > Criar
   * @experimental TargetData marks this product as under construction.
   */
  cadastroNegativadorCriar(
    params: NegativacaoCadastroNegativadorCriarRequest,
  ): Promise<NegativacaoCadastroNegativadorCriarResponse> {
    return this.http.post("/v1/negativacao/cadastro-negativador/criar", params);
  }

  /**
   * Negativação > Cadastro do Negativador > Alterar
   * @experimental TargetData marks this product as under construction.
   */
  cadastroNegativadorAlterar(
    params: NegativacaoCadastroNegativadorAlterarRequest,
  ): Promise<NegativacaoCadastroNegativadorAlterarResponse> {
    return this.http.post("/v1/negativacao/cadastro-negativador/alterar", params);
  }

  /**
   * Negativação > Cadastro do Negativador > Buscar
   * @experimental TargetData marks this product as under construction.
   */
  cadastroNegativadorBuscar(
    params: NegativacaoCadastroNegativadorBuscarRequest,
  ): Promise<NegativacaoCadastroNegativadorBuscarResponse> {
    return this.http.post("/v1/negativacao/cadastro-negativador/buscar", params);
  }

  /**
   * Negativação > Cadastro do Negativador > Desativar
   * @experimental TargetData marks this product as under construction.
   */
  cadastroNegativadorDesativar(
    params: NegativacaoCadastroNegativadorDesativarRequest,
  ): Promise<NegativacaoCadastroNegativadorDesativarResponse> {
    return this.http.post("/v1/negativacao/cadastro-negativador/desativar", params);
  }

  /**
   * Negativação > Cadastro do Negativador > Listar
   * @experimental TargetData marks this product as under construction.
   */
  cadastroNegativadorListar(): Promise<NegativacaoCadastroNegativadorListarResponse> {
    return this.http.post("/v1/negativacao/cadastro-negativador/listar");
  }

  /**
   * Negativação > Listar
   * @experimental TargetData marks this product as under construction.
   */
  listar(params: NegativacaoListarRequest): Promise<NegativacaoListarResponse> {
    return this.http.post("/v1/negativacao/listar", params);
  }
}
