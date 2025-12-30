import logo from './gallery/logo/doosearch_logo_2026.webp';
import { m } from "$lib/paraglide/messages";
import { ProjectStatus, type MainActionProps, type Project } from "$routes/projects/projects.types";

const name = "Doosearch";

const mainAction: MainActionProps = {
    variant: 'visit',
    href: 'https://search.doocode.xyz',
    text: m['actions.visit']({ name }),
    withAccent: true,
};

export const doosearch: Project = {
    id: crypto.randomUUID(),
    codename: 'doosearch',
    name, logo, mainAction,
    catchyPhrase: m['projects.doosearch.catchy_phrase'](),

    createdAt: new Date('2014-03-19'),
    updatedAt: new Date('2018-09-20'),

    versionName: '1.3.2',
    versionCode: 23,
    status:  ProjectStatus.Archived,

    licenseName: 'GPL-3.0',
    licenseUrl: 'https://www.gnu.org/licenses/gpl-3.0.en.html',

    bgAccent: { light: '#ffc14e', dark: '#be5c05' },
}