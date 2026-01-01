import type { GalleryImageItem } from '$lib/gallery';

import currentLogo from './doosearch_logo_2026.webp';
import oldLogoRound from './doosearch_logo_2016_round.png'
import oldLogoFlat from './doosearch_logo_2016_flat.png'

export const logos: GalleryImageItem[] = [
    {
        src: currentLogo,
        alt: "Current logo - 2026",
        withTransparencyBg: true,
        description: "The current logo of Doosearch, introduced in 2026."
    },
    {
        src: oldLogoRound,
        alt: "Old logo (round) - 2016",
        withTransparencyBg: true,
    },
    {
        src: oldLogoFlat,
        alt: "Old logo (flat) - 2016",
        withTransparencyBg: false,
    },
];

export {
    currentLogo,
    oldLogoRound,
    oldLogoFlat
}