import type { ResponseHeader } from "./common";

export interface AnaliseDeCreditoDataConsulta {
  ano?: string;
  dia?: string;
  mes?: string;
}

export interface AnaliseDeCreditoDetalhesConsulta {
  contagem_consultas?: number;
  data_consulta?: AnaliseDeCreditoDataConsulta;
  segmento?: string;
}

export interface AnaliseDeCreditoConsultas {
  contagem_consultas_31_a_60_dias?: number;
  contagem_consultas_61_a_90_dias?: number;
  contagem_consultas_mais_90_dias?: number;
  contagem_consultas_ultimos_30_dias?: number;
  detalhes_consultas?: AnaliseDeCreditoDetalhesConsulta[];
}

export interface AnaliseDeCreditoDataNascimento {
  ano?: string;
  dia?: string;
  mes?: string;
}

export interface AnaliseDeCreditoDataObito {
  ano?: string;
  dia?: string;
  mes?: string;
}

export interface AnaliseDeCreditoDataUltimaVisualizacao {
  ano?: string;
  dia?: string;
  mes?: string;
}

export interface AnaliseDeCreditoEmail {
  data_ultima_visualizacao?: AnaliseDeCreditoDataUltimaVisualizacao;
  email?: string;
}

export interface AnaliseDeCreditoEndereco {
  bairro?: string;
  cidade?: string;
  codigo_postal?: string;
  complemento?: string;
  data_ultima_visualizacao?: AnaliseDeCreditoDataUltimaVisualizacao;
  estado?: string;
  numero?: string;
  rua?: string;
}

export interface AnaliseDeCreditoEmailItem {
  data_ultima_visualizacao?: AnaliseDeCreditoDataUltimaVisualizacao;
  email?: string;
}

export interface AnaliseDeCreditoHistoricoEmail {
  email?: AnaliseDeCreditoEmailItem[];
}

export interface AnaliseDeCreditoEnderecoItem {
  bairro?: string;
  cidade?: string;
  codigo_postal?: string;
  complemento?: string;
  data_ultima_visualizacao?: AnaliseDeCreditoDataUltimaVisualizacao;
  estado?: string;
  numero?: string;
  rua?: string;
}

export interface AnaliseDeCreditoHistoricoEndereco {
  endereco?: AnaliseDeCreditoEnderecoItem[];
}

export interface AnaliseDeCreditoNome {
  completo?: string;
  meio?: unknown;
  prefixo?: unknown;
  primeiro?: string | null;
  sufixo?: unknown;
  ultimo?: string | null;
}

export interface AnaliseDeCreditoNomeItem {
  data_ultima_visualizacao?: AnaliseDeCreditoDataUltimaVisualizacao;
  nome?: AnaliseDeCreditoNome;
}

export interface AnaliseDeCreditoHistoricoNomePessoa {
  nome?: AnaliseDeCreditoNomeItem[];
}

export interface AnaliseDeCreditoNumeroCelularItem {
  data_ultima_visualizacao?: AnaliseDeCreditoDataUltimaVisualizacao;
  numero_telefone?: string;
}

export interface AnaliseDeCreditoHistoricoNumeroCelular {
  numero_celular?: AnaliseDeCreditoNumeroCelularItem[];
}

export interface AnaliseDeCreditoNumeroTelefoneItem {
  data_ultima_visualizacao?: AnaliseDeCreditoDataUltimaVisualizacao;
  numero_telefone?: string;
}

export interface AnaliseDeCreditoHistoricoNumeroTelefone {
  numero_telefone?: AnaliseDeCreditoNumeroTelefoneItem[];
}

export interface AnaliseDeCreditoNomeMae {
  completo?: string;
  primeiro?: string;
  ultimo?: string;
}

export interface AnaliseDeCreditoNomePessoaNome {
  completo?: string;
  primeiro?: string;
  ultimo?: string;
}

export interface AnaliseDeCreditoNomePessoa {
  data_ultima_visualizacao?: AnaliseDeCreditoDataUltimaVisualizacao;
  nome?: AnaliseDeCreditoNomePessoaNome;
}

export interface AnaliseDeCreditoNumeroCelular {
  data_ultima_visualizacao?: AnaliseDeCreditoDataUltimaVisualizacao;
  numero_telefone?: string;
}

export interface AnaliseDeCreditoNumeroTelefone {
  data_ultima_visualizacao?: AnaliseDeCreditoDataUltimaVisualizacao;
  numero_telefone?: string;
}

export interface AnaliseDeCreditoDadosCadastrais {
  cpf?: string;
  data_nascimento?: AnaliseDeCreditoDataNascimento;
  data_obito?: AnaliseDeCreditoDataObito;
  email?: AnaliseDeCreditoEmail;
  endereco?: AnaliseDeCreditoEndereco;
  falecido?: string;
  genero?: string;
  historico_email?: AnaliseDeCreditoHistoricoEmail;
  historico_endereco?: AnaliseDeCreditoHistoricoEndereco;
  historico_nome_pessoa?: AnaliseDeCreditoHistoricoNomePessoa;
  historico_numero_celular?: AnaliseDeCreditoHistoricoNumeroCelular;
  historico_numero_telefone?: AnaliseDeCreditoHistoricoNumeroTelefone;
  idade?: string;
  nome_mae?: AnaliseDeCreditoNomeMae;
  nome_pessoa?: AnaliseDeCreditoNomePessoa;
  numero_celular?: AnaliseDeCreditoNumeroCelular;
  numero_telefone?: AnaliseDeCreditoNumeroTelefone;
  status_cpf?: string;
}

export interface AnaliseDeCreditoDataDistribuicao {
  ano?: string;
  dia?: string;
  mes?: string;
}

export interface AnaliseDeCreditoDataProcessamento {
  ano?: string;
  dia?: string;
  mes?: string;
}

export interface AnaliseDeCreditoAcoesJudiciaisApontamento {
  autor_processo?: string;
  cidade?: string;
  comarca?: string;
  cpf_cnpj?: string;
  data_distribuicao?: AnaliseDeCreditoDataDistribuicao;
  data_processamento?: AnaliseDeCreditoDataProcessamento;
  estado?: string;
  fonte_origem?: string;
  forum?: string;
  id_confianca?: string;
  id_registro?: string;
  indice_similaridade?: string;
  nome?: string;
  numero_processo?: string;
  numero_protocolo?: string;
  status_atual?: unknown;
  tipo_entidade?: string;
  tipo_justica?: string;
  tipo_processo?: string;
  tipo_registro?: string;
  valor_acao_judicial?: string;
  vara?: string;
}

export interface AnaliseDeCreditoDataInclusao {
  ano?: string;
  dia?: string;
  mes?: string;
}

export interface AnaliseDeCreditoDataModificacao {
  ano?: unknown;
  dia?: unknown;
  mes?: unknown;
}

export interface AnaliseDeCreditoDataOcorrencia {
  ano?: string;
  dia?: string;
  mes?: string;
}

export interface AnaliseDeCreditoApontamentoEndereco {
  cidade?: string;
  estado?: string;
}

export interface AnaliseDeCreditoApontamento {
  cnpj?: string;
  data_inclusao?: AnaliseDeCreditoDataInclusao;
  data_modificacao?: AnaliseDeCreditoDataModificacao;
  data_ocorrencia?: AnaliseDeCreditoDataOcorrencia;
  endereco?: AnaliseDeCreditoApontamentoEndereco;
  natureza?: string;
  nome_empresa?: string;
  numero_contrato?: string;
  status_apontamento?: string;
  tipo_participante?: string;
  valor?: string;
}

export interface AnaliseDeCreditoDataUltimaDevolucao {
  ano?: string;
  dia?: string;
  mes?: string;
}

export interface AnaliseDeCreditoCcfApontamento {
  codigo_banco_reportante?: string;
  contagem_devolucoes?: string;
  cpf_cnpj?: string;
  data_ultima_devolucao?: AnaliseDeCreditoDataUltimaDevolucao;
  motivo_devolucao?: string;
  prefixo_agencia_reportante?: string;
  tipo_entidade?: string;
}

export interface AnaliseDeCreditoDataUltimoApontamento {
  ano?: string;
  dia?: string;
  mes?: string;
}

export interface AnaliseDeCreditoNegativacoes {
  acoes_judiciais_apontamentos?: AnaliseDeCreditoAcoesJudiciaisApontamento[];
  apontamentos?: AnaliseDeCreditoApontamento[];
  ccf_apontamentos?: AnaliseDeCreditoCcfApontamento[];
  controle_pendencias_credito?: string;
  data_ultimo_apontamento?: AnaliseDeCreditoDataUltimoApontamento;
}

export interface AnaliseDeCreditoCartorio {
  cidade?: string;
  codigo_cartorio?: string;
  codigo_cidade?: string;
  endereco?: string;
  nome?: string;
  protestos?: string;
  telefone?: string;
  uf?: string;
  valor_protestado?: string;
}

export interface AnaliseDeCreditoProtesto {
  cartorios?: AnaliseDeCreditoCartorio[];
  cnpj?: unknown;
  cpf_cnpj?: unknown;
  data_consulta?: string;
  descricao_erro?: string;
  erro?: string;
  id_transacao?: string;
  retorno?: string;
  situacao?: string;
  totalProtestos?: string;
  valor_protestados_total?: string;
}

