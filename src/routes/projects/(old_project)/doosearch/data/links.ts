import { type ProjectLink, LinkType } from '$routes/projects/core';
import { m } from '$lib/paraglide/messages';

export const website: ProjectLink = {
	type: LinkType.Website,
	get label() {
		return m['links.website']();
	},
	url: 'https://search.doocode.xyz',
	createdOn: new Date('2014-03-19'),
	updatedOn: new Date('2018-07-20')
};

export const repository: ProjectLink = {
	type: LinkType.Repository,
	get label() {
		return m['links.source_code']();
	},
	url: 'https://github.com/Doocode/Doosearch/',
	createdOn: new Date('2016-06-30')
};

export const documentation: ProjectLink = {
	type: LinkType.Documentation,
	get label() {
		return m['links.wiki']();
	},
	url: 'https://github.com/Doocode/Doosearch/wiki',
	createdOn: new Date('2018-09-10')
};

export const license: ProjectLink = {
	type: LinkType.License,
	get label() {
		return m['links.license_name']({ name: 'GPL-3.0' });
	},
	url: 'https://www.gnu.org/licenses/gpl-3.0.txt',
	createdOn: new Date('2014-03-19')
};

export const links: ProjectLink[] = [website, repository, license, documentation];
