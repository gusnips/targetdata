import type { ResponseHeader } from "./common";

export interface SintegraEndereco {
  bairro?: string;
  cep?: string;
  complemento?: string;
  logradouro?: string;
  municipioIbge?: string;
  numero?: string;
  uf?: string;
}

export interface SintegraHistoricoItem {
  dataAtualizacao?: string;
  dataSituacao?: string;
  motivo?: string;
  numero?: string;
  regimeIcms?: string;
}

export interface SintegraQueryResults {
  cnaePrincipal?: string;
  cnpj?: string;
  dataFimAtividade?: string;
  dataInicioAtividade?: string;
  dataSituacaoUf?: string;
  endereco?: SintegraEndereco;
  endpoint?: string;
  historico?: SintegraHistoricoItem[];
  informacaoIeComoDestinatario?: string;
  inscricaoEstadual?: string;
  nome?: string;
  nomeFantasia?: string;
  pdf?: string;
  porteEmpresa?: string;
  regimeTributacao?: string;
  situacaoCnpj?: string;
  situacaoIe?: string;
  status?: string;
  tipoIe?: string;
}

/** Sintegra PJ. POST /v1/sintegra. Shape inferred from the examples in TargetData's docs. */
export interface SintegraQueryResponse {
  header: ResponseHeader;
  results: SintegraQueryResults;
}
