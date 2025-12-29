<script lang="ts">
    import { m } from "$lib/paraglide/messages";
    import Heading from '$lib/page/Heading.svelte';

    // Icons
    import PencilRuler from '@lucide/svelte/icons/pencil-ruler';
    import Fullscreen from '@lucide/svelte/icons/fullscreen';
    import { logos } from './logo';

    // Screenshots
	import { all_images as screenshots, v1_2, v1_3 } from "./screen";
	import { Gallery } from "$lib/gallery";
</script>

<main class="max-w-7xl mx-auto py-8 grid gap-14">
    <div class="grid gap-2">
        <Heading level="h2" icon={Fullscreen} class="px-4"
            title={ m['projects.screenshots']() }
        />

        <h3 class="text-primary font-bold px-4 mt-6">Version actuelle</h3>
        <Gallery images={ v1_3 } class="px-4" size="large" />

        <h3 class="text-primary font-bold px-4 mt-8">Ancienne version</h3>
        <Gallery images={ v1_2 } class="px-4" />
    </div>
    
    <div class="grid gap-4">
        <Heading level="h2" icon={PencilRuler} class="px-4"
            title={ m['projects.logos']() }
        />
        <Gallery images={ logos } class="px-4" />
    </div>
</main>