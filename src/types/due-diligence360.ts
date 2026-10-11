import type { ResponseHeader } from "./common";

export interface DueDiligence360Cadastral {
  nm_completo?: string;
  nm_social?: string | null;
  nr_cpf?: string;
  nm_mae?: string;
  nr_cpf_mae?: string;
  dt_nasc?: string;
  idade?: number;
  ds_faixa_idade?: string;
  sg_sexo?: string;
  ds_sexo?: string;
  ds_signo?: string;
  ds_status_rfb?: string;
  dt_inscricao?: string;
  dt_atualizacao_rfb?: string;
  nr_rg?: string;
  sg_uf_rg?: string;
  ds_orgao_emissor?: string;
  nr_titulo_eleitoral?: string;
  nit_pis?: string | null;
  nacionalidade?: string;
}

export interface DueDiligence360Endereco {
  cd_ordem?: number;
  tipo_logradouro?: string;
  logradouro?: string;
  numero?: string;
  complemento?: string;
  bairro?: string;
  cidade?: string;
  uf?: string;
  cep?: string;
  regiao?: string;
  dt_informacao?: string;
  faixa_fronteira?: boolean;
  cidade_gemea?: boolean;
}

export interface DueDiligence360Telefone {
  cd_ordem?: number;
  ddi?: string | null;
  ddd?: string;
  uf_ddd?: string;
  numero?: string;
  numero_completo?: string;
  tipo?: string;
  tipo_inferido?: string;
  dt_inclusao?: string;
}

export interface DueDiligence360Email {
  cd_ordem?: number;
  email?: string;
  dt_inclusao?: string;
}

export interface DueDiligence360Contato {
  enderecos?: DueDiligence360Endereco[];
  telefones?: DueDiligence360Telefone[];
  emails?: DueDiligence360Email[];
}

export interface DueDiligence360Obito {
  st_obito?: boolean;
  possivel_obito?: boolean;
  dt_obito?: string | null;
  ano_obito?: number | null;
  mes_obito?: number | null;
  tipo_obito?: string | null;
  fonte_obito?: string | null;
}

export interface DueDiligence360ParentescoItem {
  nr_cpf?: string;
  ds_vinculo?: string;
  nm_completo?: string;
  cd_ordem?: number;
  dt_informacao?: string;
}

export interface DueDiligence360EmpregadorItem {
  razao_social?: string;
  nr_cnpj?: string;
  dt_admissao?: string;
  dt_demissao?: string | null;
  cd_ordem?: number;
  dt_informacao?: string;
}

export interface DueDiligence360Socio {
  qualificacao?: string;
  nr_cpf?: string;
  nm_completo?: string;
  vinculo?: string;
  dt_entrada?: string;
  nr_cnpj?: string;
}

export interface DueDiligence360Vinculos {
  parentesco?: DueDiligence360ParentescoItem[];
  empregador?: DueDiligence360EmpregadorItem[];
  possiveis_colegas_trabalho?: unknown[];
  socios?: DueDiligence360Socio[];
}

export interface DueDiligence360HistoricoOcupacao {
  ano?: string;
  ds_ocupacao?: string;
  renda_presumida?: string;
  faixa_renda_presumida?: string;
}

export interface DueDiligence360Socioeconomico {
  ds_ocupacao?: string;
  ds_grau_escolaridade?: string;
  ds_faixa_renda_presumida?: string;
  dt_ocupacao?: string;
  dt_grau_escolaridade?: string;
  dt_faixa_renda_presumida?: string;
  historico_ocupacoes?: DueDiligence360HistoricoOcupacao[];
}

export interface DueDiligence360BolsaFamilia {
  ultimas_ocorrencias?: unknown[];
  valor?: string;
  quantidade?: string;
}

export interface DueDiligence360GarantiaSafra {
  ultimas_ocorrencias?: unknown[];
  valor?: string;
  quantidade?: string;
}

export interface DueDiligence360PrestacaoContinuada {
  ultimas_ocorrencias?: unknown[];
  valor?: string;
  quantidade?: string;
}

export interface DueDiligence360SeguroDefeso {
  ultimas_ocorrencias?: unknown[];
  valor?: string;
  quantidade?: string;
}

export interface DueDiligence360AuxilioBrasil {
  ultimas_ocorrencias?: unknown[];
  valor?: string;
  quantidade?: string;
}

export interface DueDiligence360AuxilioEmergencial {
  ultimas_ocorrencias?: unknown[];
  valor?: string;
  quantidade?: string;
}

export interface DueDiligence360BeneficiosSociais {
  bolsa_familia?: DueDiligence360BolsaFamilia;
  garantia_safra?: DueDiligence360GarantiaSafra;
  prestacao_continuada?: DueDiligence360PrestacaoContinuada;
  seguro_defeso?: DueDiligence360SeguroDefeso;
  auxilio_brasil?: DueDiligence360AuxilioBrasil;
  auxilio_emergencial?: DueDiligence360AuxilioEmergencial;
}

export interface DueDiligence360UltimasOcorrencia {
  numero_inscricao?: string;
  indicador_ajuizado?: string;
  data_inscricao?: string;
  situacao_inscricao?: string;
  tipo_devedor?: string;
  flag_controle?: string;
  data_atualizacao?: string;
  uf_devedor?: string;
  tipo_situacao_inscricao?: string;
  valor_consolidado?: string;
  unidade_responsavel?: string;
  data_referencia?: string;
}

export interface DueDiligence360PgfnPrevidenciario {
  ultimas_ocorrencias?: DueDiligence360UltimasOcorrencia[];
  valor?: string;
  quantidade?: string;
  recencia?: number;
}

export interface DueDiligence360PgfnFgts {
  ultimas_ocorrencias?: unknown[];
  valor?: string;
  quantidade?: string;
}

export interface DueDiligence360PgfnNaoPrevidenciario {
  ultimas_ocorrencias?: unknown[];
  valor?: string;
  quantidade?: string;
}

export interface DueDiligence360DividasPublicas {
  pgfn_previdenciario?: DueDiligence360PgfnPrevidenciario;
  pgfn_fgts?: DueDiligence360PgfnFgts;
  pgfn_nao_previdenciario?: DueDiligence360PgfnNaoPrevidenciario;
}

export interface DueDiligence360MeiItem {
  nm_empresarial?: string;
  nm_fantasia?: string;
  nr_cnpj?: string;
  cd_ordem?: number;
}

export interface DueDiligence360Imovei {
  sg_uf?: string;
  ds_cidade?: string;
  nr_cep?: string;
  sg_tipo_logradouro?: string;
  ds_logradouro?: string;
  nr_numero?: string;
  ds_complemento?: string;
  ds_bairro?: string;
  nr_contribuente?: string;
  ds_tipo_uso_imovel?: string;
  ds_tipo_padrao_construcao?: string;
  ds_tipo_terreno?: string;
  ds_area_terreno?: string;
  ds_area_construida?: string;
  ds_area_ocupada?: string;
  qtd_pavimentos?: string;
  qtd_esquinas_frentes?: string | null;
  vl_testada_para_calculo?: string;
  vl_metro_quadrado_terreno?: string;
  vl_metro_quadrado_construcao?: string;
  vl_latitude?: string;
  vl_longitude?: string;
  dt_cadastramento?: string;
  ds_ano_exercicio?: string;
  ds_ano_inicio_vida_contribuente?: string;
  ds_mes_inicio_vida_contribuente?: string;
  nr_fator_obsolescencia?: string;
}

export interface DueDiligence360ImoveisRurai {
  uf?: string;
  cnae?: string;
  ie?: string;
  produtores_rurais_id?: string;
  empresas_id?: string | null;
  contatos_id?: string;
  protocolo?: string | null;
  data_inclusao?: string;
  data_atualizacao?: string;
  data_consulta?: string;
}

export interface DueDiligence360ParticipacoesEmpresa {
  nm_empresarial?: string;
  nr_cnpj?: string;
  cd_qualificacao?: string;
  ds_qualificacao?: string;
  cd_ordem?: number;
  dt_entrada?: string;
}

export interface DueDiligence360Patrimonio {
  mei?: DueDiligence360MeiItem[];
  aeronaves?: unknown[];
  imoveis?: DueDiligence360Imovei[];
  imoveis_rurais?: DueDiligence360ImoveisRurai[];
  participacoes_empresas?: DueDiligence360ParticipacoesEmpresa[];
  st_empresario?: boolean;
  st_multiempresario?: boolean;
}

