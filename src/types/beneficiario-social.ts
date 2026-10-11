import type { ResponseHeader } from "./common";

export interface BeneficiarioSocialUltimasOcorrencia {
  codigo_municipio_siafi?: string;
  data_atualizacao?: string;
  mes_competencia?: string;
  mes_referencia?: string;
  nis_favorecido?: string;
  nome_favorecido?: string;
  nome_municipio?: string;
  uf?: string;
  valor_parcela?: string;
}

export interface BeneficiarioSocialAuxilioBrasil {
  quantidade?: string;
  ultimas_ocorrencias?: BeneficiarioSocialUltimasOcorrencia[];
  valor?: string;
}

export interface BeneficiarioSocialAuxilioEmergencialUltimasOcorrencia {
  codigo_municipio_ibge?: string;
  cpf_responsavel?: string;
  data_atualizacao?: string;
  enquadramento?: string;
  mes_disponibilizacao?: string;
  nis_beneficiario?: string;
  nis_responsavel?: string;
  nome_beneficiario?: string;
  nome_municipio?: string;
  nome_responsavel?: string;
  observacao?: unknown;
  parcela?: string;
  uf?: string;
  valor_beneficio?: string;
}

export interface BeneficiarioSocialAuxilioEmergencial {
  quantidade?: string;
  ultimas_ocorrencias?: BeneficiarioSocialAuxilioEmergencialUltimasOcorrencia[];
  valor?: string;
}

export interface BeneficiarioSocialBolsaFamilia {
  quantidade?: string;
  ultimas_ocorrencias?: BeneficiarioSocialUltimasOcorrencia[];
  valor?: string;
}

export interface BeneficiarioSocialGarantiaSafraUltimasOcorrencia {
  codigo_municipio_siafi?: string;
  data_atualizacao?: string;
  mes_referencia?: string;
  nis_favorecido?: string;
  nome_favorecido?: string;
  nome_municipio?: string;
  uf?: string;
  valor_parcela?: string;
}

export interface BeneficiarioSocialGarantiaSafra {
  quantidade?: string;
  ultimas_ocorrencias?: BeneficiarioSocialGarantiaSafraUltimasOcorrencia[];
  valor?: string;
}

export interface BeneficiarioSocialPrestacaoContinuadaUltimasOcorrencia {
  beneficio_concedido_judicialmente?: string;
  codigo_municipio_siafi?: string;
  data_atualizacao?: string;
  mes_competencia?: string;
  mes_referencia?: string;
  nis_beneficiario?: string;
  nis_representante_legal?: string;
  nome_beneficiario?: string;
  nome_municipio?: string;
  nome_representante_legal?: string;
  numero_beneficio?: string;
  uf?: string;
  valor_parcela?: string;
}

export interface BeneficiarioSocialPrestacaoContinuada {
  quantidade?: string;
  ultimas_ocorrencias?: BeneficiarioSocialPrestacaoContinuadaUltimasOcorrencia[];
  valor?: string;
}

export interface BeneficiarioSocialSeguroDefeso {
  quantidade?: string;
  ultimas_ocorrencias?: unknown[];
  valor?: string;
}

export interface BeneficiarioSocialBeneficioSocial {
  auxilio_brasil?: BeneficiarioSocialAuxilioBrasil;
  auxilio_emergencial?: BeneficiarioSocialAuxilioEmergencial;
  bolsa_familia?: BeneficiarioSocialBolsaFamilia;
  garantia_safra?: BeneficiarioSocialGarantiaSafra;
  prestacao_continuada?: BeneficiarioSocialPrestacaoContinuada;
  seguro_defeso?: BeneficiarioSocialSeguroDefeso;
}

export interface BeneficiarioSocialCadastral {
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

export interface BeneficiarioSocialObito {
  ano_obito?: string | null;
  dt_obito?: string | null;
  fonte_obito?: string;
  mes_obito?: string | null;
  st_obito?: boolean;
  tipo_obito?: string;
}

export interface BeneficiarioSocialPfResults {
  beneficio_social?: BeneficiarioSocialBeneficioSocial;
  cadastral?: BeneficiarioSocialCadastral;
  obito?: BeneficiarioSocialObito;
}

/** Benefício Social PF. POST /v1/beneficiario_social/pf. Shape inferred from the examples in TargetData's docs. */
export interface BeneficiarioSocialPfResponse {
  results: BeneficiarioSocialPfResults;
  header: ResponseHeader;
}
