import { TestCaseModel_TMT } from "./TestCaseModel_TMT";

export interface SuiteModel_TMT {
  suiteId?: string | undefined;
  projectId?: string | undefined;
  suiteName?: string | undefined;
  suiteTotalCases?: number | undefined;
  suiteTotalSuites?: number | undefined;
  casesInSuite?: TestCaseModel_TMT[] | undefined;
  action?: string;
}
