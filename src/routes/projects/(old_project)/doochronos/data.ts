import Logo from './logo.webp';
import { m } from "$lib/paraglide/messages";
import type { Project } from "../../projects";

export const doochronos: Project = {
    id: crypto.randomUUID(),
    codename: 'doochronos',
    name: 'Doochronos',
    logo: Logo,
    catchyPhrase: m['projects.doochronos.catchy_phrase'](),
    createdAt: new Date('2016-03-15'),
    updatedAt: new Date('2018-06-15'),
    bgAccent: { light: '#ffaed7', dark: '#db0386' },
}