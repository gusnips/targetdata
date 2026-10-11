import type { ResponseHeader } from "./common";

export interface ProcessosJudiciaisConsulta {
  tipo?: string;
  valor?: number;
  formatado?: string;
  nome?: string;
  segmento?: string;
}

export interface ProcessosJudiciaisPessoa {
  nome?: string;
  ocupacao?: string | null;
  natureza_ocupacao?: string | null;
  situacao_cadastral_rfb?: string | null;
  obito?: boolean | null;
  rfb_atualizado_em?: string | null;
}

export interface ProcessosJudiciaisSegmentoJustica {
  id?: number;
  descricao?: string;
}

export interface ProcessosJudiciaisInstancia {
  id?: number;
  descricao?: string;
}

export interface ProcessosJudiciaisPolo {
  id?: number;
  descricao?: string;
  nome_na_classe?: string;
}

export interface ProcessosJudiciaisHierarquiaItem {
  codigo?: number;
  descricao?: string;
}

export interface ProcessosJudiciaisClasse {
  codigo?: number;
  descricao?: string;
  hierarquia?: ProcessosJudiciaisHierarquiaItem[];
}

export interface ProcessosJudiciaisAssunto {
  codigo?: number;
  descricao?: string;
  hierarquia?: ProcessosJudiciaisHierarquiaItem[];
}

export interface ProcessosJudiciaisUltimoMovimento {
  codigo?: number;
  data?: string;
}

export interface ProcessosJudiciaisOrgaoJulgador {
  id?: string;
  nome?: string;
  uf?: string;
  tribunal?: string;
}

export interface ProcessosJudiciaisProcesso {
  processo_id?: string;
  npu?: string;
  tramitacao_id?: string;
  tribunal_jtr?: string;
  segmento_justica?: ProcessosJudiciaisSegmentoJustica;
  instancia?: ProcessosJudiciaisInstancia;
  polo?: ProcessosJudiciaisPolo;
  classe?: ProcessosJudiciaisClasse;
  assuntos?: ProcessosJudiciaisAssunto[];
  situacao_codigo?: string;
  data_ajuizamento?: string;
  valor_causa?: number;
  ultimo_movimento?: ProcessosJudiciaisUltimoMovimento;
  orgao_julgador?: ProcessosJudiciaisOrgaoJulgador;
}

export interface ProcessosJudiciaisLista {
  consulta?: ProcessosJudiciaisConsulta;
  pessoa?: ProcessosJudiciaisPessoa;
  total?: number;
  processos?: ProcessosJudiciaisProcesso[];
}

export interface ProcessosJudiciaisProcessosJudiciais {
  lista?: ProcessosJudiciaisLista;
}

export interface ProcessosJudiciaisPfResults {
  processos_judiciais?: ProcessosJudiciaisProcessosJudiciais;
}

/** Processos Judiciais > PF - Pessoa Física > Processos Judiciais PF. POST /v1/processos-judiciais/pf. Shape inferred from the examples in TargetData's docs. */
export interface ProcessosJudiciaisPfResponse {
  results: ProcessosJudiciaisPfResults;
  header: ResponseHeader;
}

export interface ProcessosJudiciaisListaConsulta {
  tipo?: string;
  valor?: number;
  documento?: string;
  formatado?: string;
  nome?: string;
  segmento?: string;
}

export interface ProcessosJudiciaisListaProcesso {
  processo_id?: string;
  npu?: string;
  tramitacao_id?: string;
  tribunal_jtr?: string;
  segmento_justica?: ProcessosJudiciaisSegmentoJustica;
  instancia?: ProcessosJudiciaisInstancia;
  polo?: ProcessosJudiciaisPolo;
  classe?: ProcessosJudiciaisClasse;
  assuntos?: ProcessosJudiciaisAssunto[];
  situacao_codigo?: unknown;
  data_ajuizamento?: string;
  valor_causa?: number;
  ultimo_movimento?: ProcessosJudiciaisUltimoMovimento;
  orgao_julgador?: ProcessosJudiciaisOrgaoJulgador;
}

export interface ProcessosJudiciaisProcessosJudiciaisLista {
  consulta?: ProcessosJudiciaisListaConsulta;
  total?: number;
  processos?: ProcessosJudiciaisListaProcesso[];
}

export interface ProcessosJudiciaisResultsProcessosJudiciais {
  lista?: ProcessosJudiciaisProcessosJudiciaisLista;
}

export interface ProcessosJudiciaisPjResults {
  processos_judiciais?: ProcessosJudiciaisResultsProcessosJudiciais;
}

/** Processos Judiciais > PJ - Pessoa Jurídica > Processos Judiciais PJ. POST /v1/processos-judiciais/pj. Shape inferred from the examples in TargetData's docs. */
export interface ProcessosJudiciaisPjResponse {
  results: ProcessosJudiciaisPjResults;
  header: ResponseHeader;
}
