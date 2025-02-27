import { ServiceBase_TMT } from "../../base/ServiceBase_TMT.js";
import { CredentialsModel_TMT } from "../request/CredentialsModel_TMT.js";
import { Response } from "../responses/Response";

export class LoginService extends ServiceBase_TMT {
  constructor() {
    super("/login");
  }

  async login<T>(credentials: CredentialsModel_TMT): Promise<Response<T>> {
    return await this.post(this.url, credentials);
  }
}
