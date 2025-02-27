import chai, { expect } from "chai";
import { TestCaseModel_TMT } from "../../models/request/TestCaseModel_TMT";
import { TestCaseService } from "../../models/services/TestCaseService.js";
import { SuiteService } from "../../models/services/SuiteServices.js";
import {
  GetTestCaseResponse_TMT,
  PostTestCaseResponse_TMT,
} from "../../models/responses/TestCaseResponse_TMT";
import { PostSuiteResponse_TMT, SuiteResponse_TMT } from "../../models/responses/SuiteResponse_TMT";

chai.should();

// eslint-disable-next-line ui-testing/no-focused-tests
describe.only("TestCase", () => {
  let testCaseService: TestCaseService;
  let body: TestCaseModel_TMT;
  let suiteId: string;
  let testCaseId: string;
  let testCaseFound: boolean;
  const suiteService = new SuiteService();

  beforeEach(async () => {
    const suiteBody = {
      projectId: "PROJECT1726858718621",
      suiteName: "12345",
    };
    await suiteService.authenticate();
    const addSuiteResponse = await suiteService.addSuite<PostSuiteResponse_TMT>(suiteBody);
    suiteId = addSuiteResponse.data.object;
    testCaseService = new TestCaseService(suiteId);
    await testCaseService.authenticate();
    testCaseFound = false;
  });

  it("@Smoke - Add New Test Case - Successfully", async () => {
    body = {
      body: "",
      caseName: "123321",
      casePriority: "medium",
      caseType: "BASIC",
      expectedResult: "1",
      labels: ["1"],
      preconditions: "1",
      reference: "1",
      steps: "1",
    };

    const addTestCaseResponse = await testCaseService.addTestCase<PostTestCaseResponse_TMT>(body);
    addTestCaseResponse.status.should.equal(201);

    testCaseId = addTestCaseResponse.data.object;

    const getTestCaseResponse = await testCaseService.getTestCases<SuiteResponse_TMT>();

    getTestCaseResponse.status.should.equal(200);

    getTestCaseResponse.data.casesInSuite.forEach((testCase: GetTestCaseResponse_TMT) => {
      if (testCase.caseId === testCaseId) {
        testCaseFound = true;
      }
    });

    expect(testCaseFound).to.be.true;

    // hacer delete en un after
  });
});
