import { doosearch } from "./(old_project)/doosearch/data";
import { doochronos } from "./(old_project)/doochronos/data";
import { dooscape } from "./(old_project)/dooscape/data";
import { capture } from "./(old_project)/capture/data";
import type { Project } from "$routes/projects/core";

export * from "$routes/projects/core";

export const projects: Project[] = [doochronos, doosearch, dooscape, capture];