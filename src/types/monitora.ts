import type { ResponseHeader } from "./common";

export interface MonitoraCnpjsNaCarteiraItem {
  cnpj?: string;
  data_insercao?: string;
  nome_fantasia?: string;
  possui_pendencias_restricoes?: boolean;
  possui_protestos?: boolean;
  rating?: string;
  razao_social?: string;
  risco?: string;
  situacao_rf?: string;
}

export interface MonitoraValorAntigo {
  cpf_cnpj?: string;
  entrada?: string;
  marcador?: string;
  nome_ou_razao_social?: string;
  participacao?: unknown;
}

export interface MonitoraValorAtual {
  cpf_cnpj?: string;
  entrada?: string;
  marcador?: string;
  nome_ou_razao_social?: string;
  participacao?: unknown;
}

export interface MonitoraListaItem {
  index?: number;
  tipo_alteracao?: string;
  valor_antigo?: MonitoraValorAntigo;
  valor_atual?: MonitoraValorAtual;
}

export interface MonitoraHistoricoAlteracao {
  cnpj?: string;
  data?: string;
  descricao_campo?: string;
  mensagem_alerta?: string;
  nome_campo?: string;
  nome_fantasia?: string;
  path?: string;
  razao_social?: string;
  tipo_alteracao?: string;
  valor_antigo?: string;
  valor_atual?: string;
  lista?: MonitoraListaItem[];
}

export interface MonitoraRating {
  A?: number;
  B?: number;
  C?: number;
  D?: number;
  E?: number;
  F?: number;
  G?: number;
  H?: number;
}

export interface MonitoraRisco {
  alto?: number;
  baixo?: number;
  indefinido?: number;
  medio?: number;
  muito_alto?: number;
  muito_baixo?: number;
}

export interface MonitoraDashboard {
  historico_alteracoes?: MonitoraHistoricoAlteracao[];
  qtd_empresas_com_pendencias_restricoes?: number;
  qtd_empresas_com_protestos?: number;
  qtd_empresas_com_situacao_inativa_rf?: number;
  rating?: MonitoraRating;
  risco?: MonitoraRisco;
}

export interface MonitoraPjConsultarCarteiraResults {
  cnpjs_na_carteira?: MonitoraCnpjsNaCarteiraItem[];
  dashboard?: MonitoraDashboard;
  qtd_cnpjs_cancelados?: number;
  qtd_cnpjs_na_carteira?: number;
}

/** Monitora PJ > Consultar Carteira. POST /v1/monitora/pj/consultar_carteira. Shape inferred from the examples in TargetData's docs. */
export interface MonitoraPjConsultarCarteiraResponse {
  header: ResponseHeader;
  results: MonitoraPjConsultarCarteiraResults;
}

export interface MonitoraAutorizacao {
  autorizacao?: string;
  classe_atividade?: string;
  data_autorizacao?: string;
  num_processo?: string;
  situacao?: string;
  tipo_autorizacao?: string;
  tipo_autorizacao2?: unknown;
}

export interface MonitoraDistribuidore {
  autorizacoes?: MonitoraAutorizacao[];
  resp_legal?: string;
  resp_tecnico?: string;
  segundo_resp_legal?: unknown;
  segundo_resp_tecnico?: unknown;
  terceiro_resp_legal?: unknown;
  terceiro_resp_tecnico?: unknown;
}

export interface MonitoraFarmaciaDrogariaItem {
  autorizacoes?: MonitoraAutorizacao[];
  resp_legal?: string;
  resp_tecnico?: string;
  segundo_resp_legal?: unknown;
  segundo_resp_tecnico?: unknown;
  terceiro_resp_legal?: unknown;
  terceiro_resp_tecnico?: unknown;
}

export interface MonitoraPeticao {
  assunto?: string;
  data_entrada?: string;
  local?: string;
  num_expediente?: string;
  processo?: string;
  protocolo?: unknown;
  publicacao?: string;
  resolucao?: unknown;
  situacao?: string;
}

export interface MonitoraAnvisa {
  distribuidores?: MonitoraDistribuidore[];
  farmacia_drogaria?: MonitoraFarmaciaDrogariaItem[];
  mensagem?: unknown;
  peticoes?: MonitoraPeticao[];
}

export interface MonitoraEndereco {
  bairro?: string;
  cep?: string;
  cidade?: string;
  endereco?: string;
  uf?: string;
}

export interface MonitoraEnderecoMatriz {
  bairro?: string;
  cep?: string;
  cidade?: string;
  endereco?: string;
  uf?: string;
}

