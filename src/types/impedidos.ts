import type { ResponseHeader } from "./common";

export interface ImpedidosAtividade {
  cbo?: string;
  ds_cbo?: string;
  origem?: string;
  dt_ocupacao?: string;
  ano_ocupacao?: string;
}

export interface ImpedidosEmpresa {
  nr_cnpj?: string;
  nm_empresarial?: string;
  meio_apostas?: boolean;
  meio_esportivo?: boolean;
  cd_cnae_fiscal_principal?: string;
  cd_cnae_fiscal_secundario?: string[];
}

export interface ImpedidosRelacionamento {
  ds_vinculo?: string;
  nr_cnpj?: string | null;
  cd_qualificacao_socio?: string | null;
  cs_vinculo_familia?: string | null;
}

export interface ImpedidosVinculo {
  nr_cpf?: string;
  nm_vinculo?: string;
  menor_idade?: boolean;
  atividade_esportiva?: boolean;
  meio_apostas?: boolean;
  meio_esportivo?: boolean;
  relacionamentos?: ImpedidosRelacionamento[];
}

export interface ImpedidosImpedidos {
  alerta?: boolean;
  motivos?: number[];
  atividade_esportiva?: boolean;
  meio_apostas?: boolean;
  meio_esportivo?: boolean;
  vinculo?: boolean;
  atividades?: ImpedidosAtividade[];
  empresas?: ImpedidosEmpresa[];
  vinculos?: ImpedidosVinculo[];
}

export interface ImpedidosPfResults {
  impedidos?: ImpedidosImpedidos;
}

/** Impedidos. POST /v1/impedidos/pf. Shape inferred from the examples in TargetData's docs. */
export interface ImpedidosPfResponse {
  results: ImpedidosPfResults;
  header: ResponseHeader;
}
