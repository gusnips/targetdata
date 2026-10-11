import type { ResponseHeader } from "./common";

export interface HotphoneNumeroTelefone {
  numero_telefone?: string;
}

export interface HotphoneNumeroCelular {
  numero_telefone?: string;
}

export interface HotphoneDataUltimaVisualizacao {
  dia?: number;
  mes?: number;
  ano?: number;
}

export interface HotphoneEmail {
  email?: string;
  data_ultima_visualizacao?: HotphoneDataUltimaVisualizacao;
}

export interface HotphoneEndereco {
  rua?: string;
  numero?: string;
  bairro?: string;
  cidade?: string;
  estado?: string;
  codigo_postal?: string;
  data_ultima_visualizacao?: HotphoneDataUltimaVisualizacao;
}

export interface HotphoneHistoricoNumeroTelefoneItem {
  numero_telefone?: string;
  data_ultima_visualizacao?: HotphoneDataUltimaVisualizacao;
}

export interface HotphoneHistoricoNumeroCelularItem {
  numero_telefone?: string;
  data_ultima_visualizacao?: HotphoneDataUltimaVisualizacao;
}

export interface HotphoneHistoricoEmailItem {
  email?: string;
  data_ultima_visualizacao?: HotphoneDataUltimaVisualizacao;
}

export interface HotphoneHistoricoEnderecoItem {
  rua?: string;
  numero?: string;
  bairro?: string;
  cidade?: string;
  estado?: string;
  codigo_postal?: string;
  data_ultima_visualizacao?: HotphoneDataUltimaVisualizacao;
}

export interface HotphonePfResults {
  numero_telefone?: HotphoneNumeroTelefone;
  numero_celular?: HotphoneNumeroCelular;
  email?: HotphoneEmail;
  endereco?: HotphoneEndereco;
  historico_numero_telefone?: HotphoneHistoricoNumeroTelefoneItem[];
  historico_numero_celular?: HotphoneHistoricoNumeroCelularItem[];
  historico_email?: HotphoneHistoricoEmailItem[];
  historico_endereco?: HotphoneHistoricoEnderecoItem[];
}

/** Hotphone > PF - Pessoa Física. POST /v1/hotphone/pf. Shape inferred from the examples in TargetData's docs. */
export interface HotphonePfResponse {
  results: HotphonePfResults;
  header: ResponseHeader;
}

export interface HotphoneNomeItem {
  cd_ordem?: number;
  dt_ultima_visualizacao?: string;
  nm_completo?: string;
  nm_primeiro?: string;
  nm_meio?: string | null;
  nm_ultimo?: string;
}

export interface HotphoneCadastral {
  nr_cpf?: string;
  dt_nascimento?: string;
  idade?: string;
  nm_completo?: string;
  nm_mae?: string;
  sg_genero?: string;
  ds_genero?: string;
  obito?: string | null;
  dt_obito?: string | null;
  sg_status_cpf?: string;
  ds_status_cpf?: string;
  nome?: HotphoneNomeItem[];
}

export interface HotphoneTelefoneItem {
  cd_ordem?: number;
  nr_ddd?: string;
  sg_uf?: string;
  ds_regiao?: string;
  nr_telefone?: string;
  ds_tipo?: string;
  dt_ultima_visualizacao?: string;
}

export interface HotphoneEmailItem {
  cd_ordem?: number;
  ds_email?: string;
  dt_ultima_visualizacao?: string;
}

export interface HotphoneEnderecoItem {
  cd_ordem?: number;
  ds_logradouro?: string;
  ds_bairro?: string;
  nr_numero?: string;
  ds_complemento?: string | null;
  nr_cep?: string;
  ds_cidade?: string;
  sg_uf?: string;
  regiao?: string;
  dt_ultima_visualizacao?: string;
}

export interface HotphoneContato {
  telefone?: HotphoneTelefoneItem[];
  email?: HotphoneEmailItem[];
  endereco?: HotphoneEnderecoItem[];
}

export interface HotphoneInformacoesHistoricas {
  contato?: HotphoneContato;
}

export interface HotphoneResult {
  cadastral?: HotphoneCadastral;
  contato?: HotphoneContato;
  informacoes_historicas?: HotphoneInformacoesHistoricas;
}

/** Hotphone > PF - Pessoa Física > Hotphone v2. POST /v2/hotphone/pf. Shape inferred from the examples in TargetData's docs. */
export interface HotphonePfV2Response {
  results: HotphoneResult[];
  header: ResponseHeader;
}

/** Hotphone > PJ - Pessoa Jurídica. POST /v1/hotphone/pj. Shape inferred from the examples in TargetData's docs. */
export interface HotphonePjResponse {
  results: HotphonePfResults;
  header: ResponseHeader;
}

export interface HotphoneResultCadastral {
  nr_cnpj?: string;
  dt_abertura?: string;
  razao_social?: string;
  nome_fantasia?: string;
  ds_situacao_cadastral?: string;
  natureza_juridica?: string;
  capital_social?: string;
  cd_cnae_fiscal_principal?: string;
  ds_cnae_fiscal_principal?: string;
  cd_cnae_fiscal_secundario?: string;
  ds_cnae_fiscal_secundario?: string;
  nire?: string;
  contagem_filiais?: string;
  dt_atualizacao?: string;
}

export interface HotphoneContatoTelefoneItem {
  cd_ordem?: number;
  nr_ddd?: string;
  sg_uf?: string;
  ds_regiao?: string;
  nr_telefone?: string;
  ds_tipo?: string;
  dt_ultima_visualizacao?: string | null;
}

export interface HotphoneContatoEnderecoItem {
  cd_ordem?: number;
  ds_logradouro?: string;
  ds_bairro?: string;
  nr_numero?: string;
  ds_complemento?: string;
  nr_cep?: string;
  ds_cidade?: string;
  sg_uf?: string;
  regiao?: string;
  dt_ultima_visualizacao?: string;
}

export interface HotphoneResultContato {
  telefone?: HotphoneContatoTelefoneItem[];
  email?: HotphoneEmailItem[];
  endereco?: HotphoneContatoEnderecoItem[];
}

export interface HotphoneResultInformacoesHistoricas {
  contato?: HotphoneResultContato;
}

export interface HotphonePjV2Result {
  cadastral?: HotphoneResultCadastral;
  contato?: HotphoneResultContato;
  informacoes_historicas?: HotphoneResultInformacoesHistoricas;
}

/** Hotphone > PJ - Pessoa Jurídica > Hotphone v2. POST /v2/hotphone/pj. Shape inferred from the examples in TargetData's docs. */
export interface HotphonePjV2Response {
  results: HotphonePjV2Result[];
  header: ResponseHeader;
}