export interface AnaliseDeCreditoPfBasicResults {
  consultas?: AnaliseDeCreditoConsultas;
  dados_cadastrais?: AnaliseDeCreditoDadosCadastrais;
  negativacoes?: AnaliseDeCreditoNegativacoes;
  possui_apenas_dados_pessoais_minimos?: boolean;
  possui_dados_consulta?: boolean;
  possui_dados_negativacoes?: boolean;
  possui_opt_out?: unknown;
  protestos?: AnaliseDeCreditoProtesto[];
  segmento?: string;
  status_cadastro_positivo?: string;
}

/** Análise de Crédito > PF - Pessoa Física > Basic. POST /v1/analise_de_credito/pf/basic. Shape inferred from the examples in TargetData's docs. */
export interface AnaliseDeCreditoPfBasicResponse {
  header: ResponseHeader;
  results: AnaliseDeCreditoPfBasicResults;
}

export interface AnaliseDeCreditoChequeTalaoSustadoItem {
  agencia?: string;
  alinea?: string;
  banco?: string;
  cheque?: string;
  conta_corrente?: string;
  data_disponibilizacao?: string;
  data_ocorrencia?: string;
  indicador?: string;
  informante?: string;
  numero_documento?: string;
  tipo_de_documento?: string;
  tipo_ocorrencia?: string;
}

export interface AnaliseDeCreditoChequesSustadosPeloMotivo21Item {
  agencia?: string;
  alinea?: string;
  banco?: string;
  cheque_final?: string;
  cheque_inicial?: string;
  conta_corrente?: string;
  data_disponibilizacao?: string;
  data_ocorrencia?: string;
  informante?: string;
  moeda?: string;
  numero_documento?: string;
  tipo_documento?: string;
  valor?: string;
}

export interface AnaliseDeCreditoConfirmacaoCepItem {
  bairro?: string;
  cep?: string;
  cidade?: string;
  endereco?: string;
  uf?: string;
}

export interface AnaliseDeCreditoConfirmacaoTelefoneItem {
  bairro?: string;
  cep?: string;
  cidade?: string;
  ddd?: string;
  endereco?: string;
  nome?: string;
  numeroDocumento?: string;
  telefone?: string;
  tipoDocumento?: string;
  uf?: string;
}

export interface AnaliseDeCreditoConsultasAnteriore {
  data?: string;
  informante?: string;
  moeda?: unknown;
  produto?: string;
  tipo_ocorrencia?: string;
  tipo_ocorrência?: unknown;
  valor?: string;
}

export interface AnaliseDeCreditoConsultasAnterioresChequeItem {
  dataCredito?: string;
  horaCredito?: string;
  informante?: string;
  moeda?: string;
  numeroDocumento?: string;
  tipo?: string;
  tipoDocumento?: string;
  valor?: string;
}

export interface AnaliseDeCreditoDebito {
  cidade?: string;
  condicao?: string;
  condicao_municipio?: string;
  contrato?: string;
  data_disponibilizacao?: string;
  data_ocorrencia?: string;
  informado_pelo_consulente?: string;
  informante?: string;
  moeda?: string;
  situacao?: string;
  tipo_ocorrencia?: string;
  uf?: string;
  valor?: string;
}

export interface AnaliseDeCreditoDevolucoesInformadasPeloUsuarioItem {
  agencia?: string;
  alinea?: string;
  banco?: string;
  cheque_final?: string;
  cheque_inicial?: string;
  cidade?: string;
  codigo_informante?: string;
  conta_corrente?: string;
  data_ocorrencia?: string;
  data_registro?: string;
  documento?: string;
  informante?: string;
  moeda?: string;
  motivo?: string;
  tipo_documento?: string;
  uf?: string;
  valor?: string;
}

export interface AnaliseDeCreditoEnderecoTelefonesAgenciaBancariaItem {
  agencia?: string;
  bairro?: string;
  banco?: string;
  cep?: string;
  cidade?: string;
  ddd?: string;
  endereco?: string;
  nomeAgencia?: string;
  nomeBanco?: string;
  praca?: string;
  reservado?: string;
  telefone_1?: string;
  telefone_2?: string;
  uf?: string;
}

export interface AnaliseDeCreditoHistoricoChequeInformadoItem {
  agencia?: string;
  banco?: string;
  cheque?: string;
  contaCorrente?: string;
  dataConsulta?: string;
  horaConsulta?: string;
  numeroDocumento?: string;
  rede?: string;
  tipoDocumento?: string;
}

export interface AnaliseDeCreditoHistoricoContaCorrenteInformadaItem {
  agencia?: string;
  banco?: string;
  contaCorrente?: string;
  dataConsulta?: string;
  horaConsulta?: string;
  numeroDocumento?: string;
  tipoDocumento?: string;
}

export interface AnaliseDeCreditoIdentificacao {
  cidade_nascimento?: string;
  data_atualizacao?: string;
  data_emissao_rg?: string;
  data_nascimento?: string;
  documento?: string;
  estado_civil?: string;
  grau_instrucao?: string;
  nome?: string;
  nome_mae?: string;
  numero_dependentes?: string;
  numero_rg?: unknown;
  obito?: unknown;
  orgao_emissor?: unknown;
  regiao_cpf?: string;
  sexo_consultado?: string;
  situacao_receita?: string;
  titulo_eleitor?: string;
  unidade_fedarativa_rg?: unknown;
}

export interface AnaliseDeCreditoInformacoesComplementare {
  origem?: string;
  texto?: string;
  tipo?: string;
  ufOrigem?: string;
}

export interface AnaliseDeCreditoInformacoesComplementaresChequeItem {
  numeroDocumento?: string;
  texto?: string;
  tipoDoRegistro?: string;
  tipoDocumento?: string;
}

export interface AnaliseDeCreditoLocalizacao {
  bairro?: string;
  cep?: string;
  cidade?: string;
  complemento?: unknown;
  ddd_1?: string;
  ddd_2?: string;
  ddd_3?: string;
  nome_logradouro?: string;
  numero_logradouro?: string;
  telefone_1?: string;
  telefone_2?: string;
  telefone_3?: string;
  tipo_logradouro?: string;
  unidade_federativa?: string;
}

export interface AnaliseDeCreditoRelacaoDevolucoesInformadasPeloCcfItem {
  agencia?: string;
  banco?: string;
  data_ultima_ocorrencia_12?: string;
  data_ultima_ocorrencia_13?: string;
  data_ultima_ocorrencia_14?: string;
  data_ultima_ocorrencia_99?: string;
  motivo_12?: string;
  motivo_13?: string;
  motivo_14?: string;
  motivo_99?: string;
  nome?: string;
  nomeBanco?: string;
  numeroDocumento?: string;
  tipoDocumento?: string;
}

export interface AnaliseDeCreditoResumoConsultasAnteriores90Dias {
  ano_1?: string;
  ano_2?: string;
  ano_3?: string;
  ano_4?: string;
  mes_1?: string;
  mes_2?: string;
  mes_3?: string;
  mes_4?: string;
  total?: string;
  total_1?: string;
  total_2?: string;
  total_3?: string;
  total_4?: string;
}

export interface AnaliseDeCreditoResumoConsultasAnterioresCheque {
  dia?: unknown;
  numero_documento?: unknown;
  pre_datado?: unknown;
  tipo_documento?: unknown;
  total?: unknown;
  valor?: unknown;
  valor_dia?: unknown;
  valor_pre_datado?: unknown;
}

export interface AnaliseDeCreditoResumoDevolucoesInformadaPeloUsuario {
  data_primeira_devolucao?: string;
  data_ultima_devolucao?: string;
  numero_documento?: string;
  tipo_documento?: string;
  total?: string;
}

export interface AnaliseDeCreditoResumoDevolucoesInformadasPeloCcf {
  motivo_12?: unknown;
  motivo_13?: unknown;
  motivo_14?: unknown;
  motivo_99?: unknown;
  nome?: unknown;
  numero_documento?: unknown;
  tipo_documento?: unknown;
  total_devolucoes?: unknown;
  total_nomes?: unknown;
}

export interface AnaliseDeCreditoResumoOcorrenciasDeDebitos {
  data_maior_debito?: string;
  data_primeiro_debito?: string;
  total_avalista?: string;
  total_devedor?: string;
  valor_acomulado?: string;
  valor_maior_debito?: string;
  valor_primeiro_debito?: string;
}

export interface AnaliseDeCreditoResumoTitulosProtestados {
  moeda?: string;
  periodo_final?: string;
  periodo_inicial?: string;
  total?: string;
  uf?: unknown;
  valor_acumulado?: string;
}

export interface AnaliseDeCreditoScoreClassificacaoVariosModelo {
  classificacao_alfabetica?: string | null;
  classificacao_numerica?: string;
  codigo_natureza_modelo?: string;
  descricao_natureza?: string;
  modelo_plano?: string;
  modelo_score?: string;
  nome_plano?: unknown;
  nome_score?: string;
  plano_execucao?: string;
  probabilidade?: string;
  score?: string;
  texto?: string;
  texto2?: string | null;
  tipo_score?: string;
}

export interface AnaliseDeCreditoTitulosProtestado {
  cartorio?: string;
  cidade?: string;
  data_ocorrencia?: string;
  moeda?: string;
  tipo_ocorrencia?: string;
  uf?: string;
  valor?: string;
}

