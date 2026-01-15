import { m } from "$lib/paraglide/messages";
import { ProjectStatus, type MainActionProps, type Project, type ProjectLink } from "$routes/projects/projects.types";
import { getLatestRelease } from "$routes/projects/projects.helpers";
import { releases } from "./data/releases";
import { currentLogo } from "./gallery/logo";
import { website } from "./data/links";

const name = "Doosearch";

export const mainAction: MainActionProps = {
    variant: 'visit',
    href: website.url,
    text: m['actions.visit']({ name }),
    withAccent: true,
};

const latestRelease = getLatestRelease(releases);
const updatedAt = releases.length > 1 ? latestRelease?.releaseDate : undefined;

export const doosearch: Project = {
    id: crypto.randomUUID(),
    codename: 'doosearch',
    name, logo: currentLogo,
    
    catchyPhrase: m['projects.doosearch.catchy_phrase'](),

    createdAt: new Date('2014-03-19'),
    updatedAt,

    versionName: latestRelease?.versionString,
    versionCode: latestRelease?.versionNumber,
    status:  ProjectStatus.Archived,

    licenseName: 'GPL-3.0',
    licenseUrl: 'https://www.gnu.org/licenses/gpl-3.0.en.html',

    bgAccent: { light: '#ffc14e', dark: '#be5c05' },
}