export interface DueDiligence360Cei {
  nome_do_sancionado?: string;
  nome_informado_pelo_orgao_sancionador?: string;
  cpf_ou_cnpj_do_sancionado?: string;
  tipo_de_pessoa?: string;
  orgao_sancionador?: string;
  esfera_orgao_sancionador?: string;
  uf_orgao_sancionador?: string;
  categoria_da_sancao?: string;
  codigo_da_sancao?: string;
  cadastro?: string;
  data_inicio_sancao?: string;
  data_final_sancao?: string;
  data_do_transito_em_julgado?: string;
  fundamentacao_legal?: string;
  numero_do_processo?: string;
  publicacao?: string | null;
  data_publicacao?: string | null;
  data_origem_informacao?: string;
  data_referencia?: string;
  data_atualizacao?: string;
  razao_social_cadastro_receita?: string | null;
  nome_fantasia_cadastro_receita?: string | null;
  abragencia_da_sancao?: string | null;
  detalhamento_do_meio_de_publicacao?: string | null;
  origem_informacoes?: string;
  observacoes?: string | null;
}

export interface DueDiligence360CnepItem {
  nome_do_sancionado?: string;
  nome_informado_pelo_orgao_sancionador?: string;
  cpf_ou_cnpj_do_sancionado?: string;
  tipo_de_pessoa?: string;
  orgao_sancionador?: string;
  esfera_orgao_sancionador?: string;
  uf_orgao_sancionador?: string;
  categoria_da_sancao?: string;
  codigo_da_sancao?: string;
  cadastro?: string;
  data_inicio_sancao?: string;
  data_final_sancao?: string;
  data_do_transito_em_julgado?: string;
  fundamentacao_legal?: string;
  numero_do_processo?: string;
  publicacao?: string;
  data_publicacao?: string;
  data_origem_informacao?: string | null;
  data_referencia?: string | null;
  data_atualizacao?: string;
  razao_social_cadastro_receita?: string | null;
  nome_fantasia_cadastro_receita?: string | null;
  abragencia_da_sancao?: string | null;
  abragencia_definida_em_decisao_judicial?: string;
  detalhamento?: string;
  valor_da_multa?: string;
  observacoes?: string | null;
}

export interface DueDiligence360CeafItem {
  nome_do_sancionado?: string;
  nome_informado_pelo_orgao_sancionador?: string;
  cpf_ou_cnpj_do_sancionado?: string;
  tipo_de_pessoa?: string;
  orgao_sancionador?: string;
  esfera_orgao_sancionador?: string;
  uf_orgao_sancionador?: string;
  categoria_da_sancao?: string;
  codigo_da_sancao?: string;
  cadastro?: string;
  data_inicio_sancao?: string;
  data_final_sancao?: string;
  data_do_transito_em_julgado?: string;
  fundamentacao_legal?: string;
  numero_do_processo?: string;
  publicacao?: string;
  data_publicacao?: string;
  data_origem_informacao?: string | null;
  data_referencia?: string | null;
  data_atualizacao?: string;
  razao_social_cadastro_receita?: string | null;
  nome_fantasia_cadastro_receita?: string | null;
  abragencia_definida_em_decisao_judicial?: string;
  detalhamento?: string;
  cargo_efetivo?: string | null;
  funcao_ou_cargo_de_confianca?: string | null;
  orgao_de_lotacao?: string;
  observacoes?: string | null;
}

export interface DueDiligence360IbamaItem {
  nome_pessoa_embargada?: string;
  cpf_cnpj_embargado?: string;
  uf?: string;
  municipio?: string;
  dat_embargo?: string;
  des_infracao?: string;
  des_tipo_bioma?: string;
  des_localizacao?: string;
  des_tad?: string;
  num_processo?: string;
  num_auto_infracao?: string;
  num_tad?: string;
  seq_tad?: string;
  qtd_area_desmatada?: string;
  qtd_area_embargada?: string;
  cod_tipo_bioma?: string;
  cod_municipio?: string;
  cod_uf?: string;
  acao_fiscalizatoria?: string;
  ordem_fiscalizacao?: string;
  operacao?: string | null;
  sit_desmatamento?: string;
  ser_auto_infracao?: string;
  ser_tad?: string;
  nome_imovel?: string | null;
  dat_impressao?: string;
  dat_ult_alter_geom?: string;
  dat_ult_alteracao?: string;
  data_atualizacao?: string;
  num_latitude_tad?: string;
  num_longitude_tad?: string;
  num_latitude_gms_tad?: string;
  num_longitude_gms_tad?: string;
  wkt_geom_area_embargada?: string;
}

export interface DueDiligence360MteListaSujaItem {
  empregador?: string;
  estabelecimento?: string;
  uf?: string;
  cnae?: string;
  ano_da_acao_fiscal?: string;
  trabalhadores_envolvidos?: string;
  decisao_administrativa_de_procedencia?: string;
  inclusao_no_cadastro_de_empregadores?: string;
  data_atualizacao?: string;
  data_referencia?: string;
}

export interface DueDiligence360ImpedidosBet {
  alerta?: boolean;
  vinculo?: boolean;
  atividade_esportiva?: boolean;
  meio_apostas?: boolean;
  meio_esportivo?: boolean;
  atividades?: (string | null)[];
  vinculos?: unknown[];
  empresas?: unknown[];
  motivos?: unknown[];
}

export interface DueDiligence360ServidorPublicoItem {
  tipo_servidor?: string;
  descricao_cargo?: string;
  classe_cargo?: string;
  nivel_cargo?: string;
  referencia_cargo?: string;
  padrao_cargo?: string | null;
  tipo_vinculo?: string;
  cod_tipo_vinculo?: string;
  situacao_vinculo?: string;
  regime_juridico?: string;
  jornada_de_trabalho?: string;
  org_lotacao?: string;
  orgsup_lotacao?: string;
  uorg_lotacao?: string;
  cod_org_lotacao?: string;
  cod_uorg_lotacao?: string;
  cod_orgsup_lotacao?: string;
  org_exercicio?: string;
  orgsup_exercicio?: string;
  uorg_exercicio?: string;
  cod_org_exercicio?: string;
  cod_uorg_exercicio?: string;
  cod_orgsup_exercicio?: string;
  uf_exercicio?: string;
  funcao?: string | null;
  sigla_funcao?: string | null;
  nivel_funcao?: string | null;
  tipo_aposentadoria?: string | null;
  cod_tipo_aposentadoria?: string | null;
  matricula?: string;
  id_servidor_portal?: string;
  diploma_ingresso_servicopublico?: string;
  diploma_ingresso_orgao?: string;
  diploma_ingresso_cargofuncao?: string | null;
  documento_ingresso_servicopublico?: string;
  data_ingresso_cargofuncao?: string;
  data_ingresso_orgao?: string;
  data_nomeacao_cargofuncao?: string | null;
  data_diploma_ingresso_servicopublico?: string;
  data_aposentadoria?: string | null;
  data_inicio_afastamento?: string | null;
  data_termino_afastamento?: string | null;
  data_atualizacao?: string;
  data_referencia?: string;
  codigo_atividade?: string | null;
  atividade?: string;
  opcao_parcial?: string | null;
}

export interface DueDiligence360PepItem {
  sg_funcao?: string;
  ds_nome_orgao?: string;
  ds_funcao?: string;
  dt_atualizacao?: string;
  dt_inicio?: string;
  dt_fim?: string;
  dt_fim_carencia?: string;
  ds_nivel_funcao?: string;
}

export interface DueDiligence360VinculoPepItem {
  sg_funcao?: string;
  ds_nome_orgao?: string;
  cd_qualificacao_socio?: string | null;
  ds_funcao?: string;
  dt_fim?: string;
  cs_vinculo_familia?: string;
  ds_nivel_funcao?: string | null;
  dt_inicio?: string;
  dt_fim_carencia?: string;
  nr_cpf?: string;
  nm_completo?: string;
  dt_atualizacao?: string;
  vinculo?: string;
  nr_cnpj?: string | null;
}

export interface DueDiligence360ReferenciaMatch {
  nome?: string;
  nome_fantasia?: unknown;
  data_nascimento?: string;
  score_similaridade?: number;
  score_data_nascimento?: number;
  score_geral?: number;
  nome_encontrado?: string;
  nome_usado?: string;
  match_por_contencao?: boolean;
}

export interface DueDiligence360ControleMatch {
  tipo?: string;
  documento_referencia?: string;
  referencia_match?: DueDiligence360ReferenciaMatch;
}

export interface DueDiligence360PepListasRiItem {
  controle_match?: DueDiligence360ControleMatch;
  tipo_documento?: string;
  dataset?: string;
  pep?: boolean;
  cargo?: string;
  entidades?: string[];
  inicio_mandato?: string;
  fim_mandato?: string;
  fim_carencia?: string;
  status_pep?: string;
  origem_data?: string;
  primeira_visualizacao?: string;
  ultima_visualizacao?: string;
  ultima_alteracao?: string;
  data_atualizacao?: string;
  data_consolidacao?: string;
  id_origem?: string;
  data_de_nascimento?: string[];
  paises?: string[];
  enderecos?: unknown[];
  identificadores?: string[];
  sancoes?: unknown[];
  telefones?: unknown[];
  emails?: (string | null)[];
  nomes?: string[];
}

