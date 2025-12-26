import { m } from "$lib/paraglide/messages";
import DoosearchLogo from './doosearch/logo.webp';
import DoochronosLogo from './doochronos/logo.webp';

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
    description: string;
    createdAt: Date;
    updatedAt?: Date;
    bgAccent?: TwColor;
}

const doosearch: Project = {
    id: crypto.randomUUID(),
    codename: 'doosearch',
    name: 'Doosearch',
    logo: DoosearchLogo,
    catchyPhrase: m['projects.doosearch.catchy_phrase'](),
    description: 'Your personal homepage',
    createdAt: new Date('2014-03-19'),
    updatedAt: new Date('2018-09-20'),
    bgAccent: { light: '#ffc14e', dark: '#d86703' },
}

const doochronos: Project = {
    id: crypto.randomUUID(),
    codename: 'doochronos',
    name: 'Doochronos',
    logo: DoochronosLogo,
    catchyPhrase: m['projects.doochronos.catchy_phrase'](),
    description: 'A time tracking application',
    createdAt: new Date('2016-03-15'),
    updatedAt: new Date('2018-06-15'),
    bgAccent: { light: '#ffaed7', dark: '#db0386' },
}

export const projects: Project[] = [doosearch, doochronos];