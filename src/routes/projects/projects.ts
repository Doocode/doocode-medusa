import { m } from "$lib/paraglide/messages";
import CaptureLogo from './(old_project)/capture/logo.png';
import DooscapeLogo from './(old_project)/dooscape/logo.png';
import DoosearchLogo from './(old_project)/doosearch/logo.webp';
import DoochronosLogo from './(old_project)/doochronos/logo.webp';

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

export const doosearch: Project = {
    id: crypto.randomUUID(),
    codename: 'doosearch',
    name: 'Doosearch',
    logo: DoosearchLogo,
    catchyPhrase: m['projects.doosearch.catchy_phrase'](),
    createdAt: new Date('2014-03-19'),
    updatedAt: new Date('2018-09-20'),
    bgAccent: { light: '#ffc14e', dark: '#d86703' },
}

export const doochronos: Project = {
    id: crypto.randomUUID(),
    codename: 'doochronos',
    name: 'Doochronos',
    logo: DoochronosLogo,
    catchyPhrase: m['projects.doochronos.catchy_phrase'](),
    createdAt: new Date('2016-03-15'),
    updatedAt: new Date('2018-06-15'),
    bgAccent: { light: '#ffaed7', dark: '#db0386' },
}

export const dooscape: Project = {
    id: crypto.randomUUID(),
    codename: 'dooscape',
    name: 'Dooscape',
    logo: DooscapeLogo,
    catchyPhrase: m['projects.dooscape.catchy_phrase'](),
    createdAt: new Date('2013-12-11'),
    updatedAt: new Date('2016-01-20'),
    bgAccent: { light: '#68f8bb', dark: '#20ae63' },
};

export const capture: Project = {
    id: crypto.randomUUID(),
    codename: 'capture',
    name: 'Capture',
    logo: CaptureLogo,
    catchyPhrase: m['projects.capture.catchy_phrase'](),
    createdAt: new Date('2015-03-31'),
    bgAccent: { light: '#85ceff', dark: '#0078c8' },
};

export const projects: Project[] = [doosearch, doochronos, dooscape, capture];