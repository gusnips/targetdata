import type { ResponseHeader } from "./common";

/** Lists to search. Every list is on by default. Send `false` to leave one out. */
export interface RestricoesInternacionaisFilters {
  /** Brazilian PEPs (CGU, TSE). */
  pep_nacional?: boolean;
  pep_internacional?: boolean;
  /** Brazilian restrictive lists (CEIS, CNEP and others). */
  restricoes_nacionais?: boolean;
  /** International sanctions (OFAC, ONU, UE and others). */
  restricoes_internacionais?: boolean;
  /** Wanted in Brazil (MJ). */
  procurados_nacionais?: boolean;
  /** Wanted abroad (INTERPOL, FBI). */
  procurados_internacionais?: boolean;
}

/**
 * Search by document (`cpfs` or `cnpjs`, up to 10 each) or by `nome`. A name search can be
 * narrowed with a birth date, a CPF or a CNPJ.
 */
export type RestricoesInternacionaisRequest = RestricoesInternacionaisFilters &
  (
    | { cpfs: string[]; cnpjs?: string[] }
    | { cnpjs: string[]; cpfs?: string[] }
    | {
        /** Full name, up to 120 characters. */
        nome: string;
        /** `yyyy-mm-dd`, `dd-mm-yyyy` or `dd/mm/yyyy` */
        data_nascimento?: string;
        cpf?: string;
        cnpj?: string;
      }
  );

export interface RestricoesInternacionaisCriterioBusca {
  nome?: string | null;
  data_nascimento?: string | null;
  cpf?: string[];
  cnpj?: string[];
}

export interface RestricoesInternacionais09679208761 {
  documento_valido?: boolean;
  documento_encontrado?: boolean;
  nome?: string;
  razao_social?: string | null;
  nome_fantasia?: string | null;
  data_nascimento?: string;
  menor_idade?: boolean;
  fonte?: string;
}

export interface RestricoesInternacionais34052754000107 {
  documento_valido?: boolean;
  documento_encontrado?: boolean;
  nome?: string | null;
  razao_social?: string;
  nome_fantasia?: string | null;
  data_nascimento?: string | null;
  fonte?: string;
}

export interface RestricoesInternacionaisCadastroConsultado {
  "09679208761"?: RestricoesInternacionais09679208761;
  "34052754000107"?: RestricoesInternacionais34052754000107;
}

export interface RestricoesInternacionaisSociosPepItem {
  sg_funcao?: string;
  ds_funcao?: string;
  ds_nome_orgao?: string;
  ds_nivel_funcao?: string;
  dt_inicio?: string;
  dt_fim?: string;
  dt_fim_carencia?: string;
  nr_cpf?: string;
  nm_completo?: string;
  vinculo?: string;
  cs_vinculo_familia?: string | null;
  cd_qualificacao_socio?: string | null;
  nr_cnpj?: string;
}

export interface RestricoesInternacionaisRelacionamentoPepItem {
  sg_funcao?: string;
  ds_funcao?: string;
  ds_nome_orgao?: string;
  ds_nivel_funcao?: string | null;
  dt_inicio?: string;
  dt_fim?: string;
  dt_fim_carencia?: string;
  nr_cpf?: string;
  nm_completo?: string;
  vinculo?: string;
  cs_vinculo_familia?: string;
  cd_qualificacao_socio?: string | null;
  nr_cnpj?: string | null;
  socio_cpf?: string | null;
  socio_nome?: string | null;
}

export interface RestricoesInternacionaisReferenciaMatch {
  nome?: string;
  nome_fantasia?: string | null;
  data_nascimento?: string;
  score_documento?: number;
  score_similaridade?: number;
  score_data_nascimento?: number;
  score_geral?: number;
  nome_encontrado?: string;
  nome_usado?: string;
  match_por_contencao?: boolean;
}

export interface RestricoesInternacionaisControleMatch {
  tipo?: string;
  documento_referencia?: string;
  referencia_match?: RestricoesInternacionaisReferenciaMatch;
}

export interface RestricoesInternacionaisDetalhe {
  controle_match?: RestricoesInternacionaisControleMatch;
  tipo_documento?: string;
  dataset?: string;
  pep?: boolean;
  cargo?: string;
  entidades?: string[];
  inicio_mandato?: string;
  fim_mandato?: string;
  fim_carencia?: string;
  status_pep?: string;
  origem_data?: string;
  primeira_visualizacao?: string;
  ultima_visualizacao?: string;
  ultima_alteracao?: string;
  data_atualizacao?: string;
  data_consolidacao?: string;
  id_origem?: string;
  data_de_nascimento?: string[];
  paises?: string[];
  enderecos?: unknown[];
  identificadores?: string[];
  sancoes?: unknown[];
  telefones?: unknown[];
  emails?: unknown[];
  nomes?: string[];
}

export interface RestricoesInternacionaisQueryResults {
  mensagem?: string;
  criterio_busca?: RestricoesInternacionaisCriterioBusca;
  cadastro_consultado?: RestricoesInternacionaisCadastroConsultado;
  rfb?: boolean | null;
  contem_pep?: boolean;
  contem_sancoes?: boolean;
  contem_menor_idade?: boolean | null;
  contem_obito?: boolean | null;
  rel_pep?: boolean;
  socios_pep?: RestricoesInternacionaisSociosPepItem[];
  relacionamento_pep?: RestricoesInternacionaisRelacionamentoPepItem[];
  listas_nacionais?: boolean;
  listas_internacionais?: boolean;
  detalhes?: RestricoesInternacionaisDetalhe[];
}

/** PEP - Listas Restritivas Internacionais. POST /v1/restricoes-internacionais. Shape inferred from the examples in TargetData's docs. */
export interface RestricoesInternacionaisQueryResponse {
  results: RestricoesInternacionaisQueryResults;
  header: ResponseHeader;
}
