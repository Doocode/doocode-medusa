enum GalleryItemType {
    StaticImage,
    Video
}

interface GalleryItemContent {
    type?: GalleryItemType;
    src: string;
    alt: string;
    legend?: string;
    description?: string;
    withTransparencyBg?: boolean;
}

import Gallery from "./Gallery.svelte";

export {
    // Types
    GalleryItemType,
    type GalleryItemContent,

    // Components
    Gallery,
}