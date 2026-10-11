import type { ResponseHeader } from "./common";

export interface NegativacaoDIVIDA {
  CONTRATO: string;
  TIPO: number;
  VALOR: string;
  VENCIMENTO: number;
  VENDA: number;
}

export interface NegativacaoDEVEDOR {
  DOCUMENTO: number;
  NOME: string;
  CONJUGE: string;
  "ESTADO-CIVIL": string;
  MAE: string;
  NACIONALIDADE: string;
  NASCIMENTO: number;
  NATURAL: string;
  "NATURAL-UF": string;
  PAI: string;
  RG: number;
  "RG-UF": string;
  SEXO: string;
  ENDERECO: string;
  NUMERO: string;
  BAIRRO: string;
  CEP: number;
  CIDADE: string;
  UF: string;
  EMAIL: string;
  TELEFONE: number;
  TELEFONE2: number;
  DDD: number;
  DDD2: number;
  DIVIDA: NegativacaoDIVIDA;
}

export interface NegativacaoPfIncluirRequest {
  CODIGO: number;
  SENHA: string;
  DEVEDOR: NegativacaoDEVEDOR;
}

export interface NegativacaoDEVEDORDIVIDA {
  TIPO?: string;
  CONTRATO?: string;
  VENCIMENTO?: number;
  VENDA?: number;
  VALOR?: string;
  "NUMERO-RESPOSTA-INCLUSAO"?: number;
  "DATA-INCLUSAO"?: number;
  "HORA-INCLUSAO"?: number;
}

export interface NegativacaoDEVEDORESDEVEDOR {
  ASSOCIADO?: number;
  DOCUMENTO?: number;
  NOME?: string;
  NASCIMENTO?: number;
  SEXO?: string;
  "ESTADO-CIVIL"?: string;
  NATURAL?: string;
  "NATURAL-UF"?: string;
  NACIONALIDADE?: string;
  PAI?: string;
  MAE?: string;
  CONJUGE?: string;
  ENDERECO?: string;
  NUMERO?: string;
  BAIRRO?: string;
  CIDADE?: string;
  UF?: string;
  CEP?: number;
  DIVIDA?: NegativacaoDEVEDORDIVIDA;
}

export interface NegativacaoDEVEDORES {
  DEVEDOR?: NegativacaoDEVEDORESDEVEDOR;
}

export interface NegativacaoPfIncluirResults {
  DEVEDORES?: NegativacaoDEVEDORES;
  ERRO?: number;
  MENSAGEM?: string;
  "NOME-ASSOCIADO"?: string;
  "NUMERO-RESPOSTA"?: number;
}

/** Negativação > PF - Pessoa Física > Incluir. POST /v1/negativacao/pf/incluir. Shape inferred from the examples in TargetData's docs. */
export interface NegativacaoPfIncluirResponse {
  results: NegativacaoPfIncluirResults;
  header: ResponseHeader;
}

export interface NegativacaoPfExcluirRequest {
  CODIGO: number;
  SENHA: string;
  "NUMERO-RESPOSTA": number;
}

export interface NegativacaoDEVEDORESDEVEDORDIVIDA {
  TIPO?: string;
  CONTRATO?: string;
  VENCIMENTO?: number;
  VENDA?: number;
  VALOR?: string;
  "NUMERO-RESPOSTA-INCLUSAO"?: number;
  "DATA-INCLUSAO"?: number;
  "HORA-INCLUSAO"?: number;
  "NUMERO-RESPOSTA-EXCLUSAO"?: number;
  "DATA-EXCLUSAO"?: number;
  "HORA-EXCLUSAO"?: number;
}

export interface NegativacaoResultsDEVEDORESDEVEDOR {
  ASSOCIADO?: number;
  DOCUMENTO?: number;
  NOME?: string;
  NASCIMENTO?: number;
  SEXO?: string;
  "ESTADO-CIVIL"?: string;
  NATURAL?: string;
  "NATURAL-UF"?: string;
  NACIONALIDADE?: string;
  PAI?: string;
  MAE?: string;
  CONJUGE?: string;
  ENDERECO?: string;
  NUMERO?: string;
  BAIRRO?: string;
  CIDADE?: string;
  UF?: string;
  CEP?: number;
  DIVIDA?: NegativacaoDEVEDORESDEVEDORDIVIDA;
}

