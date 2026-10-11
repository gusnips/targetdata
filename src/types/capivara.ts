import type { ResponseHeader } from "./common";

export interface CapivaraDocument {
  type?: string;
  number?: string;
  status?: string;
  last_updated?: string;
}

export interface CapivaraIndicators {
  death?: boolean;
  pep?: boolean;
  regulation_restriction?: boolean;
  social_beneficiary?: boolean;
  public_agent?: boolean;
  duplicate_cpf?: unknown;
}

export interface CapivaraAddress {
  street?: string;
  number?: string;
  complement?: string;
  neighborhood?: string;
  city?: string;
  state?: string;
  zip_code?: string;
}

export interface CapivaraFinancial {
  income_bracket?: string;
  range?: string;
}

export interface CapivaraCnepItem {
  idCNEP?: number;
  cadastro?: string;
  codigoSancao?: string;
  tipoPessoa?: string;
  cpfcnpjSancionado?: string;
  nomeSancionado?: string;
  nomeInformadoPeloOrgaoSancionador?: string;
  razaoSocialCadastroReceita?: unknown;
  nomeFantasiaCadastroReceita?: unknown;
  numeroProcesso?: string;
  categoriaSancao?: string;
  valorMulta?: string;
  dataInicioSancao?: string;
  dataFinalSancao?: string;
  dataPublicacao?: string;
  publicacao?: string;
  detalhamento?: string;
  dataTransitoEmJulgado?: string;
  abrangenciaDefinidaEmDecisaoJudicial?: string;
  orgaoSancionador?: string;
  ufOrgaoSancionador?: string;
  fundamentacaoLegal?: string;
  dataCadastro?: unknown;
}

export interface CapivaraCei {
  idCEIS?: number;
  cadastro?: string;
  codigoSancao?: string;
  tipoPessoa?: string;
  cpfcnpjSancionado?: string;
  nomeSancionado?: string;
  nomeInformadoPeloOrgaoSancionador?: string;
  razaoSocialCadastroReceita?: unknown;
  nomeFantasiaCadastroReceita?: unknown;
  numeroProcesso?: string;
  categoriaSancao?: string;
  dataInicioSancao?: string;
  dataFinalSancao?: string;
  dataPublicacao?: string;
  publicacao?: string;
  detalhamento?: string;
  dataTransitoEmJulgado?: string;
  abrangenciaDefinidaEmDecisaoJudicial?: string;
  orgaoSancionador?: string;
  ufOrgaoSancionador?: string;
  fundamentacaoLegal?: string;
  dataCadastro?: unknown;
}

export interface CapivaraAdditionalOutputData {
  inDebt?: unknown;
  docNumber?: string;
  content?: string;
  docType?: string;
  certificateValidUntilDate?: unknown;
  certificateIssueDate?: unknown;
  rawResultFile?: unknown;
  rawResultFileType?: unknown;
}

export interface CapivaraEnvironmentalEmbargao {
  origin?: string;
  inputParameters?: unknown;
  protocolNumber?: string;
  baseStatus?: unknown;
  additionalOutputData?: CapivaraAdditionalOutputData;
  queryDate?: unknown;
}

export interface CapivaraPfResults {
  name?: string;
  social_name?: string;
  birth?: string;
  mother_name?: string;
  gender?: string;
  document?: CapivaraDocument;
  indicators?: CapivaraIndicators;
  address?: CapivaraAddress;
  financial?: CapivaraFinancial;
  age?: number;
  cnep?: CapivaraCnepItem[];
  ceis?: CapivaraCei[];
  environmentalEmbargoes?: CapivaraEnvironmentalEmbargao[];
  classificationofProfessionNatureofOccupation?: unknown;
  internationalRestrictiveList?: unknown;
}

/** Capivara > PF - Pessoa Física > Capivara PF. POST /v1/capivara/pf. Shape inferred from the examples in TargetData's docs. */
export interface CapivaraPfResponse {
  results: CapivaraPfResults;
  header: ResponseHeader;
}

export interface CapivaraResultsDocument {
  type?: string;
  number?: string;
  status?: string;
  last_updated?: string;
  legal_nature?: unknown;
  legal_status?: string;
}

export interface CapivaraResultsAddress {
  street?: string;
  number?: string;
  complement?: string;
  neighborhood?: string;
  city?: unknown;
  state?: string;
  zip_code?: string;
}

export interface CapivaraResultsFinancial {
  social_capital?: string;
  income_bracket?: string;
}

export interface CapivaraMemberIndicators {
  death?: boolean;
  pep?: boolean;
  regulation_restriction?: boolean;
  social_beneficiary?: boolean;
}

export interface CapivaraMemberFinancial {
  income_bracket?: string;
}

