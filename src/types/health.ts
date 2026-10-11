/** Health. POST /v1/health. Shape inferred from the examples in TargetData's docs. */
export interface HealthCheckResponse {
  status: string;
  timestamp: string;
}
