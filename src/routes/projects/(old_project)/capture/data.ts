import Logo from './logo.png';
import { m } from "$lib/paraglide/messages";
import type { Project } from "../../projects";

export const capture: Project = {
    id: crypto.randomUUID(),
    codename: 'capture',
    name: 'Capture',
    logo: Logo,
    catchyPhrase: m['projects.capture.catchy_phrase'](),
    createdAt: new Date('2015-03-31'),
    bgAccent: { light: '#85ceff', dark: '#0078c8' },
};