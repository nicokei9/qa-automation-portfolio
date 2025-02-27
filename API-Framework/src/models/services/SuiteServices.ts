import { Response } from "../responses/Response";
import { SuiteModel_TMT } from "../request/SuiteModel_TMT.js";
import { ServiceBase_TMT } from "../../base/ServiceBase_TMT.js";

export class SuiteService extends ServiceBase_TMT {
  constructor() {
    super("/projects/PROJECT1726858718621/suites");
  }

  async getSuites<T>(
    params: URLSearchParams = new URLSearchParams(),
    config = this.defaultConfig,
  ): Promise<Response<T>> {
    config.params = params;
    return await this.get<T>(this.url, config);
  }

  async addSuite<T>(suite: SuiteModel_TMT, config = this.defaultConfig): Promise<Response<T>> {
    return await this.post<T>(this.url, suite, config);
  }

  async deleteSuite<T>(objectId: string, config = this.defaultConfig): Promise<Response<T>> {
    return await this.patch<T>(`${this.url}/${objectId}`, { action: "DELETE" }, config);
  }
}
