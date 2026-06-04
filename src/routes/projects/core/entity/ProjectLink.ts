import type { LinkType } from "../enums";

export default interface ProjectLink {
    type: LinkType;
    label?: string;
    url: string;
    createdOn?: Date;
    updatedOn?: Date;
}