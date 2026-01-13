import { m } from "$lib/paraglide/messages";
import { LinkType, ProjectStatus, type MainActionProps, type Project, type ProjectLink } from "$routes/projects/projects.types";
import { getLatestRelease } from "$routes/projects/projects.helpers";
import { releases } from "./history/data";
import { currentLogo } from "./gallery/logo";

const name = "Doosearch";

export const mainAction: MainActionProps = {
    variant: 'visit',
    href: 'https://search.doocode.xyz',
    text: m['actions.visit']({ name }),
    withAccent: true,
};

const updatedAt = releases.length > 1 ? getLatestRelease(releases)?.releaseDate : undefined;

export const doosearch: Project = {
    id: crypto.randomUUID(),
    codename: 'doosearch',
    name, logo: currentLogo,
    
    catchyPhrase: m['projects.doosearch.catchy_phrase'](),

    createdAt: new Date('2014-03-19'),
    updatedAt,

    versionName: '1.3.2',
    versionCode: 23,
    status:  ProjectStatus.Archived,

    licenseName: 'GPL-3.0',
    licenseUrl: 'https://www.gnu.org/licenses/gpl-3.0.en.html',

    bgAccent: { light: '#ffc14e', dark: '#be5c05' },
}

// Links
const website: ProjectLink = {
    type: LinkType.Website,
    label: "Site web",
    url: 'https://search.doocode.xyz',
    createdAt: new Date('2014-03-19'),
    updatedAt: new Date('2018-07-20'),
};
const repository: ProjectLink = {
    type: LinkType.Repository,
    label: 'Code source',
    url: 'https://github.com/Doocode/Doosearch/',
    createdAt: new Date('2016-06-30'),
};

export const links: ProjectLink[] = [
    website,
    repository,
];