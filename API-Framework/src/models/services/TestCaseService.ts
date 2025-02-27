import { Response } from "../responses/Response";
import { TestCaseModel_TMT } from "../request/TestCaseModel_TMT.js";
import { ServiceBase_TMT } from "../../base/ServiceBase_TMT.js";

export class TestCaseService extends ServiceBase_TMT {
  constructor(suiteId: string) {
    super(`/projects/PROJECT1726858718621/suites/${suiteId}/test-cases`);
  }
  async getTestCases<T>(
    params: URLSearchParams = new URLSearchParams(),
    config = this.defaultConfig,
  ): Promise<Response<T>> {
    config.params = params;
    return await this.get<T>(this.url, config);
  }

  async addTestCase<T>(
    testCase: TestCaseModel_TMT,
    config = this.defaultConfig,
  ): Promise<Response<T>> {
    return await this.post<T>(this.url, testCase, config);
  }
  async patchTestCase<T>(
    objectId: string,
    body: TestCaseModel_TMT,
    config = this.defaultConfig,
  ): Promise<Response<T>> {
    return await this.patch<T>(`${this.url}/${objectId}`, body, config);
  }
}
