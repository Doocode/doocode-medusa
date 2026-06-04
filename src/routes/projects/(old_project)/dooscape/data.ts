import { m } from '$lib/paraglide/messages';
import type { MainActionProps, Project } from '$routes/projects/core';
import { currentLogo } from './gallery/logo';

const name = 'Dooscape';

export const mainAction: MainActionProps = {
	variant: 'repository',
	href: 'https://github.com/Doocode/Dooscape/',
	text: m['actions.visit']({ name: 'GitHub' }),
	withAccent: true
};

export const dooscape: Project = {
	id: crypto.randomUUID(),
	codename: 'dooscape',
	name,
	logo: currentLogo,
	catchyPhrase: m['projects.dooscape.catchy_phrase'](),
	createdOn: new Date('2013-12-11'),
	updatedOn: new Date('2016-01-20'),
	bgAccent: { light: '#88ff9a', dark: '#009346' }
};