export interface AnaliseDeCreditoPfEssencialResults {
  cheque_talao_sustado?: AnaliseDeCreditoChequeTalaoSustadoItem[];
  cheques_sustados_pelo_motivo_21?: AnaliseDeCreditoChequesSustadosPeloMotivo21Item[];
  confirmacao_cep?: AnaliseDeCreditoConfirmacaoCepItem[];
  confirmacao_telefone?: AnaliseDeCreditoConfirmacaoTelefoneItem[];
  consultas_anteriores?: AnaliseDeCreditoConsultasAnteriore[];
  consultas_anteriores_cheque?: AnaliseDeCreditoConsultasAnterioresChequeItem[];
  debitos?: AnaliseDeCreditoDebito[];
  devolucoes_informadas_pelo_usuario?: AnaliseDeCreditoDevolucoesInformadasPeloUsuarioItem[];
  endereco_telefones_agencia_bancaria?: AnaliseDeCreditoEnderecoTelefonesAgenciaBancariaItem[];
  erro?: unknown;
  historico_cheque_informado?: AnaliseDeCreditoHistoricoChequeInformadoItem[];
  historico_conta_corrente_informada?: AnaliseDeCreditoHistoricoContaCorrenteInformadaItem[];
  identificacao?: AnaliseDeCreditoIdentificacao;
  informacoes_complementares?: AnaliseDeCreditoInformacoesComplementare[];
  informacoes_complementares_cheque?: AnaliseDeCreditoInformacoesComplementaresChequeItem[];
  localizacao?: AnaliseDeCreditoLocalizacao;
  nome_documentos?: unknown[];
  relacao_devolucoes_informadas_pelo_ccf?: AnaliseDeCreditoRelacaoDevolucoesInformadasPeloCcfItem[];
  resumo_consultas_anteriores_90_dias?: AnaliseDeCreditoResumoConsultasAnteriores90Dias;
  resumo_consultas_anteriores_cheque?: AnaliseDeCreditoResumoConsultasAnterioresCheque;
  resumo_devolucoes_informada_pelo_usuario?: AnaliseDeCreditoResumoDevolucoesInformadaPeloUsuario;
  resumo_devolucoes_informadas_pelo_ccf?: AnaliseDeCreditoResumoDevolucoesInformadasPeloCcf;
  resumo_ocorrencias_de_debitos?: AnaliseDeCreditoResumoOcorrenciasDeDebitos;
  resumo_titulos_protestados?: AnaliseDeCreditoResumoTitulosProtestados;
  score_classificacao_varios_modelos?: AnaliseDeCreditoScoreClassificacaoVariosModelo[];
  titulos_protestados?: AnaliseDeCreditoTitulosProtestado[];
}

/** Análise de Crédito > PF - Pessoa Física > Essencial. POST /v1/analise_de_credito/pf/essencial. Shape inferred from the examples in TargetData's docs. */
export interface AnaliseDeCreditoPfEssencialResponse {
  header: ResponseHeader;
  results: AnaliseDeCreditoPfEssencialResults;
}

export interface AnaliseDeCreditoPontualidadeDePagamento {
  descricao?: string;
  descricao_complementar?: string;
}

export interface AnaliseDeCreditoRelacionamentoComMercado {
  descricao?: string;
  descricao_complementar?: string;
}

export interface AnaliseDeCreditoIndicadores {
  pontualidade_de_pagamento?: AnaliseDeCreditoPontualidadeDePagamento;
  relacionamento_com_mercado?: AnaliseDeCreditoRelacionamentoComMercado;
}

export interface AnaliseDeCreditoDataInicio {
  ano?: string;
  dia?: string;
  mes?: string;
}

export interface AnaliseDeCreditoDataInicioSocio {
  ano?: string;
  dia?: string;
  mes?: string;
}

export interface AnaliseDeCreditoDataReferencia {
  ano?: string | null;
  dia?: string | null;
  mes?: string | null;
}

export interface AnaliseDeCreditoDataTermino {
  ano?: string | null;
  dia?: string | null;
  mes?: string | null;
}

export interface AnaliseDeCreditoParticipacaoSocietariaEmEmpresa {
  TrustLevel?: string;
  cnpj?: string;
  data_inicio?: AnaliseDeCreditoDataInicio;
  data_inicio_socio?: AnaliseDeCreditoDataInicioSocio;
  data_referencia?: AnaliseDeCreditoDataReferencia;
  data_termino?: AnaliseDeCreditoDataTermino;
  descricao_relacionamento?: string;
  flag_emprego_principal?: string;
  nome_empresa?: string;
  percentual_participacao?: string;
  status_cnpj?: string;
  tipo_entidade?: string;
  valor_participacao?: string;
}

export interface AnaliseDeCreditoScoreCredito {
  descricao_probabilidade_pagamento?: string;
  descricao_score?: string;
  probabilidade_pagamento?: string;
  risco?: string;
  score?: number;
  score_compromisso_pagamento?: number;
  score_perfil?: number;
  segmento?: string;
}

export interface AnaliseDeCreditoPfPositiveResults {
  consultas?: AnaliseDeCreditoConsultas;
  dados_cadastrais?: AnaliseDeCreditoDadosCadastrais;
  indicadores?: AnaliseDeCreditoIndicadores;
  negativacoes?: AnaliseDeCreditoNegativacoes;
  participacao_societaria_em_empresas?: AnaliseDeCreditoParticipacaoSocietariaEmEmpresa[];
  possui_apenas_dados_pessoais_minimos?: boolean;
  possui_dados_consulta?: boolean;
  possui_dados_negativacoes?: boolean;
  possui_linhas_credito?: unknown;
  possui_opt_out?: unknown;
  protestos?: AnaliseDeCreditoProtesto[];
  score_credito?: AnaliseDeCreditoScoreCredito;
  segmento?: string;
  status_cadastro_positivo?: string;
}

/** Análise de Crédito > PF - Pessoa Física > Relatório Positivo. POST /v1/analise_de_credito/pf/positive. Shape inferred from the examples in TargetData's docs. */
export interface AnaliseDeCreditoPfPositiveResponse {
  header: ResponseHeader;
  results: AnaliseDeCreditoPfPositiveResults;
}

export interface AnaliseDeCreditoResultsConfirmacaoTelefoneItem {
  agencia?: string;
  alinea?: string;
  banco?: string;
  cheque?: string;
  contaCorrente?: string;
  dataDisponibilizacao?: string;
  dataOcorrencia?: string;
  indicador?: string;
  informante?: string;
  numeroDocumento?: string;
  tipoDeDocumento?: string;
  tipoOcorrencia?: string;
}

export interface AnaliseDeCreditoDecisao {
  aprova?: string;
  documento?: string;
  score?: string;
  texto?: string;
  tipo_documento?: string;
}

export interface AnaliseDeCreditoOutrasGrafia {
  bairro?: string;
  cep?: string;
  cidade?: string;
  complemento?: string | null;
  cpf?: string;
  data_nascimento?: string;
  ddd_1?: unknown;
  ddd_2?: unknown;
  ddd_3?: unknown;
  nome?: string;
  nome_logradouro?: string;
  numero?: string | null;
  rg?: unknown;
  telefone_1?: unknown;
  telefone_2?: unknown;
  telefone_3?: unknown;
  tipo?: string | null;
  uf?: string;
}

export interface AnaliseDeCreditoRelacaoDeAcoesCivei {
  acao_civel?: string;
  autor?: string;
  codigo_municipio?: string;
  data_distribuicao?: string;
  praca?: string;
  processo?: string;
  uf?: string;
  valor?: string;
  vara?: string;
}

export interface AnaliseDeCreditoResumoDeAcoesCiveis {
  periodo_final?: unknown;
  periodo_inicial?: unknown;
  quantidade?: unknown;
}

export interface AnaliseDeCreditoResultsResumoDevolucoesInformadasPeloCcf {
  agencia?: string;
  banco?: string;
  data_ultima_ocorrencia_12?: string;
  data_ultima_ocorrencia_13?: string;
  data_ultima_ocorrencia_14?: string;
  data_ultima_ocorrencia_99?: string;
  motivo_12?: string;
  motivo_13?: string;
  motivo_14?: string;
  motivo_99?: string;
  nome?: string;
  nomeBanco?: string;
  numeroDocumento?: string;
  tipoDocumento?: string;
}

export interface AnaliseDeCreditoTelefoneVinculadoDocumentoInformadoItem {
  bairro?: string;
  cep?: string;
  cidade?: string;
  ddd?: string;
  endereco?: string;
  telefone?: string;
  uf?: string;
}

