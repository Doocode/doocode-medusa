<script lang="ts">
    import {
        DraftingCompass, PencilRuler, Fullscreen, Construction
    } from '@lucide/svelte/icons';
    import { m } from "$lib/paraglide/messages";
    import Heading from '$lib/page/Heading.svelte';
    import { logos } from './logo';
    import { Gallery } from "$lib/gallery";
    import { bts, mockups } from "./bts";
    import { Screenshots } from "$routes/projects/screenshots";
    import { releases } from "../data/releases";
</script>

<main class="container mx-auto pt-8 grid gap-16 [&_p]:text-balance">
    <div class="grid gap-2">
        <Heading level="h2" icon={Fullscreen} class="px-4"
            title={ m['projects.screenshots']() }
        />

        <Screenshots {releases} />
    </div>

    <div class="grid gap-4">
        <Heading level="h2" icon={PencilRuler} class="px-4"
            title={ m['projects.logos']() }
        />
        <Gallery images={ logos } />
    </div>

    <div class="grid gap-4">
        <Heading level="h2" icon={Construction} class="px-4"
            title={ m['projects.bts']() }
        />
        <Gallery images={ bts } />
    </div>

    <div class="grid gap-4">
        <Heading level="h2" icon={DraftingCompass} class="px-4"
            title={ m['projects.mockups']() }
        />
        <p class="px-4 -mt-2">Quelques explorations au sujet de l'interface qui était prévue pour la version 1.4 ou une éventuelle application mobile.</p>
        <Gallery images={ mockups } size="small" />
    </div>
</main>