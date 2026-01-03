import type { GalleryImageItem } from '$lib/gallery';

import logo_2026 from './dooscape_logo_2026_round.webp';
import logo_2017Round from './dooscape_logo_2017_round.png'
import logo_2015Round from './dooscape_logo_2015_round.png'
import logo_2015Flat from './dooscape_logo_2015_flat.png'
import logo_2015Neo from './dooscape_logo_2015_neo.png'
import logo_201410 from './dooscape_logo_2014_10.png'
import logo_201403 from './dooscape_logo_2014_03.png'

export const logos: GalleryImageItem[] = [
    {
        src: logo_2026,
        alt: "Current logo - 2026",
        withTransparencyBg: true,
        description: "The current logo of Dooscape, introduced in 2026."
    },
    {
        src: logo_2017Round,
        alt: "Old logo (round) - 2017",
        withTransparencyBg: true,
    },
    {
        src: logo_2015Round,
        alt: "Old logo (round) - 2015",
        withTransparencyBg: true,
    },
    {
        src: logo_2015Flat,
        alt: "Old logo (flat) - 2015",
        description: "The new color scheme introduced in 2015 is a part of refreshing the brand identity to make it more unique regarding Doosearch identity."
    },
    {
        src: logo_2015Neo,
        alt: "Old logo (Neo development) - 2015",
        withTransparencyBg: true,
        description: "The new color scheme introduced in 2015 is a part of refreshing the brand identity to make it more unique regarding Dooscape and Doosearch identity."
    },
    {
        src: logo_201410,
        alt: "Old logo - October 2014",
        withTransparencyBg: true,
    },
    {
        src: logo_201403,
        alt: "Old logo - March 2014",
        withTransparencyBg: true,
    },
];

export {
    // Current logo
    logo_2026,
    logo_2026 as currentLogo,

    // Old versions
    logo_2017Round,
    logo_2015Round,
    logo_2015Flat,
    logo_201410,
    logo_201403,
}