export interface DueDiligence360ControleMatchReferenciaMatch {
  nome?: string;
  nome_fantasia?: unknown;
  data_nascimento?: string;
  score_documento?: number;
  score_similaridade?: number;
  score_data_nascimento?: number;
  score_geral?: number;
  nome_encontrado?: string;
  nome_usado?: string;
  match_por_contencao?: boolean;
}

export interface DueDiligence360RestricaoTcuDisqualifiedItemControleMatch {
  tipo?: string;
  documento_referencia?: string;
  referencia_match?: DueDiligence360ControleMatchReferenciaMatch;
}

export interface DueDiligence360Sancao {
  programa?: string;
  razao?: string;
  data_inicio?: string;
  data_fim?: string;
}

export interface DueDiligence360RestricaoTcuDisqualifiedItem {
  controle_match?: DueDiligence360RestricaoTcuDisqualifiedItemControleMatch;
  tipo_documento?: string;
  dataset?: string;
  pep?: boolean;
  cargo?: string;
  entidades?: string[];
  inicio_mandato?: string;
  fim_mandato?: string | null;
  fim_carencia?: string | null;
  status_pep?: string | null;
  origem_data?: string;
  primeira_visualizacao?: string;
  ultima_visualizacao?: string;
  ultima_alteracao?: string;
  data_atualizacao?: string;
  data_consolidacao?: string;
  id_origem?: string;
  nomes?: string[];
  identificadores?: string[];
  paises?: string[];
  data_de_nascimento?: string[];
  enderecos?: unknown[];
  telefones?: unknown[];
  emails?: (string | null)[];
  sancoes?: DueDiligence360Sancao[];
}

export interface DueDiligence360ComplianceNacional {
  ceis?: DueDiligence360Cei[];
  cnep?: DueDiligence360CnepItem[];
  ceaf?: DueDiligence360CeafItem[];
  ibama?: DueDiligence360IbamaItem[];
  mte_lista_suja?: DueDiligence360MteListaSujaItem[];
  impedidos_bet?: DueDiligence360ImpedidosBet;
  aposentados?: unknown[];
  honorarios?: unknown[];
  militares?: unknown[];
  pensionista?: unknown[];
  reserva_militares?: unknown[];
  servidor_publico?: DueDiligence360ServidorPublicoItem[];
  pep?: DueDiligence360PepItem[];
  vinculo_pep?: DueDiligence360VinculoPepItem[];
  pep_listas_ri?: DueDiligence360PepListasRiItem[];
  restricao_tcu_disqualified?: DueDiligence360RestricaoTcuDisqualifiedItem[];
}

export interface DueDiligence360Sancoes {
  ofac_sdn?: unknown[];
  ofac_non_sdn?: unknown[];
  un?: unknown[];
  eu_financial?: unknown[];
  eu_council?: unknown[];
  eu_travel_bans?: unknown[];
  uk?: unknown[];
  canada?: unknown[];
  suica?: unknown[];
  australia?: unknown[];
  japao?: unknown[];
  franca?: unknown[];
  cingapura?: unknown[];
  fto?: unknown[];
}

export interface DueDiligence360ProcuradosInternacionais {
  interpol?: unknown[];
  fbi?: unknown[];
}

export interface DueDiligence360ComplianceInternacional {
  pep_internacional?: unknown[];
  sancoes?: DueDiligence360Sancoes;
  procurados_internacionais?: DueDiligence360ProcuradosInternacionais;
}

export interface DueDiligence360SegmentoJustica {
  id?: number;
  descricao?: string;
}

export interface DueDiligence360Instancia {
  id?: number;
  descricao?: string;
}

export interface DueDiligence360Polo {
  id?: number;
  descricao?: string;
  nome_na_classe?: string;
}

export interface DueDiligence360HierarquiaItem {
  codigo?: number;
  descricao?: string;
}

export interface DueDiligence360Classe {
  codigo?: number;
  descricao?: string;
  hierarquia?: DueDiligence360HierarquiaItem[];
}

export interface DueDiligence360Assunto {
  codigo?: number;
  descricao?: string;
  hierarquia?: DueDiligence360HierarquiaItem[];
}

export interface DueDiligence360UltimoMovimento {
  codigo?: unknown;
  data?: string;
}

export interface DueDiligence360OrgaoJulgador {
  id?: string;
  nome?: string;
  uf?: string;
  tribunal?: string;
}

export interface DueDiligence360Processo {
  processo_id?: string;
  npu?: string;
  tramitacao_id?: string;
  tribunal_jtr?: string;
  segmento_justica?: DueDiligence360SegmentoJustica;
  instancia?: DueDiligence360Instancia;
  polo?: DueDiligence360Polo;
  classe?: DueDiligence360Classe;
  assuntos?: DueDiligence360Assunto[];
  situacao_codigo?: string | null;
  data_ajuizamento?: string;
  valor_causa?: number | null;
  ultimo_movimento?: DueDiligence360UltimoMovimento;
  orgao_julgador?: DueDiligence360OrgaoJulgador;
}

export interface DueDiligence360InqueritosPoliciais {
  total?: number;
  processos?: DueDiligence360Processo[];
}

export interface DueDiligence360Mandado {
  processo_id?: string;
  tribunal_jtr?: string;
  tipo_peca?: string;
  sequencial_mandado?: string;
  situacao?: string;
  nome?: string;
  alcunha?: string | null;
  nome_mae?: string;
  nome_pai?: string;
  data_nascimento?: string;
  data_mandado?: string;
  orgao_expedidor?: string;
}

export interface DueDiligence360MandadosPrisao {
  total?: number;
  mandados?: DueDiligence360Mandado[];
}

export interface DueDiligence360ProcuradosNacionai {
  controle_match?: DueDiligence360RestricaoTcuDisqualifiedItemControleMatch;
  tipo_documento?: string;
  dataset?: string;
  pep?: boolean;
  cargo?: string | null;
  entidades?: unknown[];
  inicio_mandato?: string | null;
  fim_mandato?: string | null;
  fim_carencia?: string | null;
  status_pep?: string | null;
  origem_data?: string | null;
  primeira_visualizacao?: string;
  ultima_visualizacao?: string;
  ultima_alteracao?: string;
  data_atualizacao?: string;
  data_consolidacao?: string;
  id_origem?: string;
  nomes?: string[];
  identificadores?: string[];
  paises?: string[];
  data_de_nascimento?: string[];
  enderecos?: unknown[];
  telefones?: unknown[];
  emails?: (string | null)[];
  sancoes?: unknown[];
}

export interface DueDiligence360Organizacao {
  organizacao?: string;
  sigla?: string;
  uf_atuacao_organizacao?: string[];
  n_processos?: number;
}

export interface DueDiligence360Orcrim {
  vinculado?: boolean;
  cpf?: number;
  nome?: string;
  uf_atuacao_cpf?: string[];
  organizacao?: string;
  sigla?: string;
  uf_atuacao_organizacao?: string[];
  total_processos?: number;
  organizacoes?: DueDiligence360Organizacao[];
  processos?: DueDiligence360Processo[];
}

export interface DueDiligence360SegurancaCriminal {
  inqueritos_policiais?: DueDiligence360InqueritosPoliciais;
  mandados_prisao?: DueDiligence360MandadosPrisao;
  procurados_nacionais?: DueDiligence360ProcuradosNacionai[];
  orcrim?: DueDiligence360Orcrim;
}

export interface DueDiligence360Filiacao {
  registro_filiacao?: string;
  sigla_partido?: string;
  situacao_registro?: string;
  data_filiacao?: string;
  data_desfiliacao?: string | null;
  municipio?: string;
  uf?: string;
  nome_uf?: string;
  nome_regiao?: string;
  zona?: string;
  secao?: string;
  titulo_eleitor?: string;
  nome?: string;
  nome_social?: string | null;
  sexo?: string;
  motivo_desfiliacao?: string | null;
  motivo_cancelamento?: string | null;
  indicador_origem?: string;
  data_cadastro_desfiliacao?: string | null;
  data_cancelamento?: string | null;
  data_exclusao?: string | null;
  data_extracao?: string;
}

export interface DueDiligence360FiliacaoPartidaria {
  total?: number;
  filiacoes?: DueDiligence360Filiacao[];
}

export interface DueDiligence360Resultado {
  turno?: number;
  resultado?: string;
  votos?: number;
}

export interface DueDiligence360Candidatura {
  ano?: number;
  tipo_eleicao?: string;
  data_eleicao?: string;
  sigla_uf?: string;
  numero?: string;
  nome?: string;
  nome_urna?: string;
  sigla_partido?: string;
  cargo?: string;
  situacao?: string;
  municipio?: string;
  uf?: string;
  nome_uf?: string;
  nome_regiao?: string;
  genero?: string;
  instrucao?: string;
  ocupacao?: string;
  estado_civil?: string;
  nacionalidade?: string;
  raca?: string;
  municipio_nascimento?: string;
  sigla_uf_nascimento?: string;
  email?: string | null;
  data_nascimento?: string;
  idade?: number;
  resultados?: DueDiligence360Resultado[];
}

