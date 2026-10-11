import type { RawResponse, ResponseHeader } from "./common";

/** Reprocessamento. POST /v1/veiculos/reprocessamento. Shape inferred from the examples in TargetData's docs. No example answer in the docs, so `results` is `unknown`. */
export type VeiculosReprocessamentoResponse = RawResponse;

export interface VeiculosControlMetadata {
  consulta_completa?: boolean;
}

export interface VeiculosProprietarioAtual {
  uf_jurisdicao?: string;
  marca_modelo?: string;
  codigo_marca_modelo?: unknown;
  ano_modelo?: string;
  ano_fabricacao?: string;
  placa?: string;
  chassi?: string;
  renavam?: string;
  cor?: string;
  tipo_doc_proprietario?: string;
  doc_proprietario?: string;
  nome_proprietario?: string;
  tipo_situacao_veiculo?: unknown;
  municipio_emplacamento?: string;
  data_ultima_atualizacao?: unknown;
  created?: string;
  capacidade_carga?: unknown;
  carroceria?: unknown;
  cilindradas?: unknown;
  combustivel?: unknown;
  especie?: unknown;
  potencia?: unknown;
  motor?: unknown;
}

export interface VeiculosPlacaChassiResults {
  control_metadata?: VeiculosControlMetadata;
  proprietario_atual?: VeiculosProprietarioAtual;
}

/** Consulta Veiculo por Placa ou Chassi > Veiculos por Placa ou Chassi. POST /v1/veiculos/placa-chassi. Shape inferred from the examples in TargetData's docs. */
export interface VeiculosPlacaChassiResponse {
  results: VeiculosPlacaChassiResults;
  header: ResponseHeader;
}

export interface VeiculosDetalhesHistoricoProprietarios2 {
  situacao?: string;
}

export interface VeiculosHistoricoProprietarios2Item {
  placa?: string;
  chassi?: string;
  renavam?: string;
  ano_fabricacao?: string;
  ano_modelo?: string;
  especie?: string;
  marca?: string;
  municipio?: string;
  ocorrencia?: string;
  remarcacao_chassi?: string;
  restricao?: string;
  situacao?: string;
  tipo_veiculo?: string;
  uf?: string;
}

export interface VeiculosDocumentoResults {
  detalhes_historico_proprietarios2?: VeiculosDetalhesHistoricoProprietarios2;
  historico_proprietarios2?: VeiculosHistoricoProprietarios2Item[];
}

/** Consulta Veiculo por Documento > Veiculos por CPF/CNPJ. POST /v1/veiculos/documento. Shape inferred from the examples in TargetData's docs. */
export interface VeiculosDocumentoResponse {
  results: VeiculosDocumentoResults;
  header: ResponseHeader;
}

export interface VeiculosHistoricoProprietario {
  correlacao_chassi_renavam?: boolean;
  data_processamento?: unknown;
  ocorrencia?: unknown;
  motivo_tipo_autorizacao?: unknown;
  tipo_documento?: unknown;
  ano_exercicio?: string;
  chassi?: string;
  cpf_cnpj?: string;
  placa?: string;
  proprietario?: string;
  renavam?: unknown;
  uf?: string;
  municipio?: string;
  data_emplacamento?: unknown;
}

export interface VeiculosHistoricoProprietariosResults {
  placa?: string;
  chassi?: string;
  renavam?: string;
  num_motor?: string;
  ano_fabricacao?: string;
  ano_modelo?: string;
  marca_modelo?: string;
  historico_proprietarios?: VeiculosHistoricoProprietario[];
}

/** Dossie Veicular > Histórico de Proprietários. POST /v1/veiculos/historico_proprietarios. Shape inferred from the examples in TargetData's docs. */
export interface VeiculosHistoricoProprietariosResponse {
  results: VeiculosHistoricoProprietariosResults;
  header: ResponseHeader;
}

export interface VeiculosRegistro {
  descricao?: string;
  item_de_serie?: boolean;
}

export interface VeiculosVeiculosFipeItem {
  ano_modelo?: unknown;
  fipe_id?: string;
  id_versao?: unknown;
  registros?: VeiculosRegistro[];
}

export interface VeiculosAcessorios {
  veiculos_fipe?: VeiculosVeiculosFipeItem[];
}

export interface VeiculosAcessoriosCategorizados {
  acessorios?: unknown[];
  categorias?: unknown[];
}

export interface VeiculosAnaliseRisco {
  image_link?: unknown;
  indice_risco?: string;
  parecer?: string;
}

export interface VeiculosCustoMedio {
  custo_total?: number;
  custo_plano_revisao_total?: number;
  custo_desgaste_pecas_total?: number;
  custo_cada10k?: unknown[];
}

export interface VeiculosOpcionai {
  descricao?: string;
}

export interface VeiculosAnuncio {
  placa?: string;
  km?: string;
  valor?: string;
  data?: string;
  observacao?: string;
  opcionais?: VeiculosOpcionai[];
  fotos?: unknown[];
}

export interface VeiculosBaseEstadual {
  placa?: string;
  chassi?: string;
  renavam?: string;
  categoria?: string;
  combustivel?: string;
  comunicacao_inclusao?: unknown;
  comunicacao_venda?: string;
  cor?: string;
  data_alteracao_motor?: unknown;
  data_emissao_crv?: string;
  data_inclusao_intencao_troca_financeira?: unknown;
  data_limite_restricao_tributaria?: unknown;
  data_venda?: string;
  data_vigencia_contrato_financeira?: string;
  debito_cetesb?: string;
  debito_der?: string;
  debito_dersa?: string;
  debito_detran?: string;
  debito_dpvat?: string;
  debito_ipva?: string;
  debito_licenciamento?: string;
  debito_multas?: string;
  debito_municipais?: string;
  debito_policia_rodoviaria_federal?: unknown;
  debito_renainf?: unknown;
  especie?: string;
  exercicio_licenciamento?: unknown;
  existe_debito_dpvat?: string;
  existe_debito_ipva?: string;
  existe_debito_licenciamento?: string;
  existe_debito_multa?: string;
  licdata?: string;
  motor?: string;
  observacoes?: unknown;
  outras_restricoes1?: string;
  outras_restricoes2?: string;
  outras_restricoes3?: string;
  outras_restricoes4?: string;
  pronome?: string;
  pronome_anterior?: unknown;
  restricao_adminisrativa?: string;
  restricao_ambiental?: unknown;
  restricao_arrendatario?: unknown;
  restricao_data_inclusao?: unknown;
  restricao_doc_arrendatario?: unknown;
  restricao_financeira?: string;
  restricao_guincho?: string;
  restricao_judicial?: string;
  restricao_nome_agente?: unknown;
  restricao_renajud?: string;
  restricao_roubo_furto?: string;
  restricao_tributaria?: string;
  situacao_veiculo?: string;
  tipo_marcacao_chassi?: string;
  uf?: string;
  municipio?: string;
  tipo?: string;
}

