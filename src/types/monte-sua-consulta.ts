import type { RawResponse, ResponseHeader } from "./common";

export interface MonteSuaConsultaProduto {
  /** Product code, from the "Código de produtos" table in TargetData's docs. */
  codigo: string;
  /** What that product asks for, for example `{ placa: "ABC1D23" }`. */
  parametros: Record<string, string>;
}

export interface MonteSuaConsultaRequest {
  produtos: MonteSuaConsultaProduto[];
}

export interface MonteSuaConsultaResumo {
  total?: number;
  processando?: number;
  finalizado?: number;
  aguardando_reprocessamento?: number;
}

export interface MonteSuaConsultaParametros {
  placa?: string;
  renavam?: unknown;
}

export interface MonteSuaConsultaMetadataProduto {
  codigo?: string;
  parametros?: MonteSuaConsultaParametros;
  resultado?: string;
  cobrado?: boolean;
  fase?: string;
  tentativas?: number;
  tentativas_totais?: number;
  max_tentativas?: unknown;
  tempo_execucao_ms?: number;
}

export interface MonteSuaConsultaMetadata {
  request_id?: string;
  resultado?: string;
  fase?: string;
  criado_em?: string;
  atualizado_em?: string;
  tempo_execucao_ms?: number;
  resumo?: MonteSuaConsultaResumo;
  produtos?: MonteSuaConsultaMetadataProduto[];
}

export interface MonteSuaConsultaRenajud {
  consta_renajud?: boolean;
  mensagem?: string;
}

export interface MonteSuaConsultaResultsRenajud {
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

export interface MonteSuaConsultaResults {
  renajud?: MonteSuaConsultaRenajud;
  renajuds?: MonteSuaConsultaResultsRenajud[];
}

export interface MonteSuaConsultaDataItem {
  codigo?: string;
  results?: MonteSuaConsultaResults;
  code_error?: unknown;
  message_error?: unknown;
}

export interface MonteSuaConsultaQueryResults {
  metadata?: MonteSuaConsultaMetadata;
  data?: MonteSuaConsultaDataItem[];
}

/** Monte a sua consulta veicular > Requisição. POST /v1/monte-sua-consulta. Shape inferred from the examples in TargetData's docs. */
export interface MonteSuaConsultaQueryResponse {
  results: MonteSuaConsultaQueryResults;
  header: ResponseHeader;
}

/** Monte a sua consulta veicular > Reprocessamento. POST /v1/monte-sua-consulta/reprocessamento. Shape inferred from the examples in TargetData's docs. No example answer in the docs, so `results` is `unknown`. */
export type MonteSuaConsultaReprocessamentoResponse = RawResponse;

export interface MonteSuaConsultaProdutoParametros {
  placa?: string;
  renavam?: unknown;
  chassi?: unknown;
}

export interface MonteSuaConsultaResultsMetadataProduto {
  codigo?: string;
  parametros?: MonteSuaConsultaProdutoParametros;
  resultado?: string;
  cobrado?: boolean;
  fase?: string;
  tentativas?: number;
  tentativas_totais?: number;
  max_tentativas?: unknown;
  tempo_execucao_ms?: number;
}

export interface MonteSuaConsultaResultsMetadata {
  request_id?: string;
  resultado?: string;
  fase?: string;
  criado_em?: string;
  atualizado_em?: string;
  tempo_execucao_ms?: unknown;
  resumo?: MonteSuaConsultaResumo;
  produtos?: MonteSuaConsultaResultsMetadataProduto[];
}

export interface MonteSuaConsultaDataItemResultsRenajud {
  consta_renajud?: boolean;
  mensagem?: unknown;
}

export interface MonteSuaConsultaResultsDataItemResultsRenajud {
  codigo_tribunal?: string;
  orgao_judicial?: string;
  codigo_orgao_judicial?: string;
  processo?: string;
  restricoes?: string;
  tribunal?: unknown;
  data_inclusao?: string;
  detalhe_renajud?: string;
  consta_renajud?: boolean;
}

export interface MonteSuaConsultaDetalheMulta {
  ait?: unknown;
  data_hora?: unknown;
  infracao?: unknown;
  local?: unknown;
  municipio?: unknown;
  guia?: unknown;
  receita_local?: unknown;
  valor?: unknown;
  vencimento?: unknown;
  orgao_autuador?: unknown;
  data_hora_apresentacao?: unknown;
  tipificacao?: unknown;
  defesa_data?: unknown;
  defesa_resultado?: unknown;
  recurso?: unknown;
  recurso_resultado?: unknown;
  uf_orgao_autuador?: unknown;
  placa?: unknown;
  renavam?: unknown;
  situacao?: unknown;
  valor_pago?: unknown;
  valor_corrigido?: unknown;
  valor_desconto?: unknown;
}

export interface MonteSuaConsultaBaseEstadual {
  detalhe_multa?: MonteSuaConsultaDetalheMulta;
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
  data_limite_restricao_tributaria?: unknown;
  data_venda?: unknown;
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
  especie?: string;
  exercicio_licenciamento?: string;
  existe_debito_dpvat?: string;
  existe_debito_ipva?: string;
  existe_debito_licenciamento?: string;
  existe_debito_multa?: string;
  intencao_data_inslusao?: unknown;
  intencao_doc_financeira?: unknown;
  intencao_nome_financeira?: unknown;
  intencao_restricao_financeira?: unknown;
  licdata?: string;
  motor?: string;
  observacoes?: unknown;
  outras_restricoes1?: string;
  outras_restricoes2?: string;
  outras_restricoes3?: string;
  outras_restricoes4?: string;
  pronome?: unknown;
  pronome_anterior?: unknown;
  restricao_adminisrativa?: string;
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

export interface MonteSuaConsultaDataItemResults {
  renajud?: MonteSuaConsultaDataItemResultsRenajud;
  renajuds?: MonteSuaConsultaResultsDataItemResultsRenajud[];
  base_estadual?: MonteSuaConsultaBaseEstadual;
  placa?: string;
  chassi?: string;
  renavam?: string;
  ano_fabricacao?: string;
  ano_modelo?: string;
  marca?: string;
  marca_modelo?: string;
  modelo?: string;
  combustivel?: string;
  pbt?: unknown;
  potencia?: string;
  procedencia?: string;
  tipo_montagem?: unknown;
  tipo_veiculo?: string;
  uf?: unknown;
  uf_faturado?: string;
  cor_veiculo?: string;
  caixa_cambio?: string;
  capacidade_carga?: string;
  capacidade_passageiro?: string;
  cap_max_tracao?: string;
  categoria?: string;
  cilindradas?: string;
  multas_renainf?: unknown[];
}

export interface MonteSuaConsultaResultsDataItem {
  codigo?: string;
  results?: MonteSuaConsultaDataItemResults;
  code_error?: unknown;
  message_error?: unknown;
}

export interface MonteSuaConsultaStatusResults {
  metadata?: MonteSuaConsultaResultsMetadata;
  data?: MonteSuaConsultaResultsDataItem[];
}

/** Monte a sua consulta veicular > Status. POST /v1/monte-sua-consulta/status. Shape inferred from the examples in TargetData's docs. */
export interface MonteSuaConsultaStatusResponse {
  results: MonteSuaConsultaStatusResults;
  header: ResponseHeader;
}