export interface DueDiligence360Candidaturas {
  total?: number;
  candidaturas?: DueDiligence360Candidatura[];
}

export interface DueDiligence360Resumo {
  total_receitas?: number;
  total_despesas?: number;
  saldo?: number;
  eleicoes?: number;
}

export interface DueDiligence360Receita {
  cpf_cnpj_doador?: string;
  origem_receita?: string;
  natureza_receita?: string;
  especie_receita?: string;
  valor_receita?: number;
}

export interface DueDiligence360Despesa {
  cpf_cnpj_fornecedor?: string;
  tipo_despesa?: string;
  valor_despesa?: number;
}

export interface DueDiligence360Ano {
  ano?: string;
  total_receitas?: number;
  total_despesas?: number;
  saldo?: number;
  qtd_receitas?: number;
  qtd_despesas?: number;
  receitas_exibidas?: number;
  receitas_truncadas?: boolean;
  resultados?: DueDiligence360Resultado[];
  receitas?: DueDiligence360Receita[];
  despesas?: DueDiligence360Despesa[];
}

export interface DueDiligence360PrestacaoContas {
  resumo?: DueDiligence360Resumo;
  total_receitas_itens?: number;
  total_despesas_itens?: number;
  limit_por_ano?: number;
  anos?: DueDiligence360Ano[];
}

export interface DueDiligence360Ben {
  tipo_item?: string;
  valor_item?: number;
}

export interface DueDiligence360BensCandidatoAno {
  ano?: number;
  total_valor?: number;
  bens?: DueDiligence360Ben[];
}

export interface DueDiligence360BensCandidato {
  total_bens?: number;
  anos?: DueDiligence360BensCandidatoAno[];
}

export interface DueDiligence360PoliticoEleitoral {
  filiacao_partidaria?: DueDiligence360FiliacaoPartidaria;
  candidaturas?: DueDiligence360Candidaturas;
  prestacao_contas?: DueDiligence360PrestacaoContas;
  bens_candidato?: DueDiligence360BensCandidato;
}

export interface DueDiligence360Noticia {
  id?: string;
  titulo?: string;
  descricao?: string;
  data_publicacao?: string;
  url?: string;
  imagem?: string | null;
  crime_tags?: string[];
  ufs?: string[];
}

export interface DueDiligence360Match {
  processo_id?: string;
  tribunal_jtr?: string;
  nome_reu?: string;
  score_total?: number;
  score_crime?: number;
  score_data?: number;
  faixa_confianca?: string;
  diff_dias?: number;
}

export interface DueDiligence360MidiasNegativasNoticia {
  noticia?: DueDiligence360Noticia;
  match?: DueDiligence360Match;
}

export interface DueDiligence360MidiasNegativas {
  total?: number;
  noticias?: DueDiligence360MidiasNegativasNoticia[];
}

export interface DueDiligence360ReputacaoDigital {
  midias_negativas?: DueDiligence360MidiasNegativas;
}

export interface DueDiligence360ListaProcesso {
  processo_id?: string;
  npu?: string;
  tramitacao_id?: string;
  tribunal_jtr?: string;
  segmento_justica?: DueDiligence360SegmentoJustica;
  instancia?: DueDiligence360Instancia;
  polo?: DueDiligence360Polo;
  classe?: DueDiligence360Classe;
  assuntos?: DueDiligence360Assunto[];
  situacao_codigo?: string | null;
  data_ajuizamento?: string;
  valor_causa?: number;
  ultimo_movimento?: DueDiligence360UltimoMovimento;
  orgao_julgador?: DueDiligence360OrgaoJulgador;
}

export interface DueDiligence360Lista {
  total?: number;
  processos?: DueDiligence360ListaProcesso[];
}

export interface DueDiligence360ProcessosJudiciais {
  lista?: DueDiligence360Lista;
}

export interface DueDiligence360Score {
  valor?: number;
  classificacao?: string;
}

export interface DueDiligence360Indicadores {
  obito?: boolean;
  pep_nacional?: boolean;
  pep_internacional?: boolean;
  vinculo_com_pep?: boolean;
  sancao_internacional?: boolean;
  procurado_nacional?: boolean;
  procurado_interpol?: boolean;
  mandado_prisao?: boolean;
  inquerito_policial?: boolean;
  orcrim_vinculado?: boolean;
  lista_suja_trabalho_escravo?: boolean;
  midia_negativa?: boolean;
  endereco_em_faixa_fronteira?: boolean;
  possivel_pessoa_publica?: boolean;
}

export interface DueDiligence360Analise {
  score?: DueDiligence360Score;
  indicadores?: DueDiligence360Indicadores;
  completa?: boolean;
  pendentes?: unknown[];
  sem_dados?: string[];
  alertas?: (boolean | null)[];
  consultado_em?: string;
}

export interface DueDiligence360PfResults {
  cadastral?: DueDiligence360Cadastral;
  contato?: DueDiligence360Contato;
  obito?: DueDiligence360Obito;
  vinculos?: DueDiligence360Vinculos;
  socioeconomico?: DueDiligence360Socioeconomico;
  beneficios_sociais?: DueDiligence360BeneficiosSociais;
  dividas_publicas?: DueDiligence360DividasPublicas;
  patrimonio?: DueDiligence360Patrimonio;
  compliance_nacional?: DueDiligence360ComplianceNacional;
  compliance_internacional?: DueDiligence360ComplianceInternacional;
  seguranca_criminal?: DueDiligence360SegurancaCriminal;
  politico_eleitoral?: DueDiligence360PoliticoEleitoral;
  reputacao_digital?: DueDiligence360ReputacaoDigital;
  processos_judiciais?: DueDiligence360ProcessosJudiciais;
  analise?: DueDiligence360Analise;
}

/** Due Diligence 360 > PF - Pessoa Física > Due Diligence 360 - PF. POST /v1/due-diligence-360/pf. Shape inferred from the examples in TargetData's docs. */
export interface DueDiligence360PfResponse {
  _id: string;
  header: ResponseHeader;
  results: DueDiligence360PfResults;
}

export interface DueDiligence360CnaeSecundaria {
  cd?: string;
  ds?: string;
}

export interface DueDiligence360ResultsCadastral {
  cnpj?: string;
  cnpj_basico?: string;
  razao_social?: string;
  nome_fantasia?: string;
  natureza_juridica_cd?: string;
  natureza_juridica_ds?: string;
  situacao_cadastral?: string;
  situacao_cadastral_data?: string;
  situacao_cadastral_motivo?: string | null;
  data_abertura?: string;
  data_encerramento?: string | null;
  porte?: string;
  porte_rf_cd?: string;
  faturamento_presumido?: string;
  capital_social?: number;
  regime_tributario?: string;
  optante_simples?: boolean;
  optante_mei?: boolean;
  mei_proprietario_cpf?: string | null;
  cnae_principal_cd?: string;
  cnae_principal_ds?: string;
  cnae_secundarias?: DueDiligence360CnaeSecundaria[];
  identificador_matriz_filial?: string;
}

export interface DueDiligence360ContatoEndereco {
  cd_ordem?: number | null;
  tipo_logradouro?: string;
  logradouro?: string;
  numero?: string;
  complemento?: string;
  bairro?: string;
  cidade?: string;
  uf?: string;
  cep?: string;
  pais?: string | null;
  dt_informacao?: string | null;
  rfb?: boolean;
  faixa_fronteira?: boolean;
  cidade_gemea?: boolean;
}

export interface DueDiligence360ContatoTelefone {
  cd_ordem?: number | null;
  ddd?: string;
  numero?: string;
  tipo?: string;
  dt_inclusao?: string | null;
  rfb?: boolean;
}

export interface DueDiligence360ContatoEmail {
  cd_ordem?: number | null;
  email?: string;
  dt_inclusao?: string | null;
  rfb?: boolean;
}

export interface DueDiligence360ResultsContato {
  enderecos?: DueDiligence360ContatoEndereco[];
  telefones?: DueDiligence360ContatoTelefone[];
  emails?: DueDiligence360ContatoEmail[];
}

export interface DueDiligence360ResultsSocio {
  nome?: string;
  cpf_cnpj?: string;
  cpf_cnpj_tipo?: string;
  qualificacao?: string;
  percentual_participacao?: number | null;
  data_entrada?: string;
  data_saida?: string | null;
  faixa_etaria?: string;
  cd_qualificacao?: string;
}

export interface DueDiligence360ResultadoCadastral {
  nm_completo?: string;
  nr_cpf?: string;
  dt_nasc?: string;
  ds_signo?: string;
  ds_status_rfb?: string;
  sg_sexo?: string;
  ds_sexo?: string;
}

