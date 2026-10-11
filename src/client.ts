import { Http } from "./http";
import { SearchModule } from "./modules/search";
import { HotphoneModule } from "./modules/hotphone";
import { ReceitaFederalModule } from "./modules/receita-federal";
import { NegativacaoModule } from "./modules/negativacao";
import { SintegraModule } from "./modules/sintegra";
import { MonitoraModule } from "./modules/monitora";
import { AnaliseDeCreditoModule } from "./modules/analise-de-credito";
import { BeneficiarioSocialModule } from "./modules/beneficiario-social";
import { PerfilEconomicoSocialModule } from "./modules/perfil-economico-social";
import { ComplianceModule } from "./modules/compliance";
import { ProcessosJudiciaisModule } from "./modules/processos-judiciais";
import { ImpedidosModule } from "./modules/impedidos";
import { VarModule } from "./modules/var";
import { DueDiligence360Module } from "./modules/due-diligence360";
import { RestricoesInternacionaisModule } from "./modules/restricoes-internacionais";
import { OrganizacoesCriminosasModule } from "./modules/organizacoes-criminosas";
import { VeiculosModule } from "./modules/veiculos";
import { MonteSuaConsultaModule } from "./modules/monte-sua-consulta";
import { ObitoModule } from "./modules/obito";
import { ProveModule } from "./modules/prove";
import { TransactionModule } from "./modules/transaction";
import { CapivaraModule } from "./modules/capivara";
import { OnboardingModule } from "./modules/onboarding";
import { SearchMaeModule } from "./modules/search-mae";
import { HealthModule } from "./modules/health";
import type { TargetDataConfig } from "./types/common";

/**
 * @example
 * ```ts
 * const targetdata = new TargetDataClient({ apiKey: "...", apiSecret: "..." });
 * const { header, results } = await targetdata.analiseDeCredito.pfBasic({ cpf: "46020967867" });
 * ```
 *
 * Each property is one TargetData product. Names follow the API paths, so
 * `POST /v1/analise_de_credito/pf/basic` is `analiseDeCredito.pfBasic`.
 */
export class TargetDataClient {
  readonly search: SearchModule;
  readonly hotphone: HotphoneModule;
  readonly receitaFederal: ReceitaFederalModule;
  readonly negativacao: NegativacaoModule;
  readonly sintegra: SintegraModule;
  readonly monitora: MonitoraModule;
  readonly analiseDeCredito: AnaliseDeCreditoModule;
  readonly beneficiarioSocial: BeneficiarioSocialModule;
  readonly perfilEconomicoSocial: PerfilEconomicoSocialModule;
  readonly compliance: ComplianceModule;
  readonly processosJudiciais: ProcessosJudiciaisModule;
  readonly impedidos: ImpedidosModule;
  readonly var: VarModule;
  readonly dueDiligence360: DueDiligence360Module;
  readonly restricoesInternacionais: RestricoesInternacionaisModule;
  readonly organizacoesCriminosas: OrganizacoesCriminosasModule;
  readonly veiculos: VeiculosModule;
  readonly monteSuaConsulta: MonteSuaConsultaModule;
  readonly obito: ObitoModule;
  readonly prove: ProveModule;
  readonly transaction: TransactionModule;
  readonly capivara: CapivaraModule;
  readonly onboarding: OnboardingModule;
  readonly searchMae: SearchMaeModule;
  readonly health: HealthModule;

  constructor(config: TargetDataConfig) {
    const http = new Http(config);
    this.search = new SearchModule(http);
    this.hotphone = new HotphoneModule(http);
    this.receitaFederal = new ReceitaFederalModule(http);
    this.negativacao = new NegativacaoModule(http);
    this.sintegra = new SintegraModule(http);
    this.monitora = new MonitoraModule(http);
    this.analiseDeCredito = new AnaliseDeCreditoModule(http);
    this.beneficiarioSocial = new BeneficiarioSocialModule(http);
    this.perfilEconomicoSocial = new PerfilEconomicoSocialModule(http);
    this.compliance = new ComplianceModule(http);
    this.processosJudiciais = new ProcessosJudiciaisModule(http);
    this.impedidos = new ImpedidosModule(http);
    this.var = new VarModule(http);
    this.dueDiligence360 = new DueDiligence360Module(http);
    this.restricoesInternacionais = new RestricoesInternacionaisModule(http);
    this.organizacoesCriminosas = new OrganizacoesCriminosasModule(http);
    this.veiculos = new VeiculosModule(http);
    this.monteSuaConsulta = new MonteSuaConsultaModule(http);
    this.obito = new ObitoModule(http);
    this.prove = new ProveModule(http);
    this.transaction = new TransactionModule(http);
    this.capivara = new CapivaraModule(http);
    this.onboarding = new OnboardingModule(http);
    this.searchMae = new SearchMaeModule(http);
    this.health = new HealthModule(http);
  }
}
