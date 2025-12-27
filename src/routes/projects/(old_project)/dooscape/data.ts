import Logo from './logo.png';
import { m } from "$lib/paraglide/messages";
import type { Project } from "../../projects";

export const dooscape: Project = {
    id: crypto.randomUUID(),
    codename: 'dooscape',
    name: 'Dooscape',
    logo: Logo,
    catchyPhrase: m['projects.dooscape.catchy_phrase'](),
    createdAt: new Date('2013-12-11'),
    updatedAt: new Date('2016-01-20'),
    bgAccent: { light: '#68f8bb', dark: '#20ae63' },
};