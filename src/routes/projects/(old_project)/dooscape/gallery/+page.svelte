<script lang="ts">
    import { m } from "$lib/paraglide/messages";
    import Heading from '$lib/page/Heading.svelte';

    import { Fullscreen, PencilRuler } from '@lucide/svelte/icons';

    import { logos } from './logo';
    import { Gallery } from "$lib/gallery";
    import { screens } from "./screen";
</script>

<main class="container mx-auto pt-8 grid gap-16 [&_p]:text-balance">
    <div class="grid gap-4">
        <Heading level="h2" icon={Fullscreen} class="px-4"
            title={ m['projects.screenshots']() }
        />
        <Gallery images={ screens } size="large" />
    </div>

    <div class="grid gap-4">
        <Heading level="h2" icon={PencilRuler} class="px-4"
            title={ m['projects.logos']() }
        />
        <Gallery images={ logos } />
    </div>
</main>