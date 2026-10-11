import { BaseModule } from "./base";
import type { HealthCheckResponse } from "../types/health";

export class HealthModule extends BaseModule {
  /**
   * Health
   */
  check(): Promise<HealthCheckResponse> {
    return this.http.post("/v1/health");
  }
}
