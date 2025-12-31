<script lang="ts">
    import { m } from "$lib/paraglide/messages";
    import Heading from '$lib/page/Heading.svelte';

    import { DraftingCompass, PencilRuler, Fullscreen } from '@lucide/svelte/icons';

    import { logos } from './logo';
    import { v1_2, v1_3 } from "./screen";
    import { Gallery } from "$lib/gallery";
    import { bts } from "./bts";
</script>

<main class="max-w-7xl mx-auto pt-8 grid gap-8">
    <div class="grid gap-2">
        <Heading level="h2" icon={Fullscreen} class="px-4"
            title={ m['projects.screenshots']() }
        />

        <h3 class="text-primary font-bold px-4 mt-6">Version actuelle</h3>
        <Gallery images={ v1_3 } size="large" />

        <h3 class="text-primary font-bold px-4">Ancienne version</h3>
        <Gallery images={ v1_2 } />
    </div>

    <div class="grid gap-4">
        <Heading level="h2" icon={PencilRuler} class="px-4"
            title={ m['projects.logos']() }
        />
        <Gallery images={ logos } />
    </div>

    <div class="grid gap-4">
        <Heading level="h2" icon={DraftingCompass} class="px-4"
            title={ m['projects.bts']() }
        />
        <Gallery images={ bts } size="large" />
    </div>
</main>