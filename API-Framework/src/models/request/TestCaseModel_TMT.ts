export interface TestCaseModel_TMT {
  projectId?: string | undefined;
  suiteId?: string | undefined;
  caseId?: string | undefined;
  caseNumber?: string | undefined;
  pathToRoot?: string | undefined;
  caseName?: string | undefined;
  casePriority?: string | undefined;
  labels?: string[] | undefined;
  reference?: string | undefined;
  caseType?: string | undefined;
  preconditions?: string | undefined;
  steps?: string | undefined;
  expectedResult?: string | undefined;
  body?: string | undefined;
}
