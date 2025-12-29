import type { GalleryImageItem } from '$lib/gallery';

import Img1 from './1.png';
import Img1m from './1m.png';
import Img2 from './2.png';
import Img2m from './2m.png';
import Img4 from './4.png';
import Img4m from './4m.png';
import Img5m from './5m.png';
import Img6m from './6m.png';
import Img7m from './7m.png';

export const images: GalleryImageItem[] = [
    {
        src: Img1,
        alt: "Search page screenshot",
    },
    {
        src: Img1m,
        alt: "Search page on mobile",
    },
    {
        src: Img2,
        alt: "List of search engines",
    },
    {
        src: Img2m,
        alt: "List of search engines on mobile",
    },
    {
        src: Img4,
        alt: "Settings page",
    },
    {
        src: Img4m,
        alt: "Settings page on mobile",
    },
    {
        src: Img5m,
        alt: "First run setup with a view at the menu",
    },
    {
        src: Img6m,
        alt: "Color selector in the settings on mobile",
    },
    {
        src: Img7m,
        alt: "Contact form",
    },
];