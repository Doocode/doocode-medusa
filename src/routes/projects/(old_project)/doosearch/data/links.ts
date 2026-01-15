import { LinkType, type ProjectLink } from "$routes/projects/projects.types";

export const website: ProjectLink = {
    type: LinkType.Website,
    label: "Site web",
    url: 'https://search.doocode.xyz',
    createdAt: new Date('2014-03-19'),
    updatedAt: new Date('2018-07-20'),
};

export const repository: ProjectLink = {
    type: LinkType.Repository,
    label: 'Code source',
    url: 'https://github.com/Doocode/Doosearch/',
    createdAt: new Date('2016-06-30'),
};

export const links: ProjectLink[] = [
    website,
    repository,
];