export interface NegativacaoResultsDEVEDORES {
  DEVEDOR?: NegativacaoResultsDEVEDORESDEVEDOR;
}

export interface NegativacaoPfExcluirResults {
  DEVEDORES?: NegativacaoResultsDEVEDORES;
  ERRO?: number;
  MENSAGEM?: string;
  "NOME-ASSOCIADO"?: string;
  "NUMERO-RESPOSTA"?: number;
}

/** Negativação > PF - Pessoa Física > Excluir. POST /v1/negativacao/pf/excluir. Shape inferred from the examples in TargetData's docs. */
export interface NegativacaoPfExcluirResponse {
  results: NegativacaoPfExcluirResults;
  header: ResponseHeader;
}

export interface NegativacaoPfConsultarRequest {
  CODIGO: number;
  SENHA: string;
  "NUMERO-RESPOSTA": number;
}

/** Negativação > PF - Pessoa Física > Consultar. POST /v1/negativacao/pf/consultar. Shape inferred from the examples in TargetData's docs. */
export interface NegativacaoPfConsultarResponse {
  results: NegativacaoPfIncluirResults;
  header: ResponseHeader;
}

export interface NegativacaoPjIncluirRequestDEVEDORDIVIDA {
  CONTRATO: string;
  TIPO: string;
  VALOR: string;
  VENCIMENTO: number;
}

export interface NegativacaoPjIncluirRequestDEVEDOR {
  DOCUMENTO: number;
  NOME: string;
  ENDERECO: string;
  NUMERO: string;
  BAIRRO: string;
  CEP: number;
  CIDADE: string;
  UF: string;
  DDD: number;
  DDD2: number;
  TELEFONE: number;
  TELEFONE2: number;
  EMAIL: string;
  DIVIDA: NegativacaoPjIncluirRequestDEVEDORDIVIDA;
}

export interface NegativacaoPjIncluirRequest {
  CODIGO: number;
  SENHA: string;
  DEVEDOR: NegativacaoPjIncluirRequestDEVEDOR;
}

export interface NegativacaoResultsDEVEDORESDEVEDORDIVIDA {
  TIPO?: string;
  CONTRATO?: string;
  VENCIMENTO?: number;
  VALOR?: string;
  "NUMERO-RESPOSTA-INCLUSAO"?: number;
  "DATA-INCLUSAO"?: number;
  "HORA-INCLUSAO"?: number;
}

export interface NegativacaoPjIncluirResultsDEVEDORESDEVEDOR {
  ASSOCIADO?: number;
  DOCUMENTO?: number;
  NOME?: string;
  ENDERECO?: string;
  NUMERO?: string;
  BAIRRO?: string;
  CIDADE?: string;
  UF?: string;
  CEP?: number;
  DDD?: number;
  TELEFONE?: number;
  DDD2?: number;
  TELEFONE2?: number;
  EMAIL?: string;
  DIVIDA?: NegativacaoResultsDEVEDORESDEVEDORDIVIDA;
}

export interface NegativacaoPjIncluirResultsDEVEDORES {
  DEVEDOR?: NegativacaoPjIncluirResultsDEVEDORESDEVEDOR;
}

export interface NegativacaoPjIncluirResults {
  DEVEDORES?: NegativacaoPjIncluirResultsDEVEDORES;
  ERRO?: number;
  MENSAGEM?: string;
  "NUMERO-RESPOSTA"?: number;
}

/** Negativação > PJ - Pessoa Jurídica > Incluir. POST /v1/negativacao/pj/incluir. Shape inferred from the examples in TargetData's docs. */
export interface NegativacaoPjIncluirResponse {
  results: NegativacaoPjIncluirResults;
  header: ResponseHeader;
}

export interface NegativacaoPjExcluirRequest {
  CODIGO: number;
  SENHA: string;
  "NUMERO-RESPOSTA": number;
}

export interface NegativacaoPjExcluirResultsDEVEDORESDEVEDORDIVIDA {
  TIPO?: string;
  CONTRATO?: string;
  VENCIMENTO?: number;
  VALOR?: string;
  "NUMERO-RESPOSTA-INCLUSAO"?: number;
  "DATA-INCLUSAO"?: number;
  "HORA-INCLUSAO"?: number;
  "NUMERO-RESPOSTA-EXCLUSAO"?: number;
  "DATA-EXCLUSAO"?: number;
  "HORA-EXCLUSAO"?: number;
}

