import { LoginService } from "../../models/services/LoginService.js";
import { CredentialsModel_TMT } from "../../models/request/CredentialsModel_TMT.js";
import { SessionResponse_TMT } from "../../models/responses/SessionResponse_TMT.js";
import { expect } from "chai";
import { ErrorResponse } from "../../models/responses/ErrorResponse.js";
import { ErrorMessages } from "../../utils/constants/error-messages.js";

describe("Login", () => {
  const loginService = new LoginService();
  let body: CredentialsModel_TMT;

  it("@Smoke - Log In - with valid credentials", async () => {
    body = {
      email: process.env["EMAIL"],
      password: process.env["PASSWORD"],
    };
    const loginResponse = await loginService.login<SessionResponse_TMT>(body);
    expect(loginResponse.status).to.equal(200);
    expect(loginResponse.data.message).to.equal("Login successfully");
  });

  it("@Regression - Log In - with invalid email", async () => {
    body = {
      email: "nicolas@gmail.com",
      password: process.env["PASSWORD"],
    };
    const loginResponse = await loginService.login<ErrorResponse>(body);
    expect(loginResponse.status).to.equal(400);
    expect(loginResponse.data.message).to.equal(ErrorMessages.INVALID_LOGIN);
  });
  it("@Regression - Log In - with invalid password", async () => {
    body = {
      email: process.env["EMAIL"],
      password: "1234",
    };
    const loginResponse = await loginService.login<ErrorResponse>(body);
    expect(loginResponse.status).to.equal(400);
    expect(loginResponse.data.message).to.equal(ErrorMessages.INVALID_LOGIN);
  });

  it("@Regression - Log In - with empty password", async () => {
    body = {
      email: process.env["EMAIL"],
      password: "",
    };
    const loginResponse = await loginService.login<ErrorResponse>(body);
    expect(loginResponse.status).to.equal(400);
    expect(loginResponse.data.message).to.equal(ErrorMessages.FIELDS_REQUIRED);
  });
});
