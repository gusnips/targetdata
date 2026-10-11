import type { ResponseHeader } from "./common";

/** An address to look for. Send only the parts you know. */
export interface SearchAddressFilter {
  tipo_logradouro?: string;
  logradouro?: string;
  numero?: string;
  complemento?: string;
  cep?: string;
  municipio?: string;
  uf?: string;
  bairro?: string;
}

/** What to look for when you search by data instead of by CPF. */
export interface SearchPfDynamicSearch {
  nome_completo?: string;
  nome_mae?: string;
  /** `YYYY-MM-DD` */
  data_nascimento?: string;
  rg?: string;
  titulo_eleitoral?: string;
  telefones?: string[];
  emails?: string[];
  enderecos?: SearchAddressFilter[];
  /** CRM number, from the Conselho Federal de Medicina. */
  cfm_numero?: string;
  cfm_uf?: string;
}

/** Groups of data to return. The price changes with the groups you pick. */
export type SearchPfGrouping =
  | "cadastral"
  | "contato"
  | "contato.endereco"
  | "contato.telefone"
  | "contato.email"
  | "obito"
  | "socioeconomico"
  | "vinculos"
  | (string & {});

interface SearchPfOptions {
  /** `true` (the default) looks for an exact match. Ignored when you send `cpfs`. */
  busca_exata?: boolean;
  /** Most results to return. Defaults to 1. Ignored when you send `cpfs`. You pay for what comes back. */
  limite?: number;
  agrupamentos_retorno?: SearchPfGrouping[];
}

/** Send `cpfs` (up to 10) or `busca_dinamica`. If you send both, only `cpfs` is used. */
export type SearchPfRequest = SearchPfOptions &
  (
    | { cpfs: string[]; busca_dinamica?: SearchPfDynamicSearch[] }
    | { busca_dinamica: SearchPfDynamicSearch[]; cpfs?: string[] }
  );

export interface SearchCadastral {
  comprovante_rfb?: string;
  ds_faixa_idade?: string;
  ds_nacionalidade?: string | null;
  ds_orgao_emissor?: string | null;
  ds_sexo?: string;
  ds_signo?: string;
  ds_status_rfb?: string;
  dt_atualizacao_rfb?: string;
  dt_inscricao?: string;
  dt_nasc?: string;
  nit_pis?: string | null;
  nm_completo?: string;
  nm_mae?: string;
  nm_social?: string;
  nome_unico?: boolean;
  nr_cpf?: string;
  nr_cpf_mae?: string | null;
  nr_rg?: string | null;
  nr_titulo_eleitoral?: string | null;
  sg_sexo?: string;
  sg_uf_rg?: string | null;
  st_menor_idade?: boolean;
  st_pep?: boolean;
  st_ppp?: boolean;
}

export interface SearchEmailItem {
  cd_ordem?: number;
  ds_email?: string;
  dt_inclusao?: string;
}

export interface SearchEnderecoItem {
  caracteristicas?: string | null;
  cd_ordem?: number;
  ds_bairro?: string;
  ds_cidade?: string;
  ds_complemento?: string;
  ds_logradouro?: string;
  ds_regiao?: string;
  dt_informacao?: string;
  latitude?: string;
  longitude?: string;
  nr_cep?: string;
  nr_numero?: string;
  outras_grafias?: string | null;
  sg_tipo_logradouro?: string;
  sg_uf?: string;
}

export interface SearchTelefoneItem {
  cd_ordem?: number;
  ds_tipo_telefone?: string;
  dt_inclusao?: string;
  nr_ddd?: string;
  nr_ddi?: string | null;
  nr_telefone?: string;
  uf_ddd?: string;
}

export interface SearchContato {
  email?: SearchEmailItem[];
  endereco?: SearchEnderecoItem[];
  telefone?: SearchTelefoneItem[];
}

export interface SearchObito {
  st_obito?: boolean;
  tipo_obito?: string;
  fonte_obito?: string;
  dt_obito?: string | null;
  mes_obito?: string | null;
  ano_obito?: string | null;
  possivel_obito?: boolean;
}

export interface SearchHistoricoOcupacao {
  cbo?: string;
  renda_presumida?: string;
  ano?: string;
  faixa_renda_presumida?: string;
  ds_ocupacao?: string;
}

