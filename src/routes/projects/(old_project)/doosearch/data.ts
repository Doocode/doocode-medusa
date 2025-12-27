import logo from './logo.webp';
import { m } from "$lib/paraglide/messages";
import type { MainActionProps, Project } from "../../projects";

const name = "Doosearch";

const mainAction: MainActionProps = {
    variant: 'visit',
    href: 'https://doosearch.doocode.xyz',
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
    bgAccent: { light: '#ffc14e', dark: '#d86703' },
}