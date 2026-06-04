import type { GalleryItemContent } from '$lib/gallery';

import Logo_2026 from './doosearch_logo_2026.webp';
import Logo_2016_round from './doosearch_logo_2016_round.png';
import Logo_2016_flat from './doosearch_logo_2016_flat.png';
import Logo_2014_04 from './doosearch_logo_2014_04.png';
import Logo_2014_03 from './doosearch_logo_2014_03.png';

const logo_2026 = {
	src: Logo_2026,
	alt: 'Current logo - 2026',
	transparentBg: true,
	description: 'The current logo of Doosearch, introduced in 2026.'
};

const logo_2016_round = {
	src: Logo_2016_round,
	alt: 'Old logo (round) - 2016',
	transparentBg: true
};

const logo_2016_flat = {
	src: Logo_2016_flat,
	alt: 'Old logo (flat) - 2016',
	transparentBg: false
};

const logo_2014_04 = {
	src: Logo_2014_04,
	alt: 'Old logo - April 2014',
	transparentBg: true
};

const logo_2014_03 = {
	src: Logo_2014_03,
	alt: 'Old logo - March 2014',
	transparentBg: true
};

export const logos: GalleryItemContent[] = [
	logo_2026,
	logo_2016_round,
	//logo_2016_flat,
	logo_2014_04,
	logo_2014_03
];

export {
	// Current logo
	Logo_2026,
	Logo_2026 as currentLogo,

	// Old versions
	logo_2016_round,
	logo_2016_flat
};
