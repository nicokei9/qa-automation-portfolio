import { SuiteModel_TMT } from "../request/SuiteModel_TMT";

export interface TestDesignModel_TMT {
  totalSuitesInProject?: number | undefined;
  totalCasesInProject?: number | undefined;
  suitesInProject?: SuiteModel_TMT[] | undefined;
}