export interface AnaliseDeCreditoPfPlusResults {
  cheque_talao_sustado?: AnaliseDeCreditoChequeTalaoSustadoItem[];
  cheques_sustados_pelo_motivo_21?: AnaliseDeCreditoChequesSustadosPeloMotivo21Item[];
  confirmacao_cep?: AnaliseDeCreditoConfirmacaoCepItem[];
  confirmacao_telefone?: AnaliseDeCreditoResultsConfirmacaoTelefoneItem[];
  consultas_anteriores?: AnaliseDeCreditoConsultasAnteriore[];
  consultas_anteriores_cheque?: AnaliseDeCreditoConsultasAnterioresChequeItem[];
  debitos?: AnaliseDeCreditoDebito[];
  decisao?: AnaliseDeCreditoDecisao;
  devolucoes_informadas_pelo_usuario?: AnaliseDeCreditoDevolucoesInformadasPeloUsuarioItem[];
  endereco_telefones_agencia_bancaria?: AnaliseDeCreditoEnderecoTelefonesAgenciaBancariaItem[];
  erro?: unknown;
  historico_cheque_informado?: AnaliseDeCreditoHistoricoChequeInformadoItem[];
  historico_conta_corrente_informada?: AnaliseDeCreditoHistoricoContaCorrenteInformadaItem[];
  identificacao?: AnaliseDeCreditoIdentificacao;
  informacoes_complementares?: AnaliseDeCreditoInformacoesComplementare[];
  informacoes_complementares_cheque?: AnaliseDeCreditoInformacoesComplementaresChequeItem[];
  localizacao?: AnaliseDeCreditoLocalizacao;
  nome_documentos?: unknown[];
  outras_grafias?: AnaliseDeCreditoOutrasGrafia[];
  relacao_de_acoes_civeis?: AnaliseDeCreditoRelacaoDeAcoesCivei[];
  relacao_devolucoes_informadas_pelo_ccf?: AnaliseDeCreditoRelacaoDevolucoesInformadasPeloCcfItem[];
  resumo_consultas_anteriores_90_dias?: AnaliseDeCreditoResumoConsultasAnteriores90Dias;
  resumo_consultas_anteriores_cheque?: AnaliseDeCreditoResumoConsultasAnterioresCheque;
  resumo_de_acoes_civeis?: AnaliseDeCreditoResumoDeAcoesCiveis;
  resumo_devolucoes_informada_pelo_usuario?: AnaliseDeCreditoResumoDevolucoesInformadaPeloUsuario;
  resumo_devolucoes_informadas_pelo_ccf?: AnaliseDeCreditoResultsResumoDevolucoesInformadasPeloCcf;
  resumo_ocorrencias_de_debitos?: AnaliseDeCreditoResumoOcorrenciasDeDebitos;
  resumo_titulos_protestados?: AnaliseDeCreditoResumoTitulosProtestados;
  score_classificacao_varios_modelos?: AnaliseDeCreditoScoreClassificacaoVariosModelo[];
  telefone_vinculado_documento_informado?: AnaliseDeCreditoTelefoneVinculadoDocumentoInformadoItem[];
  titulos_protestados?: AnaliseDeCreditoTitulosProtestado[];
}

/** Análise de Crédito > PF - Pessoa Física > Plus. POST /v1/analise_de_credito/pf/plus. Shape inferred from the examples in TargetData's docs. */
export interface AnaliseDeCreditoPfPlusResponse {
  header: ResponseHeader;
  results: AnaliseDeCreditoPfPlusResults;
}

export interface AnaliseDeCreditoResultsIdentificacao {
  cidade_nascimento?: unknown;
  data_atualizacao?: string;
  data_emissao_rg?: string;
  data_nascimento?: string;
  documento?: string;
  estado_civil?: string;
  grau_instrucao?: string;
  nome?: string;
  nome_mae?: string;
  numero_dependentes?: string;
  numero_rg?: unknown;
  obito?: unknown;
  orgao_emissor?: unknown;
  regiao_cpf?: string;
  sexo_consultado?: string;
  situacao_receita?: string;
  titulo_eleitor?: string;
  unidade_fedarativa_rg?: unknown;
}

export interface AnaliseDeCreditoResultsInformacoesComplementare {
  origem?: unknown;
  texto?: string;
  tipo?: string;
  uf_origem?: string;
}

export interface AnaliseDeCreditoResultsLocalizacao {
  bairro?: string;
  cep?: string;
  cidade?: unknown;
  complemento?: unknown;
  ddd_1?: unknown;
  ddd_2?: unknown;
  ddd_3?: unknown;
  nome_logradouro?: string;
  numero_logradouro?: unknown;
  telefone_1?: unknown;
  telefone_2?: unknown;
  telefone_3?: unknown;
  tipo_logradouro?: unknown;
  unidade_federativa?: unknown;
}

export interface AnaliseDeCreditoParticipacoesDoDocumentoConsultadoItem {
  data_de_entrada?: string;
  funcao?: string;
  numero_documento_a?: string;
  numero_documento_b?: string;
  observacao?: string;
  razao_social?: string;
  tipo_documento_a?: string;
  tipo_documento_b?: string;
  tipo_moeda?: unknown;
  tipo_socio?: string;
  valor?: string;
  valor_em_percentual?: string;
}

export interface AnaliseDeCreditoRelacaoConsultasAnterioresCreditoSegmentoItem {
  data?: string;
  descricao_grupo?: string | null;
  descricao_ramo?: string | null;
  descricao_segmento?: unknown;
  documento?: string;
  grupo?: string | null;
  informante?: string;
  moeda?: string | null;
  ramo_atividade?: string;
  segmento?: string | null;
  tipo_documento?: string;
  tipo_ocorrencia?: string;
  valor?: string;
}

export interface AnaliseDeCreditoResumoConsultasAnteriores {
  numero_documento?: string;
  periodo?: string;
  periodo_ante_penultimo_mes?: string;
  periodo_final?: string;
  periodo_inicial?: string;
  periodo_penultimo_mes?: string;
  tipo_documento?: string;
  total_ante_penultimo_mes?: string;
  total_de_consultas?: string;
  total_penultimo_mes?: string;
  total_ultimo_mes?: string;
}

export interface AnaliseDeCreditoResultsResumoDeAcoesCiveis {
  periodo_final?: string;
  periodo_inicial?: string;
  quantidade?: string;
}

export interface AnaliseDeCreditoResultsResumoDevolucoesInformadaPeloUsuario {
  data_primeira_devolucao?: unknown;
  data_ultima_devolucao?: unknown;
  numero_documento?: unknown;
  tipo_documento?: unknown;
  total?: unknown;
}

export interface AnaliseDeCreditoPfCompleteResultsResumoDevolucoesInformadasPeloCcf {
  motivo_12?: unknown;
  motivo_13?: unknown;
  motivo_14?: unknown;
  motivo_99?: unknown;
  nome?: string;
  numero_documento?: unknown;
  tipo_documento?: unknown;
  total_devolucoes?: unknown;
  total_nomes?: unknown;
}

export interface AnaliseDeCreditoResultsResumoTitulosProtestados {
  moeda?: string;
  periodo_final?: string;
  periodo_inicial?: string;
  total?: string;
  uf?: string;
  valor_acumulado?: string;
}

export interface AnaliseDeCreditoResultsScoreClassificacaoVariosModelo {
  classificacao_alfabetica?: string | null;
  classificacao_numerica?: string;
  codigo_natureza_modelo?: string;
  descricao_natureza?: string;
  modelo_plano?: string | null;
  modelo_score?: string;
  nome_plano?: string;
  nome_score?: string;
  plano_execucao?: string;
  probabilidade?: string;
  score?: string;
  texto?: string;
  texto2?: string | null;
  tipo_score?: string;
}

export interface AnaliseDeCreditoPfCompleteResults {
  cheque_talao_sustado?: unknown[];
  cheques_sustados_pelo_motivo_21?: unknown[];
  confirmacao_cep?: unknown[];
  confirmacao_telefone?: unknown[];
  consultas_anteriores_cheque?: unknown[];
  debitos?: AnaliseDeCreditoDebito[];
  decisao?: AnaliseDeCreditoDecisao;
  devolucoes_informadas_pelo_usuario?: unknown[];
  endereco_telefones_agencia_bancaria?: unknown[];
  historico_cheque_informado?: unknown[];
  historico_conta_corrente_informada?: unknown[];
  identificacao?: AnaliseDeCreditoResultsIdentificacao;
  informacoes_complementares?: AnaliseDeCreditoResultsInformacoesComplementare[];
  informacoes_complementares_cheque?: unknown[];
  localizacao?: AnaliseDeCreditoResultsLocalizacao;
  nome_documentos?: unknown[];
  outras_grafias?: unknown[];
  participacoes_do_documento_consultado?: AnaliseDeCreditoParticipacoesDoDocumentoConsultadoItem[];
  relacao_consultas_anteriores_credito_segmento?: AnaliseDeCreditoRelacaoConsultasAnterioresCreditoSegmentoItem[];
  relacao_de_acoes_civeis?: AnaliseDeCreditoRelacaoDeAcoesCivei[];
  relacao_devolucoes_informadas_pelo_ccf?: unknown[];
  relacao_falencia_recuperacao_judicial?: unknown[];
  resumo_consultas_anteriores?: AnaliseDeCreditoResumoConsultasAnteriores;
  resumo_consultas_anteriores_cheque?: Record<string, unknown>;
  resumo_de_acoes_civeis?: AnaliseDeCreditoResultsResumoDeAcoesCiveis;
  resumo_devolucoes_informada_pelo_usuario?: AnaliseDeCreditoResultsResumoDevolucoesInformadaPeloUsuario;
  resumo_devolucoes_informadas_pelo_ccf?: AnaliseDeCreditoPfCompleteResultsResumoDevolucoesInformadasPeloCcf;
  resumo_ocorrencias_de_debitos?: AnaliseDeCreditoResumoOcorrenciasDeDebitos;
  resumo_titulos_protestados?: AnaliseDeCreditoResultsResumoTitulosProtestados;
  score_classificacao_varios_modelos?: AnaliseDeCreditoResultsScoreClassificacaoVariosModelo[];
  telefone_vinculado_documento_informado?: AnaliseDeCreditoTelefoneVinculadoDocumentoInformadoItem[];
  titulos_protestados?: AnaliseDeCreditoTitulosProtestado[];
}

/** Análise de Crédito > PF - Pessoa Física > Complete. POST /v1/analise_de_credito/pf/complete. Shape inferred from the examples in TargetData's docs. */
export interface AnaliseDeCreditoPfCompleteResponse {
  header: ResponseHeader;
  results: AnaliseDeCreditoPfCompleteResults;
}

