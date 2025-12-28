interface GalleryImage {
    src: string;
    srcMobile?: string;
    caption: string;
    order: number;
}

import ImageGallery from './ImageGallery.svelte';
import GalleryItem from './GalleryItem.svelte';
import GalleryItemPicture from './GalleryItemPicture.svelte';
import GalleryItemCaption from './GalleryItemCaption.svelte';

export {
    // Interface for 1 item
    type GalleryImage,

    // Main gallery component
    ImageGallery,

    // Sub-components
    GalleryItem,
    GalleryItemPicture,
    GalleryItemCaption
}