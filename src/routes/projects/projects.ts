import { doosearch } from "./(old_project)/doosearch/data";
import { doochronos } from "./(old_project)/doochronos/data";
import { dooscape } from "./(old_project)/dooscape/data";
import { capture } from "./(old_project)/capture/data";

export interface TwColor {
    light: string;
    dark: string;
}

export interface Project {
    id: string;
    codename: string;
    name: string;
    logo: string;
    catchyPhrase: string;
    createdAt: Date;
    updatedAt?: Date;
    bgAccent?: TwColor;
}

export const projects: Project[] = [doosearch, doochronos, dooscape, capture];