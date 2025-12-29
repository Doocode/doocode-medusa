import type { GalleryImageItem } from '$lib/gallery';

import currentLogo from '$routes/projects/(old_project)/doosearch/logo.webp';
import oldLogoRound from './old_logo_round.png'
import oldLogoFlat from './old_logo_flat.png'

export const logos: GalleryImageItem[] = [
    {
        src: currentLogo,
        alt: "Current logo",
    },
    {
        src: oldLogoRound,
        alt: "Old logo (round)",
    },
    {
        src: oldLogoFlat,
        alt: "Old logo (flat)",
    },
];