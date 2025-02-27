import { GetTestCaseResponse_TMT } from "./TestCaseResponse_TMT";

export interface PostSuiteResponse_TMT {
  message: string;
  object: string;
}

export interface GetSuiteResponse_TMT {
  totalSuitesInProject: number;
  totalCasesInProject: number;
  suitesInProject: SuiteResponse_TMT[];
}

export interface SuiteResponse_TMT {
  suiteId: string;
  projectId: string;
  suiteName: string;
  suiteTotalCases: number;
  suiteTotalSuites: number;
  casesInSuite: GetTestCaseResponse_TMT[];
}