export interface DueDiligence360Motivo {
  regra?: string;
  pontos?: number;
  evidencia?: boolean | string;
  eixo?: string;
}

export interface DueDiligence360FinanceiroMotivo {
  regra?: string;
  pontos?: number;
}

export interface DueDiligence360Financeiro {
  pontos?: number;
  n_motivos?: number;
  motivos?: DueDiligence360FinanceiroMotivo[];
}

export interface DueDiligence360Demografico {
  pontos?: number;
  n_motivos?: number;
  motivos?: DueDiligence360FinanceiroMotivo[];
}

export interface DueDiligence360Eixos {
  financeiro?: DueDiligence360Financeiro;
  demografico?: DueDiligence360Demografico;
}

export interface DueDiligence360AnaliseScore {
  valor?: number;
  classificacao?: string;
  id_matriz_aplicada?: string;
  motivos?: DueDiligence360Motivo[];
  eixos?: DueDiligence360Eixos;
}

export interface DueDiligence360AnaliseIndicadores {
  obito?: boolean;
  pep_nacional?: boolean;
  pep_internacional?: boolean;
  vinculo_com_pep?: boolean;
  sancao_internacional?: boolean;
  procurado_nacional?: boolean;
  procurado_interpol?: boolean;
  mandado_prisao?: boolean;
  inquerito_policial?: boolean;
  orcrim_vinculado?: unknown;
  lista_suja_trabalho_escravo?: unknown;
  midia_negativa?: boolean;
  endereco_em_faixa_fronteira?: boolean;
  possivel_pessoa_publica?: boolean;
}

export interface DueDiligence360ResultadoAnalise {
  score?: DueDiligence360AnaliseScore;
  indicadores?: DueDiligence360AnaliseIndicadores;
  completa?: boolean;
  pendentes?: unknown[];
  sem_dados?: string[];
  alertas?: unknown[];
  consultado_em?: string;
}

export interface DueDiligence360SociosAnaliseItemResultado {
  cadastral?: DueDiligence360ResultadoCadastral;
  analise?: DueDiligence360ResultadoAnalise;
}

export interface DueDiligence360SociosAnaliseItem {
  cpf?: string;
  nome?: string;
  tipo_pessoa?: string;
  request_id?: string;
  resultado?: DueDiligence360SociosAnaliseItemResultado;
  erro?: string | null;
  cpf_limpo?: string;
}

export interface DueDiligence360Filiai {
  cnpj?: string;
  nome_fantasia?: string;
  situacao?: string;
  uf?: string;
  municipio?: string;
}

export interface DueDiligence360QuadroSocietarioSocio {
  nome_socio_razao_social?: string;
  cpf_cnpj_socio?: string;
  cpf_cnpj_socio_tratado?: string;
  cd_qualificacao_socio?: string;
  ds_qualificacao_socio?: string;
  cd_identificador_socio?: string;
  ds_identificador_socio?: string;
  cd_faixa_etaria_socio?: string;
  ds_faixa_etaria_socio?: string;
  data_entrada_sociedade?: string;
  pais?: string | null;
  representante_legal_nome?: string | null;
  representante_legal_cpf?: string | null;
  representante_legal_cpf_tratado?: string | null;
  cd_representante_legal_qualificacao?: string | null;
  ds_representante_legal_qualificacao?: string | null;
}

export interface DueDiligence360QuadroSocietario {
  mei_proprietario_nome?: string | null;
  mei_proprietario_cpf?: string | null;
  socios?: DueDiligence360QuadroSocietarioSocio[];
}

export interface DueDiligence360Firmografico {
  valor_faturamento_presumido?: string;
  ds_faixa_faturamento?: string;
  ds_porte_empresa?: string;
  porte_td?: string;
  cd_porte_empresa?: string;
  capital_social?: string;
  quantidade_funcionarios_presumidos?: string;
  faixa_funcionarios_presumidos?: string;
  quantidade_funcionarios_rais_1?: string;
  quantidade_funcionarios_rais_2?: string;
}

export interface DueDiligence360RegimeTributarioItem {
  uf?: string;
  municipio?: string;
  ano?: string;
  forma_tributacao?: string;
  cnpj_da_scp?: string | null;
  quantidade_de_escrituracoes?: string;
}

export interface DueDiligence360RegimeTributario {
  opcao_simples?: boolean;
  opcao_mei?: boolean;
  opcao_simples_data_opcao?: string | null;
  opcao_simples_data_exclusao?: string | null;
  opcao_mei_data_opcao?: string | null;
  opcao_mei_data_exclusao?: string | null;
  regime_tributario?: DueDiligence360RegimeTributarioItem[];
}

export interface DueDiligence360MultiempresarialItem {
  razao_social?: string;
  nome_fantasia?: string;
  cnpj_completo?: string;
  cnpj_basico?: string;
}

export interface DueDiligence360ResultsPatrimonio {
  aeronaves?: unknown[];
  multiempresarial?: DueDiligence360MultiempresarialItem[];
  grupo_economico?: unknown[];
}

export interface DueDiligence360ComplianceNacionalCei {
  match_id?: string;
  nome_completo?: string;
  numero_documento?: string;
  tipo_documento?: string;
  categoria_da_sancao?: string;
  codigo_da_sancao?: string;
  orgao_sancionador?: string;
  uf_orgao_sancionador?: string;
  data_inicio_sancao?: string;
  data_final_sancao?: string;
  data_do_transito_em_julgado?: string;
  data_publicacao?: string;
  fundamentacao_legal?: string;
  numero_do_processo?: string;
  publicacao?: string;
  data_atualizacao?: string;
}

export interface DueDiligence360ComplianceNacionalCnepItem {
  match_id?: string;
  nome_completo?: string;
  numero_documento?: string;
  tipo_documento?: string;
  categoria_da_sancao?: string;
  codigo_da_sancao?: string;
  orgao_sancionador?: string;
  uf_orgao_sancionador?: string;
  data_inicio_sancao?: string;
  data_final_sancao?: string;
  data_do_transito_em_julgado?: string;
  fundamentacao_legal?: string;
  numero_do_processo?: string;
  publicacao?: string;
  data_atualizacao?: string;
  valor_da_multa?: string;
}

export interface DueDiligence360RestricaoCnepItemControleMatchReferenciaMatch {
  nome?: string;
  nome_fantasia?: string;
  data_nascimento?: unknown;
  score_similaridade?: number;
  score_data_nascimento?: unknown;
  score_geral?: number;
  nome_encontrado?: string;
  nome_usado?: string;
  match_por_contencao?: boolean;
}

export interface DueDiligence360RestricaoCnepItemControleMatch {
  tipo?: string;
  documento_referencia?: string;
  referencia_match?: DueDiligence360RestricaoCnepItemControleMatchReferenciaMatch;
}

export interface DueDiligence360RestricaoCnepItem {
  controle_match?: DueDiligence360RestricaoCnepItemControleMatch;
  tipo_documento?: string;
  dataset?: string;
  pep?: boolean;
  cargo?: string | null;
  entidades?: unknown[];
  inicio_mandato?: string | null;
  fim_mandato?: string | null;
  fim_carencia?: string | null;
  status_pep?: string | null;
  origem_data?: string | null;
  primeira_visualizacao?: string;
  ultima_visualizacao?: string;
  ultima_alteracao?: string;
  data_atualizacao?: string;
  data_consolidacao?: string;
  id_origem?: string;
  data_de_nascimento?: unknown[];
  paises?: string[];
  enderecos?: unknown[];
  identificadores?: string[];
  sancoes?: string[];
  nomes?: string[];
}

export interface DueDiligence360ComplianceNacionalPepItem {
  data_atualizacao?: string;
  nivel_funcao?: string | null;
  nome_orgao?: string;
  nome_pep?: string;
  data_inicio_exercicio?: string;
  data_fim_exercicio?: string;
  data_fim_carencia?: string;
}

export interface DueDiligence360ResultsComplianceNacional {
  ceis?: DueDiligence360ComplianceNacionalCei[];
  cnep?: DueDiligence360ComplianceNacionalCnepItem[];
  restricao_cnep?: DueDiligence360RestricaoCnepItem[];
  cepim?: unknown[];
  mpf_leniencia?: unknown[];
  mpt_lista_suja?: unknown[];
  ibama?: unknown[];
  tcu?: unknown[];
  pep?: DueDiligence360ComplianceNacionalPepItem[];
}

export interface DueDiligence360PgfnNaoPrevidenciarioUltimasOcorrencia {
  numero_inscricao?: string;
  indicador_ajuizado?: string;
  data_inscricao?: string;
  situacao_inscricao?: string;
  tipo_devedor?: string;
  cpf_cnpj?: string;
  flag_controle?: string;
  data_atualizacao?: string;
  uf_devedor?: string;
  tipo_pessoa?: string;
  tipo_situacao_inscricao?: string;
  valor_consolidado?: string;
  unidade_responsavel?: string;
  nome_devedor?: string;
  receita_principal?: string;
  data_referencia?: string;
}

