interface GalleryImageItem {
    src: string;
    alt: string;
    legend?: string;
    withTransparencyBg?: boolean;
}

import Gallery from "./Gallery.svelte";

export {
    // Types
    type GalleryImageItem,

    // Components
    Gallery
}