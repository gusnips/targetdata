import type { ResponseHeader } from "./common";

export interface PerfilEconomicoSocialUltimasOcorrencia {
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

export interface PerfilEconomicoSocialAuxilioBrasil {
  quantidade?: string;
  ultimas_ocorrencias?: PerfilEconomicoSocialUltimasOcorrencia[];
  valor?: string;
}

export interface PerfilEconomicoSocialAuxilioEmergencialUltimasOcorrencia {
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
  observacao?: string | null;
  parcela?: string;
  uf?: string;
  valor_beneficio?: string;
}

export interface PerfilEconomicoSocialAuxilioEmergencial {
  quantidade?: string;
  ultimas_ocorrencias?: PerfilEconomicoSocialAuxilioEmergencialUltimasOcorrencia[];
  valor?: string;
}

export interface PerfilEconomicoSocialBolsaFamilia {
  quantidade?: string;
  ultimas_ocorrencias?: PerfilEconomicoSocialUltimasOcorrencia[];
  valor?: string;
}

export interface PerfilEconomicoSocialGarantiaSafraUltimasOcorrencia {
  codigo_municipio_siafi?: string;
  data_atualizacao?: string;
  mes_referencia?: string;
  nis_favorecido?: string;
  nome_favorecido?: string;
  nome_municipio?: string;
  uf?: string;
  valor_parcela?: string;
}

export interface PerfilEconomicoSocialGarantiaSafra {
  quantidade?: string;
  ultimas_ocorrencias?: PerfilEconomicoSocialGarantiaSafraUltimasOcorrencia[];
  valor?: string;
}

export interface PerfilEconomicoSocialPrestacaoContinuadaUltimasOcorrencia {
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

export interface PerfilEconomicoSocialPrestacaoContinuada {
  quantidade?: string;
  ultimas_ocorrencias?: PerfilEconomicoSocialPrestacaoContinuadaUltimasOcorrencia[];
  valor?: string;
}

export interface PerfilEconomicoSocialSeguroDefeso {
  quantidade?: string;
  ultimas_ocorrencias?: unknown[];
  valor?: string;
}

export interface PerfilEconomicoSocialBeneficioSocial {
  auxilio_brasil?: PerfilEconomicoSocialAuxilioBrasil;
  auxilio_emergencial?: PerfilEconomicoSocialAuxilioEmergencial;
  bolsa_familia?: PerfilEconomicoSocialBolsaFamilia;
  garantia_safra?: PerfilEconomicoSocialGarantiaSafra;
  prestacao_continuada?: PerfilEconomicoSocialPrestacaoContinuada;
  seguro_defeso?: PerfilEconomicoSocialSeguroDefeso;
}

export interface PerfilEconomicoSocialCadastral {
  comprovante_rfb?: string;
  ds_faixa_idade?: string;
  ds_nacionalidade?: unknown;
  ds_orgao_emissor?: unknown;
  ds_sexo?: string;
  ds_signo?: string;
  ds_status_rfb?: string;
  dt_atualizacao_rfb?: string;
  dt_inscricao?: string;
  dt_nasc?: string;
  nit_pis?: unknown;
  nm_completo?: string;
  nm_mae?: string;
  nm_social?: string;
  nome_unico?: boolean;
  nr_cpf?: string;
  nr_cpf_mae?: unknown;
  nr_rg?: unknown;
  nr_titulo_eleitoral?: unknown;
  sg_sexo?: string;
  sg_uf_rg?: unknown;
  st_menor_idade?: boolean;
  st_pep?: boolean;
  st_ppp?: boolean;
}

export interface PerfilEconomicoSocialObito {
  ano_obito?: unknown;
  dt_obito?: unknown;
  fonte_obito?: string;
  mes_obito?: unknown;
  st_obito?: boolean;
  tipo_obito?: string;
}

export interface PerfilEconomicoSocialPfBeneficioSocialResults {
  beneficio_social?: PerfilEconomicoSocialBeneficioSocial;
  cadastral?: PerfilEconomicoSocialCadastral;
  obito?: PerfilEconomicoSocialObito;
}

/** Perfil Economico e Social > PF - Pessoa Física > Benefício Social PF. POST /v1/perfil_economico_social/pf/beneficio-social. Shape inferred from the examples in TargetData's docs. */
export interface PerfilEconomicoSocialPfBeneficioSocialResponse {
  results: PerfilEconomicoSocialPfBeneficioSocialResults;
  header: ResponseHeader;
}

export interface PerfilEconomicoSocialCfmItem {
  dt_informacao?: string;
  dt_inscricao?: string;
  dt_prim_inscricao_uf?: string;
  especialidade?: string;
  nm_medico?: string;
  nm_social_medico?: string;
  nr_crm?: string;
  situacao?: string;
  tp_inscricao?: string;
  uf_crm?: string;
}

export interface PerfilEconomicoSocialHistoricoOcupacao {
  ano?: string;
  cbo?: string;
  ds_ocupacao?: string;
  faixa_renda_presumida?: string;
  renda_presumida?: string;
}

export interface PerfilEconomicoSocialSocioeconomico {
  cd_ocupacao?: unknown;
  cfm?: PerfilEconomicoSocialCfmItem[];
  ds_faixa_renda_presumida?: string;
  ds_grau_escolaridade?: unknown;
  ds_ocupacao?: unknown;
  dt_faixa_renda_presumida?: string;
  dt_grau_escolaridade?: unknown;
  dt_ocupacao?: unknown;
  historico_ocupacoes?: PerfilEconomicoSocialHistoricoOcupacao[];
}

export interface PerfilEconomicoSocialResultsObito {
  ano_obito?: unknown;
  dt_obito?: unknown;
  fonte_obito?: string;
  mes_obito?: unknown;
  possivel_obito?: boolean;
  st_obito?: boolean;
  tipo_obito?: string;
}

export interface PerfilEconomicoSocialEmpregadorItem {
  cd_ordem?: number;
  dt_admissao?: string;
  dt_demissao?: string;
  dt_informacao?: string;
  nr_cnpj?: string;
  razao_social?: string;
}

export interface PerfilEconomicoSocialParentescoItem {
  cd_ordem?: number;
  ds_vinculo?: string;
  dt_informacao?: string;
  nm_completo?: string;
  nr_cpf?: string;
}

export interface PerfilEconomicoSocialPossiveisColegasTrabalhoItem {
  cd_ordem?: number;
  nm_completo?: string;
  nr_cpf?: string;
}

export interface PerfilEconomicoSocialSocio {
  dt_entrada?: string;
  nm_completo?: string;
  nr_cnpj?: string;
  nr_cpf?: string;
  qualificacao?: string;
  vinculo?: string;
}

export interface PerfilEconomicoSocialVinculo {
  empregador?: PerfilEconomicoSocialEmpregadorItem[];
  parentesco?: PerfilEconomicoSocialParentescoItem[];
  possiveis_colegas_trabalho?: PerfilEconomicoSocialPossiveisColegasTrabalhoItem[];
  socios?: PerfilEconomicoSocialSocio[];
}

export interface PerfilEconomicoSocialAeronave {
  cd_categoria?: string;
  cd_cls?: string;
  cd_interdicao?: string;
  cd_marca_estrangeira?: unknown;
  cd_marca_nac1?: unknown;
  cd_marca_nac2?: unknown;
  cd_marca_nac3?: unknown;
  cd_tipo?: string;
  cd_tipo_icao?: string;
  cpf_cgc?: string;
  cpf_cnpj?: string;
  data_atualizacao?: string;
  ds_gravame?: string;
  ds_modelo?: string;
  ds_motivo_canc?: string;
  dt_canc?: string | null;
  dt_matricula?: string | null;
  dt_validade_ca?: string | null;
  dt_validade_cva?: string | null;
  marca?: string;
  nm_fabricante?: string;
  nm_operador?: string;
  nome_cgc_tratado?: string;
  nr_ano_fabricacao?: string | null;
  nr_assentos?: string;
  nr_cert_matricula?: string;
  nr_passageiros_max?: string;
  nr_pmd?: string;
  nr_serie?: string;
  nr_tripulacao_min?: string;
  numero_documento_cgc?: string;
  outros_operadores?: string | null;
  outros_proprietarios?: string | null;
  proprietario?: string;
  sg_uf?: string;
  tipo_documento_cgc?: string;
  uf_operador?: string;
}

export interface PerfilEconomicoSocialImovei {
  ds_ano_exercicio?: string;
  ds_ano_inicio_vida_contribuente?: string;
  ds_area_construida?: string;
  ds_area_ocupada?: string;
  ds_area_terreno?: string;
  ds_bairro?: string;
  ds_cidade?: string;
  ds_complemento?: string;
  ds_logradouro?: string;
  ds_mes_inicio_vida_contribuente?: string;
  ds_tipo_padrao_construcao?: string;
  ds_tipo_terreno?: string | null;
  ds_tipo_uso_imovel?: string;
  dt_cadastramento?: string;
  nr_cep?: string;
  nr_contribuente?: string;
  nr_fator_obsolescencia?: string;
  nr_numero?: string;
  qtd_esquinas_frentes?: string | null;
  qtd_pavimentos?: string;
  sg_tipo_logradouro?: string;
  sg_uf?: string;
  vl_latitude?: string | null;
  vl_longitude?: string | null;
  vl_metro_quadrado_construcao?: string;
  vl_metro_quadrado_terreno?: string;
  vl_testada_para_calculo?: string;
}

export interface PerfilEconomicoSocialImoveisRurai {
  cnae?: string | null;
  contatos_id?: string;
  data_atualizacao?: string;
  data_consulta?: string;
  data_inclusao?: string;
  empresas_id?: string | null;
  ie?: string;
  produtores_rurais_id?: string;
  protocolo?: string | null;
  uf?: string;
}

export interface PerfilEconomicoSocialMeiItem {
  cd_ordem?: number;
  nm_empresarial?: string;
  nm_fantasia?: string;
  nr_cnpj?: string;
}

export interface PerfilEconomicoSocialParticipacoesEmpresa {
  cd_ordem?: number;
  cd_qualificacao?: string;
  ds_qualificacao?: string;
  dt_entrada?: string;
  nm_empresarial?: string;
  nr_cnpj?: string;
}

export interface PerfilEconomicoSocialPatrimonio {
  aeronaves?: PerfilEconomicoSocialAeronave[];
  imoveis?: PerfilEconomicoSocialImovei[];
  imoveis_rurais?: PerfilEconomicoSocialImoveisRurai[];
  mei?: PerfilEconomicoSocialMeiItem[];
  participacoes_empresas?: PerfilEconomicoSocialParticipacoesEmpresa[];
  st_empresario?: boolean;
  st_multiempresario?: boolean;
}

export interface PerfilEconomicoSocialEmailItem {
  cd_ordem?: number;
  ds_email?: string;
  dt_inclusao?: string;
}

export interface PerfilEconomicoSocialEnderecoItem {
  caracteristicas?: unknown;
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
  outras_grafias?: unknown;
  sg_tipo_logradouro?: string;
  sg_uf?: string;
}

export interface PerfilEconomicoSocialTelefoneItem {
  cd_ordem?: number;
  ds_tipo_telefone?: string;
  dt_inclusao?: string;
  nr_ddd?: string;
  nr_ddi?: unknown;
  nr_telefone?: string;
  uf_ddd?: string;
}

export interface PerfilEconomicoSocialContato {
  email?: PerfilEconomicoSocialEmailItem[];
  endereco?: PerfilEconomicoSocialEnderecoItem[];
  telefone?: PerfilEconomicoSocialTelefoneItem[];
}

export interface PerfilEconomicoSocialPgfnFgtsUltimasOcorrencia {
  data_atualizacao?: string;
  data_inscricao?: string;
  entidade_responsavel?: string;
  flag_controle?: string;
  indicador_ajuizado?: string;
  numero_inscricao?: string;
  receita_principal?: string;
  situacao_inscricao?: string;
  tipo_devedor?: string;
  tipo_situacao_inscricao?: string;
  uf_devedor?: string;
  unidade_inscricao?: string;
  unidade_responsavel?: string;
  valor_consolidado?: string;
}

export interface PerfilEconomicoSocialPgfnFgts {
  quantidade?: string;
  ultimas_ocorrencias?: PerfilEconomicoSocialPgfnFgtsUltimasOcorrencia[];
  valor?: string;
}

export interface PerfilEconomicoSocialPgfnNaoPrevidenciarioUltimasOcorrencia {
  data_atualizacao?: string;
  data_inscricao?: string;
  flag_controle?: string;
  indicador_ajuizado?: string;
  numero_inscricao?: string;
  receita_principal?: string;
  situacao_inscricao?: string;
  tipo_devedor?: string;
  tipo_situacao_inscricao?: string;
  uf_devedor?: string;
  unidade_responsavel?: string;
  valor_consolidado?: string;
}

export interface PerfilEconomicoSocialPgfnNaoPrevidenciario {
  quantidade?: string;
  ultimas_ocorrencias?: PerfilEconomicoSocialPgfnNaoPrevidenciarioUltimasOcorrencia[];
  valor?: string;
}

export interface PerfilEconomicoSocialPgfnPrevidenciarioUltimasOcorrencia {
  data_atualizacao?: string;
  data_inscricao?: string;
  flag_controle?: string;
  indicador_ajuizado?: string;
  numero_inscricao?: string;
  situacao_inscricao?: string;
  tipo_credito?: string;
  tipo_devedor?: string;
  tipo_situacao_inscricao?: string;
  uf_devedor?: string;
  unidade_responsavel?: string;
  valor_consolidado?: string;
}

export interface PerfilEconomicoSocialPgfnPrevidenciario {
  quantidade?: string;
  ultimas_ocorrencias?: PerfilEconomicoSocialPgfnPrevidenciarioUltimasOcorrencia[];
  valor?: string;
}

export interface PerfilEconomicoSocialDividaPublica {
  pgfn_fgts?: PerfilEconomicoSocialPgfnFgts;
  pgfn_nao_previdenciario?: PerfilEconomicoSocialPgfnNaoPrevidenciario;
  pgfn_previdenciario?: PerfilEconomicoSocialPgfnPrevidenciario;
}

export interface PerfilEconomicoSocialBeneficioSocialAuxilioEmergencialUltimasOcorrencia {
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

export interface PerfilEconomicoSocialBeneficioSocialAuxilioEmergencial {
  quantidade?: string;
  ultimas_ocorrencias?: PerfilEconomicoSocialBeneficioSocialAuxilioEmergencialUltimasOcorrencia[];
  valor?: string;
}

export interface PerfilEconomicoSocialResultsBeneficioSocial {
  auxilio_brasil?: PerfilEconomicoSocialAuxilioBrasil;
  auxilio_emergencial?: PerfilEconomicoSocialBeneficioSocialAuxilioEmergencial;
  bolsa_familia?: PerfilEconomicoSocialBolsaFamilia;
  garantia_safra?: PerfilEconomicoSocialGarantiaSafra;
  prestacao_continuada?: PerfilEconomicoSocialPrestacaoContinuada;
  seguro_defeso?: PerfilEconomicoSocialSeguroDefeso;
}

export interface PerfilEconomicoSocialPfPatrimonioResults {
  cadastral?: PerfilEconomicoSocialCadastral;
  socioeconomico?: PerfilEconomicoSocialSocioeconomico;
  obito?: PerfilEconomicoSocialResultsObito;
  vinculo?: PerfilEconomicoSocialVinculo;
  patrimonio?: PerfilEconomicoSocialPatrimonio;
  contato?: PerfilEconomicoSocialContato;
  divida_publica?: PerfilEconomicoSocialDividaPublica;
  beneficio_social?: PerfilEconomicoSocialResultsBeneficioSocial;
}

/** Perfil Economico e Social > PF - Pessoa Física > Patrimonio. POST /v1/perfil_economico_social/pf/patrimonio. Shape inferred from the examples in TargetData's docs. */
export interface PerfilEconomicoSocialPfPatrimonioResponse {
  results: PerfilEconomicoSocialPfPatrimonioResults;
  header: ResponseHeader;
}

export interface PerfilEconomicoSocialBolsaFamiliaUltimasOcorrencia {
  mes_referencia?: string;
  mes_competencia?: string;
  uf?: string;
  codigo_municipio_siafi?: string;
  nome_municipio?: string;
  nis_favorecido?: string;
  nome_favorecido?: string;
  valor_parcela?: string;
  data_atualizacao?: string;
}

export interface PerfilEconomicoSocialBeneficioSocialBolsaFamilia {
  quantidade?: string;
  valor?: string;
  ultimas_ocorrencias?: PerfilEconomicoSocialBolsaFamiliaUltimasOcorrencia[];
}

export interface PerfilEconomicoSocialResultsBeneficioSocialAuxilioEmergencialUltimasOcorrencia {
  mes_disponibilizacao?: string;
  uf?: string;
  codigo_municipio_ibge?: string;
  nome_municipio?: string;
  nis_beneficiario?: string;
  nome_beneficiario?: string;
  nis_responsavel?: string;
  cpf_responsavel?: string;
  nome_responsavel?: string;
  enquadramento?: string;
  parcela?: string;
  observacao?: unknown;
  valor_beneficio?: string;
  data_atualizacao?: string;
}

export interface PerfilEconomicoSocialResultsBeneficioSocialAuxilioEmergencial {
  quantidade?: string;
  valor?: string;
  ultimas_ocorrencias?: PerfilEconomicoSocialResultsBeneficioSocialAuxilioEmergencialUltimasOcorrencia[];
}

export interface PerfilEconomicoSocialAuxilioBrasilUltimasOcorrencia {
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

export interface PerfilEconomicoSocialBeneficioSocialAuxilioBrasil {
  quantidade?: string;
  valor?: string;
  ultimas_ocorrencias?: PerfilEconomicoSocialAuxilioBrasilUltimasOcorrencia[];
}

export interface PerfilEconomicoSocialBeneficioSocialPrestacaoContinuadaUltimasOcorrencia {
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

export interface PerfilEconomicoSocialBeneficioSocialPrestacaoContinuada {
  quantidade?: string;
  valor?: string;
  ultimas_ocorrencias?: PerfilEconomicoSocialBeneficioSocialPrestacaoContinuadaUltimasOcorrencia[];
}

export interface PerfilEconomicoSocialBeneficioSocialSeguroDefeso {
  quantidade?: string;
  valor?: string;
  ultimas_ocorrencias?: unknown[];
}

export interface PerfilEconomicoSocialBeneficioSocialGarantiaSafraUltimasOcorrencia {
  mes_referencia?: string;
  uf?: string;
  codigo_municipio_siafi?: string;
  nome_municipio?: string;
  nis_favorecido?: string;
  nome_favorecido?: string;
  valor_parcela?: string;
  data_atualizacao?: string;
}

export interface PerfilEconomicoSocialBeneficioSocialGarantiaSafra {
  quantidade?: string;
  valor?: string;
  ultimas_ocorrencias?: PerfilEconomicoSocialBeneficioSocialGarantiaSafraUltimasOcorrencia[];
}

export interface PerfilEconomicoSocialPfSaudeFinanceiraResultsBeneficioSocial {
  bolsa_familia?: PerfilEconomicoSocialBeneficioSocialBolsaFamilia;
  auxilio_emergencial?: PerfilEconomicoSocialResultsBeneficioSocialAuxilioEmergencial;
  auxilio_brasil?: PerfilEconomicoSocialBeneficioSocialAuxilioBrasil;
  prestacao_continuada?: PerfilEconomicoSocialBeneficioSocialPrestacaoContinuada;
  seguro_defeso?: PerfilEconomicoSocialBeneficioSocialSeguroDefeso;
  garantia_safra?: PerfilEconomicoSocialBeneficioSocialGarantiaSafra;
}

export interface PerfilEconomicoSocialContatoEnderecoItem {
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
  outras_grafias?: unknown;
  sg_tipo_logradouro?: string;
  sg_uf?: string;
}

export interface PerfilEconomicoSocialResultsContato {
  email?: PerfilEconomicoSocialEmailItem[];
  endereco?: PerfilEconomicoSocialContatoEnderecoItem[];
  telefone?: PerfilEconomicoSocialTelefoneItem[];
}

export interface PerfilEconomicoSocialDividaPublicaPgfnPrevidenciarioUltimasOcorrencia {
  tipo_devedor?: string;
  uf_devedor?: string;
  unidade_responsavel?: string;
  numero_inscricao?: string;
  tipo_situacao_inscricao?: string;
  situacao_inscricao?: string;
  tipo_credito?: string;
  data_inscricao?: string;
  indicador_ajuizado?: string;
  valor_consolidado?: string;
  data_atualizacao?: string;
  flag_controle?: string;
}

export interface PerfilEconomicoSocialDividaPublicaPgfnPrevidenciario {
  quantidade?: string;
  valor?: string;
  ultimas_ocorrencias?: PerfilEconomicoSocialDividaPublicaPgfnPrevidenciarioUltimasOcorrencia[];
}

export interface PerfilEconomicoSocialDividaPublicaPgfnFgtsUltimasOcorrencia {
  tipo_devedor?: string;
  uf_devedor?: string;
  unidade_responsavel?: string;
  entidade_responsavel?: string;
  unidade_inscricao?: string;
  numero_inscricao?: string;
  tipo_situacao_inscricao?: string;
  situacao_inscricao?: string;
  receita_principal?: string;
  data_inscricao?: string;
  indicador_ajuizado?: string;
  valor_consolidado?: string;
  data_atualizacao?: string;
  flag_controle?: string;
}

export interface PerfilEconomicoSocialDividaPublicaPgfnFgts {
  quantidade?: string;
  valor?: string;
  ultimas_ocorrencias?: PerfilEconomicoSocialDividaPublicaPgfnFgtsUltimasOcorrencia[];
}

export interface PerfilEconomicoSocialDividaPublicaPgfnNaoPrevidenciarioUltimasOcorrencia {
  tipo_devedor?: string;
  uf_devedor?: string;
  unidade_responsavel?: string;
  numero_inscricao?: string;
  tipo_situacao_inscricao?: string;
  situacao_inscricao?: string;
  receita_principal?: string;
  data_inscricao?: string;
  indicador_ajuizado?: string;
  valor_consolidado?: string;
  data_atualizacao?: string;
  flag_controle?: string;
}

export interface PerfilEconomicoSocialDividaPublicaPgfnNaoPrevidenciario {
  quantidade?: string;
  valor?: string;
  ultimas_ocorrencias?: PerfilEconomicoSocialDividaPublicaPgfnNaoPrevidenciarioUltimasOcorrencia[];
}

export interface PerfilEconomicoSocialResultsDividaPublica {
  pgfn_previdenciario?: PerfilEconomicoSocialDividaPublicaPgfnPrevidenciario;
  pgfn_fgts?: PerfilEconomicoSocialDividaPublicaPgfnFgts;
  pgfn_nao_previdenciario?: PerfilEconomicoSocialDividaPublicaPgfnNaoPrevidenciario;
}

export interface PerfilEconomicoSocialPfSaudeFinanceiraResultsObito {
  st_obito?: boolean;
  tipo_obito?: string;
  fonte_obito?: string;
  dt_obito?: unknown;
  mes_obito?: unknown;
  ano_obito?: unknown;
  possivel_obito?: boolean;
}

export interface PerfilEconomicoSocialPatrimonioParticipacoesEmpresa {
  cd_ordem?: number;
  dt_entrada?: string;
  cd_qualificacao?: string;
  ds_qualificacao?: string;
  nm_empresarial?: string;
  nr_cnpj?: string;
}

export interface PerfilEconomicoSocialPatrimonioImovei {
  ds_bairro?: string;
  nr_numero?: string;
  ds_tipo_padrao_construcao?: string;
  dt_cadastramento?: string;
  qtd_esquinas_frentes?: unknown;
  ds_tipo_uso_imovel?: string;
  sg_tipo_logradouro?: string;
  nr_contribuente?: string;
  qtd_pavimentos?: string;
  sg_uf?: string;
  ds_complemento?: string;
  vl_testada_para_calculo?: string;
  ds_area_construida?: string;
  vl_latitude?: unknown;
  vl_longitude?: unknown;
  ds_cidade?: string;
  ds_area_terreno?: string;
  ds_area_ocupada?: string;
  ds_ano_inicio_vida_contribuente?: string;
  ds_tipo_terreno?: unknown;
  vl_metro_quadrado_terreno?: string;
  ds_logradouro?: string;
  vl_metro_quadrado_construcao?: string;
  nr_cep?: string;
  ds_ano_exercicio?: string;
  nr_fator_obsolescencia?: string;
  ds_mes_inicio_vida_contribuente?: string;
}

export interface PerfilEconomicoSocialPatrimonioImoveisRurai {
  produtores_rurais_id?: string;
  contatos_id?: string;
  empresas_id?: unknown;
  uf?: string;
  ie?: string;
  cnae?: unknown;
  protocolo?: unknown;
  data_consulta?: string;
  data_inclusao?: string;
  data_atualizacao?: string;
}

export interface PerfilEconomicoSocialPatrimonioAeronave {
  marca?: string;
  proprietario?: string;
  outros_proprietarios?: unknown;
  sg_uf?: string;
  cpf_cnpj?: string;
  nm_operador?: string;
  outros_operadores?: unknown;
  uf_operador?: string;
  cpf_cgc?: string;
  nr_cert_matricula?: string;
  nr_serie?: string;
  cd_categoria?: string;
  cd_tipo?: string;
  ds_modelo?: string;
  nm_fabricante?: string;
  cd_cls?: string;
  nr_pmd?: string;
  cd_tipo_icao?: string;
  nr_tripulacao_min?: string;
  nr_passageiros_max?: string;
  nr_assentos?: string;
  nr_ano_fabricacao?: unknown;
  dt_validade_cva?: unknown;
  dt_validade_ca?: unknown;
  dt_canc?: unknown;
  ds_motivo_canc?: string;
  cd_interdicao?: string;
  cd_marca_nac1?: unknown;
  cd_marca_nac2?: unknown;
  cd_marca_nac3?: unknown;
  cd_marca_estrangeira?: unknown;
  ds_gravame?: string;
  dt_matricula?: unknown;
  data_atualizacao?: string;
  tipo_documento_cgc?: string;
  nome_cgc_tratado?: string;
  numero_documento_cgc?: string;
}

export interface PerfilEconomicoSocialResultsPatrimonio {
  st_empresario?: boolean;
  st_multiempresario?: boolean;
  participacoes_empresas?: PerfilEconomicoSocialPatrimonioParticipacoesEmpresa[];
  mei?: PerfilEconomicoSocialMeiItem[];
  imoveis?: PerfilEconomicoSocialPatrimonioImovei[];
  imoveis_rurais?: PerfilEconomicoSocialPatrimonioImoveisRurai[];
  aeronaves?: PerfilEconomicoSocialPatrimonioAeronave[];
}

export interface PerfilEconomicoSocialResultsSocioeconomico {
  ds_grau_escolaridade?: unknown;
  dt_grau_escolaridade?: unknown;
}

export interface PerfilEconomicoSocialVinculoParentescoItem {
  cd_ordem?: number;
  dt_informacao?: string;
  nm_completo?: string;
  nr_cpf?: string;
  ds_vinculo?: string;
}

export interface PerfilEconomicoSocialVinculoEmpregadorItem {
  cd_ordem?: number;
  dt_informacao?: string;
  nr_cnpj?: string;
  razao_social?: string;
  dt_admissao?: string;
  dt_demissao?: string;
}

export interface PerfilEconomicoSocialVinculoPossiveisColegasTrabalhoItem {
  cd_ordem?: number;
  nr_cpf?: string;
  nm_completo?: string;
}

export interface PerfilEconomicoSocialVinculoSocio {
  dt_entrada?: string;
  nr_cpf?: string;
  nm_completo?: string;
  vinculo?: string;
  qualificacao?: string;
  nr_cnpj?: string;
}

export interface PerfilEconomicoSocialResultsVinculo {
  parentesco?: PerfilEconomicoSocialVinculoParentescoItem[];
  empregador?: PerfilEconomicoSocialVinculoEmpregadorItem[];
  possiveis_colegas_trabalho?: PerfilEconomicoSocialVinculoPossiveisColegasTrabalhoItem[];
  socios?: PerfilEconomicoSocialVinculoSocio[];
}

export interface PerfilEconomicoSocialDataReferencia {
  ano?: string;
  mes?: string;
  dia?: string;
}

export interface PerfilEconomicoSocialSaudeFinanceira {
  nivel?: number;
  nivel_nome?: string;
  perfil?: string;
  caracteristicas?: string;
}

export interface PerfilEconomicoSocialPfSaudeFinanceiraResults {
  beneficio_social?: PerfilEconomicoSocialPfSaudeFinanceiraResultsBeneficioSocial;
  cadastral?: PerfilEconomicoSocialCadastral;
  contato?: PerfilEconomicoSocialResultsContato;
  divida_publica?: PerfilEconomicoSocialResultsDividaPublica;
  obito?: PerfilEconomicoSocialPfSaudeFinanceiraResultsObito;
  patrimonio?: PerfilEconomicoSocialResultsPatrimonio;
  socioeconomico?: PerfilEconomicoSocialResultsSocioeconomico;
  vinculo?: PerfilEconomicoSocialResultsVinculo;
  cpf?: string;
  data_referencia?: PerfilEconomicoSocialDataReferencia;
  renda_presumida?: string;
  dados_positivos?: string;
  valor_faixa_salario_minimo?: string;
  descricao_faixa_salario_minimo?: string;
  valor_faixa_renda?: string;
  descricao_faixa_renda?: string;
  renda_gasta?: string;
  percentual_comprometimento_renda?: string;
  nivel_confianca?: string;
  valor_gasto_cartao_credito?: string;
  percentual_gasto_cartao_credito?: string;
  parcelas_gastas?: string;
  percentual_gasto_parcelas?: string;
  financiamento_imobiliario?: string;
  financiamento_veiculo?: string;
  consorcio?: string;
  outras_parcelas?: string;
  valor_faixa_renda_index?: string;
  saude_financeira?: PerfilEconomicoSocialSaudeFinanceira;
}

/** Perfil Economico e Social > PF - Pessoa Física > Saúde Financeira. POST /v1/perfil_economico_social/pf/saude-financeira. Shape inferred from the examples in TargetData's docs. */
export interface PerfilEconomicoSocialPfSaudeFinanceiraResponse {
  results: PerfilEconomicoSocialPfSaudeFinanceiraResults;
  header: ResponseHeader;
}

export interface PerfilEconomicoSocialDadosCadastrais {
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

export interface PerfilEconomicoSocialEmail {
  email?: string;
  ordem?: string;
  rfb?: boolean;
}

export interface PerfilEconomicoSocialFax {
  ddd?: string;
  numero?: string;
  ordem?: string;
  tipo?: string;
}

export interface PerfilEconomicoSocialLogradouroGeoComposed {
  lat?: string;
  lon?: string;
}

export interface PerfilEconomicoSocialLogradouro {
  logradouro_bairro?: string;
  logradouro_cep?: string;
  logradouro_complemento?: string;
  logradouro_endereco?: string;
  logradouro_geo_composed?: PerfilEconomicoSocialLogradouroGeoComposed;
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

export interface PerfilEconomicoSocialTelefone {
  ddd?: string;
  ddi?: string;
  numero?: string;
  ordem?: string;
  rfb?: boolean;
  tipo?: string;
}

export interface PerfilEconomicoSocialDadosContato {
  emails?: PerfilEconomicoSocialEmail[];
  faxs?: PerfilEconomicoSocialFax[];
  logradouros?: PerfilEconomicoSocialLogradouro[];
  telefones?: PerfilEconomicoSocialTelefone[];
}

export interface PerfilEconomicoSocialQuadroSocietarioSocio {
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
  representante_legal_cpf_tratado?: unknown;
  representante_legal_nome?: string;
}

export interface PerfilEconomicoSocialQuadroSocietario {
  mei_proprietario_cpf?: string;
  mei_proprietario_nome?: string;
  socios?: PerfilEconomicoSocialQuadroSocietarioSocio[];
}

export interface PerfilEconomicoSocialRegimeTributarioItem {
  ano?: string;
  cnpj_da_scp?: string;
  forma_tributacao?: string;
  municipio?: string;
  quantidade_de_escrituracoes?: string;
  uf?: string;
}

export interface PerfilEconomicoSocialRegimeTributario {
  opcao_mei?: boolean;
  opcao_mei_data_exclusao?: string;
  opcao_mei_data_opcao?: string;
  opcao_simples?: boolean;
  opcao_simples_data_exclusao?: string;
  opcao_simples_data_opcao?: string;
  regime_tributario?: PerfilEconomicoSocialRegimeTributarioItem[];
}

export interface PerfilEconomicoSocialSituacaoCadastral {
  cd_situacao_cadastral?: string;
  cd_situacao_cadastral_motivo?: string;
  ds_situacao_cadastral?: string;
  ds_situacao_cadastral_motivo?: string;
  situacao_cadastral_data?: string;
  situacao_especial?: string;
  situacao_especial_data?: string | null;
}

export interface PerfilEconomicoSocialFirmografico {
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

export interface PerfilEconomicoSocialDividasPublicasPgfnFgtsUltimasOcorrencia {
  data_atualizacao?: string;
  data_inscricao?: string;
  entidade_responsavel?: string;
  flag_controle?: string;
  indicador_ajuizado?: string;
  numero_inscricao?: string;
  receita_principal?: string;
  situacao_inscricao?: string;
  tipo_devedor?: string;
  tipo_pessoa?: string;
  tipo_situacao_inscricao?: string;
  uf_devedor?: string;
  unidade_inscricao?: string;
  unidade_responsavel?: string;
  valor_consolidado?: string;
}

export interface PerfilEconomicoSocialDividasPublicasPgfnFgts {
  quantidade?: string;
  ultimas_ocorrencias?: PerfilEconomicoSocialDividasPublicasPgfnFgtsUltimasOcorrencia[];
  valor?: string;
}

export interface PerfilEconomicoSocialDividasPublicasPgfnNaoPrevidenciarioUltimasOcorrencia {
  data_atualizacao?: string;
  data_inscricao?: string;
  flag_controle?: string;
  indicador_ajuizado?: string;
  numero_inscricao?: string;
  receita_principal?: string;
  situacao_inscricao?: string;
  tipo_devedor?: string;
  tipo_pessoa?: string;
  tipo_situacao_inscricao?: string;
  uf_devedor?: string;
  unidade_responsavel?: string;
  valor_consolidado?: string;
}

export interface PerfilEconomicoSocialDividasPublicasPgfnNaoPrevidenciario {
  quantidade?: string;
  ultimas_ocorrencias?: PerfilEconomicoSocialDividasPublicasPgfnNaoPrevidenciarioUltimasOcorrencia[];
  valor?: string;
}

export interface PerfilEconomicoSocialDividasPublicasPgfnPrevidenciarioUltimasOcorrencia {
  data_atualizacao?: string;
  data_inscricao?: string;
  flag_controle?: string;
  indicador_ajuizado?: string;
  numero_inscricao?: string;
  situacao_inscricao?: string;
  tipo_credito?: string;
  tipo_devedor?: string;
  tipo_pessoa?: string;
  tipo_situacao_inscricao?: string;
  uf_devedor?: string;
  unidade_responsavel?: string;
  valor_consolidado?: string;
}

export interface PerfilEconomicoSocialDividasPublicasPgfnPrevidenciario {
  quantidade?: string;
  ultimas_ocorrencias?: PerfilEconomicoSocialDividasPublicasPgfnPrevidenciarioUltimasOcorrencia[];
  valor?: string;
}

export interface PerfilEconomicoSocialDividasPublicas {
  pgfn_fgts?: PerfilEconomicoSocialDividasPublicasPgfnFgts;
  pgfn_nao_previdenciario?: PerfilEconomicoSocialDividasPublicasPgfnNaoPrevidenciario;
  pgfn_previdenciario?: PerfilEconomicoSocialDividasPublicasPgfnPrevidenciario;
}

export interface PerfilEconomicoSocialResultsPatrimonioAeronave {
  data_atualizacao?: string;
  ds_modelo?: string;
  marca?: string;
  match_id?: string;
  nome_completo?: string;
  nr_ano_fabricacao?: string;
  nr_passageiros_max?: string;
  nr_tripulacao_min?: string;
  numero_documento?: string;
  tipo_documento?: string;
}

export interface PerfilEconomicoSocialGrupoEconomicoItem {
  cnpj_basico?: string;
  razao_social?: string;
}

export interface PerfilEconomicoSocialMultiempresarialItem {
  cnpj_basico?: string;
  razao_social?: string;
}

export interface PerfilEconomicoSocialPjPatrimonioResultsPatrimonio {
  aeronaves?: PerfilEconomicoSocialResultsPatrimonioAeronave[];
  grupo_economico?: PerfilEconomicoSocialGrupoEconomicoItem[];
  multiempresarial?: PerfilEconomicoSocialMultiempresarialItem[];
}

export interface PerfilEconomicoSocialFiliai {
  cnpj_completo?: string;
  nome_fantasia?: string;
  situacao_cadastral?: string;
}

export interface PerfilEconomicoSocialPjPatrimonioResults {
  dados_cadastrais?: PerfilEconomicoSocialDadosCadastrais;
  dados_contato?: PerfilEconomicoSocialDadosContato;
  quadro_societario?: PerfilEconomicoSocialQuadroSocietario;
  regime_tributario?: PerfilEconomicoSocialRegimeTributario;
  situacao_cadastral?: PerfilEconomicoSocialSituacaoCadastral;
  firmografico?: PerfilEconomicoSocialFirmografico;
  dividas_publicas?: PerfilEconomicoSocialDividasPublicas;
  patrimonio?: PerfilEconomicoSocialPjPatrimonioResultsPatrimonio;
  filiais?: PerfilEconomicoSocialFiliai[];
}

/** Perfil Economico e Social > PJ - Pessoa Jurídica > Patrimonio. POST /v1/perfil_economico_social/pj/patrimonio. Shape inferred from the examples in TargetData's docs. */
export interface PerfilEconomicoSocialPjPatrimonioResponse {
  results: PerfilEconomicoSocialPjPatrimonioResults;
  header: ResponseHeader;
}

export interface PerfilEconomicoSocialResultsDadosCadastrais {
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
  pais?: unknown;
  razao_social_nome_empresarial?: string;
}

export interface PerfilEconomicoSocialResultsFirmografico {
  capital_social?: string;
  faixa_funcionarios_presumidos?: string;
  quantidade_funcionarios_presumidos?: string;
  quantidade_funcionarios_rais_1?: string;
  quantidade_funcionarios_rais_2?: string;
}

export interface PerfilEconomicoSocialResultsQuadroSocietarioSocio {
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
  pais?: unknown;
  representante_legal_cpf?: string;
  representante_legal_cpf_tratado?: unknown;
  representante_legal_nome?: string;
}

export interface PerfilEconomicoSocialResultsQuadroSocietario {
  mei_proprietario_cpf?: string;
  mei_proprietario_nome?: string;
  socios?: PerfilEconomicoSocialResultsQuadroSocietarioSocio[];
}

export interface PerfilEconomicoSocialResultsSituacaoCadastral {
  cd_situacao_cadastral?: string;
  cd_situacao_cadastral_motivo?: string;
  ds_situacao_cadastral?: string;
  ds_situacao_cadastral_motivo?: string;
  situacao_cadastral_data?: string;
  situacao_especial?: string;
  situacao_especial_data?: unknown;
}

export interface PerfilEconomicoSocialLimiteCreditoPj {
  limite_credito_perfil_arrojado?: string;
  percentual_capacidade_pagamento_perfil_arrojado?: string;
  limite_credito_perfil_usual?: string;
  percentual_capacidade_pagamento_perfil_usual?: string;
  limite_credito_perfil_conservador?: string;
  percentual_capacidade_pagamento_perfil_conservador?: string;
  codigo_erro?: string | null;
  mensagem_erro?: string | null;
}

export interface PerfilEconomicoSocialFaturamentoPresimidoPj {
  faixa_faturamento?: string;
  faturamento_presumido_pj?: string;
  porte_empresa?: string;
  produto?: string | null;
  codigo_erro?: string | null;
  mensagem_erro?: string | null;
  faturamento_mensal_presumido_pj?: string;
}

export interface PerfilEconomicoSocialGastoEstimadoPjSaudeFinanceira {
  nivel?: number;
  nivel_nome?: string;
  descricao?: string;
  indicadores?: string;
}

export interface PerfilEconomicoSocialGastoEstimadoPj {
  cnpj?: string;
  data_referencia?: string;
  faixa_presumida?: string;
  percentual_presumido?: string;
  valor_gasto?: string;
  percentual_gasto?: string;
  codigo_erro?: string | null;
  mensagem_erro?: string | null;
  saude_financeira?: PerfilEconomicoSocialGastoEstimadoPjSaudeFinanceira;
  valor_gasto_anual?: string;
}

export interface PerfilEconomicoSocialPjSaudeFinanceiraResults {
  dados_cadastrais?: PerfilEconomicoSocialResultsDadosCadastrais;
  dados_contato?: PerfilEconomicoSocialDadosContato;
  dividas_publicas?: PerfilEconomicoSocialDividasPublicas;
  filiais?: PerfilEconomicoSocialFiliai[];
  firmografico?: PerfilEconomicoSocialResultsFirmografico;
  patrimonio?: PerfilEconomicoSocialPjPatrimonioResultsPatrimonio;
  quadro_societario?: PerfilEconomicoSocialResultsQuadroSocietario;
  regime_tributario?: PerfilEconomicoSocialRegimeTributario;
  situacao_cadastral?: PerfilEconomicoSocialResultsSituacaoCadastral;
  cnpj?: string;
  data_referencia?: PerfilEconomicoSocialDataReferencia;
  limite_credito_pj?: PerfilEconomicoSocialLimiteCreditoPj;
  faturamento_presimido_pj?: PerfilEconomicoSocialFaturamentoPresimidoPj;
  gasto_estimado_pj?: PerfilEconomicoSocialGastoEstimadoPj;
  pontuacao_atividade?: string;
  grau_atividade?: string;
  avaliacao?: string;
  descricao_atividade?: string;
}

/** Perfil Economico e Social > PJ - Pessoa Jurídica > Saude Financeira. POST /v1/perfil_economico_social/pj/saude-financeira. Shape inferred from the examples in TargetData's docs. */
export interface PerfilEconomicoSocialPjSaudeFinanceiraResponse {
  results: PerfilEconomicoSocialPjSaudeFinanceiraResults;
  header: ResponseHeader;
}