export interface MonitoraFiliais {
  cidades?: string;
  quantidade?: string;
}

export interface MonitoraListaAdministradore {
  cargo?: string;
  cpf_cnpj?: string;
  data_entrada?: string;
  data_saida?: unknown;
  estado_civil?: string | null;
  marcador?: string;
  nacionalidade?: string | null;
  nome_ou_razao_social?: string;
}

export interface MonitoraAdministradores {
  atu_junta_coml?: string;
  lista_administradores?: MonitoraListaAdministradore[];
  mensagem?: unknown;
  quantidade?: string;
}

export interface MonitoraListaParticipante {
  capital?: string;
  cnpj_participada?: string;
  cpf_cnpj_participante?: string;
  data_entrada?: string;
  marcador?: string;
  razao_social_participada?: string;
}

export interface MonitoraParticipacoes {
  lista_participantes?: MonitoraListaParticipante[];
  mensagem?: unknown;
  quantidade?: string;
}

export interface MonitoraListaSociosAcionista {
  cpf_cnpj?: string;
  entrada?: string;
  marcador?: string;
  nome_ou_razao_social?: string;
  participacao?: string;
}

export interface MonitoraSocios {
  atu_junta_coml?: string;
  capital_social?: string;
  lista_socios_acionistas?: MonitoraListaSociosAcionista[];
  mensagem?: unknown;
  qtd_outros_socios?: unknown;
}

export interface MonitoraSociosEAdministradores {
  administradores?: MonitoraAdministradores;
  participacoes?: MonitoraParticipacoes;
  socios?: MonitoraSocios;
}

export interface MonitoraCadastrais {
  cnpj?: string;
  data_consulta_cnpj?: string;
  data_encerramento?: unknown;
  data_fundacao?: string;
  data_razao_anterior?: string;
  data_situacao_cnpj?: string;
  endereco?: MonitoraEndereco;
  endereco_matriz?: MonitoraEnderecoMatriz;
  faixa_funcionarios?: unknown;
  filiais?: MonitoraFiliais;
  inscricao_estadual_numero?: string;
  inscricao_estadual_uf?: string;
  natureza_juridica?: string;
  nire_numero?: string;
  nire_uf?: string;
  nome_fantasia?: string;
  ramo_atividade_atividade?: string;
  ramo_atividade_cnae?: string;
  ramo_atividade_secundario_atividade?: string;
  ramo_atividade_secundario_cnae?: string;
  razao_social?: string;
  razao_social_anterior?: string;
  sintegra_data?: string;
  sintegra_data_consulta?: string;
  sintegra_situacao?: string;
  situacao_cnpj?: string;
  socios_e_administradores?: MonitoraSociosEAdministradores;
  telefones?: string[];
}

export interface MonitoraContratosEmAberto {
  descricao_contratos_em_aberto?: string;
  descricao_do_indicador?: string;
  nome_contratos_em_aberto?: string;
  risco_contratos_em_aberto?: string;
}

export interface MonitoraCreditoEmergencial {
  descricao_credito_emergencial?: string;
  descricao_do_indicador?: string;
  nome_credito_emergencial?: string;
  risco_credito_emergencial?: string;
}

export interface MonitoraEndividamento {
  contratos_em_aberto?: MonitoraContratosEmAberto;
  credito_emergencial?: MonitoraCreditoEmergencial;
}

export interface MonitoraPontualidadePagamento {
  descricao_do_indicador?: string;
  descricao_pontualidade_pagamento?: string;
  nome_pontualidade_pagamento?: string;
  risco_pontualidade_pagamento?: string;
}

export interface MonitoraTempoAtraso {
  descricao_do_indicador?: string;
  descricao_tempo_atraso?: string;
  nome_tempo_atraso?: string;
  risco_tempo_atraso?: string;
}

export interface MonitoraPontualidadeDePagamento {
  pontualidade_pagamento?: MonitoraPontualidadePagamento;
  tempo_atraso?: MonitoraTempoAtraso;
}

export interface MonitoraNovasContratacoes {
  descricao_do_indicador?: string;
  descricao_novas_contratacoes?: string;
  nome_novas_contratacoes?: string;
  risco_novas_contratacoes?: string;
}

export interface MonitoraPerfilContratacao {
  descricao_do_indicador?: string;
  descricao_risco_perfil_contratacao?: string;
  nome_perfil_contratacao?: string;
  risco_perfil_contratacao?: string;
}

