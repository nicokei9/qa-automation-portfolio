import { ProjectModel_TMT } from "./ProjectModel_TMT";

export interface ProjectsModel_TMT {
  isSuperAdmin?: boolean | undefined;
  activeProjects?: number | undefined;
  completedProjects?: number | undefined;
  projects?: ProjectModel_TMT[] | undefined;
}
