export interface PostTestCaseResponse_TMT {
  message: string;
  object: string;
}

export interface GetTestCaseResponse_TMT {
  projectId: string;
  suiteId: string;
  caseId: string;
  caseNumber: string;
  pathToRoot: string;
  caseName: string;
  casePriority: string;
  labels: object[];
  reference: string;
  caseType: string;
  preconditions: string;
  steps: string;
  expectedResult: string;
}