export interface MonitoraPerfilDeRelacionamento {
  descricao_do_indicador?: string;
  descricao_perfil_de_relacionamento?: string;
  nome_perfil_de_relacionamento?: string;
  risco_perfil_de_relacionamento?: string;
}

export interface MonitoraRelacionamentoComOMercado {
  novas_contratacoes?: MonitoraNovasContratacoes;
  perfil_contratacao?: MonitoraPerfilContratacao;
  perfil_de_relacionamento?: MonitoraPerfilDeRelacionamento;
}

export interface MonitoraIndicadoresDeNegocios {
  descricao_indicadores_de_negocios?: string;
  endividamento?: MonitoraEndividamento;
  pontualidade_de_pagamento?: MonitoraPontualidadeDePagamento;
  relacionamento_com_o_mercado?: MonitoraRelacionamentoComOMercado;
}

export interface MonitoraAteDataAnterior {
  data_anterior?: string;
  quantidade?: string;
}

export interface MonitoraConsultasMe {
  mes_ano?: string;
  quantidade?: string;
}

export interface MonitoraUltimasConsulta {
  data?: string;
  empresa?: string;
}

export interface MonitoraConsultas {
  ate_data_anterior?: MonitoraAteDataAnterior;
  consultas_mes?: MonitoraConsultasMe[];
  mensagem?: unknown;
  ultimas_consultas?: MonitoraUltimasConsulta[];
}

export interface MonitoraInformacoesComplementares {
  lista_informacoes?: string[];
  mensagem?: unknown;
}

export interface MonitoraListaInformacoesMaisRecente {
  mes_ano?: string;
  tipo_informacao?: string;
}

export interface MonitoraInformacoesMaisRecentes {
  lista_informacoes_mais_recentes?: MonitoraListaInformacoesMaisRecente[];
  mensagem?: unknown;
}

export interface MonitoraInformacoes {
  consultas?: MonitoraConsultas;
  informacoes_complementares?: MonitoraInformacoesComplementares;
  informacoes_mais_recentes?: MonitoraInformacoesMaisRecentes;
}

export interface MonitoraResultsRating {
  descricao_rating?: string;
  rating?: string;
}

export interface MonitoraAlerta {
  data?: unknown;
  mensagem?: unknown;
}

export interface MonitoraListaChequeSemFundoItem {
  agencia?: string;
  data?: string;
  motivo?: string;
  nome_banco?: string;
  quantidade?: string;
}

export interface MonitoraChequesSemFundo {
  lista_cheque_sem_fundo?: MonitoraListaChequeSemFundoItem[];
  mensagem?: unknown;
  total_cheques?: string;
}

export interface MonitoraListaChequeSustadoItem {
  agencia?: string;
  cheques?: string;
  data?: string;
  data_ocorrencia?: string;
  nome_banco?: string;
}

export interface MonitoraChequesSustado {
  lista_cheque_sustado?: MonitoraListaChequeSustadoItem[];
  mensagem?: unknown;
  total_cheques?: string;
}

export interface MonitoraListaInadiplenciaParticipante {
  cpf_cnpj?: string;
  nome_ou_razao_social?: string;
  tipo_pessoa?: string;
}

export interface MonitoraInadimplenciaParticipantes {
  lista_inadiplencia_participantes?: MonitoraListaInadiplenciaParticipante[];
  mensagem?: unknown;
}

export interface MonitoraListaInconsistenciasParticipante {
  cpf_cnpj?: string;
  nome_ou_razao_social?: string;
  tipo_pessoa?: string;
}

export interface MonitoraInconsistenciasParticipantes {
  lista_inconsistencias_participantes?: MonitoraListaInconsistenciasParticipante[];
  mensagem?: unknown;
}

export interface MonitoraListaOcorrencia {
  data_ultima?: unknown;
  descricao?: string;
  quantidade?: string;
  valor?: string | null;
}

export interface MonitoraPainelControle {
  lista_ocorrencias?: MonitoraListaOcorrencia[];
  mensagem?: unknown;
}

export interface MonitoraListaPendencia {
  credor?: string;
  data?: string;
  valor?: string;
}

export interface MonitoraMaiorPendencia {
  data?: string;
  valor?: string;
}

export interface MonitoraPrimeiraPendencia {
  data?: string;
  valor?: string;
}

export interface MonitoraTotalPendencias {
  qtd_total_credores?: string;
  qtd_total_pendencias?: string;
  valor_total_pendencias?: string;
}

