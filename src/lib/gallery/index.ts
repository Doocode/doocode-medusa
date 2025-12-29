interface GalleryImageItem {
    src: string;
    alt: string;
    legend?: string;
}

import Gallery from "./Gallery.svelte";

export {
    // Types
    type GalleryImageItem,

    // Components
    Gallery
}