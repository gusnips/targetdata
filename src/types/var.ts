import type { ResponseHeader } from "./common";

export interface VarCadastral {
  nr_cpf?: string;
  nm_completo?: string;
  dt_nascimento?: string;
  menor_idade?: boolean;
}

export interface VarDetalhe {
  sg_funcao?: string;
  ds_funcao?: string;
  ds_nome_orgao?: string;
  ds_nivel_funcao?: string;
  dt_inicio?: string;
  dt_fim?: string;
  dt_fim_carencia?: string;
  dt_atualizacao?: string;
}

export interface VarPepTitular {
  flag?: boolean;
  detalhes?: VarDetalhe[];
}

export interface VarPepVinculosDetalhe {
  cd_qualificacao_socio?: string | null;
  cs_vinculo_familia?: string;
  ds_funcao?: string;
  ds_nivel_funcao?: string | null;
  ds_nome_orgao?: string;
  dt_atualizacao?: string;
  dt_fim?: string;
  dt_fim_carencia?: string;
  dt_inicio?: string;
  nm_completo?: string;
  nr_cnpj?: string | null;
  nr_cpf?: string;
  sg_funcao?: string;
  vinculo?: string;
}

export interface VarPepVinculos {
  flag?: boolean;
  detalhes?: VarPepVinculosDetalhe[];
}

export interface VarUltimasOcorrencia {
  mes_competencia?: string;
  mes_referencia?: string;
  uf?: string;
  codigo_municipio_siafi?: string;
  nome_municipio?: string;
  nis_favorecido?: string;
  nome_favorecido?: string;
  valor_parcela?: string;
  data_atualizacao?: string;
}

export interface VarDetalhes {
  quantidade?: string;
  valor?: string;
  ultimas_ocorrencias?: VarUltimasOcorrencia[];
}

export interface VarBolsaFamilia {
  flag?: boolean;
  detalhes?: VarDetalhes;
}

export interface VarDetalhesUltimasOcorrencia {
  mes_competencia?: string;
  mes_referencia?: string;
  uf?: string;
  codigo_municipio_siafi?: string;
  nome_municipio?: string;
  nis_beneficiario?: string;
  nome_beneficiario?: string;
  nis_representante_legal?: string;
  nome_representante_legal?: string;
  numero_beneficio?: string;
  beneficio_concedido_judicialmente?: string;
  valor_parcela?: string;
  data_atualizacao?: string;
}

export interface VarBpcDetalhes {
  quantidade?: string;
  valor?: string;
  ultimas_ocorrencias?: VarDetalhesUltimasOcorrencia[];
}

export interface VarBpc {
  flag?: boolean;
  detalhes?: VarBpcDetalhes;
}

export interface VarBeneficiosSociais {
  bolsa_familia?: VarBolsaFamilia;
  bpc?: VarBpc;
}

export interface VarResult {
  cadastral?: VarCadastral;
  pep_titular?: VarPepTitular;
  pep_vinculos?: VarPepVinculos;
  beneficios_sociais?: VarBeneficiosSociais;
}

/** VAR. POST /v1/var. Shape inferred from the examples in TargetData's docs. */
export interface VarQueryResponse {
  results: VarResult[];
  header: ResponseHeader;
}