export interface VeiculosBaseNacional {
  placa?: string;
  chassi?: string;
  renavam?: string;
  ano_fabricacao?: string;
  ano_modelo?: string;
  categoria?: unknown;
  combustivel?: string;
  cor?: string;
  di?: unknown;
  doc_faturado?: string;
  dt_emissao_crv?: unknown;
  dt_ultima_atualizacao?: string;
  especie?: string;
  especie_veiculo?: unknown;
  indicador_comunicacao_vendas?: string;
  indicador_restricao_renajud?: string;
  motor?: string;
  municipio?: string;
  ocorrencia?: string;
  outras_restricoes1?: string;
  outras_restricoes2?: string;
  outras_restricoes3?: string;
  outras_restricoes4?: string;
  outras_restricoes5?: string;
  outras_restricoes6?: string;
  outras_restricoes7?: string;
  outras_restricoes8?: string;
  restricao1?: string;
  restricao2?: string;
  restricao3?: string;
  restricao4?: string;
  restricao_data_inclusao?: unknown;
  restricao_financiadora?: unknown;
  restricao_financiamento?: unknown;
  restricao_nome_agente?: unknown;
  restricao_tipo_transacao?: unknown;
  situacao_veiculo?: string;
  tipo_doc_faturado?: string;
  tipo_doc_importadora?: string;
  tipo_marcacao_chassi?: unknown;
  tipo_veiculo?: string;
  uf?: string;
  uf_faturado?: string;
}

export interface VeiculosCestaBasica {
  veiculos_fipe?: unknown[];
  registros?: unknown[];
}

export interface VeiculosPreco {
  preco?: string;
  posicao?: string;
}

export interface VeiculosDescricao {
  seis_meses_porcentagem_de_idade?: string | null;
  posicao?: string;
}

export interface VeiculosPlanoDeRevisao {
  primeira_revisao_preco?: unknown;
  posicao?: string;
}

export interface VeiculosEspesificacao {
  descricao?: string;
  valor?: string;
  posicao?: string;
}

export interface VeiculosParte {
  id?: string;
  descricao?: string;
}

export interface VeiculosVeiculoComparativoItemParte {
  parte?: VeiculosParte;
  preco?: string;
  posicao?: string;
}

export interface VeiculosVeiculoComparativoItem {
  preco?: VeiculosPreco;
  descricao?: VeiculosDescricao;
  plano_de_revisao?: VeiculosPlanoDeRevisao;
  fipe_id?: string;
  marca?: string;
  modelo?: string;
  marca_imagem?: string;
  ano?: string;
  posicao_geral?: string;
  espesificacoes?: VeiculosEspesificacao[];
  equipamentos?: unknown[];
  partes?: VeiculosVeiculoComparativoItemParte[];
}

export interface VeiculosOpinioesDoDonoItem {
  _id?: string;
  brakes?: string;
  cambium?: string;
  city_consumption?: string;
  comfort?: string;
  cost_benefit?: string;
  internal_space?: string;
  performance?: string;
  road_consumption?: string;
  stability?: string;
  suspension?: string;
  total_score?: string;
  trunk?: string;
}

export interface VeiculosComparativoEspecificacoes {
  veiculo_comparativo?: VeiculosVeiculoComparativoItem[];
  opinioes_do_dono?: VeiculosOpinioesDoDonoItem[];
}

export interface VeiculosHistoricoPrecoItem {
  mes?: string;
  ano?: string;
  valor?: string;
  predicao?: boolean;
}

export interface VeiculosInformacoesFipeItem {
  ano?: string;
  fipe_id?: string;
  marca?: string;
  modelo?: string;
  versao?: string;
  combustivel?: string;
  valor_atual?: string;
  historico_preco?: VeiculosHistoricoPrecoItem[];
}

export interface VeiculosInformacoesGerai {
  fipe_id?: string;
  id_versao?: string;
  versao?: string;
  modelo?: string;
  marca?: string;
}

export interface VeiculosDadosBasicosDoVeiculo {
  marca?: string;
  codigo_fipe?: string;
  descricao?: string;
  placa?: string;
  ano_modelo?: string;
  ano_fabricacao?: string;
  combustivel?: string;
  chassi?: string;
  nacional?: string;
  cilindradas?: string;
  informacoes_fipe?: VeiculosInformacoesFipeItem[];
  informacoes_gerais?: VeiculosInformacoesGerai[];
}

export interface VeiculosPrecificadorIItem {
  codigo?: string;
  combustivel?: string;
  data_ref_fipe?: unknown;
  marca?: string;
  modelo?: string;
  graph_mes1?: unknown;
  graph_mes2?: unknown;
  graph_mes3?: unknown;
  graph_mes4?: unknown;
  graph_mes5?: unknown;
  graph_mes6?: unknown;
  graph_mes7?: unknown;
  graph_mes8?: unknown;
  graph_mes9?: unknown;
  graph_mes10?: unknown;
  graph_mes11?: unknown;
  graph_mes12?: unknown;
  graph_valor1?: unknown;
  graph_valor2?: unknown;
  graph_valor3?: unknown;
  graph_valor4?: unknown;
  graph_valor5?: unknown;
  graph_valor6?: unknown;
  graph_valor7?: unknown;
  graph_valor8?: unknown;
  graph_valor9?: unknown;
  graph_valor10?: unknown;
  graph_valor11?: unknown;
  graph_valor12?: unknown;
  valor?: string;
  valor_zero_k_m?: unknown;
}