export interface AnaliseDeCreditoResultsConsultas {
  cnpj?: string;
  contagem_consultas_31_a_60_dias?: number;
  contagem_consultas_61_a_90_dias?: number;
  contagem_consultas_mais_90_dias?: number;
  contagem_consultas_ultimos_30_dias?: number;
  detalhes_consultas?: AnaliseDeCreditoDetalhesConsulta[];
}

export interface AnaliseDeCreditoConsultasConglomeradoItem {
  cnpj?: string;
  contagem_consultas_31_a_60_dias?: number;
  contagem_consultas_61_a_90_dias?: number;
  contagem_consultas_mais_90_dias?: number;
  contagem_consultas_ultimos_30_dias?: number;
  detalhes_consultas?: AnaliseDeCreditoDetalhesConsulta[];
}

export interface AnaliseDeCreditoDataFundacao {
  ano?: string;
  dia?: string;
  mes?: string;
}

export interface AnaliseDeCreditoEmpresaItem {
  cnpj?: string;
  data_fundacao?: AnaliseDeCreditoDataFundacao;
}

export interface AnaliseDeCreditoConglomerado {
  empresa?: AnaliseDeCreditoEmpresaItem[];
}

export interface AnaliseDeCreditoHistoricoEnderecoEnderecoItem {
  bairro?: string;
  cidade?: string;
  codigo_postal?: string;
  complemento?: string | null;
  data_ultima_visualizacao?: AnaliseDeCreditoDataUltimaVisualizacao;
  estado?: string;
  numero?: string;
  rua?: string;
}

export interface AnaliseDeCreditoDadosCadastraisHistoricoEndereco {
  endereco?: AnaliseDeCreditoHistoricoEnderecoEnderecoItem[];
}

export interface AnaliseDeCreditoResultsDadosCadastrais {
  atividade_principal?: string;
  atividade_secundaria?: string;
  conglomerado?: AnaliseDeCreditoConglomerado;
  contagem_filiais?: string;
  data_fundacao?: AnaliseDeCreditoDataFundacao;
  descricao_atividade_principal?: string;
  descricao_atividade_secundaria?: string;
  email?: AnaliseDeCreditoEmail;
  endereco?: AnaliseDeCreditoEndereco;
  historico_email?: AnaliseDeCreditoHistoricoEmail;
  historico_endereco?: AnaliseDeCreditoDadosCadastraisHistoricoEndereco;
  historico_numero_telefone?: AnaliseDeCreditoHistoricoNumeroTelefone;
  nire?: string;
  nome_empresa?: string;
  nome_fantasia?: unknown;
  numero_telefone?: string;
  status_empresa?: string;
  tipo_legal?: string;
}

export interface AnaliseDeCreditoNegativacoesAcoesJudiciaisApontamento {
  autor_processo?: string;
  cidade?: string;
  comarca?: string;
  cpf_cnpj?: string;
  data_distribuicao?: AnaliseDeCreditoDataDistribuicao;
  estado?: string;
  forum?: string;
  nome?: string;
  numero_processo?: string;
  numero_protocolo?: string;
  status_atual?: unknown;
  tipo_justica?: string;
  tipo_processo?: string;
  valor_acao_judicial?: string;
  vara?: string;
}

export interface AnaliseDeCreditoNegativacoesApontamentoEndereco {
  bairro?: unknown;
  cidade?: string;
  codigo_postal?: unknown;
  complemento?: unknown;
  estado?: string;
  numero?: unknown;
  rua?: unknown;
}

export interface AnaliseDeCreditoNegativacoesApontamento {
  cnpj?: string;
  cpf_cnpj?: string;
  data_inclusao?: AnaliseDeCreditoDataInclusao;
  data_modificacao?: AnaliseDeCreditoDataModificacao;
  data_ocorrencia?: AnaliseDeCreditoDataOcorrencia;
  endereco?: AnaliseDeCreditoNegativacoesApontamentoEndereco;
  natureza?: string;
  nome_empresa?: string;
  numero_contrato?: string;
  status_apontamento?: string;
  tipo_entidade?: unknown;
  tipo_participante?: string;
  valor?: string;
}

export interface AnaliseDeCreditoNegativacoesCcfApontamento {
  codigo_banco_reportante?: string;
  contagem_devolucoes?: string;
  cpf_cnpj?: string;
  data_ultima_devolucao?: AnaliseDeCreditoDataUltimaDevolucao;
  motivo_devolucao?: string;
  nome_banco_reportante?: unknown;
  prefixo_agencia_reportante?: string;
  tipo_entidade?: string;
}

export interface AnaliseDeCreditoResultsNegativacoes {
  acoes_judiciais_apontamentos?: AnaliseDeCreditoNegativacoesAcoesJudiciaisApontamento[];
  apontamentos?: AnaliseDeCreditoNegativacoesApontamento[];
  ccf_apontamentos?: AnaliseDeCreditoNegativacoesCcfApontamento[];
  controle_pendencias_credito?: string;
  data_ultimo_apontamento?: AnaliseDeCreditoDataUltimoApontamento;
}

export interface AnaliseDeCreditoParticipacaoSocietariaEmOutrasEmpresaDataInicio {
  ano?: unknown;
  dia?: unknown;
  mes?: unknown;
}

export interface AnaliseDeCreditoParticipacaoSocietariaEmOutrasEmpresaDataReferencia {
  ano?: string;
  dia?: string;
  mes?: string;
}

export interface AnaliseDeCreditoParticipacaoSocietariaEmOutrasEmpresaDataTermino {
  ano?: unknown;
  dia?: unknown;
  mes?: unknown;
}

export interface AnaliseDeCreditoParticipacaoSocietariaEmOutrasEmpresa {
  cpf_cnpj?: string;
  data_inicio?: AnaliseDeCreditoParticipacaoSocietariaEmOutrasEmpresaDataInicio;
  data_inicio_socio?: AnaliseDeCreditoDataInicioSocio;
  data_referencia?: AnaliseDeCreditoParticipacaoSocietariaEmOutrasEmpresaDataReferencia;
  data_termino?: AnaliseDeCreditoParticipacaoSocietariaEmOutrasEmpresaDataTermino;
  descricao_relacionamento?: string;
  flag_dados_negativacoes?: boolean;
  flag_emprego_principal?: boolean;
  nivel_confianca?: string;
  nome?: string;
  percentual_participacao?: string;
  status?: string;
  tipo_entidade?: string;
  valor_participacao?: string;
}

export interface AnaliseDeCreditoProtestoCartorio {
  cidade?: string;
  codigo_cartorio?: string;
  codigo_cidade?: string;
  endereco?: string;
  lista_protestos?: unknown[];
  nome?: string;
  protestos?: string;
  telefone?: string;
  uf?: string;
  valor_protestado?: string;
}

export interface AnaliseDeCreditoResultsProtesto {
  cartorios?: AnaliseDeCreditoProtestoCartorio[];
  cnpj?: string;
  cpf_cnpj?: unknown;
  data_consulta?: string;
  descricao_erro?: string;
  erro?: string;
  id_transacao?: string;
  mostrar_invalidos?: unknown;
  retorno?: string;
  situacao?: string;
  total_protestos?: string;
  valor_protestados_total?: string;
}

export interface AnaliseDeCreditoSocioDataInicioSocio {
  ano?: unknown;
  dia?: unknown;
  mes?: unknown;
}

export interface AnaliseDeCreditoSocio {
  cpf_cnpj?: string;
  data_inicio?: AnaliseDeCreditoDataInicio;
  data_inicio_socio?: AnaliseDeCreditoSocioDataInicioSocio;
  data_referencia?: AnaliseDeCreditoParticipacaoSocietariaEmOutrasEmpresaDataReferencia;
  data_termino?: AnaliseDeCreditoParticipacaoSocietariaEmOutrasEmpresaDataTermino;
  descricao_relacionamento?: string;
  flag_dados_negativacoes?: boolean;
  flag_emprego_principal?: boolean;
  nivel_confianca?: string;
  nome?: string;
  percentual_participacao?: string;
  status?: string;
  tipo_entidade?: string;
  valor_participacao?: string;
}

export interface AnaliseDeCreditoQuadroSocietario {
  capital_social?: string;
  nivel_confianca?: string;
  socios?: AnaliseDeCreditoSocio[];
}

export interface AnaliseDeCreditoPjBasicResults {
  cnpj?: string;
  consultas?: AnaliseDeCreditoResultsConsultas;
  consultas_conglomerado?: AnaliseDeCreditoConsultasConglomeradoItem[];
  dados_cadastrais?: AnaliseDeCreditoResultsDadosCadastrais;
  negativacoes?: AnaliseDeCreditoResultsNegativacoes;
  participacao_societaria_em_outras_empresas?: AnaliseDeCreditoParticipacaoSocietariaEmOutrasEmpresa[];
  possui_apenas_dados_pessoais_minimos?: boolean;
  possui_dados_consulta?: boolean;
  possui_dados_negativacoes?: boolean;
  protestos?: AnaliseDeCreditoResultsProtesto[];
  quadro_societario?: AnaliseDeCreditoQuadroSocietario;
  status_cadastro_positivo?: string;
}

/** Análise de Crédito > PJ - Pessoa Jurídica > Basic. POST /v1/analise_de_credito/pj/basic. Shape inferred from the examples in TargetData's docs. */
export interface AnaliseDeCreditoPjBasicResponse {
  header: ResponseHeader;
  results: AnaliseDeCreditoPjBasicResults;
}

