import type { RawResponse } from "./common";

/** Receita Federal > PF - Pessoa Física > Consulta em Tempo Real. POST /v1/receita_federal/pf. Shape inferred from the examples in TargetData's docs. No example answer in the docs, so `results` is `unknown`. */
export type ReceitaFederalPfResponse = RawResponse;

/** Receita Federal > PJ - Pessoa Jurídica > Consulta em Tempo Real. POST /v1/receita_federal/pj. Shape inferred from the examples in TargetData's docs. No example answer in the docs, so `results` is `unknown`. */
export type ReceitaFederalPjResponse = RawResponse;

export interface ReceitaFederalSocios {
  total_receita_federal?: number;
  total_base_estatica?: number;
  em_comum?: number;
  similaridade_90_mais?: number;
  qsa_comparado?: boolean;
}

export interface ReceitaFederalRepresentantesLegais {
  total_receita_federal?: number;
  total_base_estatica?: number;
  em_comum?: number;
  similaridade_90_mais?: number;
}

export interface ReceitaFederalReasonWhyItem {
  codigo?: number;
  descricao?: string;
}

export interface ReceitaFederalComparacao {
  data_consulta_receita_federal?: string;
  data_base_estatica?: string;
  diferenca_em_dias?: number;
  tem_divergencias?: boolean;
  total_divergencias?: number;
  socios?: ReceitaFederalSocios;
  representantes_legais?: ReceitaFederalRepresentantesLegais;
  reason_why?: ReceitaFederalReasonWhyItem[];
}

export interface ReceitaFederalDivergencia {
  codigo?: number;
  tipo?: string;
  campo?: string;
  valor_receita_federal?: string[] | number | string | null;
  valor_base_estatica?: string[] | string | null;
  referencia?: string | null;
}

export interface ReceitaFederalNaturezaJuridica {
  codigo?: string;
  descricao?: string;
}

export interface ReceitaFederalSituacaoCadastral {
  codigo?: number;
  descricao?: string;
  data?: string;
  motivo?: unknown;
}

export interface ReceitaFederalPais {
  codigo?: string;
  descricao?: string;
}

export interface ReceitaFederalRepresentanteLegal {
  nome?: string | null;
  qualificacao?: string | null;
}

export interface ReceitaFederalSocio {
  tipo_socio?: string;
  nome?: string;
  qualificacao?: string;
  pais?: ReceitaFederalPais;
  representante_legal?: ReceitaFederalRepresentanteLegal;
}

export interface ReceitaFederalDadosReceitaFederal {
  nome_empresarial?: string;
  nome_fantasia?: string;
  natureza_juridica?: ReceitaFederalNaturezaJuridica;
  situacao_cadastral?: ReceitaFederalSituacaoCadastral;
  porte?: string;
  socios?: ReceitaFederalSocio[];
}

export interface ReceitaFederalDadosBaseEstaticaSituacaoCadastral {
  codigo?: string;
  descricao?: string;
  data?: string;
  motivo?: string | null;
}

export interface ReceitaFederalDadosBaseEstatica {
  nome_empresarial?: string;
  nome_fantasia?: string;
  natureza_juridica?: ReceitaFederalNaturezaJuridica;
  situacao_cadastral?: ReceitaFederalDadosBaseEstaticaSituacaoCadastral;
  porte?: string;
  optante_mei?: boolean;
  socios?: ReceitaFederalSocio[];
}

export interface ReceitaFederalMatchingSimilaridadeSocio {
  nome_receita_federal?: string;
  nome_base_estatica?: string;
  similaridade?: number;
}

export interface ReceitaFederalRepresentantesLegai {
  nome_receita_federal?: string;
  nome_base_estatica?: string | null;
  similaridade?: number;
  socio_referencia?: string;
}

export interface ReceitaFederalMatchingSimilaridade {
  socios?: ReceitaFederalMatchingSimilaridadeSocio[];
  representantes_legais?: ReceitaFederalRepresentantesLegai[];
}

export interface ReceitaFederalTimestamp {
  token?: string;
  stamped_data?: string;
}

/** Receita Federal > PJ - Pessoa Jurídica > Detector de Mudanças. POST /v1/receita_federal/pj_diff. Shape inferred from the examples in TargetData's docs. */
export interface ReceitaFederalPjDiffResponse {
  cnpj: string;
  comparacao: ReceitaFederalComparacao;
  divergencias: ReceitaFederalDivergencia[];
  dados_receita_federal: ReceitaFederalDadosReceitaFederal;
  dados_base_estatica: ReceitaFederalDadosBaseEstatica;
  matching_similaridade: ReceitaFederalMatchingSimilaridade;
  timestamp: ReceitaFederalTimestamp;
}

export interface ReceitaFederalCheckTimestampRequest {
  token: string;
  stamped_data: string;
}

/** Receita Federal > Validação de Autenticidade. POST /v1/receita_federal/check_timestamp. Shape inferred from the examples in TargetData's docs. No example answer in the docs, so `results` is `unknown`. */
export type ReceitaFederalCheckTimestampResponse = RawResponse;
