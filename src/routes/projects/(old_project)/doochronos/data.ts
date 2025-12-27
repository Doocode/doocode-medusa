import logo from './logo.webp';
import { m } from "$lib/paraglide/messages";
import type { MainActionProps, Project } from "../../projects";

const name = "Doochronos";

const mainAction: MainActionProps = {
    variant: 'try',
    href: 'https://doochronos.doocode.xyz',
    text: m['actions.test']({ name }),
    withAccent: true,
};

export const doochronos: Project = {
    id: crypto.randomUUID(),
    codename: 'doochronos',
    name, logo, mainAction,
    catchyPhrase: m['projects.doochronos.catchy_phrase'](),
    createdAt: new Date('2016-03-15'),
    updatedAt: new Date('2018-06-15'),
    bgAccent: { light: '#ffaed7', dark: '#db0386' },
}