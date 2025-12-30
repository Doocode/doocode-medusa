import type { GalleryImageItem } from '$lib/gallery';

import logo from './doosearch_makingOf_logo2026.png';
import promo from './doosearch_makingOf_promo2021.png';
import mockup from './doosearch_makingOf_searchPageMockup2018.png';

export const bts: GalleryImageItem[] = [
    {
        src: mockup,
        alt: "Réalisation de la maquette de l'interface",
    },
    {
        src: promo,
        alt: "Conception du visuel promotionnel sur PowerPoint",
    },
    {
        src: logo,
        alt: "Modernisation du logo de Doosearch sur Inkscape",
    },
];