export interface SearchCfmItem {
  nr_crm?: string;
  uf_crm?: string;
  nm_medico?: string;
  nm_social_medico?: string;
  dt_inscricao?: string;
  situacao?: string;
  especialidade?: string;
  dt_prim_inscricao_uf?: string;
  tp_inscricao?: string;
  dt_informacao?: string;
}

export interface SearchSocioeconomico {
  cd_ocupacao?: string | null;
  ds_faixa_renda_presumida?: string;
  ds_grau_escolaridade?: string | null;
  ds_ocupacao?: string | null;
  dt_faixa_renda_presumida?: string;
  dt_grau_escolaridade?: string | null;
  dt_ocupacao?: string | null;
  historico_ocupacoes?: SearchHistoricoOcupacao[];
  cfm?: SearchCfmItem[];
}

export interface SearchParentescoItem {
  cd_ordem?: number;
  dt_informacao?: string;
  nm_completo?: string;
  nr_cpf?: string;
  ds_vinculo?: string;
}

export interface SearchEmpregadorItem {
  cd_ordem?: number;
  dt_informacao?: string;
  nr_cnpj?: string;
  razao_social?: string;
  dt_admissao?: string;
  dt_demissao?: string;
}

export interface SearchPossiveisColegasTrabalhoItem {
  cd_ordem?: number;
  nr_cpf?: string;
  nm_completo?: string;
}

export interface SearchSocio {
  dt_entrada?: string;
  nr_cpf?: string;
  nm_completo?: string;
  vinculo?: string;
  qualificacao?: string;
  nr_cnpj?: string;
}

export interface SearchVinculo {
  parentesco?: SearchParentescoItem[];
  empregador?: SearchEmpregadorItem[];
  possiveis_colegas_trabalho?: SearchPossiveisColegasTrabalhoItem[];
  socios?: SearchSocio[];
}

export interface SearchResult {
  cadastral?: SearchCadastral;
  contato?: SearchContato;
  obito?: SearchObito;
  socioeconomico?: SearchSocioeconomico;
  vinculo?: SearchVinculo;
}

/** Search > PF - Pessoa Física. POST /v1/search/pf. Shape inferred from the examples in TargetData's docs. */
export interface SearchPfResponse {
  results: SearchResult[];
  header: ResponseHeader;
}

/** What to look for when you search by data instead of by CNPJ. */
export interface SearchPjDynamicSearch {
  nome_fantasia?: string;
  razao_social?: string;
  /** The first 8 digits of the CNPJ. */
  cnpj_base?: string;
  telefones?: string[];
  emails?: string[];
  enderecos?: SearchAddressFilter[];
}

/** Groups of data to return. The price changes with the groups you pick. */
export type SearchPjGrouping =
  | "dados_cadastrais"
  | "dados_contato"
  | "dados_contato.logradouros"
  | "dados_contato.telefones"
  | "dados_contato.emails"
  | "dados_contato.faxs"
  | "firmografico"
  | "quadro_societario"
  | "regime_tributario"
  | "situacao_cadastral"
  | "filiais"
  | (string & {});

interface SearchPjOptions {
  /** `true` (the default) looks for an exact match. Ignored when you send `cnpjs`. */
  busca_exata?: boolean;
  /** Most results to return. Defaults to 1. Ignored when you send `cnpjs`. You pay for what comes back. */
  limite?: number;
  agrupamentos_retorno?: SearchPjGrouping[];
}

/** Send `cnpjs` (up to 10) or `busca_dinamica`. If you send both, only `cnpjs` is used. */
export type SearchPjRequest = SearchPjOptions &
  (
    | { cnpjs: string[]; busca_dinamica?: SearchPjDynamicSearch[] }
    | { busca_dinamica: SearchPjDynamicSearch[]; cnpjs?: string[] }
  );

export interface SearchDadosCadastrais {
  cd_cnae_fiscal_principal?: string;
  cd_cnae_fiscal_secundarios?: string[];
  cd_natureza_juridica?: string;
  cd_qualificacao_responsavel?: string;
  cd_ramo_atividade?: string;
  classificacao_td?: string;
  cnpj_basico?: string;
  cnpj_completo?: string;
  cnpj_dv?: string;
  cnpj_ordem?: string;
  data_inicio_atividade?: string;
  ds_cnae_fiscal_principal?: string;
  ds_cnae_fiscal_secundarios?: string[];
  ds_natureza_juridica?: string;
  ds_ramo_atividade?: string;
  ente_federativo_responsavel?: string;
  identificador_matriz_filial?: string;
  nome_cidade_exterior?: string;
  nome_fantasia?: string;
  pais?: string | null;
  razao_social_nome_empresarial?: string;
}