export interface VeiculosPrecificadorIIItem {
  combustivel?: string;
  marca?: string;
  modelo?: string;
  valor?: string;
  versao?: string;
}

export interface VeiculosDecodificadorPrecificador {
  ano_modelo?: string;
  categoria?: string;
  chassi?: string;
  local_fabricacao?: unknown;
  marca?: string;
  modelo?: string;
  origem?: string;
  pais?: string;
  potencia_motor?: string;
  ano_fabricacao?: string;
  combustivel?: string;
  quantidade_eixos?: string;
  motor?: string;
  tipo_motor?: unknown;
  tracao?: unknown;
  transmissao?: unknown;
  portas?: string;
  classificacao?: unknown;
  comprimento?: unknown;
  peso_bruto?: unknown;
  tipo_freio?: unknown;
  distancia_entre_eixos?: unknown;
  codigo_fipe?: string;
  quantidade_irregularidades?: unknown;
  cor?: string;
  regiao?: string;
  tipo_carroceria?: unknown;
  versao?: unknown;
  precificador_i?: VeiculosPrecificadorIItem[];
  precificador_i_i?: VeiculosPrecificadorIIItem[];
}

export interface VeiculosFichaTecnica {
  veiculos_fipe?: unknown[];
  registros?: unknown[];
}

export interface VeiculosFotosLoteVeiculo {
  conteudo?: unknown[];
}

export interface VeiculosIndicioSinistro {
  classificacao?: unknown;
  descricao?: string;
}

export interface VeiculosScore {
  aceitacao?: string;
  exigencia_vistoria_especial?: string;
  percentual_sobre_ref?: string;
  pontuacao?: unknown;
  score?: string;
}

export interface VeiculosLeilaoRegistro {
  ano_fabricacao?: string;
  ano_modelo?: string;
  chassi?: string;
  comitente?: string;
  condicao_geral?: string;
  cor?: string;
  data_leilao?: string;
  leiloeiro?: string;
  lote?: string;
  marca?: string;
  modelo?: string;
  placa?: string;
  observacao?: unknown;
}

export interface VeiculosLeilao {
  score?: VeiculosScore;
  descricao?: string;
  registros?: VeiculosLeilaoRegistro[];
}

export interface VeiculosRevisao {
  veiculos_fipe?: unknown[];
}

export interface VeiculosHistoricoItem {
  chassi?: string;
  cor?: string;
  data_ocorrencia?: string;
  declaracao?: string;
  marca_modelo?: string;
  municipio_ocorrencia?: string;
  ocorrencia?: string;
  placa?: string;
  boletim?: string;
  uf_ocorrencia?: string;
}

export interface VeiculosRouboFurto {
  consta_ocorrencia?: boolean;
  consta_ocorrencia_ativa?: boolean;
  indicador_procedencia?: string;
  municipio_emplacamento?: string;
  historico?: VeiculosHistoricoItem[];
}

export interface VeiculosCodigoFipeItem {
  codigo?: string;
  valor_zero_k_m?: string;
}

export interface VeiculosHistoricoKmItem {
  data_inclusao?: string;
  km?: string;
}

export interface VeiculosResultsHistoricoProprietario {
  data_emplacamento?: unknown;
  ano_exercicio?: string;
  chassi?: string;
  correlacao_chassi_renavam?: boolean;
  cpf_cnpj?: string;
  data_processamento?: string;
  ocorrencia?: unknown;
  motivo_tipo_autorizacao?: unknown;
  municipio?: string;
  placa?: string;
  proprietario?: string;
  renavam?: string;
  tipo_documento?: unknown;
  uf?: string;
}

export interface VeiculosVeiculoEssencialResults {
  acessorios?: VeiculosAcessorios;
  acessorios_categorizados?: VeiculosAcessoriosCategorizados;
  analise_risco?: VeiculosAnaliseRisco;
  custo_medio?: VeiculosCustoMedio;
  anuncio?: VeiculosAnuncio;
  base_estadual?: VeiculosBaseEstadual;
  base_nacional?: VeiculosBaseNacional;
  cesta_basica?: VeiculosCestaBasica;
  comparativo_especificacoes?: VeiculosComparativoEspecificacoes;
  dados_basicos_do_veiculo?: VeiculosDadosBasicosDoVeiculo;
  decodificador_precificador?: VeiculosDecodificadorPrecificador;
  ficha_tecnica?: VeiculosFichaTecnica;
  fotos_lote_veiculo?: VeiculosFotosLoteVeiculo;
  indicio_sinistro?: VeiculosIndicioSinistro;
  leilao?: VeiculosLeilao;
  revisao?: VeiculosRevisao;
  roubo_furto?: VeiculosRouboFurto;
  placa?: string;
  chassi?: string;
  renavam?: string;
  num_motor?: string;
  ano_fabricacao?: string;
  ano_modelo?: string;
  marca_modelo?: string;
  codigo_marca_modelo?: string;
  combustivel?: string;
  ident_importadora?: unknown;
  limite_restricao_trib?: unknown;
  municipio?: string;
  municipio_emplacamento?: string;
  nacionalidade?: string;
  num_carroceria?: unknown;
  num_faturado?: string;
  num_terceiro_eixo?: unknown;
  pbt?: string;
  potencia?: string;
  procedencia?: string;
  qtd_pax?: string;
  registro_di?: unknown;
  situacao_chassi?: string;
  situacao_veiculo?: unknown;
  tipo_carroceria?: string;
  tipo_doc_faturado?: string;
  tipo_doc_importadora?: string;
  tipo_montagem?: unknown;
  tipo_veiculo?: string;
  uf?: string;
  uf_faturado?: unknown;
  ultima_data_inclusao?: unknown;
  valor_anunciado?: unknown;
  cor_veiculo?: string;
  caixa_cambio?: string;
  capacidade_carga?: string;
  capacidade_passageiro?: string;
  cap_max_tracao?: string;
  categoria?: string;
  cidade?: string;
  cilindradas?: string;
  cmt?: string;
  codigo_combustivel?: string;
  doc_faturado?: string;
  dt_ultima_atualizacao?: unknown;
  eixos?: string;
  eixo_traseiro_dif?: unknown;
  especie_veiculo?: string;
  fotos?: unknown[];
  opcionais?: unknown[];
  restricoes?: unknown;
  codigo_fipe?: VeiculosCodigoFipeItem[];
  historico_anuncios?: unknown[];
  historico_km?: VeiculosHistoricoKmItem[];
  historico_proprietarios?: VeiculosResultsHistoricoProprietario[];
}