export interface NegativacaoPjExcluirResultsDEVEDORESDEVEDOR {
  ASSOCIADO?: number;
  DOCUMENTO?: number;
  NOME?: string;
  ENDERECO?: string;
  NUMERO?: string;
  BAIRRO?: string;
  CIDADE?: string;
  UF?: string;
  CEP?: number;
  DDD?: number;
  TELEFONE?: number;
  DDD2?: number;
  TELEFONE2?: number;
  EMAIL?: string;
  DIVIDA?: NegativacaoPjExcluirResultsDEVEDORESDEVEDORDIVIDA;
}

export interface NegativacaoPjExcluirResultsDEVEDORES {
  DEVEDOR?: NegativacaoPjExcluirResultsDEVEDORESDEVEDOR;
}

export interface NegativacaoPjExcluirResults {
  DEVEDORES?: NegativacaoPjExcluirResultsDEVEDORES;
  ERRO?: number;
  MENSAGEM?: string;
  "NUMERO-RESPOSTA"?: number;
}

/** Negativação > PJ - Pessoa Jurídica > Excluir. POST /v1/negativacao/pj/excluir. Shape inferred from the examples in TargetData's docs. */
export interface NegativacaoPjExcluirResponse {
  results: NegativacaoPjExcluirResults;
  header: ResponseHeader;
}

export interface NegativacaoPjConsultarRequest {
  CODIGO: number;
  SENHA: string;
  "NUMERO-RESPOSTA": number;
}

/** Negativação > PJ - Pessoa Jurídica > Consultar. POST /v1/negativacao/pj/consultar. Shape inferred from the examples in TargetData's docs. */
export interface NegativacaoPjConsultarResponse {
  results: NegativacaoPjIncluirResults;
  header: ResponseHeader;
}

export interface NegativacaoCadastroNegativadorCriarRequest {
  razaoSocial: string;
  nomeFantasia: string;
  cpfcnpj: string;
  tpendereco: string;
  endereco: string;
  numero: string;
  complemento: string;
  bairro: string;
  cidade: string;
  siglaEstado: string;
  cep: string;
  telefone: string;
  celular: string;
  nomeContato: string;
  cargoContato: string;
  emailContato: string;
}

export interface NegativacaoDados {
  codigo?: number;
  senha?: string;
}

export interface NegativacaoCadastroNegativadorCriarResults {
  msg?: string;
  dados?: NegativacaoDados;
}

/** Negativação > Cadastro do Negativador > Criar. POST /v1/negativacao/cadastro-negativador/criar. Shape inferred from the examples in TargetData's docs. */
export interface NegativacaoCadastroNegativadorCriarResponse {
  results: NegativacaoCadastroNegativadorCriarResults;
  header: ResponseHeader;
}

export interface NegativacaoCadastroNegativadorAlterarRequest {
  codigosecundario: string;
  razaoSocial: string;
  nomeFantasia: string;
  cpfcnpj: string;
  tpendereco: string;
  endereco: string;
  numero: string;
  complemento: string;
  bairro: string;
  cidade: string;
  siglaEstado: string;
  cep: string;
  telefone: string;
  celular: string;
  nomeContato: string;
  cargoContato: string;
  emailContato: string;
}

export interface NegativacaoCadastroNegativadorAlterarResults {
  msg?: string;
}

/** Negativação > Cadastro do Negativador > Alterar. POST /v1/negativacao/cadastro-negativador/alterar. Shape inferred from the examples in TargetData's docs. */
export interface NegativacaoCadastroNegativadorAlterarResponse {
  results: NegativacaoCadastroNegativadorAlterarResults;
  header: ResponseHeader;
}

export interface NegativacaoCadastroNegativadorBuscarRequest {
  codigosecundario: string;
}

