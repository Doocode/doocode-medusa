<script lang="ts">
    import { m } from "$lib/paraglide/messages";
    import Heading from '$lib/page/Heading.svelte';
    import ImageGallery from '../../../gallery/ImageGallery.svelte';

    // Icons
    import PencilRuler from '@lucide/svelte/icons/pencil-ruler';
    import Fullscreen from '@lucide/svelte/icons/fullscreen';
    import CurrentLogo from '../logo.webp';
    import OldLogo_Round from './logo/old_logo_round.png';
    //import OldLogo_Flat from './logo/old_logo_flat.png';

    // v1.3
    import v1_3_img02 from './screen/v1.3/2.png';
    import v1_3_img03 from './screen/v1.3/3.png';
    import v1_3_img04 from './screen/v1.3/4.png';
    import v1_3_img05 from './screen/v1.3/5.png';

    /*// v1.2
    import v1_2_img01 from './screen/v1.2/1.png';
    import v1_2_img01m from './screen/v1.2/1m.png';
    import v1_2_img02 from './screen/v1.2/2.png';
    import v1_2_img02m from './screen/v1.2/2m.png';
    import v1_2_img04 from './screen/v1.2/4.png';
    import v1_2_img04m from './screen/v1.2/4m.png';
    import v1_2_img05 from './screen/v1.2/5.png';
    import v1_2_img06 from './screen/v1.2/6.png';
    import v1_2_img07 from './screen/v1.2/7.png';*/

    // Logos
    const logos = [
        { src: CurrentLogo, caption: 'Logo principal (2026)', order: 1 },
        { src: OldLogo_Round, caption: 'Ancien logo (2016 à 2025)', order: 2 },
        //{ src: OldLogo_Flat, caption: 'Ancien logo (version plate)', order: 3 }
    ]

    // Images v1.3 (pas de versions mobiles pour cette version)
    const imagesV13 = [
        { src: v1_3_img02, caption: 'Capture 2', order: 2 },
        { src: v1_3_img03, caption: 'Capture 3', order: 3 },
        { src: v1_3_img04, caption: 'Capture 4', order: 4 },
        { src: v1_3_img05, caption: 'Capture 5', order: 5 }
    ];

    /*// Images v1.2 (avec versions mobiles)
    const imagesV12 = [
        { 
            src: v1_2_img01,
            srcMobile: v1_2_img01m,
            caption: 'Page d\'accueil', 
            order: 1 
        },
        { 
            src: v1_2_img02,
            srcMobile: v1_2_img02m,
            caption: 'Résultats de recherche', 
            order: 2 
        },
        { 
            src: v1_2_img04,
            srcMobile: v1_2_img04m,
            caption: 'Interface de recherche avancée', 
            order: 4 
        },
        { 
            src: v1_2_img05,
            caption: 'Détails de recherche', 
            order: 5 
        },
        { 
            src: v1_2_img06,
            caption: 'Paramètres', 
            order: 6 
        },
        { 
            src: v1_2_img07,
            caption: 'Vue d\'ensemble', 
            order: 7 
        }
    ];*/
</script>

<main class="max-w-7xl mx-auto px-4 py-8 grid gap-14">
    <div class="grid gap-4">
        <Heading level="h2"
            icon={Fullscreen}
            title={ m['projects.screenshots']() }
        />
        <ImageGallery images={imagesV13} />
    </div>
    
    <div class="grid gap-4">
        <Heading level="h2"
            icon={PencilRuler}
            title={ m['projects.logos']() }
        />
        <ImageGallery images={logos} />
    </div>
</main>