/** Dossie Veicular > Veiculo Essencial. POST /v1/veiculos/veiculo-essencial. Shape inferred from the examples in TargetData's docs. */
export interface VeiculosVeiculoEssencialResponse {
  results: VeiculosVeiculoEssencialResults;
  header: ResponseHeader;
}

export interface VeiculosComparativoComponetesVeiculares {
  items?: unknown[];
}

export interface VeiculosRegistroEmLocadora {
  registro_em_locadora?: boolean;
}

export interface VeiculosAcessoriosVeiculosFipeItem {
  ano_modelo?: unknown;
  fipe_id?: string;
  id_versao?: string;
  registros?: unknown[];
}

export interface VeiculosResultsAcessorios {
  veiculos_fipe?: VeiculosAcessoriosVeiculosFipeItem[];
}

export interface VeiculosResultsAnuncio {
  placa?: unknown;
  km?: unknown;
  valor?: unknown;
  data?: unknown;
  observacao?: unknown;
  fotos_raw?: unknown[];
  opcionais?: unknown[];
  fotos?: unknown[];
}

export interface VeiculosResultsBaseEstadual {
  placa?: string;
  chassi?: string;
  renavam?: string;
  categoria?: string;
  combustivel?: string;
  comunicacao_inclusao?: unknown;
  comunicacao_venda?: string;
  cor?: string;
  data_alteracao_motor?: unknown;
  data_emissao_crv?: string;
  data_inclusao_intencao_troca_financeira?: unknown;
  data_limite_restricao_tributaria?: string;
  data_venda?: unknown;
  data_vigencia_contrato_financeira?: unknown;
  debito_cetesb?: unknown;
  debito_der?: unknown;
  debito_dersa?: unknown;
  debito_detran?: unknown;
  debito_dpvat?: string;
  debito_ipva?: string;
  debito_licenciamento?: string;
  debito_multas?: string;
  debito_municipais?: string;
  debito_policia_rodoviaria_federal?: unknown;
  debito_renainf?: unknown;
  especie?: string;
  exercicio_licenciamento?: string;
  existe_debito_dpvat?: string;
  existe_debito_ipva?: string;
  existe_debito_licenciamento?: string;
  existe_debito_multa?: string;
  licdata?: string;
  motor?: string;
  observacoes?: unknown;
  outras_restricoes1?: string;
  outras_restricoes2?: string;
  outras_restricoes3?: string;
  outras_restricoes4?: string;
  pronome?: string;
  pronome_anterior?: unknown;
  restricao_adminisrativa?: string;
  restricao_ambiental?: unknown;
  restricao_arrendatario?: unknown;
  restricao_data_inclusao?: unknown;
  restricao_doc_arrendatario?: unknown;
  restricao_financeira?: unknown;
  restricao_guincho?: string;
  restricao_judicial?: string;
  restricao_nome_agente?: unknown;
  restricao_renajud?: string;
  restricao_roubo_furto?: string;
  restricao_tributaria?: string;
  situacao_veiculo?: string;
  tipo_marcacao_chassi?: string;
  uf?: string;
  municipio?: string;
  tipo?: string;
}

export interface VeiculosResultsBaseNacional {
  placa?: string;
  chassi?: string;
  renavam?: string;
  ano_fabricacao?: string;
  ano_modelo?: string;
  categoria?: string;
  combustivel?: string;
  cor?: string;
  di?: string;
  doc_faturado?: string;
  dt_emissao_crv?: unknown;
  dt_ultima_atualizacao?: string;
  especie?: string;
  especie_veiculo?: string;
  indicador_comunicacao_vendas?: string;
  indicador_restricao_renajud?: string;
  motor?: string;
  municipio?: string;
  ocorrencia?: string;
  outras_restricoes1?: string;
  outras_restricoes2?: string;
  outras_restricoes3?: string;
  outras_restricoes4?: string;
  outras_restricoes5?: string;
  outras_restricoes6?: string;
  outras_restricoes7?: string;
  outras_restricoes8?: string;
  restricao1?: string;
  restricao2?: string;
  restricao3?: string;
  restricao4?: string;
  restricao_data_inclusao?: unknown;
  restricao_financiadora?: unknown;
  restricao_financiamento?: unknown;
  restricao_nome_agente?: unknown;
  restricao_tipo_transacao?: string;
  situacao_veiculo?: string;
  tipo_doc_faturado?: string;
  tipo_doc_importadora?: unknown;
  tipo_marcacao_chassi?: string;
  tipo_veiculo?: string;
  uf?: string;
  uf_faturado?: unknown;
}

export interface VeiculosCestaBasicaVeiculosFipeItem {
  ano_modelo?: unknown;
  fipe_id?: string;
  registros?: unknown[];
}

export interface VeiculosResultsCestaBasica {
  veiculos_fipe?: VeiculosCestaBasicaVeiculosFipeItem[];
  registros?: unknown[];
}

export interface VeiculosResultsComparativoEspecificacoes {
  opinioes_do_dono?: unknown[];
}

export interface VeiculosResultsDadosBasicosDoVeiculo {
  marca?: string;
  codigo_fipe?: string;
  descricao?: string;
  placa?: string;
  ano_modelo?: string;
  ano_fabricacao?: string;
  combustivel?: string;
  chassi?: string;
  tipo_veiculo?: string;
  especie_veiculo?: string;
  num_carroceria?: unknown;
  potencia?: unknown;
  nacional?: string;
  eixos?: unknown;
  pbt?: string;
  cap_max_tracao?: unknown;
  cilindradas?: string;
  capacidade_passageiro?: string;
  capacidade_carga?: unknown;
  caixa_cambio?: unknown;
  numero_eixos_traseiro?: unknown;
  numero_eixos_auxiliar?: unknown;
  num_motor?: string;
  informacoes_fipe?: VeiculosInformacoesFipeItem[];
  informacoes_gerais?: VeiculosInformacoesGerai[];
}