export interface NegativacaoASSOCIADO {
  "ASSOCIADO-COD"?: string;
  "ASSOCIADO-NOME"?: string;
  "ASSOCIADO-RAZAO"?: string;
  "ASSOCIADO-TIPOP"?: string;
  "ASSOCIADO-DOCTO"?: string;
  "ASSOCIADO-DATAF"?: string;
  "ASSOCIADO-SITU"?: string;
  "ASSOCIADO-CEP"?: string;
  "ASSOCIADO-END"?: string;
  "ASSOCIADO-NUM"?: string;
  "ASSOCIADO-COMPL"?: unknown[];
  "ASSOCIADO-BAIRRO"?: string;
  "ASSOCIADO-CIDADE"?: string;
  "ASSOCIADO-UF"?: string;
  "ASSOCIADO-CATEGORIA"?: unknown[];
  "ASSOCIADO-DDD1"?: string;
  "ASSOCIADO-TEL1"?: string;
  "ASSOCIADO-DDD2"?: string;
  "ASSOCIADO-TEL2"?: string;
  "ASSOCIADO-DDDCEL1"?: string;
  "ASSOCIADO-CEL1"?: string;
  "ASSOCIADO-CONT"?: string;
  "ASSOCIADO-EMAIL1"?: string;
  "ASSOCIADO-EMAIL2"?: unknown[];
  "ASSOCIADO-CODBVS"?: string;
  "ASSOCIADO-EXISTE-SENHA"?: string;
  "ASSOCIADO-GRUPO"?: string;
}

export interface NegativacaoASSOCIADOS {
  ASSOCIADO?: NegativacaoASSOCIADO;
}

export interface NegativacaoRETORNO {
  ASSOCIADOS?: NegativacaoASSOCIADOS;
}

export interface NegativacaoSENHA {
  "SENHA-NOME"?: string;
}

export interface NegativacaoRetorno {
  STATUS?: string;
  MENSAGEM?: string;
  RETORNO?: NegativacaoRETORNO;
  SENHA?: NegativacaoSENHA;
}

export interface NegativacaoCadastroNegativadorBuscarResults {
  retorno?: NegativacaoRetorno;
}

/** Negativação > Cadastro do Negativador > Buscar. POST /v1/negativacao/cadastro-negativador/buscar. Shape inferred from the examples in TargetData's docs. */
export interface NegativacaoCadastroNegativadorBuscarResponse {
  results: NegativacaoCadastroNegativadorBuscarResults;
  header: ResponseHeader;
}

export interface NegativacaoCadastroNegativadorDesativarRequest {
  codigosecundario: string;
}

/** Negativação > Cadastro do Negativador > Desativar. POST /v1/negativacao/cadastro-negativador/desativar. Shape inferred from the examples in TargetData's docs. */
export interface NegativacaoCadastroNegativadorDesativarResponse {
  results: NegativacaoCadastroNegativadorAlterarResults;
  header: ResponseHeader;
}

export interface NegativacaoRetornoItem {
  nomeFantasia?: string;
  cnpj?: string;
  codigoSecundario?: string;
}

export interface NegativacaoCadastroNegativadorListarResults {
  status?: boolean;
  msg?: string;
  retorno?: NegativacaoRetornoItem[];
}

/** Negativação > Cadastro do Negativador > Listar. POST /v1/negativacao/cadastro-negativador/listar. Shape inferred from the examples in TargetData's docs. */
export interface NegativacaoCadastroNegativadorListarResponse {
  results: NegativacaoCadastroNegativadorListarResults;
  header: ResponseHeader;
}

export interface NegativacaoListarRequest {
  CODIGO: number;
  SENHA: string;
}

export interface NegativacaoDIVIDAItem {
  TIPO?: string;
  CONTRATO?: string;
  VENCIMENTO?: number;
  VENDA?: number;
  VALOR?: string;
  "NUMERO-RESPOSTA-INCLUSAO"?: number;
  "DATA-INCLUSAO"?: number;
  "HORA-INCLUSAO"?: number;
}

export interface NegativacaoDEVEDORItem {
  ASSOCIADO?: number;
  DOCUMENTO?: number;
  PESSOA?: string;
  NOME?: string;
  DIVIDA?: NegativacaoDIVIDAItem[];
}

export interface NegativacaoListarResultsDEVEDORES {
  DEVEDOR?: NegativacaoDEVEDORItem[];
}

export interface NegativacaoListarResults {
  DEVEDORES?: NegativacaoListarResultsDEVEDORES;
  ERRO?: number;
  MENSAGEM?: string;
  "NOME-ASSOCIADO"?: string;
}

/** Negativação > Listar. POST /v1/negativacao/listar. Shape inferred from the examples in TargetData's docs. */
export interface NegativacaoListarResponse {
  results: NegativacaoListarResults;
  header: ResponseHeader;
}
