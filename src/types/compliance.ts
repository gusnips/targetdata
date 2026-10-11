import type { RawResponse, ResponseHeader } from "./common";

export interface ComplianceUltimasOcorrencia {
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

export interface ComplianceBolsaFamilia {
  quantidade?: string;
  valor?: string;
  ultimas_ocorrencias?: ComplianceUltimasOcorrencia[];
}

export interface ComplianceAuxilioEmergencialUltimasOcorrencia {
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

export interface ComplianceAuxilioEmergencial {
  quantidade?: string;
  valor?: string;
  ultimas_ocorrencias?: ComplianceAuxilioEmergencialUltimasOcorrencia[];
}

export interface ComplianceAuxilioBrasilUltimasOcorrencia {
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

export interface ComplianceAuxilioBrasil {
  quantidade?: string;
  valor?: string;
  ultimas_ocorrencias?: ComplianceAuxilioBrasilUltimasOcorrencia[];
}

export interface CompliancePrestacaoContinuadaUltimasOcorrencia {
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

export interface CompliancePrestacaoContinuada {
  quantidade?: string;
  valor?: string;
  ultimas_ocorrencias?: CompliancePrestacaoContinuadaUltimasOcorrencia[];
}

export interface ComplianceSeguroDefeso {
  quantidade?: string;
  valor?: string;
  ultimas_ocorrencias?: unknown[];
}

export interface ComplianceGarantiaSafraUltimasOcorrencia {
  mes_referencia?: string;
  uf?: string;
  codigo_municipio_siafi?: string;
  nome_municipio?: string;
  nis_favorecido?: string;
  nome_favorecido?: string;
  valor_parcela?: string;
  data_atualizacao?: string;
}

export interface ComplianceGarantiaSafra {
  quantidade?: string;
  valor?: string;
  ultimas_ocorrencias?: ComplianceGarantiaSafraUltimasOcorrencia[];
}

export interface ComplianceBeneficioSocial {
  bolsa_familia?: ComplianceBolsaFamilia;
  auxilio_emergencial?: ComplianceAuxilioEmergencial;
  auxilio_brasil?: ComplianceAuxilioBrasil;
  prestacao_continuada?: CompliancePrestacaoContinuada;
  seguro_defeso?: ComplianceSeguroDefeso;
  garantia_safra?: ComplianceGarantiaSafra;
}

export interface ComplianceCadastral {
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

export interface ComplianceAposentado {
  cod_org_lotacao?: string;
  cod_orgsup_lotacao?: string;
  cod_tipo_aposentadoria?: string;
  cod_tipo_vinculo?: string;
  cod_uorg_lotacao?: string;
  data_aposentadoria?: string;
  data_atualizacao?: string;
  data_diploma_ingresso_servicopublico?: string;
  data_ingresso_cargofuncao?: string;
  data_ingresso_orgao?: string;
  data_nomeacao_cargofuncao?: unknown;
  descricao_cargo?: string;
  diploma_ingresso_cargofuncao?: unknown;
  diploma_ingresso_orgao?: string;
  diploma_ingresso_servicopublico?: string;
  documento_ingresso_servicopublico?: string;
  id_servidor_portal?: string;
  jornada_de_trabalho?: string;
  matricula?: string;
  org_lotacao?: string;
  orgsup_lotacao?: string;
  regime_juridico?: string;
  situacao_vinculo?: string;
  tipo_aposentadoria?: string;
  tipo_servidor?: string;
  tipo_vinculo?: string;
  uorg_lotacao?: string;
}

export interface ComplianceCeafItem {
  abragencia_definida_em_decisao_judicial?: string;
  cadastro?: string;
  cargo_efetivo?: unknown;
  categoria_da_sancao?: string;
  codigo_da_sancao?: string;
  cpf_ou_cnpj_do_sancionado?: string;
  data_atualizacao?: string;
  data_do_transito_em_julgado?: string;
  data_final_sancao?: string;
  data_inicio_sancao?: string;
  data_publicacao?: string;
  detalhamento?: string;
  funcao_ou_cargo_de_confianca?: unknown;
  fundamentacao_legal?: string;
  nome_do_sancionado?: string;
  numero_do_documento?: string;
  numero_do_processo?: string;
  orgao_de_lotacao?: string;
  orgao_sancionador?: string;
  publicacao?: string;
  tipo_de_pessoa?: string;
  uf_orgao_sancionador?: string;
}

export interface ComplianceCei {
  abragencia_definida_em_decisao_judicial?: unknown;
  cadastro?: string;
  categoria_da_sancao?: string;
  codigo_da_sancao?: string;
  cpf_ou_cnpj_do_sancionado?: string;
  data_atualizacao?: string;
  data_do_transito_em_julgado?: string;
  data_final_sancao?: string;
  data_inicio_sancao?: string;
  data_publicacao?: string;
  detalhamento?: string;
  fundamentacao_legal?: string;
  nome_do_sancionado?: string;
  nome_fantasia_cadastro_receita?: unknown;
  nome_informado_pelo_orgao_sancionador?: string;
  numero_do_processo?: string;
  orgao_sancionador?: string;
  publicacao?: string;
  razao_social_cadastro_receita?: unknown;
  tipo_de_pessoa?: string;
  uf_orgao_sancionador?: string;
}

export interface ComplianceCnepItem {
  abragencia_definida_em_decisao_judicial?: string;
  cadastro?: string;
  categoria_da_sancao?: string;
  codigo_da_sancao?: string;
  cpf_ou_cnpj_do_sancionado?: string;
  data_atualizacao?: string;
  data_do_transito_em_julgado?: string;
  data_final_sancao?: string;
  data_inicio_sancao?: string;
  data_publicacao?: string;
  detalhamento?: string;
  fundamentacao_legal?: string;
  nome_do_sancionado?: string;
  nome_fantasia_cadastro_receita?: unknown;
  nome_informado_pelo_orgao_sancionador?: string;
  numero_do_processo?: string;
  orgao_sancionador?: string;
  publicacao?: string;
  razao_social_cadastro_receita?: unknown;
  tipo_de_pessoa?: string;
  uf_orgao_sancionador?: string;
  valor_da_multa?: string;
}

export interface ComplianceDoadoresEleitorai {
  data_atualizacao?: string;
  valor_da_doacao?: string;
}

export interface ComplianceHonorario {
  ano?: string;
  data_atualizacao?: string;
  id_servidor_portal?: string;
  mes?: string;
  observacoes?: unknown;
  tipo_servidor?: string;
  valor?: string;
}

export interface ComplianceIbamaItem {
  acao_fiscalizatoria?: string;
  cod_municipio?: string;
  cod_tipo_bioma?: string;
  cod_uf?: string;
  cpf_cnpj_embargado?: string;
  dat_embargo?: string;
  dat_impressao?: string;
  dat_ult_alter_geom?: string;
  dat_ult_alteracao?: string;
  data_atualizacao?: string;
  des_infracao?: string;
  des_localizacao?: string;
  des_tad?: string;
  des_tipo_bioma?: string;
  municipio?: string;
  nome_imovel?: unknown;
  nome_pessoa_embargada?: string;
  num_auto_infracao?: string;
  num_latitude_gms_tad?: string;
  num_latitude_tad?: string;
  num_longitude_gms_tad?: string;
  num_longitude_tad?: string;
  num_processo?: string;
  num_tad?: string;
  operacao?: unknown;
  ordem_fiscalizacao?: string;
  qtd_area_desmatada?: string;
  qtd_area_embargada?: string;
  seq_tad?: string;
  ser_auto_infracao?: string;
  ser_tad?: string;
  sit_desmatamento?: string;
  uf?: string;
  wkt_geom_area_embargada?: string;
}

export interface ComplianceMilitare {
  atividade?: unknown;
  classe_cargo?: string;
  cod_org_exercicio?: string;
  cod_org_lotacao?: string;
  cod_orgsup_exercicio?: string;
  cod_orgsup_lotacao?: string;
  cod_tipo_vinculo?: string;
  cod_uorg_exercicio?: unknown;
  cod_uorg_lotacao?: string;
  codigo_atividade?: unknown;
  data_atualizacao?: string;
  data_diploma_ingresso_servicopublico?: string;
  data_ingresso_cargofuncao?: string;
  data_ingresso_orgao?: string;
  data_inicio_afastamento?: unknown;
  data_nomeacao_cargofuncao?: unknown;
  data_termino_afastamento?: unknown;
  descricao_cargo?: string;
  diploma_ingresso_cargofuncao?: unknown;
  diploma_ingresso_orgao?: unknown;
  diploma_ingresso_servicopublico?: string;
  documento_ingresso_servicopublico?: string;
  funcao?: unknown;
  id_servidor_portal?: string;
  jornada_de_trabalho?: string;
  matricula?: string;
  nivel_cargo?: string;
  nivel_funcao?: unknown;
  opcao_parcial?: unknown;
  org_exercicio?: string;
  org_lotacao?: string;
  orgsup_exercicio?: string;
  orgsup_lotacao?: string;
  padrao_cargo?: string;
  referencia_cargo?: string;
  regime_juridico?: string;
  sigla_funcao?: unknown;
  situacao_vinculo?: string;
  tipo_vinculo?: string;
  uf_exercicio?: unknown;
  uorg_exercicio?: unknown;
  uorg_lotacao?: string;
}

export interface CompliancePensionistaItem {
  cod_org_lotacao_instituidor_pensao?: string;
  cod_orgsup_lotacao_instituidor_pensao?: string;
  cod_tipo_pensao?: string;
  cod_tipo_vinculo?: string;
  cod_uorg_lotacao_instituidor_pensao?: unknown;
  cpf_instituidor_pensao?: unknown;
  data_atualizacao?: string;
  data_diploma_ingresso_servicopublico_instituidor_pensao?: unknown;
  data_ingresso_cargofuncao_instituidor_pensao?: unknown;
  data_ingresso_orgao_instituidor_pensao?: unknown;
  data_inicio_pensao?: string;
  data_nomeacao_cargofuncao_instituidor_pensao?: unknown;
  descricao_cargo_instituidor_pensao?: string;
  diploma_ingresso_cargofuncao_instituidor_pensao?: unknown;
  diploma_ingresso_orgao_instituidor_pensao?: unknown;
  diploma_ingresso_servicopublico_instituidor_pensao?: unknown;
  documento_ingresso_servicopublico_instituidor_pensao?: string;
  id_servidor_portal?: string;
  jornada_de_trabalho_instituidor_pensao?: string;
  matricula?: string;
  nome_instituidor_pensao?: unknown;
  nome_representante_legal?: unknown;
  org_lotacao_instituidor_pensao?: string;
  orgsup_lotacao_instituidor_pensao?: string;
  regime_juridico_instituidor_pensao?: string;
  situacao_vinculo?: string;
  tipo_pensao?: string;
  tipo_vinculo?: string;
  uorg_lotacao_instituidor_pensao?: unknown;
}

export interface CompliancePepItem {
  sg_funcao?: string;
  ds_funcao?: string;
  ds_nome_orgao?: string;
  ds_nivel_funcao?: unknown;
  dt_inicio?: string;
  dt_fim?: string;
  dt_fim_carencia?: string;
  dt_atualizacao?: string;
}

export interface ComplianceReservaMilitare {
  cod_org_lotacao?: string;
  cod_orgsup_lotacao?: string;
  cod_tipo_aposentadoria?: string;
  cod_tipo_vinculo?: string;
  cod_uorg_lotacao?: string;
  data_aposentadoria?: string;
  data_atualizacao?: string;
  data_diploma_ingresso_servicopublico?: string;
  data_ingresso_cargofuncao?: string;
  data_ingresso_orgao?: string;
  data_nomeacao_cargofuncao?: unknown;
  descricao_cargo?: string;
  diploma_ingresso_cargofuncao?: unknown;
  diploma_ingresso_orgao?: unknown;
  diploma_ingresso_servicopublico?: string;
  documento_ingresso_servicopublico?: string;
  id_servidor_portal?: string;
  jornada_de_trabalho?: string;
  matricula?: string;
  org_lotacao?: string;
  orgsup_lotacao?: string;
  regime_juridico?: string;
  situacao_vinculo?: string;
  tipo_aposentadoria?: string;
  tipo_vinculo?: string;
  uorg_lotacao?: string;
}

export interface ComplianceServidorPublicoItem {
  atividade?: unknown;
  classe_cargo?: unknown;
  cod_org_exercicio?: string;
  cod_org_lotacao?: string;
  cod_orgsup_exercicio?: string;
  cod_orgsup_lotacao?: string;
  cod_tipo_vinculo?: string;
  cod_uorg_exercicio?: unknown;
  cod_uorg_lotacao?: string;
  codigo_atividade?: unknown;
  data_atualizacao?: string;
  data_diploma_ingresso_servicopublico?: string;
  data_ingresso_cargofuncao?: string;
  data_ingresso_orgao?: string;
  data_inicio_afastamento?: unknown;
  data_nomeacao_cargofuncao?: unknown;
  data_termino_afastamento?: unknown;
  descricao_cargo?: string;
  diploma_ingresso_cargofuncao?: unknown;
  diploma_ingresso_orgao?: string;
  diploma_ingresso_servicopublico?: string;
  documento_ingresso_servicopublico?: string;
  funcao?: unknown;
  id_servidor_portal?: string;
  jornada_de_trabalho?: string;
  matricula?: string;
  nivel_cargo?: string;
  nivel_funcao?: unknown;
  opcao_parcial?: unknown;
  org_exercicio?: string;
  org_lotacao?: string;
  orgsup_exercicio?: unknown;
  orgsup_lotacao?: unknown;
  padrao_cargo?: unknown;
  referencia_cargo?: string;
  regime_juridico?: string;
  sigla_funcao?: unknown;
  situacao_vinculo?: string;
  tipo_servidor?: string;
  tipo_vinculo?: string;
  uf_exercicio?: unknown;
  uorg_exercicio?: string;
  uorg_lotacao?: string;
}

export interface ComplianceVinculoPepItem {
  nr_cpf?: string;
  nm_completo?: string;
  vinculo?: string;
  cs_vinculo_familia?: string;
  cd_qualificacao_socio?: unknown;
  nr_cnpj?: unknown;
  sg_funcao?: string;
  ds_funcao?: string;
  ds_nome_orgao?: string;
  ds_nivel_funcao?: unknown;
  dt_inicio?: string;
  dt_fim?: string;
  dt_fim_carencia?: string;
  dt_atualizacao?: string;
}

export interface ComplianceCompliance {
  aposentados?: ComplianceAposentado[];
  ceaf?: ComplianceCeafItem[];
  ceis?: ComplianceCei[];
  cnep?: ComplianceCnepItem[];
  doadores_eleitorais?: ComplianceDoadoresEleitorai[];
  honorarios?: ComplianceHonorario[];
  ibama?: ComplianceIbamaItem[];
  militares?: ComplianceMilitare[];
  pensionista?: CompliancePensionistaItem[];
  pep?: CompliancePepItem[];
  reserva_militares?: ComplianceReservaMilitare[];
  servidor_publico?: ComplianceServidorPublicoItem[];
  vinculo_pep?: ComplianceVinculoPepItem[];
}

export interface ComplianceEmailItem {
  cd_ordem?: number;
  ds_email?: string;
  dt_inclusao?: string;
}

export interface ComplianceEnderecoItem {
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

export interface ComplianceTelefoneItem {
  cd_ordem?: number;
  ds_tipo_telefone?: string;
  dt_inclusao?: string;
  nr_ddd?: string;
  nr_ddi?: unknown;
  nr_telefone?: string;
  uf_ddd?: string;
}

export interface ComplianceContato {
  email?: ComplianceEmailItem[];
  endereco?: ComplianceEnderecoItem[];
  telefone?: ComplianceTelefoneItem[];
}

export interface CompliancePgfnPrevidenciarioUltimasOcorrencia {
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

export interface CompliancePgfnPrevidenciario {
  quantidade?: string;
  valor?: string;
  ultimas_ocorrencias?: CompliancePgfnPrevidenciarioUltimasOcorrencia[];
}

export interface CompliancePgfnFgtsUltimasOcorrencia {
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

export interface CompliancePgfnFgts {
  quantidade?: string;
  valor?: string;
  ultimas_ocorrencias?: CompliancePgfnFgtsUltimasOcorrencia[];
}

export interface CompliancePgfnNaoPrevidenciarioUltimasOcorrencia {
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

export interface CompliancePgfnNaoPrevidenciario {
  quantidade?: string;
  valor?: string;
  ultimas_ocorrencias?: CompliancePgfnNaoPrevidenciarioUltimasOcorrencia[];
}

export interface ComplianceDividaPublica {
  pgfn_previdenciario?: CompliancePgfnPrevidenciario;
  pgfn_fgts?: CompliancePgfnFgts;
  pgfn_nao_previdenciario?: CompliancePgfnNaoPrevidenciario;
}

export interface ComplianceObito {
  st_obito?: boolean;
  tipo_obito?: string;
  fonte_obito?: string;
  dt_obito?: unknown;
  mes_obito?: unknown;
  ano_obito?: unknown;
  possivel_obito?: boolean;
}

export interface ComplianceParticipacoesEmpresa {
  cd_ordem?: number;
  dt_entrada?: string;
  cd_qualificacao?: string;
  ds_qualificacao?: string;
  nm_empresarial?: string;
  nr_cnpj?: string;
}

export interface ComplianceMeiItem {
  cd_ordem?: number;
  nm_empresarial?: string;
  nm_fantasia?: string;
  nr_cnpj?: string;
}

export interface ComplianceImovei {
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

export interface ComplianceImoveisRurai {
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

export interface ComplianceAeronave {
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

export interface CompliancePatrimonio {
  st_empresario?: boolean;
  st_multiempresario?: boolean;
  participacoes_empresas?: ComplianceParticipacoesEmpresa[];
  mei?: ComplianceMeiItem[];
  imoveis?: ComplianceImovei[];
  imoveis_rurais?: ComplianceImoveisRurai[];
  aeronaves?: ComplianceAeronave[];
}

export interface ComplianceHistoricoOcupacao {
  cbo?: string;
  renda_presumida?: string;
  ano?: string;
  faixa_renda_presumida?: string;
  ds_ocupacao?: string;
}

export interface ComplianceSocioeconomico {
  cd_ocupacao?: unknown;
  ds_faixa_renda_presumida?: string;
  ds_grau_escolaridade?: unknown;
  ds_ocupacao?: unknown;
  dt_faixa_renda_presumida?: string;
  dt_grau_escolaridade?: unknown;
  dt_ocupacao?: unknown;
  historico_ocupacoes?: ComplianceHistoricoOcupacao[];
}

export interface ComplianceParentescoItem {
  cd_ordem?: number;
  dt_informacao?: string;
  nm_completo?: string;
  nr_cpf?: string;
  ds_vinculo?: string;
}

export interface ComplianceEmpregadorItem {
  cd_ordem?: number;
  dt_informacao?: string;
  nr_cnpj?: string;
  razao_social?: string;
  dt_admissao?: string;
  dt_demissao?: string;
}

export interface CompliancePossiveisColegasTrabalhoItem {
  cd_ordem?: number;
  nr_cpf?: string;
  nm_completo?: string;
}

export interface ComplianceSocio {
  dt_entrada?: string;
  nr_cpf?: string;
  nm_completo?: string;
  vinculo?: string;
  qualificacao?: string;
  nr_cnpj?: string;
}

export interface ComplianceVinculo {
  parentesco?: ComplianceParentescoItem[];
  empregador?: ComplianceEmpregadorItem[];
  possiveis_colegas_trabalho?: CompliancePossiveisColegasTrabalhoItem[];
  socios?: ComplianceSocio[];
}

export interface ComplianceResult {
  beneficio_social?: ComplianceBeneficioSocial;
  cadastral?: ComplianceCadastral;
  compliance?: ComplianceCompliance;
  contato?: ComplianceContato;
  divida_publica?: ComplianceDividaPublica;
  obito?: ComplianceObito;
  patrimonio?: CompliancePatrimonio;
  socioeconomico?: ComplianceSocioeconomico;
  vinculo?: ComplianceVinculo;
}

/** Compliance > PF - Pessoa Física > Compliance Basic. POST /v1/compliance/pf/basic. Shape inferred from the examples in TargetData's docs. */
export interface CompliancePfBasicResponse {
  results: ComplianceResult[];
  header: ResponseHeader;
}

/** Compliance > PF - Pessoa Física > Compliance Complete. POST /v1/compliance/pf/complete. Shape inferred from the examples in TargetData's docs. No example answer in the docs, so `results` is `unknown`. */
export type CompliancePfCompleteResponse = RawResponse;

export interface ComplianceComplianceCei {
  categoria_da_sancao?: string;
  codigo_da_sancao?: string;
  data_atualizacao?: string;
  data_do_transito_em_julgado?: string;
  data_final_sancao?: string;
  data_inicio_sancao?: string;
  data_publicacao?: string;
  fundamentacao_legal?: string;
  match_id?: string;
  nome_completo?: string;
  numero_do_processo?: string;
  numero_documento?: string;
  orgao_sancionador?: string;
  publicacao?: string;
  tipo_documento?: string;
  uf_orgao_sancionador?: string;
}

export interface ComplianceCepimItem {
  data_atualizacao?: string;
  match_id?: string;
  motivo_do_impedimento?: string;
  nome_completo?: string;
  numero_convenio?: string;
  numero_documento?: string;
  orgao_concedente?: string;
  tipo_documento?: string;
}

export interface ComplianceComplianceCnepItem {
  categoria_da_sancao?: string;
  codigo_da_sancao?: string;
  data_atualizacao?: string;
  data_do_transito_em_julgado?: string;
  data_final_sancao?: string;
  data_inicio_sancao?: string;
  fundamentacao_legal?: string;
  match_id?: string;
  nome_completo?: string;
  numero_do_processo?: string;
  numero_documento?: string;
  orgao_sancionador?: string;
  publicacao?: string;
  tipo_documento?: string;
  uf_orgao_sancionador?: string;
  valor_da_multa?: string;
}

export interface ComplianceComplianceIbamaItem {
  dat_embargo?: string;
  data_atualizacao?: string;
  des_infracao?: string;
  des_tipo_bioma?: string;
  match_id?: string;
  municipio?: string;
  nome_completo?: string;
  num_processo?: string;
  numero_documento?: string;
  tipo_documento?: string;
  uf?: string;
}

export interface ComplianceEfeitosAcordoItem {
  complemento?: string;
  efeito?: string;
}

export interface ComplianceMpfLenienciaItem {
  data_atualizacao?: string;
  data_de_fim_do_acordo?: string;
  data_de_inicio_do_acordo?: string;
  efeitos_acordo?: ComplianceEfeitosAcordoItem[];
  id_do_acordo?: string;
  match_id?: string;
  nome_completo?: string;
  numero_do_processo?: string;
  numero_documento?: string;
  orgao_sancionador?: string;
  situacao_do_acordo_de_lenienica?: string;
  termos_do_acordo?: string;
  tipo_documento?: string;
}

export interface ComplianceMptListaSujaItem {
  ano_da_acao_fiscal?: string;
  data_atualizacao?: string;
  decisao_administrativa_de_procedencia?: string;
  empregador?: string;
  inclusao_no_cadastro_de_empregadores?: string;
  match_id?: string;
  nome_completo?: string;
  numero_documento?: string;
  tipo_documento?: string;
  trabalhadores_envolvidos?: string;
  uf?: string;
}

export interface ComplianceCompliancePepItem {
  data_atualizacao?: string;
  data_fim_carencia?: string;
  data_fim_exercicio?: string;
  data_inicio_exercicio?: string;
  nivel_funcao?: string;
  nome_orgao?: string;
  nome_pep?: string;
}

export interface ComplianceTcuItem {
  data_atualizacao?: string;
  data_do_acordao?: string;
  data_final?: string;
  deliberacao?: string;
  match_id?: string;
  nome_completo?: string;
  numero_documento?: string;
  processo?: string;
  tipo_documento?: string;
  transito_em_julgado?: string;
  uf?: string;
}

export interface ComplianceResultsCompliance {
  ceis?: ComplianceComplianceCei[];
  cepim?: ComplianceCepimItem[];
  cnep?: ComplianceComplianceCnepItem[];
  ibama?: ComplianceComplianceIbamaItem[];
  mpf_leniencia?: ComplianceMpfLenienciaItem[];
  mpt_lista_suja?: ComplianceMptListaSujaItem[];
  pep?: ComplianceCompliancePepItem[];
  tcu?: ComplianceTcuItem[];
}

export interface ComplianceDadosCadastrais {
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

export interface ComplianceEmail {
  email?: string;
  ordem?: string;
  rfb?: boolean;
}

export interface ComplianceFax {
  ddd?: string;
  numero?: string;
  ordem?: string;
  tipo?: string;
}

export interface ComplianceLogradouroGeoComposed {
  lat?: string;
  lon?: string;
}

export interface ComplianceLogradouro {
  logradouro_bairro?: string;
  logradouro_cep?: string;
  logradouro_complemento?: string;
  logradouro_endereco?: string;
  logradouro_geo_composed?: ComplianceLogradouroGeoComposed;
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

export interface ComplianceTelefone {
  ddd?: string;
  ddi?: string;
  numero?: string;
  ordem?: string;
  rfb?: boolean;
  tipo?: string;
}

export interface ComplianceDadosContato {
  emails?: ComplianceEmail[];
  faxs?: ComplianceFax[];
  logradouros?: ComplianceLogradouro[];
  telefones?: ComplianceTelefone[];
}

export interface ComplianceDividasPublicasPgfnFgtsUltimasOcorrencia {
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

export interface ComplianceDividasPublicasPgfnFgts {
  quantidade?: string;
  ultimas_ocorrencias?: ComplianceDividasPublicasPgfnFgtsUltimasOcorrencia[];
  valor?: string;
}

export interface ComplianceDividasPublicasPgfnNaoPrevidenciarioUltimasOcorrencia {
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

export interface ComplianceDividasPublicasPgfnNaoPrevidenciario {
  quantidade?: string;
  ultimas_ocorrencias?: ComplianceDividasPublicasPgfnNaoPrevidenciarioUltimasOcorrencia[];
  valor?: string;
}

export interface ComplianceDividasPublicasPgfnPrevidenciarioUltimasOcorrencia {
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

export interface ComplianceDividasPublicasPgfnPrevidenciario {
  quantidade?: string;
  ultimas_ocorrencias?: ComplianceDividasPublicasPgfnPrevidenciarioUltimasOcorrencia[];
  valor?: string;
}

export interface ComplianceDividasPublicas {
  pgfn_fgts?: ComplianceDividasPublicasPgfnFgts;
  pgfn_nao_previdenciario?: ComplianceDividasPublicasPgfnNaoPrevidenciario;
  pgfn_previdenciario?: ComplianceDividasPublicasPgfnPrevidenciario;
}

export interface ComplianceFiliai {
  cnpj_completo?: string;
  nome_fantasia?: string;
  situacao_cadastral?: string;
}

export interface ComplianceFirmografico {
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

export interface CompliancePatrimonioAeronave {
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

export interface ComplianceGrupoEconomicoItem {
  cnpj_basico?: string;
  razao_social?: string;
}

export interface ComplianceMultiempresarialItem {
  cnpj_basico?: string;
  razao_social?: string;
}

export interface ComplianceResultsPatrimonio {
  aeronaves?: CompliancePatrimonioAeronave[];
  grupo_economico?: ComplianceGrupoEconomicoItem[];
  multiempresarial?: ComplianceMultiempresarialItem[];
}

export interface ComplianceQuadroSocietarioSocio {
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

export interface ComplianceQuadroSocietario {
  mei_proprietario_cpf?: string;
  mei_proprietario_nome?: string;
  socios?: ComplianceQuadroSocietarioSocio[];
}

export interface ComplianceRegimeTributarioItem {
  ano?: string;
  cnpj_da_scp?: string;
  forma_tributacao?: string;
  municipio?: string;
  quantidade_de_escrituracoes?: string;
  uf?: string;
}

export interface ComplianceRegimeTributario {
  opcao_mei?: boolean;
  opcao_mei_data_exclusao?: string;
  opcao_mei_data_opcao?: string;
  opcao_simples?: boolean;
  opcao_simples_data_exclusao?: string;
  opcao_simples_data_opcao?: string;
  regime_tributario?: ComplianceRegimeTributarioItem[];
}

export interface ComplianceSituacaoCadastral {
  cd_situacao_cadastral?: string;
  cd_situacao_cadastral_motivo?: string;
  ds_situacao_cadastral?: string;
  ds_situacao_cadastral_motivo?: string;
  situacao_cadastral_data?: string;
  situacao_especial?: string;
  situacao_especial_data?: unknown;
}

export interface CompliancePjBasicResults {
  compliance?: ComplianceResultsCompliance;
  dados_cadastrais?: ComplianceDadosCadastrais;
  dados_contato?: ComplianceDadosContato;
  dividas_publicas?: ComplianceDividasPublicas;
  filiais?: ComplianceFiliai[];
  firmografico?: ComplianceFirmografico;
  patrimonio?: ComplianceResultsPatrimonio;
  quadro_societario?: ComplianceQuadroSocietario;
  regime_tributario?: ComplianceRegimeTributario;
  situacao_cadastral?: ComplianceSituacaoCadastral;
}

/** Compliance > PJ - Pessoa Jurídica > Compliance Basic. POST /v1/compliance/pj/basic. Shape inferred from the examples in TargetData's docs. */
export interface CompliancePjBasicResponse {
  results: CompliancePjBasicResults;
  header: ResponseHeader;
}

/** Compliance > PJ - Pessoa Jurídica > Compliance Complete. POST /v1/compliance/pj/complete. Shape inferred from the examples in TargetData's docs. No example answer in the docs, so `results` is `unknown`. */
export type CompliancePjCompleteResponse = RawResponse;