export interface CapivaraOwnership {
  total?: unknown;
  percent?: unknown;
}

export interface CapivaraMember {
  name?: string;
  social_name?: string;
  birth?: string;
  mother_name?: string;
  gender?: string;
  document?: CapivaraDocument;
  indicators?: CapivaraMemberIndicators;
  address?: CapivaraAddress;
  financial?: CapivaraMemberFinancial;
  age?: number;
  ownership?: CapivaraOwnership;
}

export interface CapivaraCorporateStructureItem {
  nomeNomeEmpresarial?: string;
  qualificacao?: string;
  qualifRepLegal?: string;
  nomeRepresLegal?: string;
  isRepresentanteLegal?: boolean;
  documentoSocio?: string;
  paisOrigem?: unknown;
}

export interface CapivaraPepItem {
  idPep?: number;
  tipO_PEP?: unknown;
  cpF_TITULAR?: string;
  nomE_TITULAR?: string;
  perfil?: unknown;
  descrição_Função?: string;
  nome_Órgão?: string;
  data_Início_Exercício?: string;
  data_Fim_Exercício?: string;
  data_Fim_Carência?: string;
  relacionamento?: unknown;
  datA_ATUALIZACAO?: string;
  cnpJ_RELACIONADO?: unknown;
  razaO_SOCIAL_RELACIONADO?: unknown;
  cpF_RELACIONADO?: unknown;
  nomE_RELACIONADO?: unknown;
  dsvinculo?: unknown;
}

export interface CapivaraResultsCnepItem {
  idCNEP?: number;
  cadastro?: unknown;
  codigoSancao?: string;
  tipoPessoa?: unknown;
  cpfcnpjSancionado?: unknown;
  nomeSancionado?: unknown;
  nomeInformadoPeloOrgaoSancionador?: unknown;
  razaoSocialCadastroReceita?: unknown;
  nomeFantasiaCadastroReceita?: unknown;
  numeroProcesso?: string;
  categoriaSancao?: string;
  valorMulta?: string;
  dataInicioSancao?: string;
  dataFinalSancao?: string;
  dataPublicacao?: unknown;
  publicacao?: string;
  detalhamento?: unknown;
  dataTransitoEmJulgado?: string;
  abrangenciaDefinidaEmDecisaoJudicial?: unknown;
  orgaoSancionador?: string;
  ufOrgaoSancionador?: string;
  fundamentacaoLegal?: string;
  dataCadastro?: unknown;
}

export interface CapivaraResultsCei {
  idCEIS?: number;
  cadastro?: unknown;
  codigoSancao?: string;
  tipoPessoa?: unknown;
  cpfcnpjSancionado?: unknown;
  nomeSancionado?: unknown;
  nomeInformadoPeloOrgaoSancionador?: unknown;
  razaoSocialCadastroReceita?: unknown;
  nomeFantasiaCadastroReceita?: unknown;
  numeroProcesso?: string;
  categoriaSancao?: string;
  dataInicioSancao?: string;
  dataFinalSancao?: string;
  dataPublicacao?: string;
  publicacao?: string;
  detalhamento?: unknown;
  dataTransitoEmJulgado?: string;
  abrangenciaDefinidaEmDecisaoJudicial?: string;
  orgaoSancionador?: string;
  ufOrgaoSancionador?: string;
  fundamentacaoLegal?: string;
  dataCadastro?: unknown;
}

export interface CapivaraPjResults {
  name?: string;
  birth?: string;
  age?: number;
  document?: CapivaraResultsDocument;
  address?: CapivaraResultsAddress;
  financial?: CapivaraResultsFinancial;
  members?: CapivaraMember[];
  corporateStructure?: CapivaraCorporateStructureItem[];
  pep?: CapivaraPepItem[];
  size?: string;
  constitutionDate?: string;
  telephone?: string;
  email?: string;
  shareCapitalRange?: string;
  shareCapital?: string;
  revenueRangeEstimated?: string;
  companyActivityLevelClassification?: string;
  cnaesSecundary?: string[];
  fantasyName?: unknown;
  legalNatureCode?: unknown;
  legalNatureDescription?: unknown;
  cnep?: CapivaraResultsCnepItem[];
  ceis?: CapivaraResultsCei[];
  internationalRestrictiveList?: unknown;
  constitutionForm?: unknown;
  electoralProcesses?: unknown;
  lackInformationBureau?: unknown;
  relatedCompanies?: unknown;
  cbf?: unknown;
}

/** Capivara > PJ - Pessoa Jurídica > Capivara PJ. POST /v1/capivara/pj. Shape inferred from the examples in TargetData's docs. */
export interface CapivaraPjResponse {
  results: CapivaraPjResults;
  header: ResponseHeader;
}
