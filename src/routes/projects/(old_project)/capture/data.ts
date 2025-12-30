import logo from './logo.webp';
import { m } from "$lib/paraglide/messages";
import type { MainActionProps, Project } from "$routes/projects/projects.types";

const name = "Capture";

const mainAction: MainActionProps = {
    variant: 'download',
    href: 'https://doocode.xyz/about-dooscreen.html',
    text: m['actions.download']({ name }),
    withAccent: true,
};

export const capture: Project = {
    id: crypto.randomUUID(),
    codename: 'capture',
    name, logo, mainAction,
    catchyPhrase: m['projects.capture.catchy_phrase'](),
    createdAt: new Date('2015-03-31'),
    bgAccent: { light: '#85ceff', dark: '#0057c8' },
};