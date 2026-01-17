enum GalleryItemType {
    Image,
    Video
}

interface GalleryItemContent {
    type?: GalleryItemType;
    src: string;
    alt: string;
    legend?: string;
    description?: string;
    transparentBg?: boolean;
    createdOn?: Date;
    updatedOn?: Date;
}

import Gallery from "./Gallery.svelte";
import GalleryHeader from "./GalleryHeader.svelte";
import GalleryNavigation from "./GalleryNavigation.svelte";
import GalleryCounter from "./GalleryCounter.svelte";
import GalleryTile from "./GalleryTile.svelte";
import GalleryScrollManager from "./gallery.scroll.svelte";

export {
    // Classes
    GalleryScrollManager,

    // Types
    GalleryItemType,
    type GalleryItemContent,

    // Components
    Gallery,
    GalleryHeader,
    GalleryNavigation,
    GalleryCounter,
    GalleryTile,
}