export interface DueDiligence360DividasPublicasPgfnNaoPrevidenciario {
  ultimas_ocorrencias?: DueDiligence360PgfnNaoPrevidenciarioUltimasOcorrencia[];
  valor?: string;
  quantidade?: string;
}

export interface DueDiligence360DividasPublicasPgfnPrevidenciario {
  ultimas_ocorrencias?: unknown[];
  valor?: string;
  quantidade?: string;
}

export interface DueDiligence360ResultsDividasPublicas {
  pgfn_fgts?: DueDiligence360PgfnFgts;
  pgfn_nao_previdenciario?: DueDiligence360DividasPublicasPgfnNaoPrevidenciario;
  pgfn_previdenciario?: DueDiligence360DividasPublicasPgfnPrevidenciario;
}

export interface DueDiligence360ResultsAnaliseIndicadores {
  empresa_inapta?: boolean;
  empresa_baixada?: boolean;
  ceis?: boolean;
  cnep?: boolean;
  sancao_internacional?: boolean;
  socio_pep?: boolean;
  socio_pf_orcrim?: unknown;
  divida_publica?: boolean;
  tem_processo_judicial?: boolean;
  lista_suja_trabalho?: boolean;
  restricao_tcu?: boolean;
  cnae_risco_alto?: boolean;
  endereco_faixa_fronteira?: boolean;
  socio_vinculo_pep?: unknown;
}

export interface DueDiligence360ResultsAnalise {
  score?: DueDiligence360Score;
  indicadores?: DueDiligence360ResultsAnaliseIndicadores;
  completa?: boolean;
  pendentes?: unknown[];
  sem_dados?: unknown[];
  consultado_em?: string;
}

export interface DueDiligence360PjResults {
  cadastral?: DueDiligence360ResultsCadastral;
  contato?: DueDiligence360ResultsContato;
  socios?: DueDiligence360ResultsSocio[];
  socios_analise?: DueDiligence360SociosAnaliseItem[];
  filiais?: DueDiligence360Filiai[];
  quadro_societario?: DueDiligence360QuadroSocietario;
  firmografico?: DueDiligence360Firmografico;
  regime_tributario?: DueDiligence360RegimeTributario;
  patrimonio?: DueDiligence360ResultsPatrimonio;
  compliance_nacional?: DueDiligence360ResultsComplianceNacional;
  compliance_internacional?: DueDiligence360ComplianceInternacional;
  processos_judiciais?: DueDiligence360ProcessosJudiciais;
  dividas_publicas?: DueDiligence360ResultsDividasPublicas;
  analise?: DueDiligence360ResultsAnalise;
}

/** Due Diligence 360 > PJ - Pessoa Jurídica > Due Diligence 360 - PJ. POST /v1/due-diligence-360/pj. Shape inferred from the examples in TargetData's docs. */
export interface DueDiligence360PjResponse {
  _id: string;
  header: ResponseHeader;
  results: DueDiligence360PjResults;
}

export interface DueDiligence360ReprocessamentoResultsCadastral {
  nm_completo?: string;
  nm_social?: unknown;
  nr_cpf?: string;
  nm_mae?: string;
  nr_cpf_mae?: string;
  dt_nasc?: string;
  idade?: number;
  ds_faixa_idade?: string;
  sg_sexo?: string;
  ds_sexo?: string;
  ds_signo?: string;
  ds_status_rfb?: string;
  dt_inscricao?: string;
  dt_atualizacao_rfb?: string;
  nr_rg?: string;
  sg_uf_rg?: string;
  ds_orgao_emissor?: string;
  nr_titulo_eleitoral?: string;
  nit_pis?: unknown;
  nacionalidade?: string;
}

export interface DueDiligence360ResultsContatoTelefone {
  cd_ordem?: number;
  ddi?: unknown;
  ddd?: string;
  uf_ddd?: string;
  numero?: string;
  numero_completo?: string;
  tipo?: string;
  tipo_inferido?: string;
  dt_inclusao?: string;
}

export interface DueDiligence360ReprocessamentoResultsContato {
  enderecos?: DueDiligence360Endereco[];
  telefones?: DueDiligence360ResultsContatoTelefone[];
  emails?: DueDiligence360Email[];
}

export interface DueDiligence360ResultsObito {
  st_obito?: boolean;
  possivel_obito?: boolean;
  dt_obito?: unknown;
  ano_obito?: unknown;
  mes_obito?: unknown;
  tipo_obito?: unknown;
  fonte_obito?: unknown;
}

export interface DueDiligence360VinculosEmpregadorItem {
  razao_social?: string;
  nr_cnpj?: string;
  dt_admissao?: string;
  dt_demissao?: unknown;
  cd_ordem?: number;
  dt_informacao?: string;
}

export interface DueDiligence360ResultsVinculos {
  parentesco?: DueDiligence360ParentescoItem[];
  empregador?: DueDiligence360VinculosEmpregadorItem[];
  possiveis_colegas_trabalho?: unknown[];
  socios?: DueDiligence360Socio[];
}

export interface DueDiligence360PatrimonioImovei {
  sg_uf?: string;
  ds_cidade?: string;
  nr_cep?: string;
  sg_tipo_logradouro?: string;
  ds_logradouro?: string;
  nr_numero?: string;
  ds_complemento?: string;
  ds_bairro?: string;
  nr_contribuente?: string;
  ds_tipo_uso_imovel?: string;
  ds_tipo_padrao_construcao?: string;
  ds_tipo_terreno?: string;
  ds_area_terreno?: string;
  ds_area_construida?: string;
  ds_area_ocupada?: string;
  qtd_pavimentos?: string;
  qtd_esquinas_frentes?: unknown;
  vl_testada_para_calculo?: string;
  vl_metro_quadrado_terreno?: string;
  vl_metro_quadrado_construcao?: string;
  vl_latitude?: string;
  vl_longitude?: string;
  dt_cadastramento?: string;
  ds_ano_exercicio?: string;
  ds_ano_inicio_vida_contribuente?: string;
  ds_mes_inicio_vida_contribuente?: string;
  nr_fator_obsolescencia?: string;
}

export interface DueDiligence360PatrimonioImoveisRurai {
  uf?: string;
  cnae?: string;
  ie?: string;
  produtores_rurais_id?: string;
  empresas_id?: unknown;
  contatos_id?: string;
  protocolo?: unknown;
  data_inclusao?: string;
  data_atualizacao?: string;
  data_consulta?: string;
}

export interface DueDiligence360ReprocessamentoResultsPatrimonio {
  mei?: DueDiligence360MeiItem[];
  aeronaves?: unknown[];
  imoveis?: DueDiligence360PatrimonioImovei[];
  imoveis_rurais?: DueDiligence360PatrimonioImoveisRurai[];
  participacoes_empresas?: DueDiligence360ParticipacoesEmpresa[];
  st_empresario?: boolean;
  st_multiempresario?: boolean;
}

export interface DueDiligence360ResultsComplianceNacionalCei {
  nome_do_sancionado?: string;
  nome_informado_pelo_orgao_sancionador?: string;
  cpf_ou_cnpj_do_sancionado?: string;
  tipo_de_pessoa?: string;
  orgao_sancionador?: string;
  esfera_orgao_sancionador?: string;
  uf_orgao_sancionador?: string;
  categoria_da_sancao?: string;
  codigo_da_sancao?: string;
  cadastro?: string;
  data_inicio_sancao?: string;
  data_final_sancao?: string;
  data_do_transito_em_julgado?: string;
  fundamentacao_legal?: string;
  numero_do_processo?: string;
  publicacao?: unknown;
  data_publicacao?: unknown;
  data_origem_informacao?: string;
  data_referencia?: string;
  data_atualizacao?: string;
  razao_social_cadastro_receita?: unknown;
  nome_fantasia_cadastro_receita?: unknown;
  abragencia_da_sancao?: unknown;
  detalhamento_do_meio_de_publicacao?: unknown;
  origem_informacoes?: string;
  observacoes?: unknown;
}

export interface DueDiligence360ResultsComplianceNacionalCnepItem {
  nome_do_sancionado?: string;
  nome_informado_pelo_orgao_sancionador?: string;
  cpf_ou_cnpj_do_sancionado?: string;
  tipo_de_pessoa?: string;
  orgao_sancionador?: string;
  esfera_orgao_sancionador?: string;
  uf_orgao_sancionador?: string;
  categoria_da_sancao?: string;
  codigo_da_sancao?: string;
  cadastro?: string;
  data_inicio_sancao?: string;
  data_final_sancao?: string;
  data_do_transito_em_julgado?: string;
  fundamentacao_legal?: string;
  numero_do_processo?: string;
  publicacao?: string;
  data_publicacao?: string;
  data_origem_informacao?: unknown;
  data_referencia?: unknown;
  data_atualizacao?: string;
  razao_social_cadastro_receita?: unknown;
  nome_fantasia_cadastro_receita?: unknown;
  abragencia_da_sancao?: unknown;
  abragencia_definida_em_decisao_judicial?: string;
  detalhamento?: string;
  valor_da_multa?: string;
  observacoes?: unknown;
}

