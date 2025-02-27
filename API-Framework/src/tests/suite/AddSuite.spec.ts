import chai, { expect } from "chai";
import { SuiteModel_TMT } from "../../models/request/SuiteModel_TMT";
import { SuiteService } from "../../models/services/SuiteServices.js";
import {
  GetSuiteResponse_TMT,
  PostSuiteResponse_TMT,
  SuiteResponse_TMT,
} from "../../models/responses/SuiteResponse_TMT";

chai.should();

describe("Suites", () => {
  const suiteService = new SuiteService();
  let body: SuiteModel_TMT;
  let objectId: string | undefined;
  let suiteFound: boolean;

  before(async () => {
    await suiteService.authenticate();
  });

  beforeEach(() => {
    objectId = undefined;
    suiteFound = false;
  });

  it("@Smoke - Add New Suite - Successfully", async () => {
    body = {
      projectId: "PROJECT1726858718621",
      suiteName: "12345",
    };
    const addSuiteResponse = await suiteService.addSuite<PostSuiteResponse_TMT>(body);
    addSuiteResponse.status.should.equal(201);

    objectId = addSuiteResponse.data.object;

    const getSuiteResponse = await suiteService.getSuites<GetSuiteResponse_TMT>();
    getSuiteResponse.status.should.equal(200);

    getSuiteResponse.data.suitesInProject.forEach((suite: SuiteResponse_TMT) => {
      if (suite.suiteId === objectId) {
        suiteFound = true;
        // Agregar corroboración de que coincida nombre
      }
    });
    expect(suiteFound).to.be.true;
  });
  it("@Regression - Add New Suite - suiteName empty", async () => {
    body = {
      projectId: "PROJECT1726858718621",
      suiteName: "",
    };
    const addSuiteResponse = await suiteService.addSuite<PostSuiteResponse_TMT>(body);
    addSuiteResponse.status.should.equal(400);
  });

  it("@Regression - Add New Suite - projectId empty", async () => {
    body = {
      projectId: "",
      suiteName: "1234",
    };
    const addSuiteResponse = await suiteService.addSuite<PostSuiteResponse_TMT>(body);
    addSuiteResponse.status.should.equal(201);

    objectId = addSuiteResponse.data.object;
  });

  afterEach(async () => {
    if (objectId) {
      const deleteResponse = await suiteService.deleteSuite<string>(objectId);
      deleteResponse.status.should.equal(200);
    }
  });
});
