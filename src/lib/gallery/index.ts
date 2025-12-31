interface GalleryImageItem {
    src: string;
    alt: string;
    legend?: string;
    description?: string;
    withTransparencyBg?: boolean;
}

import Gallery from "./Gallery.svelte";
import Slideshow from "./Slideshow.svelte";
import SlideItem from "./SlideItem.svelte";
import SlideshowBindings from "./SlideshowBindings.svelte";
import SlideshowNavigation from "./SlideshowNavigation.svelte";
import SlideshowHeader from "./SlideshowHeader.svelte";
import SlideshowFooter from "./SlideshowFooter.svelte";

export {
    // Types
    type GalleryImageItem,

    // Components
    Gallery,
    Slideshow,
    SlideItem,
    SlideshowBindings,
    SlideshowNavigation,
    SlideshowHeader,
    SlideshowFooter
}