export interface AnaliseDeCreditoUltimasOcorrencia {
  agencia?: string;
  banco?: string;
  cheques_final?: string;
  cheques_inicial?: string;
  cidade?: string;
  data_ocorrencia?: string;
  data_registro?: string;
  informante?: string;
  motivo?: string;
  uf?: string;
}

export interface AnaliseDeCreditoChequesDevolvidosInformadosUsuario {
  periodo_final?: string;
  periodo_inicial?: string;
  quantidade_total?: number;
  ultimas_ocorrencias?: AnaliseDeCreditoUltimasOcorrencia[];
}

export interface AnaliseDeCreditoChequesSemFundoUltimasOcorrencia {
  agencia?: string;
  data_ultimo?: string;
  motivo?: string;
  nome?: string;
  nome_banco?: string;
  numero_banco?: string;
  quantidade?: number;
}

export interface AnaliseDeCreditoChequesSemFundo {
  total_cheques_sem_fundos?: number;
  total_nomes_relacionados?: number;
  ultimas_ocorrencias?: AnaliseDeCreditoChequesSemFundoUltimasOcorrencia[];
}

export interface AnaliseDeCreditoChequesSustadosUltimasOcorrencia {
  agencia?: string;
  banco?: string;
  cheques?: string;
  data?: string;
  data_da_ocorrencia?: string;
}

export interface AnaliseDeCreditoChequesSustados {
  periodo_final?: string;
  periodo_inicial?: string;
  total?: number;
  ultimas_ocorrencias?: AnaliseDeCreditoChequesSustadosUltimasOcorrencia[];
}

export interface AnaliseDeCreditoConsultasMe {
  mes_ano?: string;
  quantidade?: number;
}

export interface AnaliseDeCreditoUltimasConsulta {
  cnpj?: string | null;
  data?: string;
  razao_social?: string;
}

export interface AnaliseDeCreditoPjRiskResultsConsultas {
  consultas_mes?: AnaliseDeCreditoConsultasMe[];
  periodo_final?: string;
  periodo_inicial?: string;
  quantidade_total?: number;
  ultimas_consultas?: AnaliseDeCreditoUltimasConsulta[];
}

export interface AnaliseDeCreditoErro {
  codigo?: unknown;
  erro?: unknown;
}

export interface AnaliseDeCreditoRamoAtividade {
  atividade?: string;
  cnae?: string;
}

export interface AnaliseDeCreditoIdentificacaoBasico {
  cnpj?: string;
  codigo_natureza_juridica?: string;
  data_consulta_receita_federal?: string;
  data_fundacao?: string;
  data_situacao_cnpj?: string;
  inscricao_estadual?: string;
  natureza_juridica?: string;
  nome_fantasia?: string;
  numero_nire?: string;
  ramo_atividade?: AnaliseDeCreditoRamoAtividade;
  razao_social?: string;
  situacao_cnpj?: string;
  uf_inscricao_estadual?: string;
  uf_nire?: string;
}

export interface AnaliseDeCreditoLocalizacaoBasico {
  bairro?: string;
  cep?: string;
  cidade?: string;
  complemento?: unknown;
  logradouro?: string;
  numero?: unknown;
  tipo_endereco?: unknown;
  uf?: string;
}

export interface AnaliseDeCreditoPendenciasRestricoesUltimasOcorrencia {
  cidade?: string;
  data_debito?: string;
  disponivel_em?: string;
  documento_origem?: string;
  informante?: string;
  tipo?: string;
  uf?: string;
  valor?: number;
}

export interface AnaliseDeCreditoPendenciasRestricoes {
  data_maior?: string;
  data_primeiro?: string;
  periodo_final?: string;
  periodo_inicial?: string;
  total_credores?: number;
  total_pendencias?: number;
  ultimas_ocorrencias?: AnaliseDeCreditoPendenciasRestricoesUltimasOcorrencia[];
  valor?: number;
  valor_maior?: number;
  valor_primeiro?: number;
}

export interface AnaliseDeCreditoProtestosUltimasOcorrencia {
  cartorio?: string;
  cidade?: string;
  data?: string;
  estado?: string;
  valor?: number;
  vencimento?: string;
}

export interface AnaliseDeCreditoProtestos {
  data_maior?: string;
  data_primeiro?: string;
  total_protestos?: number;
  ultimas_ocorrencias?: AnaliseDeCreditoProtestosUltimasOcorrencia[];
  valor_maior?: number;
  valor_primeiro?: number;
  valor_total?: number;
}

export interface AnaliseDeCreditoScoreItem {
  classificacao_alfabetica?: string;
  classificacao_numerica?: string;
  codigo_natureza_modelo?: unknown;
  descricao_natureza?: unknown;
  id_ajuda_score?: unknown;
  modelo_plano?: unknown;
  modelo_score?: string;
  nome_plano?: unknown;
  nome_score?: unknown;
  plano_execucao?: unknown;
  probabilidade?: string;
  score?: string;
  texto?: string;
  texto_explicativo?: unknown;
  tipo_score?: unknown;
}

export interface AnaliseDeCreditoPjRiskResults {
  cheques_devolvidos_informados_usuario?: AnaliseDeCreditoChequesDevolvidosInformadosUsuario;
  cheques_sem_fundo?: AnaliseDeCreditoChequesSemFundo;
  cheques_sustados?: AnaliseDeCreditoChequesSustados;
  consultas?: AnaliseDeCreditoPjRiskResultsConsultas;
  erro?: AnaliseDeCreditoErro;
  identificacao_basico?: AnaliseDeCreditoIdentificacaoBasico;
  localizacao_basico?: AnaliseDeCreditoLocalizacaoBasico;
  pendencias_restricoes?: AnaliseDeCreditoPendenciasRestricoes;
  protestos?: AnaliseDeCreditoProtestos;
  score?: AnaliseDeCreditoScoreItem[];
}

/** Análise de Crédito > PJ - Pessoa Jurídica > Risk. POST /v1/analise_de_credito/pj/risk. Shape inferred from the examples in TargetData's docs. */
export interface AnaliseDeCreditoPjRiskResponse {
  header: ResponseHeader;
  results: AnaliseDeCreditoPjRiskResults;
}

export interface AnaliseDeCreditoContratosEmAberto {
  descricao?: string;
  nome?: string;
  risco?: string;
}

export interface AnaliseDeCreditoCreditoEmergencial {
  descricao?: string;
  nome?: string;
  risco?: string;
}

export interface AnaliseDeCreditoEndividamento {
  contratos_em_aberto?: AnaliseDeCreditoContratosEmAberto;
  credito_emergencial?: AnaliseDeCreditoCreditoEmergencial;
}

export interface AnaliseDeCreditoPontualidadePagamento {
  descricao?: string;
  nome?: string;
  risco?: string;
}

export interface AnaliseDeCreditoTempoAtraso {
  descricao?: string;
  nome?: string;
  risco?: string;
}

export interface AnaliseDeCreditoIndicadoresDeNegociosPontualidadeDePagamento {
  pontualidade_pagamento?: AnaliseDeCreditoPontualidadePagamento;
  tempo_atraso?: AnaliseDeCreditoTempoAtraso;
}

export interface AnaliseDeCreditoNovasContratacoes {
  descricao?: string;
  nome?: string;
  risco?: string;
}

export interface AnaliseDeCreditoPerfilContratacao {
  descricao?: string;
  nome?: string;
  risco?: string;
}

export interface AnaliseDeCreditoPerfilDeRelacionamento {
  descricao?: string;
  nome?: string;
  risco?: string;
}

export interface AnaliseDeCreditoRelacionamentoComOMercado {
  novas_contratacoes?: AnaliseDeCreditoNovasContratacoes;
  perfil_contratacao?: AnaliseDeCreditoPerfilContratacao;
  perfil_de_relacionamento?: AnaliseDeCreditoPerfilDeRelacionamento;
}

export interface AnaliseDeCreditoIndicadoresDeNegocios {
  descricao_indicadores_de_negocios?: string;
  endividamento?: AnaliseDeCreditoEndividamento;
  pontualidade_de_pagamento?: AnaliseDeCreditoIndicadoresDeNegociosPontualidadeDePagamento;
  relacionamento_com_o_mercado?: AnaliseDeCreditoRelacionamentoComOMercado;
}

export interface AnaliseDeCreditoScore {
  descricao?: string;
  descricao_complementar_score?: string;
  descricao_probabilidade_pagamento?: string;
  numero_score?: number;
  probabilidade_pagamento?: string;
  razao_numero_score_1?: string;
  razao_numero_score_2?: string;
  razao_numero_score_3?: string;
  razao_numero_score_4?: string;
}

export interface AnaliseDeCreditoPjPositiveResults {
  cnpj?: string;
  consultas?: AnaliseDeCreditoResultsConsultas;
  consultas_conglomerado?: AnaliseDeCreditoConsultasConglomeradoItem[];
  dados_cadastrais?: AnaliseDeCreditoResultsDadosCadastrais;
  indicadores_de_negocios?: AnaliseDeCreditoIndicadoresDeNegocios;
  negativacoes?: AnaliseDeCreditoResultsNegativacoes;
  participacao_societaria_em_outras_empresas?: AnaliseDeCreditoParticipacaoSocietariaEmOutrasEmpresa[];
  possui_apenas_dados_pessoais_minimos?: boolean;
  possui_dados_consulta?: boolean;
  possui_dados_negativacoes?: boolean;
  protestos?: AnaliseDeCreditoResultsProtesto[];
  quadro_societario?: AnaliseDeCreditoQuadroSocietario;
  score?: AnaliseDeCreditoScore;
  status_cadastro_positivo?: string;
}

