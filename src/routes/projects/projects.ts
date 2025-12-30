import { doosearch } from "./(old_project)/doosearch/data";
import { doochronos } from "./(old_project)/doochronos/data";
import { dooscape } from "./(old_project)/dooscape/data";
import { capture } from "./(old_project)/capture/data";
import type { Project } from "./projects.types";

export * from "./projects.types";

export const projects: Project[] = [doosearch, doochronos, dooscape, capture];