export interface VeiculosEspecificacao {
  propriedade?: string;
  valor?: string | null;
}

export interface VeiculosVeiculosFipeItemRegistro {
  descricao?: string;
  especificacoes?: VeiculosEspecificacao[];
}

export interface VeiculosFichaTecnicaVeiculosFipeItem {
  ano_modelo?: unknown;
  fipe_id?: string;
  registros?: VeiculosVeiculosFipeItemRegistro[];
}

export interface VeiculosResultsFichaTecnica {
  veiculos_fipe?: VeiculosFichaTecnicaVeiculosFipeItem[];
  registros?: VeiculosVeiculosFipeItemRegistro[];
}

export interface VeiculosTemInformacoesParceiro {
  tem_km?: unknown;
  tem_fotos?: unknown;
}

export interface VeiculosLeilaoScore {
  aceitacao?: unknown;
  exigencia_vistoria_especial?: unknown;
  percentual_sobre_ref?: unknown;
  pontuacao?: unknown;
  score?: unknown;
}

export interface VeiculosResultsLeilao {
  score?: VeiculosLeilaoScore;
  descricao?: string;
  registros?: unknown[];
}

export interface VeiculosResultsProprietarioAtual {
  uf_jurisdicao?: string;
  tipo_doc_proprietario?: unknown;
  doc_proprietario?: unknown;
  nome_proprietario?: unknown;
  municipio_emplacamento?: string;
}

export interface VeiculosRecall {
  ano_modelo?: unknown;
  chassi?: unknown;
  descricao_retorno?: unknown;
  marca?: unknown;
  modelo?: unknown;
  detalhes?: unknown[];
  recalls_pendente?: unknown[];
}

export interface VeiculosChecklist {
  data_inspecao?: unknown;
  motor?: unknown;
  porta_malas?: unknown;
  frente?: unknown;
  frente_direita?: unknown;
  frente_esquerda?: unknown;
  porta_frente_direita?: unknown;
  porta_frente_esquerda?: unknown;
  porta_traseira_direita?: unknown;
  porta_traseira_esquerda?: unknown;
  traseira_direita?: unknown;
  traseira_esquerda?: unknown;
  lado_direito?: unknown;
  lado_esquerdo?: unknown;
  pneu_traseira_direita?: unknown;
  pneu_traseira_esquerda?: unknown;
  traseira?: unknown;
  cacamba?: unknown;
  bancos_dianteiros?: unknown;
  bancos_traseiros?: unknown;
  forro_teto?: unknown;
  teto?: unknown;
  carenagem_dianteira?: unknown;
  carenagem_direita?: unknown;
  carenagem_esquerda?: unknown;
  tanque_combustivel?: unknown;
  observacao?: unknown;
  garantia?: unknown;
  links?: unknown[];
  fotos_raw?: unknown[];
  fotos?: unknown[];
}

export interface VeiculosRemarketing {
  checklist?: VeiculosChecklist;
  placa?: unknown;
  chassi?: unknown;
  marca_modelo?: unknown;
  situacao_chassi?: unknown;
  renavam?: unknown;
  segmento?: unknown;
  sub_segmento?: unknown;
  motor?: unknown;
  leilao?: unknown[];
}

export interface VeiculosRenajud {
  consta_renajud?: boolean;
  mensagem?: unknown;
}

export interface VeiculosPecasTrocada {
  descricao?: string;
  quantidade?: number;
}

export interface VeiculosRevisaoVeiculosFipeItemRegistro {
  kilometragem?: number;
  meses?: number;
  parcelas?: number;
  duracao_em_minutos?: number;
  preco_total?: number;
  preco_parcela?: number;
  pecas_trocadas?: VeiculosPecasTrocada[];
  inspecoes?: string[];
}

export interface VeiculosRevisaoVeiculosFipeItem {
  ano_modelo?: unknown;
  fipe_id?: string;
  id_versao?: string;
  registros?: VeiculosRevisaoVeiculosFipeItemRegistro[];
}

export interface VeiculosResultsRevisao {
  veiculos_fipe?: VeiculosRevisaoVeiculosFipeItem[];
}

export interface VeiculosHistoricoConsultaVeicular {
  primeira_consulta?: unknown;
  ultima_consulta?: unknown;
  total?: unknown;
}

export interface VeiculosItem {
  historico?: unknown[];
  totals?: unknown[];
}

export interface VeiculosHistoricoConsultaLaudoVeicular {
  item?: VeiculosItem;
}