export interface MonitoraPendenciasRestricoes {
  lista_pendencias?: MonitoraListaPendencia[];
  maior_pendencia?: MonitoraMaiorPendencia;
  mensagem?: unknown;
  primeira_pendencia?: MonitoraPrimeiraPendencia;
  total_pendencias?: MonitoraTotalPendencias;
}

export interface MonitoraCartorio {
  cidade?: string;
  estado?: string;
  numero_cartorio?: string;
}

export interface MonitoraListaProtesto {
  cartorio?: MonitoraCartorio;
  data?: string;
  valor?: string;
}

export interface MonitoraMaiorProtesto {
  data?: string;
  valor?: string;
}

export interface MonitoraPrimeiroProtesto {
  data?: string;
  valor?: string;
}

export interface MonitoraTotal {
  quantidade?: string;
  valor?: string;
}

export interface MonitoraProtestos {
  lista_protestos?: MonitoraListaProtesto[];
  maior_protesto?: MonitoraMaiorProtesto;
  mensagem?: unknown;
  primeiro_protesto?: MonitoraPrimeiroProtesto;
  total?: MonitoraTotal;
}

export interface MonitoraVara {
  cidade?: string;
  estado?: string;
  numero?: string;
}

export interface MonitoraListaRecuperacaoFalenciaAcaoItem {
  data_ultima_ocorrencia?: string;
  quantidade?: string;
  tipo_acao?: string;
  vara?: MonitoraVara;
}

export interface MonitoraRecuperacoesFalenciasAcoes {
  lista_recuperacao_falencia_acao?: MonitoraListaRecuperacaoFalenciaAcaoItem[];
  mensagem?: unknown;
}

export interface MonitoraRestritivos {
  alerta?: MonitoraAlerta;
  cheques_sem_fundo?: MonitoraChequesSemFundo;
  cheques_sustado?: MonitoraChequesSustado;
  inadimplencia_participantes?: MonitoraInadimplenciaParticipantes;
  inconsistencias_participantes?: MonitoraInconsistenciasParticipantes;
  painel_controle?: MonitoraPainelControle;
  pendencias_restricoes?: MonitoraPendenciasRestricoes;
  protestos?: MonitoraProtestos;
  recuperacoes_falencias_acoes?: MonitoraRecuperacoesFalenciasAcoes;
}

export interface MonitoraScore {
  descricao_complementar_score?: string;
  numero_score?: string;
  razao_numero_score_1?: unknown;
  razao_numero_score_2?: unknown;
  razao_numero_score_3?: unknown;
  razao_numero_score_4?: unknown;
  risco_score?: string;
}

export interface MonitoraPjIncluirCnpjResults {
  anvisa?: MonitoraAnvisa;
  cadastrais?: MonitoraCadastrais;
  data_ultima_atualizacao?: string;
  historico_alteracoes?: unknown[];
  indicadores_de_negocios?: MonitoraIndicadoresDeNegocios;
  informacoes?: MonitoraInformacoes;
  rating?: MonitoraResultsRating;
  restritivos?: MonitoraRestritivos;
  score?: MonitoraScore;
}

/** Monitora PJ > Incluir CNPJ. POST /v1/monitora/pj/incluir_cnpj. Shape inferred from the examples in TargetData's docs. */
export interface MonitoraPjIncluirCnpjResponse {
  header: ResponseHeader;
  results: MonitoraPjIncluirCnpjResults;
}

export interface MonitoraPjConsultarCnpjResults {
  anvisa?: MonitoraAnvisa;
  cadastrais?: MonitoraCadastrais;
  data_ultima_atualizacao?: string;
  historico_alteracoes?: MonitoraHistoricoAlteracao[];
  indicadores_de_negocios?: MonitoraIndicadoresDeNegocios;
  informacoes?: MonitoraInformacoes;
  rating?: MonitoraResultsRating;
  restritivos?: MonitoraRestritivos;
  score?: MonitoraScore;
}

/** Monitora PJ > Consultar CNPJ. POST /v1/monitora/pj/consultar_cnpj. Shape inferred from the examples in TargetData's docs. */
export interface MonitoraPjConsultarCnpjResponse {
  header: ResponseHeader;
  results: MonitoraPjConsultarCnpjResults;
}

/** Monitora PJ > Cancelar CNPJ. POST /v1/monitora/pj/cancelar_cnpj. Shape inferred from the examples in TargetData's docs. */
export interface MonitoraPjCancelarCnpjResponse {
  header: ResponseHeader;
  results: string;
}
