import { GalleryItemType, type GalleryItemContent } from '$lib/gallery';

import Img_PC_01 from './doosearch_1_3_0_screenshot_search.png';
import Img_PC_02 from './doosearch_1_3_0_screenshot_speeddial.png';
import Img_PC_03 from './doosearch_1_3_0_screenshot_settings.png';
import Img_PC_04 from './doosearch_1_3_0_screenshot_first_run.png';
import Img_PC_05 from './doosearch_1_3_0_screenshot_landing_page.png';

const img_pc_01 = {
	src: Img_PC_01,
	alt: 'Search page screenshot'
};
const img_pc_02 = {
	src: Img_PC_02,
	alt: 'Speed dial'
};
const img_pc_03 = {
	src: Img_PC_03,
	alt: 'Settings page'
};
const img_pc_04 = {
	src: Img_PC_04,
	alt: 'First run setup'
};
const img_pc_05 = {
	src: Img_PC_05,
	alt: 'Landing page'
};

export const images: GalleryItemContent[] = [img_pc_01, img_pc_02, img_pc_04, img_pc_03, img_pc_05];