export interface VeiculosVeiculoTotalPlusResults {
  comparativo_componetes_veiculares?: VeiculosComparativoComponetesVeiculares;
  registro_em_locadora?: VeiculosRegistroEmLocadora;
  acessorios?: VeiculosResultsAcessorios;
  acessorios_categorizados?: VeiculosAcessoriosCategorizados;
  analise_risco?: VeiculosAnaliseRisco;
  anuncio?: VeiculosResultsAnuncio;
  base_estadual?: VeiculosResultsBaseEstadual;
  base_nacional?: VeiculosResultsBaseNacional;
  cesta_basica?: VeiculosResultsCestaBasica;
  comparativo_especificacoes?: VeiculosResultsComparativoEspecificacoes;
  dados_basicos_do_veiculo?: VeiculosResultsDadosBasicosDoVeiculo;
  ficha_tecnica?: VeiculosResultsFichaTecnica;
  tem_informacoes_parceiro?: VeiculosTemInformacoesParceiro;
  indicio_sinistro?: VeiculosIndicioSinistro;
  leilao?: VeiculosResultsLeilao;
  proprietario_atual?: VeiculosResultsProprietarioAtual;
  recall?: VeiculosRecall;
  remarketing?: VeiculosRemarketing;
  renajud?: VeiculosRenajud;
  revisao?: VeiculosResultsRevisao;
  historico_consulta_veicular?: VeiculosHistoricoConsultaVeicular;
  historico_consulta_laudo_veicular?: VeiculosHistoricoConsultaLaudoVeicular;
  placa?: string;
  chassi?: string;
  renavam?: string;
  num_motor?: string;
  ano_fabricacao?: string;
  ano_modelo?: string;
  marca?: string;
  familia?: unknown;
  marca_modelo?: string;
  modelo?: string;
  codigo_marca_modelo?: string;
  combustivel?: string;
  ident_importadora?: unknown;
  limite_restricao_trib?: unknown;
  municipio?: string;
  municipio_emplacamento?: string;
  nacionalidade?: string;
  num_carroceria?: unknown;
  num_faturado?: unknown;
  num_terceiro_eixo?: string;
  pbt?: string;
  potencia?: string;
  procedencia?: string;
  qtd_pax?: unknown;
  registro_di?: unknown;
  situacao_chassi?: string;
  situacao_veiculo?: string;
  tipo_carroceria?: string;
  tipo_doc_faturado?: string;
  tipo_doc_importadora?: unknown;
  tipo_montagem?: string;
  tipo_veiculo?: string;
  uf?: string;
  uf_faturado?: string;
  ultima_data_inclusao?: unknown;
  valor_anunciado?: unknown;
  cor_veiculo?: string;
  caixa_cambio?: unknown;
  capacidade_carga?: string;
  capacidade_passageiro?: string;
  cap_max_tracao?: string;
  categoria?: string;
  cidade?: unknown;
  cilindradas?: string;
  cmt?: unknown;
  codigo_combustivel?: unknown;
  doc_faturado?: string;
  dt_ultima_atualizacao?: unknown;
  eixos?: string;
  eixo_traseiro_dif?: string;
  especie_veiculo?: string;
  documento_importadora?: unknown;
  fotos?: unknown[];
  restricoes?: unknown;
  gravame?: unknown[];
  historico_anuncios?: unknown[];
  historico_consultas?: unknown[];
  historico_km?: unknown[];
  historico_proprietarios?: VeiculosResultsHistoricoProprietario[];
  multas_renainf?: unknown[];
  renajuds?: unknown[];
}

/** Dossie Veicular > Veiculo Total Plus. POST /v1/veiculos/veiculo-total-plus. Shape inferred from the examples in TargetData's docs. */
export interface VeiculosVeiculoTotalPlusResponse {
  results: VeiculosVeiculoTotalPlusResults;
  header: ResponseHeader;
}

export interface VeiculosCnh {
  number?: string;
  category?: string;
  expiration_date?: string;
  renach?: string;
  first_cnh?: string;
  issue_date?: string;
  registry_number?: string;
  phone?: unknown;
  email?: unknown;
}

export interface VeiculosClient {
  name?: string;
  mother_name?: string;
  father_name?: string;
  document_number?: string;
  rg_number?: string;
  rg_state?: string;
  rg_issuer?: string;
  birth_date?: string;
}

export interface VeiculosCnhV1Results {
  cnh?: VeiculosCnh;
  client?: VeiculosClient;
}

/** CNH Basic. POST /v1/veiculos/cnh-v1. Shape inferred from the examples in TargetData's docs. */
export interface VeiculosCnhV1Response {
  results: VeiculosCnhV1Results;
  header: ResponseHeader;
}

export interface VeiculosToxicological {
  situation?: string;
  due_date?: unknown;
}

export interface VeiculosBlocked {
  uf?: string;
  date?: string;
  description?: string;
  penality_days?: string;
  penality_start_date?: string;
  penality_end_date?: string;
}

export interface VeiculosExam {
  name?: string;
  date?: string;
  result?: unknown;
  validity?: string | null;
  desired_category?: string;
  allowed_category?: string;
  city_held?: string;
  uf?: string;
}

export interface VeiculosCourse {
  name?: string;
  start_date?: unknown;
  end_date?: unknown;
  workload?: unknown;
  category?: string;
  modality?: string;
  due_date?: unknown;
  city_held?: string;
  uf?: string;
}

export interface VeiculosResultsCnh {
  number?: string;
  category?: string;
  expiration_date?: string;
  renach?: string;
  first_cnh?: string;
  issue_date?: string;
  registry_number?: string;
  email?: string;
  phone?: string;
  cnh_photo_url?: string;
  observation?: string;
  toxicological?: VeiculosToxicological;
  address?: string;
  birth_date?: string;
  blockeds?: VeiculosBlocked[];
  exams?: VeiculosExam[];
  courses?: VeiculosCourse[];
}

export interface VeiculosCnhV2Results {
  cnh?: VeiculosResultsCnh;
  client?: VeiculosClient;
}

/** CNH Plus. POST /v1/veiculos/cnh-v2. Shape inferred from the examples in TargetData's docs. */
export interface VeiculosCnhV2Response {
  results: VeiculosCnhV2Results;
  header: ResponseHeader;
}

export interface VeiculosDetailScoreHistoryItem {
  description?: string;
  date?: string;
  punctuation?: number;
}

export interface VeiculosDetailScore12month {
  description?: string;
  date?: string;
  punctuation?: number;
}

export interface VeiculosCnhV3ResultsCnh {
  number?: string;
  category?: string;
  expiration_date?: string;
  renach?: string;
  first_cnh?: string;
  issue_date?: string;
  registry_number?: string;
  email?: string;
  phone?: string;
  cnh_photo_url?: string;
  observation?: string;
  toxicological?: VeiculosToxicological;
  address?: string;
  birth_date?: string;
  blockeds?: VeiculosBlocked[];
  exams?: VeiculosExam[];
  courses?: VeiculosCourse[];
  detail_score_history?: VeiculosDetailScoreHistoryItem[];
  detail_score12months?: VeiculosDetailScore12month[];
}

export interface VeiculosCnhV3Results {
  cnh?: VeiculosCnhV3ResultsCnh;
  client?: VeiculosClient;
}

/** CNH Max. POST /v1/veiculos/cnh-v3. Shape inferred from the examples in TargetData's docs. */
export interface VeiculosCnhV3Response {
  results: VeiculosCnhV3Results;
  header: ResponseHeader;
}

export interface VeiculosDetalheCv {
  data_registro_venda?: string | null;
  data_venda?: string | null;
  message?: string;
  nome_comprador?: string | null;
  nome_proprietario?: string | null;
  numero_identificacao_comprador?: string | null;
  numero_identificacao_proprietario?: string | null;
  placa?: string | null;
  renavam?: string | null;
}