/** Análise de Crédito > PJ - Pessoa Jurídica > Relatório Positivo. POST /v1/analise_de_credito/pj/positive. Shape inferred from the examples in TargetData's docs. */
export interface AnaliseDeCreditoPjPositiveResponse {
  header: ResponseHeader;
  results: AnaliseDeCreditoPjPositiveResults;
}

export interface AnaliseDeCreditoAcoesCiveisUltimasOcorrencia {
  acao?: string;
  autor?: string;
  distribuicao?: string;
  documento?: string;
  foro?: string;
  processo?: string;
  requerido?: string;
  uf?: string;
  valor?: number;
  vara?: string;
}

export interface AnaliseDeCreditoAcoesCiveis {
  data_maior?: string;
  data_primeiro?: string;
  total_acoes?: number;
  ultimas_ocorrencias?: AnaliseDeCreditoAcoesCiveisUltimasOcorrencia[];
  valor_maior?: number;
  valor_primeiro?: number;
  valor_total?: number;
}

export interface AnaliseDeCreditoAdministradore {
  cargo?: string;
  cpf?: string;
  entrada?: string;
  indicador_debito?: string;
  indicador_fraude?: string;
  mandato?: string;
  nome?: string;
  situacao_cpf?: string;
}

export interface AnaliseDeCreditoAlertaFraudes {
  mensagem?: string;
}

export interface AnaliseDeCreditoResultsDecisao {
  descricao?: string;
  flag?: string;
}

export interface AnaliseDeCreditoFalenciasRecuperacaoJudicialUltimasOcorrencia {
  cidade?: string;
  data?: string;
  tipo_ocorrencia?: string;
  uf?: string;
  vara?: string;
}

export interface AnaliseDeCreditoFalenciasRecuperacaoJudicial {
  mensagem?: string;
  periodo_final?: string;
  periodo_inicial?: string;
  quantidade_total?: number;
  ultimas_ocorrencias?: AnaliseDeCreditoFalenciasRecuperacaoJudicialUltimasOcorrencia[];
}

export interface AnaliseDeCreditoFgts {
  data_consulta?: string;
  data_validade?: string;
  situacao?: string;
}

export interface AnaliseDeCreditoRamoAtividadePrimario {
  atividade?: string;
  cnae?: string;
}

export interface AnaliseDeCreditoRamoAtividadeSecundario {
  atividade?: string;
  cnae?: string;
}

export interface AnaliseDeCreditoSuframa {
  data_consulta?: unknown;
  inscricao_suframa?: unknown;
  situacao?: unknown;
  validade_cadastral?: unknown;
}

export interface AnaliseDeCreditoIdentificacaoCompleto {
  capital_atual?: number;
  capital_inicial?: number;
  cnpj?: string;
  codigo_natureza_juridica?: string;
  data_alteracao_capital?: string;
  data_alteracao_razao_social?: unknown;
  data_consulta_receita_federal?: string;
  data_consulta_sintegra?: string;
  data_encerramento?: unknown;
  data_fundacao?: string;
  data_registro?: string;
  data_situacao?: string;
  data_situacao_sintegra?: unknown;
  demais_ramos_atividade?: unknown[];
  fgts?: AnaliseDeCreditoFgts;
  filiais?: unknown;
  inscricao_estadual?: string;
  moeda_capital_atual?: string;
  moeda_capital_inicial?: string;
  natureza_juridica?: string;
  nome_fantasia?: string;
  numero_nire?: string;
  orgao?: string;
  orgao_atual?: string;
  quantidade_filiais?: string;
  ramo_atividade_primario?: AnaliseDeCreditoRamoAtividadePrimario;
  ramo_atividade_secundario?: AnaliseDeCreditoRamoAtividadeSecundario;
  razao_social?: string;
  razao_social_anterior?: unknown;
  segmento?: unknown;
  situacao_cnpj?: string;
  situacao_sintegra?: string;
  suframa?: AnaliseDeCreditoSuframa;
  uf_inscricao_estadual?: string;
  uf_nire?: string;
}

export interface AnaliseDeCreditoFilial {
  bairro_filial?: unknown;
  cep_filial?: unknown;
  cidade_filial?: unknown;
  codigo_ibge_filial?: unknown;
  complemento_filial?: unknown;
  endereco_filial?: unknown;
  uf_filial?: unknown;
}

export interface AnaliseDeCreditoTelefoneMatriz {
  telefone?: string[];
}

export interface AnaliseDeCreditoMatriz {
  bairro_matriz?: string;
  cep_matriz?: string;
  cidade_matriz?: string;
  codigo_ibge_matriz?: string;
  complemento_matriz?: unknown;
  endereco_matriz?: string;
  telefone_matriz?: AnaliseDeCreditoTelefoneMatriz;
  uf_matriz?: string;
}

export interface AnaliseDeCreditoLocalizacaoCompleto {
  filial?: AnaliseDeCreditoFilial;
  matriz?: AnaliseDeCreditoMatriz;
}

export interface AnaliseDeCreditoParticipacoesEmpresasConsultada {
  cnpj_participada?: string;
  entrada?: string | null;
  indicador_debito?: string;
  indicador_fraude?: string;
  participacao?: string;
  razao_social_participada?: string;
  situacao_cnpj?: string;
}

export interface AnaliseDeCreditoSociosParticipante {
  cnpj?: string;
  entrada?: string | null;
  indicador_debito?: string;
  indicador_fraude?: string;
  participacao?: string;
  razao_social?: string;
  situacao_cnpj?: string;
}

export interface AnaliseDeCreditoParticipacoesSociosAdmOutrasEmpresa {
  cpf?: string;
  nome_socio?: string;
  socios_participantes?: AnaliseDeCreditoSociosParticipante[];
}

export interface AnaliseDeCreditoResultsSocio {
  assina_empresa?: string;
  cpf_cnpj?: string;
  data_entrada?: unknown;
  indicador_debito?: string;
  indicador_fraude?: string;
  nome_empresa?: string;
  participacao?: string;
  situacao_documento?: string;
  tipo_documento?: string;
}

export interface AnaliseDeCreditoPjBusinessResults {
  acoes_civeis?: AnaliseDeCreditoAcoesCiveis;
  administradores?: AnaliseDeCreditoAdministradore[];
  alerta_fraudes?: AnaliseDeCreditoAlertaFraudes;
  cheques_devolvidos_informados_usuario?: AnaliseDeCreditoChequesDevolvidosInformadosUsuario;
  cheques_sem_fundo?: AnaliseDeCreditoChequesSemFundo;
  cheques_sustados?: AnaliseDeCreditoChequesSustados;
  consultas?: AnaliseDeCreditoPjRiskResultsConsultas;
  decisao?: AnaliseDeCreditoResultsDecisao;
  erro?: AnaliseDeCreditoErro;
  falencias_recuperacao_judicial?: AnaliseDeCreditoFalenciasRecuperacaoJudicial;
  identificacao_completo?: AnaliseDeCreditoIdentificacaoCompleto;
  localizacao_completo?: AnaliseDeCreditoLocalizacaoCompleto;
  participacoes_empresas_consultadas?: AnaliseDeCreditoParticipacoesEmpresasConsultada[];
  participacoes_socios_adm_outras_empresas?: AnaliseDeCreditoParticipacoesSociosAdmOutrasEmpresa[];
  pendencias_restricoes?: AnaliseDeCreditoPendenciasRestricoes;
  protestos?: AnaliseDeCreditoProtestos;
  score?: AnaliseDeCreditoScoreItem[];
  socios?: AnaliseDeCreditoResultsSocio[];
}

/** Análise de Crédito > PJ - Pessoa Jurídica > Business. POST /v1/analise_de_credito/pj/business. Shape inferred from the examples in TargetData's docs. */
export interface AnaliseDeCreditoPjBusinessResponse {
  header: ResponseHeader;
  results: AnaliseDeCreditoPjBusinessResults;
}

export interface AnaliseDeCreditoAcoesJudiciais {
  quantidade?: number;
  ultima?: unknown;
  valor?: number;
}

export interface AnaliseDeCreditoRestricoesDocumentoChequesSemFundo {
  quantidade?: number;
  ultima?: unknown;
  valor?: number;
}

export interface AnaliseDeCreditoRestricoesDocumentoConsultas {
  quantidade?: number;
  ultima?: unknown;
  valor?: number;
}

export interface AnaliseDeCreditoRestricoesDocumentoFalenciasRecuperacaoJudicial {
  quantidade?: number;
  ultima?: unknown;
  valor?: number;
}

export interface AnaliseDeCreditoPagamentos {
  quantidade?: number;
  ultima?: unknown;
  valor?: number;
}

export interface AnaliseDeCreditoRestricoesDocumentoPendenciasRestricoes {
  quantidade?: number;
  ultima?: unknown;
  valor?: number;
}

export interface AnaliseDeCreditoRestricoesDocumentoProtestos {
  quantidade?: number;
  ultima?: unknown;
  valor?: number;
}

export interface AnaliseDeCreditoTitulosVencer {
  quantidade?: number;
  ultima?: unknown;
  valor?: number;
}

