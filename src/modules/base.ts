import type { Http } from "../http";

export abstract class BaseModule {
  constructor(protected readonly http: Http) {}
}
