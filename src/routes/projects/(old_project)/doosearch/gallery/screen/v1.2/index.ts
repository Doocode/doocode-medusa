import type { GalleryItemContent } from '$lib/gallery';

import Img_PC_01 from './doosearch_1_2_screenshot_search_computer.png';
import Img_PC_02 from './doosearch_1_2_screenshot_searchEnginesList_computer.png';
import Img_PC_04 from './doosearch_1_2_screenshot_settings_computer.png';

import Img_M_01 from './doosearch_1_2_screenshot_search_mobile.png';
import Img_M_02 from './doosearch_1_2_screenshot_searchEnginesList_mobile.png';
import Img_M_04 from './doosearch_1_2_screenshot_settings_mobile.png';
import Img_M_05 from './doosearch_1_2_screenshot_firstRunSetup_mobile.png';
import Img_M_06 from './doosearch_1_2_screenshot_colorSelector_mobile.png';
import Img_M_07 from './doosearch_1_2_screenshot_contactForm_mobile.png';

// PC
const img_pc_01 = {
	src: Img_PC_01,
	alt: 'Search page screenshot'
};
const img_pc_02 = {
	src: Img_PC_02,
	alt: 'List of search engines'
};
const img_pc_03 = {
	src: Img_PC_04,
	alt: 'Settings page'
};

// Mobile
const img_m_01 = {
	src: Img_M_01,
	alt: 'Search page on mobile'
};
const img_m_02 = {
	src: Img_M_02,
	alt: 'List of search engines on mobile'
};
const img_m_03 = {
	src: Img_M_04,
	alt: 'Settings page on mobile'
};
const img_m_04 = {
	src: Img_M_05,
	alt: 'First run setup with a view at the menu'
};
const img_m_05 = {
	src: Img_M_06,
	alt: 'Color selector in the settings on mobile'
};
const img_m_06 = {
	src: Img_M_07,
	alt: 'Contact form'
};

export const images: GalleryItemContent[] = [
	img_pc_01,
	img_m_01,
	img_pc_02,
	img_m_02,
	img_pc_03,
	img_m_03,
	img_m_04,
	img_m_05,
	img_m_06
];

export const mobile_images: GalleryItemContent[] = [
	img_m_01,
	img_m_02,
	img_m_03,
	img_m_04,
	img_m_05,
	img_m_06
];

export const pc_images: GalleryItemContent[] = [img_pc_01, img_pc_02, img_pc_03];
