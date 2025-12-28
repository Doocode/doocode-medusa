import logo from './logo.webp';
import { m } from "$lib/paraglide/messages";
import type { MainActionProps, Project } from "../../projects";

const name = "Dooscape";

const mainAction: MainActionProps = {
    variant: 'repository',
    href: 'https://github.com/Doocode/Dooscape/',
    text: m['actions.visit']({ name: "GitHub" }),
    withAccent: true,
};

export const dooscape: Project = {
    id: crypto.randomUUID(),
    codename: 'dooscape',
    name, logo, mainAction,
    catchyPhrase: m['projects.dooscape.catchy_phrase'](),
    createdAt: new Date('2013-12-11'),
    updatedAt: new Date('2016-01-20'),
    bgAccent: { light: '#88ff9a', dark: '#009346' },
};