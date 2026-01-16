import { LinkType, type ProjectLink } from "$routes/projects/projects.types";

export const website: ProjectLink = {
    type: LinkType.Website,
    label: "Site web",
    url: 'https://search.doocode.xyz',
    createdOn: new Date('2014-03-19'),
    updatedOn: new Date('2018-07-20'),
};

export const repository: ProjectLink = {
    type: LinkType.Repository,
    label: 'Code source',
    url: 'https://github.com/Doocode/Doosearch/',
    createdOn: new Date('2016-06-30'),
};

export const documentation: ProjectLink = {
    type: LinkType.Documentation,
    label: 'Developer Wiki',
    url: 'https://github.com/Doocode/Doosearch/wiki',
    createdOn: new Date('2018-09-10'),
};

export const license: ProjectLink = {
    type: LinkType.License,
    label: 'Licence GPL-3.0',
    url: 'https://www.gnu.org/licenses/gpl-3.0.txt',
    createdOn: new Date('2014-03-19'),
};

export const links: ProjectLink[] = [
    website,
    repository,
    license,
    documentation
];