export interface SearchEmail {
  email?: string;
  ordem?: string;
  rfb?: boolean;
}

export interface SearchFax {
  ddd?: string;
  numero?: string;
  ordem?: string;
  tipo?: string;
}

export interface SearchLogradouroGeoComposed {
  lat?: string;
  lon?: string;
}

export interface SearchLogradouro {
  logradouro_bairro?: string;
  logradouro_cep?: string;
  logradouro_complemento?: string;
  logradouro_endereco?: string;
  logradouro_geo_composed?: SearchLogradouroGeoComposed;
  logradouro_latitude?: string;
  logradouro_longitude?: string;
  logradouro_municipio?: string;
  logradouro_numero?: string;
  logradouro_tipo?: string;
  logradouro_uf?: string;
  logradouro_uf_iso?: string;
  nmr_duplicidade?: number;
  ordem?: string;
}

export interface SearchTelefone {
  ddd?: string;
  ddi?: string;
  numero?: string;
  ordem?: string;
  rfb?: boolean;
  tipo?: string;
}

export interface SearchDadosContato {
  emails?: SearchEmail[];
  faxs?: SearchFax[];
  logradouros?: SearchLogradouro[];
  telefones?: SearchTelefone[];
}

export interface SearchFiliai {
  cnpj_completo?: string;
  nome_fantasia?: string;
  situacao_cadastral?: string;
}

export interface SearchFirmografico {
  capital_social?: string;
  cd_porte_empresa?: string;
  ds_faixa_faturamento?: string;
  ds_porte_empresa?: string;
  faixa_funcionarios_presumidos?: string;
  porte_td?: string;
  quantidade_funcionarios_presumidos?: string;
  quantidade_funcionarios_rais_1?: string;
  quantidade_funcionarios_rais_2?: string;
  valor_faturamento_presumido?: string;
}

export interface SearchQuadroSocietarioSocio {
  cd_faixa_etaria_socio?: string;
  cd_identificador_socio?: string;
  cd_qualificacao_socio?: string;
  cd_representante_legal_qualificacao?: string;
  cpf_cnpj_socio?: string;
  cpf_cnpj_socio_tratado?: string;
  data_entrada_sociedade?: string;
  ds_faixa_etaria_socio?: string;
  ds_identificador_socio?: string;
  ds_qualificacao_socio?: string;
  ds_representante_legal_qualificacao?: string;
  nome_socio_razao_social?: string;
  pais?: string | null;
  representante_legal_cpf?: string;
  representante_legal_cpf_tratado?: string | null;
  representante_legal_nome?: string;
}

export interface SearchQuadroSocietario {
  mei_proprietario_cpf?: string;
  mei_proprietario_nome?: string;
  socios?: SearchQuadroSocietarioSocio[];
}

export interface SearchRegimeTributarioItem {
  ano?: string;
  cnpj_da_scp?: string;
  forma_tributacao?: string;
  municipio?: string;
  quantidade_de_escrituracoes?: string;
  uf?: string;
}

export interface SearchRegimeTributario {
  opcao_mei?: boolean;
  opcao_mei_data_exclusao?: string;
  opcao_mei_data_opcao?: string;
  opcao_simples?: boolean;
  opcao_simples_data_exclusao?: string;
  opcao_simples_data_opcao?: string;
  regime_tributario?: SearchRegimeTributarioItem[];
}

export interface SearchSituacaoCadastral {
  cd_situacao_cadastral?: string;
  cd_situacao_cadastral_motivo?: string;
  ds_situacao_cadastral?: string;
  ds_situacao_cadastral_motivo?: string;
  situacao_cadastral_data?: string;
  situacao_especial?: string;
  situacao_especial_data?: string | null;
}

export interface SearchPjResult {
  dados_cadastrais?: SearchDadosCadastrais;
  dados_contato?: SearchDadosContato;
  filiais?: SearchFiliai[];
  firmografico?: SearchFirmografico;
  quadro_societario?: SearchQuadroSocietario;
  regime_tributario?: SearchRegimeTributario;
  situacao_cadastral?: SearchSituacaoCadastral;
}

/** Search > PJ - Pessoa Jurídica. POST /v1/search/pj. Shape inferred from the examples in TargetData's docs. */
export interface SearchPjResponse {
  header: ResponseHeader;
  results: SearchPjResult[];
}