export interface DueDiligence360ComplianceNacionalCeafItem {
  nome_do_sancionado?: string;
  nome_informado_pelo_orgao_sancionador?: string;
  cpf_ou_cnpj_do_sancionado?: string;
  tipo_de_pessoa?: string;
  orgao_sancionador?: string;
  esfera_orgao_sancionador?: string;
  uf_orgao_sancionador?: string;
  categoria_da_sancao?: string;
  codigo_da_sancao?: string;
  cadastro?: string;
  data_inicio_sancao?: string;
  data_final_sancao?: string;
  data_do_transito_em_julgado?: string;
  fundamentacao_legal?: string;
  numero_do_processo?: string;
  publicacao?: string;
  data_publicacao?: string;
  data_origem_informacao?: unknown;
  data_referencia?: unknown;
  data_atualizacao?: string;
  razao_social_cadastro_receita?: unknown;
  nome_fantasia_cadastro_receita?: unknown;
  abragencia_definida_em_decisao_judicial?: string;
  detalhamento?: string;
  cargo_efetivo?: unknown;
  funcao_ou_cargo_de_confianca?: unknown;
  orgao_de_lotacao?: string;
  observacoes?: unknown;
}

export interface DueDiligence360ComplianceNacionalIbamaItem {
  nome_pessoa_embargada?: string;
  cpf_cnpj_embargado?: string;
  uf?: string;
  municipio?: string;
  dat_embargo?: string;
  des_infracao?: string;
  des_tipo_bioma?: string;
  des_localizacao?: string;
  des_tad?: string;
  num_processo?: string;
  num_auto_infracao?: string;
  num_tad?: string;
  seq_tad?: string;
  qtd_area_desmatada?: string;
  qtd_area_embargada?: string;
  cod_tipo_bioma?: string;
  cod_municipio?: string;
  cod_uf?: string;
  acao_fiscalizatoria?: string;
  ordem_fiscalizacao?: string;
  operacao?: unknown;
  sit_desmatamento?: string;
  ser_auto_infracao?: string;
  ser_tad?: string;
  nome_imovel?: unknown;
  dat_impressao?: string;
  dat_ult_alter_geom?: string;
  dat_ult_alteracao?: string;
  data_atualizacao?: string;
  num_latitude_tad?: string;
  num_longitude_tad?: string;
  num_latitude_gms_tad?: string;
  num_longitude_gms_tad?: string;
  wkt_geom_area_embargada?: string;
}

export interface DueDiligence360ComplianceNacionalImpedidosBet {
  alerta?: boolean;
  vinculo?: boolean;
  atividade_esportiva?: boolean;
  meio_apostas?: boolean;
  meio_esportivo?: boolean;
  atividades?: unknown[];
  vinculos?: unknown[];
  empresas?: unknown[];
  motivos?: unknown[];
}

export interface DueDiligence360ComplianceNacionalServidorPublicoItem {
  tipo_servidor?: string;
  descricao_cargo?: string;
  classe_cargo?: string;
  nivel_cargo?: string;
  referencia_cargo?: string;
  padrao_cargo?: unknown;
  tipo_vinculo?: string;
  cod_tipo_vinculo?: string;
  situacao_vinculo?: string;
  regime_juridico?: string;
  jornada_de_trabalho?: string;
  org_lotacao?: string;
  orgsup_lotacao?: string;
  uorg_lotacao?: string;
  cod_org_lotacao?: string;
  cod_uorg_lotacao?: string;
  cod_orgsup_lotacao?: string;
  org_exercicio?: string;
  orgsup_exercicio?: string;
  uorg_exercicio?: string;
  cod_org_exercicio?: string;
  cod_uorg_exercicio?: string;
  cod_orgsup_exercicio?: string;
  uf_exercicio?: string;
  funcao?: unknown;
  sigla_funcao?: unknown;
  nivel_funcao?: unknown;
  tipo_aposentadoria?: unknown;
  cod_tipo_aposentadoria?: unknown;
  matricula?: string;
  id_servidor_portal?: string;
  diploma_ingresso_servicopublico?: string;
  diploma_ingresso_orgao?: string;
  diploma_ingresso_cargofuncao?: unknown;
  documento_ingresso_servicopublico?: string;
  data_ingresso_cargofuncao?: string;
  data_ingresso_orgao?: string;
  data_nomeacao_cargofuncao?: unknown;
  data_diploma_ingresso_servicopublico?: string;
  data_aposentadoria?: unknown;
  data_inicio_afastamento?: unknown;
  data_termino_afastamento?: unknown;
  data_atualizacao?: string;
  data_referencia?: string;
  codigo_atividade?: unknown;
  atividade?: string;
  opcao_parcial?: unknown;
}

export interface DueDiligence360ComplianceNacionalVinculoPepItem {
  sg_funcao?: string;
  ds_nome_orgao?: string;
  cd_qualificacao_socio?: unknown;
  ds_funcao?: string;
  dt_fim?: string;
  cs_vinculo_familia?: string;
  ds_nivel_funcao?: unknown;
  dt_inicio?: string;
  dt_fim_carencia?: string;
  nr_cpf?: string;
  nm_completo?: string;
  dt_atualizacao?: string;
  vinculo?: string;
  nr_cnpj?: unknown;
}

export interface DueDiligence360ComplianceNacionalPepListasRiItem {
  controle_match?: DueDiligence360ControleMatch;
  tipo_documento?: string;
  dataset?: string;
  pep?: boolean;
  cargo?: string;
  entidades?: string[];
  inicio_mandato?: string;
  fim_mandato?: string;
  fim_carencia?: string;
  status_pep?: string;
  origem_data?: string;
  primeira_visualizacao?: string;
  ultima_visualizacao?: string;
  ultima_alteracao?: string;
  data_atualizacao?: string;
  data_consolidacao?: string;
  id_origem?: string;
  data_de_nascimento?: string[];
  paises?: string[];
  enderecos?: unknown[];
  identificadores?: string[];
  sancoes?: unknown[];
  telefones?: unknown[];
  emails?: unknown[];
  nomes?: string[];
}

export interface DueDiligence360ComplianceNacionalRestricaoTcuDisqualifiedItem {
  controle_match?: DueDiligence360RestricaoTcuDisqualifiedItemControleMatch;
  tipo_documento?: string;
  dataset?: string;
  pep?: boolean;
  cargo?: string;
  entidades?: string[];
  inicio_mandato?: string;
  fim_mandato?: unknown;
  fim_carencia?: unknown;
  status_pep?: unknown;
  origem_data?: string;
  primeira_visualizacao?: string;
  ultima_visualizacao?: string;
  ultima_alteracao?: string;
  data_atualizacao?: string;
  data_consolidacao?: string;
  id_origem?: string;
  nomes?: string[];
  identificadores?: string[];
  paises?: string[];
  data_de_nascimento?: string[];
  enderecos?: unknown[];
  telefones?: unknown[];
  emails?: unknown[];
  sancoes?: DueDiligence360Sancao[];
}

export interface DueDiligence360ReprocessamentoResultsComplianceNacional {
  ceis?: DueDiligence360ResultsComplianceNacionalCei[];
  cnep?: DueDiligence360ResultsComplianceNacionalCnepItem[];
  ceaf?: DueDiligence360ComplianceNacionalCeafItem[];
  ibama?: DueDiligence360ComplianceNacionalIbamaItem[];
  mte_lista_suja?: DueDiligence360MteListaSujaItem[];
  impedidos_bet?: DueDiligence360ComplianceNacionalImpedidosBet;
  aposentados?: unknown[];
  honorarios?: unknown[];
  militares?: unknown[];
  pensionista?: unknown[];
  reserva_militares?: unknown[];
  servidor_publico?: DueDiligence360ComplianceNacionalServidorPublicoItem[];
  pep?: DueDiligence360PepItem[];
  vinculo_pep?: DueDiligence360ComplianceNacionalVinculoPepItem[];
  pep_listas_ri?: DueDiligence360ComplianceNacionalPepListasRiItem[];
  restricao_tcu_disqualified?: DueDiligence360ComplianceNacionalRestricaoTcuDisqualifiedItem[];
}

