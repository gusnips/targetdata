import { BaseModule } from "./base";
import type {
  RenajudRequest,
  VeiculosBaseEstadualResponse,
  VeiculosCnhV1Response,
  VeiculosCnhV2Response,
  VeiculosCnhV3Response,
  VeiculosComunicacaoVendaResponse,
  VeiculosDebitosMultasResponse,
  VeiculosDocumentoResponse,
  VeiculosGravameResponse,
  VeiculosHistoricoProprietariosResponse,
  VeiculosIndicioSinistroResponse,
  VeiculosLeilaoResponse,
  VeiculosPlacaChassiResponse,
  VeiculosRenajudResponse,
  VeiculosReprocessamentoResponse,
  VeiculosRouboFurtoResponse,
  VeiculosVeiculoEssencialResponse,
  VeiculosVeiculoTotalPlusResponse,
} from "../types/veiculos";
import type {
  CnhRequest,
  CpfCnpjRequest,
  PlacaOrChassiRequest,
  PlacaRequest,
  RequestIdRequest,
} from "../types/common";

export class VeiculosModule extends BaseModule {
  /**
   * Reprocessamento
   */
  reprocessamento(params: RequestIdRequest): Promise<VeiculosReprocessamentoResponse> {
    return this.http.post("/v1/veiculos/reprocessamento", params);
  }

  /**
   * Consulta Veiculo por Placa ou Chassi > Veiculos por Placa ou Chassi
   */
  placaChassi(params: PlacaOrChassiRequest): Promise<VeiculosPlacaChassiResponse> {
    return this.http.post("/v1/veiculos/placa-chassi", params);
  }

  /**
   * Consulta Veiculo por Documento > Veiculos por CPF/CNPJ
   */
  documento(params: CpfCnpjRequest): Promise<VeiculosDocumentoResponse> {
    return this.http.post("/v1/veiculos/documento", params);
  }

  /**
   * Dossie Veicular > Histórico de Proprietários
   */
  historicoProprietarios(params: PlacaRequest): Promise<VeiculosHistoricoProprietariosResponse> {
    return this.http.post("/v1/veiculos/historico_proprietarios", params);
  }

  /**
   * Dossie Veicular > Veiculo Essencial
   */
  veiculoEssencial(params: PlacaRequest): Promise<VeiculosVeiculoEssencialResponse> {
    return this.http.post("/v1/veiculos/veiculo-essencial", params);
  }

  /**
   * Dossie Veicular > Veiculo Total Plus
   */
  veiculoTotalPlus(params: PlacaRequest): Promise<VeiculosVeiculoTotalPlusResponse> {
    return this.http.post("/v1/veiculos/veiculo-total-plus", params);
  }

  /**
   * CNH Basic
   */
  cnhV1(params: CnhRequest): Promise<VeiculosCnhV1Response> {
    return this.http.post("/v1/veiculos/cnh-v1", params);
  }

  /**
   * CNH Plus
   */
  cnhV2(params: CnhRequest): Promise<VeiculosCnhV2Response> {
    return this.http.post("/v1/veiculos/cnh-v2", params);
  }

  /**
   * CNH Max
   */
  cnhV3(params: CnhRequest): Promise<VeiculosCnhV3Response> {
    return this.http.post("/v1/veiculos/cnh-v3", params);
  }

  /**
   * Comunicação de Venda
   */
  comunicacaoVenda(params: PlacaOrChassiRequest): Promise<VeiculosComunicacaoVendaResponse> {
    return this.http.post("/v1/veiculos/comunicacao-venda", params);
  }

  /**
   * Renajud
   */
  renajud(params: RenajudRequest): Promise<VeiculosRenajudResponse> {
    return this.http.post("/v1/veiculos/renajud", params);
  }

  /**
   * Gravame
   */
  gravame(params: PlacaOrChassiRequest): Promise<VeiculosGravameResponse> {
    return this.http.post("/v1/veiculos/gravame", params);
  }

  /**
   * Débitos e Multas
   */
  debitosMultas(params: PlacaOrChassiRequest): Promise<VeiculosDebitosMultasResponse> {
    return this.http.post("/v1/veiculos/debitos-multas", params);
  }

  /**
   * Roubo e Furto
   */
  rouboFurto(params: PlacaOrChassiRequest): Promise<VeiculosRouboFurtoResponse> {
    return this.http.post("/v1/veiculos/roubo-furto", params);
  }

  /**
   * Base Estadual
   */
  baseEstadual(params: PlacaOrChassiRequest): Promise<VeiculosBaseEstadualResponse> {
    return this.http.post("/v1/veiculos/base-estadual", params);
  }

  /**
   * Leilão
   */
  leilao(params: PlacaOrChassiRequest): Promise<VeiculosLeilaoResponse> {
    return this.http.post("/v1/veiculos/leilao", params);
  }

  /**
   * Indício de Sinistro > Sinistro
   */
  indicioSinistro(params: PlacaOrChassiRequest): Promise<VeiculosIndicioSinistroResponse> {
    return this.http.post("/v1/veiculos/indicio-sinistro", params);
  }
}