export interface VeiculosComunicacaoVendaResults {
  control_metadata?: VeiculosControlMetadata;
  detalhe_cv?: VeiculosDetalheCv;
  indicador_comunicacao_vendas?: boolean | null;
}

/** Comunicação de Venda. POST /v1/veiculos/comunicacao-venda. Shape inferred from the examples in TargetData's docs. */
export interface VeiculosComunicacaoVendaResponse {
  results: VeiculosComunicacaoVendaResults;
}

/** Send the plate, the RENAVAM number, or both. */
export type RenajudRequest =
  { placa: string; renavam?: string } | { renavam: string; placa?: string };

export interface VeiculosResultsRenajud {
  consta_renajud?: boolean;
  mensagem?: string;
}

export interface VeiculosRenajudResultsRenajud {
  codigo_tribunal?: string;
  orgao_judicial?: string;
  codigo_orgao_judicial?: string;
  processo?: string;
  restricoes?: string;
  tribunal?: string;
  data_inclusao?: string;
  detalhe_renajud?: string;
  consta_renajud?: boolean;
}

export interface VeiculosRenajudResults {
  renajud?: VeiculosResultsRenajud;
  renajuds?: VeiculosRenajudResultsRenajud[];
}

/** Renajud. POST /v1/veiculos/renajud. Shape inferred from the examples in TargetData's docs. */
export interface VeiculosRenajudResponse {
  results: VeiculosRenajudResults;
}

export interface VeiculosGravameItem {
  data_vigencia?: string | null;
  municipio?: string | null;
  agente?: string;
  ano_fabricacao?: string | null;
  ano_modelo?: string | null;
  chassi?: string;
  codigo_agente?: string | null;
  contrato?: string;
  gravame?: string | null;
  data_emissao?: string | null;
  data_inclusao?: string;
  data_situacao?: string | null;
  documento_agente?: string | null;
  documento_financiado?: string;
  intencao?: string | null;
  numero?: string;
  observacoes?: string;
  placa?: string;
  situacao?: string;
  uf?: string;
  uf_placa?: string | null;
  data_vigencia_contrato?: string | null;
  responsavel?: string;
  renavam?: string;
}

export interface VeiculosGravameResults {
  gravame?: VeiculosGravameItem[];
}

/** Gravame. POST /v1/veiculos/gravame. Shape inferred from the examples in TargetData's docs. */
export interface VeiculosGravameResponse {
  results: VeiculosGravameResults;
}

export interface VeiculosDebitosMultasResultsBaseEstadual {
  debito_cetesb?: string;
  debito_der?: string;
  debito_dersa?: string;
  debito_detran?: string;
  debito_dpvat?: string;
  debito_ipva?: string;
  debito_licenciamento?: string;
  debito_multas?: string;
  debito_municipais?: string;
  debito_policia_rodoviaria_federal?: string;
  existe_debito_dpvat?: string;
  existe_debito_ipva?: string;
  existe_debito_licenciamento?: string;
  existe_debito_multa?: string;
  observacoes?: string | null;
}

export interface VeiculosCnhCondutor {
  impedimento?: string | null;
  pontos?: number;
  portaria?: string | null;
  registro?: string | null;
}

export interface VeiculosCnhInfrator {
  impedimento?: string | null;
  pontos?: number;
  portaria?: string | null;
  registro?: string | null;
}

export interface VeiculosPagamento {
  data_pagamento?: string | null;
  data_registro?: string | null;
  uf_pagamento?: string | null;
  valor_pago?: string | null;
}

export interface VeiculosMultasRenainfItem {
  cnh_condutor?: VeiculosCnhCondutor;
  cnh_infrator?: VeiculosCnhInfrator;
  pagamento?: VeiculosPagamento;
  auto_infracao?: string;
  codigo_infracao?: string;
  codigo_municipio_infracao?: string;
  codigo_orgao_autuador?: string;
  data_cadastro_infracao?: string;
  data_emissao_notificacao?: string | null;
  data_emissao_penalidade?: string | null;
  data_infracao?: string;
  descricao?: string;
  hora_infracao?: string | null;
  limite_permitido?: string | null;
  local_infracao?: string;
  marca_modelo?: string | null;
  medicao_considerada?: string | null;
  medicao_real?: string | null;
  municipio?: string;
  orgao_autuador?: string;
  tipo?: string;
  uf_orgao_autuador?: string;
  valor?: string;
  _id?: string;
}

export interface VeiculosDebitosMultasResults {
  base_estadual?: VeiculosDebitosMultasResultsBaseEstadual;
  placa?: string;
  chassi?: string;
  renavam?: string;
  ano_fabricacao?: string;
  ano_modelo?: string;
  marca?: string;
  marca_modelo?: string;
  modelo?: string;
  combustivel?: string;
  pbt?: string;
  potencia?: string;
  procedencia?: string;
  tipo_montagem?: string;
  tipo_veiculo?: string;
  uf?: string;
  uf_faturado?: string;
  cor_veiculo?: string;
  caixa_cambio?: string;
  capacidade_carga?: string | null;
  capacidade_passageiro?: string;
  cap_max_tracao?: string;
  categoria?: string;
  cilindradas?: string;
  multas_renainf?: VeiculosMultasRenainfItem[];
}

/** Débitos e Multas. POST /v1/veiculos/debitos-multas. Shape inferred from the examples in TargetData's docs. */
export interface VeiculosDebitosMultasResponse {
  results: VeiculosDebitosMultasResults;
}

export interface VeiculosRouboFurtoHistoricoItem {
  boletim?: string;
  codigo_orgao_seguranca?: string;
  documento_informante?: string;
  informante?: string;
  ramal_telefone_contato?: string;
  telefone_contato?: string;
  numero_documento?: string;
  uf_ocorrencia?: string;
  placa?: string;
  ocorrencia?: string;
  municipio_ocorrencia?: string;
  marca_modelo?: string;
  declaracao?: string;
  data_ocorrencia?: string;
  cor?: string;
  chassi?: string;
}

export interface VeiculosResultsRouboFurto {
  consta_ocorrencia?: boolean;
  consta_ocorrencia_ativa?: boolean;
  historico?: VeiculosRouboFurtoHistoricoItem[];
  indicador_procedencia?: string;
  municipio_emplacamento?: string;
}