export interface DueDiligence360InqueritosPoliciaisProcesso {
  processo_id?: string;
  npu?: string;
  tramitacao_id?: string;
  tribunal_jtr?: string;
  segmento_justica?: DueDiligence360SegmentoJustica;
  instancia?: DueDiligence360Instancia;
  polo?: DueDiligence360Polo;
  classe?: DueDiligence360Classe;
  assuntos?: DueDiligence360Assunto[];
  situacao_codigo?: unknown;
  data_ajuizamento?: string;
  valor_causa?: unknown;
  ultimo_movimento?: DueDiligence360UltimoMovimento;
  orgao_julgador?: DueDiligence360OrgaoJulgador;
}

export interface DueDiligence360SegurancaCriminalInqueritosPoliciais {
  total?: number;
  processos?: DueDiligence360InqueritosPoliciaisProcesso[];
}

export interface DueDiligence360MandadosPrisaoMandado {
  processo_id?: string;
  tribunal_jtr?: string;
  tipo_peca?: string;
  sequencial_mandado?: string;
  situacao?: string;
  nome?: string;
  alcunha?: unknown;
  nome_mae?: string;
  nome_pai?: string;
  data_nascimento?: string;
  data_mandado?: string;
  orgao_expedidor?: string;
}

export interface DueDiligence360SegurancaCriminalMandadosPrisao {
  total?: number;
  mandados?: DueDiligence360MandadosPrisaoMandado[];
}

export interface DueDiligence360SegurancaCriminalProcuradosNacionai {
  controle_match?: DueDiligence360RestricaoTcuDisqualifiedItemControleMatch;
  tipo_documento?: string;
  dataset?: string;
  pep?: boolean;
  cargo?: unknown;
  entidades?: unknown[];
  inicio_mandato?: unknown;
  fim_mandato?: unknown;
  fim_carencia?: unknown;
  status_pep?: unknown;
  origem_data?: unknown;
  primeira_visualizacao?: string;
  ultima_visualizacao?: string;
  ultima_alteracao?: string;
  data_atualizacao?: string;
  data_consolidacao?: string;
  id_origem?: string;
  nomes?: string[];
  identificadores?: string[];
  paises?: string[];
  data_de_nascimento?: string[];
  enderecos?: unknown[];
  telefones?: unknown[];
  emails?: unknown[];
  sancoes?: unknown[];
}

export interface DueDiligence360Cpf {
  $numberLong?: string;
}

export interface DueDiligence360SegurancaCriminalOrcrim {
  vinculado?: boolean;
  cpf?: DueDiligence360Cpf;
  nome?: string;
  uf_atuacao_cpf?: string[];
  organizacao?: string;
  sigla?: string;
  uf_atuacao_organizacao?: string[];
  total_processos?: number;
  organizacoes?: DueDiligence360Organizacao[];
  processos?: DueDiligence360InqueritosPoliciaisProcesso[];
}

export interface DueDiligence360ResultsSegurancaCriminal {
  inqueritos_policiais?: DueDiligence360SegurancaCriminalInqueritosPoliciais;
  mandados_prisao?: DueDiligence360SegurancaCriminalMandadosPrisao;
  procurados_nacionais?: DueDiligence360SegurancaCriminalProcuradosNacionai[];
  orcrim?: DueDiligence360SegurancaCriminalOrcrim;
}

export interface DueDiligence360FiliacaoPartidariaFiliacao {
  registro_filiacao?: string;
  sigla_partido?: string;
  situacao_registro?: string;
  data_filiacao?: string;
  data_desfiliacao?: unknown;
  municipio?: string;
  uf?: string;
  nome_uf?: string;
  nome_regiao?: string;
  zona?: string;
  secao?: string;
  titulo_eleitor?: string;
  nome?: string;
  nome_social?: unknown;
  sexo?: string;
  motivo_desfiliacao?: unknown;
  motivo_cancelamento?: unknown;
  indicador_origem?: string;
  data_cadastro_desfiliacao?: unknown;
  data_cancelamento?: unknown;
  data_exclusao?: unknown;
  data_extracao?: string;
}

export interface DueDiligence360PoliticoEleitoralFiliacaoPartidaria {
  total?: number;
  filiacoes?: DueDiligence360FiliacaoPartidariaFiliacao[];
}

export interface DueDiligence360CandidaturasCandidatura {
  ano?: number;
  tipo_eleicao?: string;
  data_eleicao?: string;
  sigla_uf?: string;
  numero?: string;
  nome?: string;
  nome_urna?: string;
  sigla_partido?: string;
  cargo?: string;
  situacao?: string;
  municipio?: string;
  uf?: string;
  nome_uf?: string;
  nome_regiao?: string;
  genero?: string;
  instrucao?: string;
  ocupacao?: string;
  estado_civil?: string;
  nacionalidade?: string;
  raca?: string;
  municipio_nascimento?: string;
  sigla_uf_nascimento?: string;
  email?: unknown;
  data_nascimento?: string;
  idade?: number;
  resultados?: DueDiligence360Resultado[];
}

export interface DueDiligence360PoliticoEleitoralCandidaturas {
  total?: number;
  candidaturas?: DueDiligence360CandidaturasCandidatura[];
}

export interface DueDiligence360ResultsPoliticoEleitoral {
  filiacao_partidaria?: DueDiligence360PoliticoEleitoralFiliacaoPartidaria;
  candidaturas?: DueDiligence360PoliticoEleitoralCandidaturas;
  prestacao_contas?: DueDiligence360PrestacaoContas;
  bens_candidato?: DueDiligence360BensCandidato;
}

export interface DueDiligence360NoticiaNoticia {
  id?: string;
  titulo?: string;
  descricao?: string;
  data_publicacao?: string;
  url?: string;
  imagem?: unknown;
  crime_tags?: string[];
  ufs?: string[];
}

export interface DueDiligence360ReputacaoDigitalMidiasNegativasNoticia {
  noticia?: DueDiligence360NoticiaNoticia;
  match?: DueDiligence360Match;
}

export interface DueDiligence360ReputacaoDigitalMidiasNegativas {
  total?: number;
  noticias?: DueDiligence360ReputacaoDigitalMidiasNegativasNoticia[];
}

export interface DueDiligence360ResultsReputacaoDigital {
  midias_negativas?: DueDiligence360ReputacaoDigitalMidiasNegativas;
}

export interface DueDiligence360ProcessosJudiciaisListaProcesso {
  processo_id?: string;
  npu?: string;
  tramitacao_id?: string;
  tribunal_jtr?: string;
  segmento_justica?: DueDiligence360SegmentoJustica;
  instancia?: DueDiligence360Instancia;
  polo?: DueDiligence360Polo;
  classe?: DueDiligence360Classe;
  assuntos?: DueDiligence360Assunto[];
  situacao_codigo?: unknown;
  data_ajuizamento?: string;
  valor_causa?: number;
  ultimo_movimento?: DueDiligence360UltimoMovimento;
  orgao_julgador?: DueDiligence360OrgaoJulgador;
}

export interface DueDiligence360ProcessosJudiciaisLista {
  total?: number;
  processos?: DueDiligence360ProcessosJudiciaisListaProcesso[];
}

export interface DueDiligence360ResultsProcessosJudiciais {
  lista?: DueDiligence360ProcessosJudiciaisLista;
}

export interface DueDiligence360ReprocessamentoResultsAnalise {
  score?: DueDiligence360Score;
  indicadores?: DueDiligence360Indicadores;
  completa?: boolean;
  pendentes?: unknown[];
  sem_dados?: string[];
  alertas?: unknown[];
  consultado_em?: string;
}

export interface DueDiligence360ReprocessamentoResults {
  cadastral?: DueDiligence360ReprocessamentoResultsCadastral;
  contato?: DueDiligence360ReprocessamentoResultsContato;
  obito?: DueDiligence360ResultsObito;
  vinculos?: DueDiligence360ResultsVinculos;
  socioeconomico?: DueDiligence360Socioeconomico;
  beneficios_sociais?: DueDiligence360BeneficiosSociais;
  dividas_publicas?: DueDiligence360DividasPublicas;
  patrimonio?: DueDiligence360ReprocessamentoResultsPatrimonio;
  compliance_nacional?: DueDiligence360ReprocessamentoResultsComplianceNacional;
  compliance_internacional?: DueDiligence360ComplianceInternacional;
  seguranca_criminal?: DueDiligence360ResultsSegurancaCriminal;
  politico_eleitoral?: DueDiligence360ResultsPoliticoEleitoral;
  reputacao_digital?: DueDiligence360ResultsReputacaoDigital;
  processos_judiciais?: DueDiligence360ResultsProcessosJudiciais;
  analise?: DueDiligence360ReprocessamentoResultsAnalise;
}

/** Due Diligence 360 > Reprocessamento Indisponibilidade - PF/PJ > Reprocessamento. POST /v1/due-diligence-360/reprocessamento. Shape inferred from the examples in TargetData's docs. */
export interface DueDiligence360ReprocessamentoResponse {
  _id: string;
  header: ResponseHeader;
  results: DueDiligence360ReprocessamentoResults;
}
