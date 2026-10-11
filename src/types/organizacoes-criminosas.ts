import type { ResponseHeader } from "./common";

export interface OrganizacoesCriminosasConsulta {
  tipo?: string;
  cpf?: number;
  formatado?: string;
  nome?: string;
}

export interface OrganizacoesCriminosasOrganizacao {
  organizacao?: string;
  sigla?: string;
  uf_atuacao_organizacao?: string[];
  n_processos?: number;
}

export interface OrganizacoesCriminosasProcesso {
  numero?: string;
  tribunal?: string;
  uf?: string;
  papel?: string;
  grupo_classe?: string;
  classe?: string;
  data_ajuizamento?: string;
  organizacao?: string | null;
  sigla?: string | null;
}

export interface OrganizacoesCriminosasPfResults {
  consulta?: OrganizacoesCriminosasConsulta;
  vinculado?: boolean;
  cpf?: number;
  nome?: string;
  uf_atuacao_cpf?: string[];
  organizacao?: string;
  sigla?: string;
  uf_atuacao_organizacao?: string[];
  organizacoes?: OrganizacoesCriminosasOrganizacao[];
  total_processos?: number;
  processos?: OrganizacoesCriminosasProcesso[];
}

/** Organizações Criminosas > Organizações Criminosas - PF. POST /v1/organizacoes-criminosas/pf. Shape inferred from the examples in TargetData's docs. */
export interface OrganizacoesCriminosasPfResponse {
  results: OrganizacoesCriminosasPfResults;
  header: ResponseHeader;
}
