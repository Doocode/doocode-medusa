import { m } from "$lib/paraglide/messages";
import { ProjectStatus, type MainActionProps, type Project } from "$routes/projects/projects.types";
import { getLatestRelease } from "$routes/projects/projects.helpers";
import { releases } from "./history/data";
import { currentLogo } from "./gallery/logo";

const name = "Doosearch";

const mainAction: MainActionProps = {
    variant: 'visit',
    href: 'https://search.doocode.xyz',
    text: m['actions.visit']({ name }),
    withAccent: true,
};

const updatedAt = releases.length > 1 ? getLatestRelease(releases)?.releaseDate : undefined;

export const doosearch: Project = {
    id: crypto.randomUUID(),
    codename: 'doosearch',
    name, logo: currentLogo, mainAction,
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