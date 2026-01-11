import { GalleryItemType, type GalleryItemContent } from '$lib/gallery';

import Img_PC_01 from './doosearch_1_3_screenshot_search.png';
import Img_PC_02 from './doosearch_1_3_screenshot_speeddial.png';
import Img_PC_03 from './doosearch_1_3_screenshot_settings.png';
import Img_PC_04 from './doosearch_1_3_screenshot_first_run.png';
import Vid_PC_05 from './doosearch_1_3_screenshot_searchEnginesWindow_pc.mp4';

import Img_M_01 from './doosearch_1_3_screenshot_search_mobile.png';
import Img_M_02 from './doosearch_1_3_screenshot_selectSearch_mobile.png';
import Img_M_03 from './doosearch_1_3_screenshot_searchEnginesWindow_mobile.png';

// Mobile
const img_m_01 = {
    src: Img_M_01,
    alt: "Search page on mobile",
};
const img_m_02 = {
    src: Img_M_02,
    alt: "Selection of a search engine on mobile",
};
const img_m_03 = {
    src: Img_M_03,
    alt: "List of search engines on mobile",
};

// PC
const img_pc_01 = {
    src: Img_PC_01,
    alt: "Search page screenshot",
};
const img_pc_02 = {
    src: Img_PC_02,
    alt: "Speed dial",
};
const img_pc_03 = {
    src: Img_PC_03,
    alt: "Settings page",
};
const img_pc_04 = {
    src: Img_PC_04,
    alt: "First run setup",
};
const vid_pc_05 = {
    type: GalleryItemType.Video,
    src: Vid_PC_05,
    alt: "Selection of several search engines",
};

export const images: GalleryItemContent[] = [
    img_m_01, img_pc_01, img_pc_02, img_pc_04, vid_pc_05,
    img_m_02, img_m_03, img_pc_03
];

export const mobile_images: GalleryItemContent[] = [
    img_m_01, img_m_02, img_m_03
];

export const pc_images: GalleryItemContent[] = [
    img_pc_01, img_pc_02, img_pc_04, img_pc_03, vid_pc_05,
];

export const videos = {
    Vid_PC_05,
}