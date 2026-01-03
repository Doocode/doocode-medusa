import type { GalleryImageItem } from '$lib/gallery';

import logo_2026 from './doosearch_logo_2026.webp';
import logo_2016Round from './doosearch_logo_2016_round.png'
import logo_2016Flat from './doosearch_logo_2016_flat.png'
import logo_2014_04 from './doosearch_logo_2014_04.png'
import logo_2014_03 from './doosearch_logo_2014_03.png'

export const logos: GalleryImageItem[] = [
    {
        src: logo_2026,
        alt: "Current logo - 2026",
        withTransparencyBg: true,
        description: "The current logo of Doosearch, introduced in 2026."
    },
    {
        src: logo_2016Round,
        alt: "Old logo (round) - 2016",
        withTransparencyBg: true,
    },
    {
        src: logo_2016Flat,
        alt: "Old logo (flat) - 2016",
        withTransparencyBg: false,
    },
    {
        src: logo_2014_04,
        alt: "Old logo - April 2014",
        withTransparencyBg: true,
    },
    {
        src: logo_2014_03,
        alt: "Old logo - March 2014",
        withTransparencyBg: true,
    },
];

export {
    // Current logo
    logo_2026,
    logo_2026 as currentLogo,

    // Old versions
    logo_2016Round,
    logo_2016Flat
}