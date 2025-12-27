import Logo from './logo.webp';
import { m } from "$lib/paraglide/messages";
import type { Project } from "../../projects";

export const doosearch: Project = {
    id: crypto.randomUUID(),
    codename: 'doosearch',
    name: 'Doosearch',
    logo: Logo,
    catchyPhrase: m['projects.doosearch.catchy_phrase'](),
    createdAt: new Date('2014-03-19'),
    updatedAt: new Date('2018-09-20'),
    bgAccent: { light: '#ffc14e', dark: '#d86703' },
}