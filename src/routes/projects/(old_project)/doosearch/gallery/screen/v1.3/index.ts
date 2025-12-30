import type { GalleryImageItem } from '$lib/gallery';

import Img1 from './doosearch_1_3_screenshot_search.png';
import ImgM1 from './doosearch_1_3_screenshot_search_mobile.png';
import ImgM2 from './doosearch_1_3_screenshot_selectSearch_mobile.png';
import ImgM3 from './doosearch_1_3_screenshot_searchEnginesWindow_mobile.png';
import Img2 from './doosearch_1_3_screenshot_speeddial.png';
import Img3 from './doosearch_1_3_screenshot_settings.png';
import Img4 from './doosearch_1_3_screenshot_first_run.png';

export const images: GalleryImageItem[] = [
    {
        src: ImgM1,
        alt: "Search page on mobile",
    },
    {
        src: Img1,
        alt: "Search page screenshot",
    },
    {
        src: Img2,
        alt: "Speed dial",
    },
    {
        src: Img3,
        alt: "Settings page",
    },
    {
        src: ImgM3,
        alt: "List of search engines on mobile",
    },
    {
        src: ImgM2,
        alt: "Selecting a search engine on mobile",
    },
    {
        src: Img4,
        alt: "First run setup",
    }
];