import type { GalleryImageItem } from '$lib/gallery';

import currentLogo from '$routes/projects/(old_project)/doosearch/logo.webp';
import oldLogoRound from './old_logo_round.png'
import oldLogoFlat from './old_logo_flat.png'

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