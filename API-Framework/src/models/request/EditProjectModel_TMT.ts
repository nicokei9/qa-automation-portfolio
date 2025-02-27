import { UsersModel_TMT } from "./UsersModel_TMT";

export interface EditProjectModel_TMT {
  name?: string | undefined;
  description?: string | undefined;
  users?: UsersModel_TMT[] | undefined;
}