export interface AnaliseDeCreditoRestricoesDocumento {
  acoes_judiciais?: AnaliseDeCreditoAcoesJudiciais;
  cheques_sem_fundo?: AnaliseDeCreditoRestricoesDocumentoChequesSemFundo;
  consultas?: AnaliseDeCreditoRestricoesDocumentoConsultas;
  falencias_recuperacao_judicial?: AnaliseDeCreditoRestricoesDocumentoFalenciasRecuperacaoJudicial;
  pagamentos?: AnaliseDeCreditoPagamentos;
  pendencias_restricoes?: AnaliseDeCreditoRestricoesDocumentoPendenciasRestricoes;
  protestos?: AnaliseDeCreditoRestricoesDocumentoProtestos;
  titulos_vencer?: AnaliseDeCreditoTitulosVencer;
}

export interface AnaliseDeCreditoResultsAdministradore {
  cargo?: string;
  cpf?: string;
  entrada?: string;
  indicador_debito?: string;
  indicador_fraude?: string;
  mandato?: string;
  nome?: string;
  restricoes_documento?: AnaliseDeCreditoRestricoesDocumento;
  situacao_cpf?: string;
}

export interface AnaliseDeCreditoResultsChequesDevolvidosInformadosUsuario {
  mensagem?: string;
  periodo_final?: string;
  periodo_inicial?: string;
  quantidade_total?: number;
  ultimas_ocorrencias?: AnaliseDeCreditoUltimasOcorrencia[];
}

export interface AnaliseDeCreditoResultsChequesSemFundo {
  mensagem?: string;
  total_cheques_sem_fundos?: number;
  total_nomes_relacionados?: number;
  ultimas_ocorrencias?: AnaliseDeCreditoChequesSemFundoUltimasOcorrencia[];
}

export interface AnaliseDeCreditoResultsChequesSustados {
  mensagem?: string;
  periodo_final?: string;
  periodo_inicial?: string;
  total?: number;
  ultimas_ocorrencias?: AnaliseDeCreditoChequesSustadosUltimasOcorrencia[];
}

export interface AnaliseDeCreditoConsultasUltimasConsulta {
  cnpj?: string;
  data?: string;
  razao_social?: string;
}

export interface AnaliseDeCreditoPjLimitResultsConsultas {
  consultas_mes?: AnaliseDeCreditoConsultasMe[];
  periodo_final?: string;
  periodo_inicial?: string;
  quantidade_total?: number;
  ultimas_consultas?: AnaliseDeCreditoConsultasUltimasConsulta[];
}

export interface AnaliseDeCreditoFaturamentoPresumido {
  faixa?: string;
  faturamento_anual?: string;
  mensagem?: string;
}

export interface AnaliseDeCreditoLimiteCredito {
  descricao_natureza?: unknown;
  score?: unknown;
  texto?: string;
}

export interface AnaliseDeCreditoLocalizacaoCompletoFilial {
  bairro_filial?: unknown;
  cep_filial?: unknown;
  cidade_filial?: unknown;
  codigo_ibge_filial?: unknown;
  complemento_filial?: unknown;
  endereco_filial?: unknown;
  telefone_filial?: Record<string, unknown>;
  uf_filial?: unknown;
}

export interface AnaliseDeCreditoResultsLocalizacaoCompleto {
  filial?: AnaliseDeCreditoLocalizacaoCompletoFilial;
  matriz?: AnaliseDeCreditoMatriz;
}

export interface AnaliseDeCreditoRestricoesDocumentoAcoesJudiciais {
  quantidade?: number;
  ultima?: string | null;
  valor?: number;
}

export interface AnaliseDeCreditoParticipacoesEmpresasConsultadaRestricoesDocumentoConsultas {
  quantidade?: number;
  ultima?: string | null;
  valor?: number;
}

export interface AnaliseDeCreditoParticipacoesEmpresasConsultadaRestricoesDocumentoFalenciasRecuperacaoJudicial {
  quantidade?: number;
  ultima?: string | null;
  valor?: number;
}

export interface AnaliseDeCreditoParticipacoesEmpresasConsultadaRestricoesDocumentoProtestos {
  quantidade?: number;
  ultima?: string | null;
  valor?: number;
}

export interface AnaliseDeCreditoParticipacoesEmpresasConsultadaRestricoesDocumento {
  acoes_judiciais?: AnaliseDeCreditoRestricoesDocumentoAcoesJudiciais;
  cheques_sem_fundo?: AnaliseDeCreditoRestricoesDocumentoChequesSemFundo;
  consultas?: AnaliseDeCreditoParticipacoesEmpresasConsultadaRestricoesDocumentoConsultas;
  falencias_recuperacao_judicial?: AnaliseDeCreditoParticipacoesEmpresasConsultadaRestricoesDocumentoFalenciasRecuperacaoJudicial;
  pagamentos?: AnaliseDeCreditoPagamentos;
  pendencias_restricoes?: AnaliseDeCreditoRestricoesDocumentoPendenciasRestricoes;
  protestos?: AnaliseDeCreditoParticipacoesEmpresasConsultadaRestricoesDocumentoProtestos;
  titulos_vencer?: AnaliseDeCreditoTitulosVencer;
}

export interface AnaliseDeCreditoResultsParticipacoesEmpresasConsultada {
  cnpj_participada?: string;
  entrada?: string | null;
  indicador_debito?: string;
  indicador_fraude?: string;
  participacao?: string;
  razao_social_participada?: string;
  restricoes_documento?: AnaliseDeCreditoParticipacoesEmpresasConsultadaRestricoesDocumento;
  situacao_cnpj?: string;
}

export interface AnaliseDeCreditoSociosParticipanteRestricoesDocumentoPendenciasRestricoes {
  quantidade?: number;
  ultima?: string | null;
  valor?: number;
}

export interface AnaliseDeCreditoSociosParticipanteRestricoesDocumento {
  acoes_judiciais?: AnaliseDeCreditoRestricoesDocumentoAcoesJudiciais;
  cheques_sem_fundo?: AnaliseDeCreditoRestricoesDocumentoChequesSemFundo;
  consultas?: AnaliseDeCreditoParticipacoesEmpresasConsultadaRestricoesDocumentoConsultas;
  falencias_recuperacao_judicial?: AnaliseDeCreditoRestricoesDocumentoFalenciasRecuperacaoJudicial;
  pagamentos?: AnaliseDeCreditoPagamentos;
  pendencias_restricoes?: AnaliseDeCreditoSociosParticipanteRestricoesDocumentoPendenciasRestricoes;
  protestos?: AnaliseDeCreditoParticipacoesEmpresasConsultadaRestricoesDocumentoProtestos;
  titulos_vencer?: AnaliseDeCreditoTitulosVencer;
}

export interface AnaliseDeCreditoParticipacoesSociosAdmOutrasEmpresaSociosParticipante {
  cnpj?: string;
  entrada?: string | null;
  indicador_debito?: string;
  indicador_fraude?: string;
  participacao?: string;
  razao_social?: string;
  restricoes_documento?: AnaliseDeCreditoSociosParticipanteRestricoesDocumento;
  situacao_cnpj?: string;
}

export interface AnaliseDeCreditoResultsParticipacoesSociosAdmOutrasEmpresa {
  cpf?: string;
  nome_socio?: string;
  socios_participantes?: AnaliseDeCreditoParticipacoesSociosAdmOutrasEmpresaSociosParticipante[];
}

export interface AnaliseDeCreditoPjLimitResultsSocio {
  assina_empresa?: string;
  cpf_cnpj?: string;
  data_entrada?: unknown;
  indicador_debito?: string;
  indicador_fraude?: string;
  nome_empresa?: string;
  participacao?: string;
  restricoes_documento?: AnaliseDeCreditoSociosParticipanteRestricoesDocumento;
  situacao_documento?: string;
  tipo_documento?: string;
}

export interface AnaliseDeCreditoPjLimitResults {
  acoes_civeis?: AnaliseDeCreditoAcoesCiveis;
  administradores?: AnaliseDeCreditoResultsAdministradore[];
  alerta_fraudes?: AnaliseDeCreditoAlertaFraudes;
  cheques_devolvidos_informados_usuario?: AnaliseDeCreditoResultsChequesDevolvidosInformadosUsuario;
  cheques_sem_fundo?: AnaliseDeCreditoResultsChequesSemFundo;
  cheques_sustados?: AnaliseDeCreditoResultsChequesSustados;
  consultas?: AnaliseDeCreditoPjLimitResultsConsultas;
  decisao?: AnaliseDeCreditoResultsDecisao;
  erro?: AnaliseDeCreditoErro;
  falencias_recuperacao_judicial?: AnaliseDeCreditoFalenciasRecuperacaoJudicial;
  faturamento_presumido?: AnaliseDeCreditoFaturamentoPresumido;
  identificacao_completo?: AnaliseDeCreditoIdentificacaoCompleto;
  limite_credito?: AnaliseDeCreditoLimiteCredito;
  localizacao_completo?: AnaliseDeCreditoResultsLocalizacaoCompleto;
  participacoes_empresas_consultadas?: AnaliseDeCreditoResultsParticipacoesEmpresasConsultada[];
  participacoes_socios_adm_outras_empresas?: AnaliseDeCreditoResultsParticipacoesSociosAdmOutrasEmpresa[];
  pendencias_restricoes?: AnaliseDeCreditoPendenciasRestricoes;
  protestos?: AnaliseDeCreditoProtestos;
  score?: AnaliseDeCreditoScoreItem[];
  socios?: AnaliseDeCreditoPjLimitResultsSocio[];
}

/** Análise de Crédito > PJ - Pessoa Jurídica > Limit. POST /v1/analise_de_credito/pj/limit. Shape inferred from the examples in TargetData's docs. */
export interface AnaliseDeCreditoPjLimitResponse {
  header: ResponseHeader;
  results: AnaliseDeCreditoPjLimitResults;
}