export interface VeiculosRouboFurtoResults {
  roubo_furto?: VeiculosResultsRouboFurto;
}

/** Roubo e Furto. POST /v1/veiculos/roubo-furto. Shape inferred from the examples in TargetData's docs. */
export interface VeiculosRouboFurtoResponse {
  results: VeiculosRouboFurtoResults;
}

export interface VeiculosBaseEstadualResultsBaseEstadual {
  categoria?: string;
  combustivel?: string;
  comunicacao_inclusao?: string | null;
  comunicacao_venda?: string;
  cor?: string;
  data_alteracao_motor?: string | null;
  data_emissao_crv?: string;
  data_limite_restricao_tributaria?: string | null;
  data_venda?: string | null;
  debito_cetesb?: string;
  debito_der?: string;
  debito_dersa?: string;
  debito_detran?: string;
  debito_dpvat?: string;
  debito_ipva?: string;
  debito_licenciamento?: string;
  debito_multas?: string;
  debito_municipais?: string;
  debito_policia_rodoviaria_federal?: string;
  debito_renainf?: string;
  especie?: string;
  exercicio_licenciamento?: string;
  existe_debito_dpvat?: string;
  existe_debito_ipva?: string;
  existe_debito_licenciamento?: string;
  existe_debito_multa?: string;
  intencao_data_inslusao?: string | null;
  intencao_doc_financeira?: string | null;
  intencao_nome_agente?: string | null;
  intencao_nome_financeira?: string | null;
  intencao_restricao_financeira?: string | null;
  licdata?: string;
  motor?: string;
  outras_restricoes1?: string;
  outras_restricoes2?: string;
  outras_restricoes3?: string;
  outras_restricoes4?: string;
  pronome?: string;
  pronome_anterior?: string;
  renavam?: string;
  restricao_adminisrativa?: string;
  restricao_arrendatario?: string | null;
  restricao_data_inclusao?: string | null;
  restricao_doc_arrendatario?: string | null;
  restricao_financeira?: string;
  restricao_guincho?: string;
  restricao_judicial?: string;
  restricao_nome_agente?: string | null;
  restricao_renajud?: string;
  restricao_roubo_furto?: string;
  restricao_tributaria?: string;
  situacao_veiculo?: string;
  tipo_marcacao_chassi?: string;
  uf?: string;
  municipio?: string;
  tipo?: string;
}

export interface VeiculosBaseEstadualResultsHistoricoProprietario {
  uf?: string;
  renavam?: string;
  proprietario?: string;
  placa?: string;
  chassi?: string;
  ano_exercicio?: string;
}

export interface VeiculosBaseEstadualResults {
  ano_fabricacao?: string;
  ano_modelo?: string;
  base_estadual?: VeiculosBaseEstadualResultsBaseEstadual;
  caixa_cambio?: string;
  cap_max_tracao?: string;
  capacidade_carga?: string;
  capacidade_passageiro?: string;
  chassi?: string;
  cidade?: unknown;
  cilindradas?: string;
  cmt?: string;
  codigo_combustivel?: unknown;
  codigo_fipe?: unknown[];
  codigo_marca_modelo?: unknown;
  codigo_municipio?: unknown;
  combustivel?: string;
  cor_veiculo?: string;
  di?: unknown;
  dt_atualizacao?: unknown;
  dt_ultima_atualizacao?: string;
  eixo_traseiro_dif?: string;
  eixos?: string;
  historico_proprietarios?: VeiculosBaseEstadualResultsHistoricoProprietario[];
  ident_importadora?: unknown;
  marca_modelo?: string;
  municipio?: string;
  municipio_emplacamento?: string | null;
  nacionalidade?: string;
  num_carroceria?: string;
  num_motor?: string;
  num_terceiro_eixo?: string;
  pbt?: string;
  placa?: string;
  potencia?: string;
  procedencia?: string;
  qtd_pax?: unknown;
  registro_di?: unknown;
  restricoes?: string;
  tipo_carroceria?: string;
  tipo_doc_importadora?: unknown;
  tipo_veiculo?: string;
  uf?: string;
  uf_faturado?: string;
  ultima_data_inclusao?: unknown;
}

/** Base Estadual. POST /v1/veiculos/base-estadual. Shape inferred from the examples in TargetData's docs. */
export interface VeiculosBaseEstadualResponse {
  results: VeiculosBaseEstadualResults;
}

export interface VeiculosResultsLeilaoScore {
  score?: string;
  pontuacao?: number;
  percentual_sobre_ref?: number;
  aceitacao?: string;
  exigencia_vistoria_especial?: boolean;
}

export interface VeiculosResultsLeilaoRegistro {
  placa?: string;
  chassi?: string;
  marca?: string;
  modelo?: string;
  ano_fabricacao?: string;
  ano_modelo?: string;
  cor?: string;
  lote?: string;
  leiloeiro?: string;
  comitente?: string;
  condicao_geral?: string;
  data_leilao?: string;
}

export interface VeiculosLeilaoResultsLeilao {
  descricao?: string;
  score?: VeiculosResultsLeilaoScore;
  registros?: VeiculosResultsLeilaoRegistro[];
}

export interface VeiculosLeilaoResults {
  fotos_lote_veiculo?: VeiculosFotosLoteVeiculo;
  leilao?: VeiculosLeilaoResultsLeilao;
  placa?: string;
  chassi?: string;
  ano_fabricacao?: string;
  ano_modelo?: string;
  marca_modelo?: string;
  cor_veiculo?: string;
  uf?: string;
}

/** Leilão. POST /v1/veiculos/leilao. Shape inferred from the examples in TargetData's docs. */
export interface VeiculosLeilaoResponse {
  results: VeiculosLeilaoResults;
}

export interface VeiculosResultsIndicioSinistro {
  classificacao?: string | null;
  descricao?: string;
}

export interface VeiculosIndicioSinistroResults {
  indicio_sinistro?: VeiculosResultsIndicioSinistro;
}

/** Indício de Sinistro > Sinistro. POST /v1/veiculos/indicio-sinistro. Shape inferred from the examples in TargetData's docs. */
export interface VeiculosIndicioSinistroResponse {
  results: VeiculosIndicioSinistroResults;
}
