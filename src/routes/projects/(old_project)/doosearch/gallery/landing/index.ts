import { type GalleryItemContent } from '$lib/gallery';

import Img_Search_PC from './search_pc.png';
import Img_Search_Mobile from './search_mobile.png';

export const staticImages = {
	Img_Search_PC,
	Img_Search_Mobile
};

const img_search_pc = {
	src: Img_Search_PC,
	alt: 'Search page on desktop'
};
const img_search_mobile = {
	src: Img_Search_Mobile,
	alt: 'Search page on mobile'
};

export const searchImages: GalleryItemContent[] = [img_search_pc, img_search_mobile];
