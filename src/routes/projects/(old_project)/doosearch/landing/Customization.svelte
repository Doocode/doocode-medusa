<script lang="ts">
    import { BrushCleaning } from '@lucide/svelte/icons';
    import ColorSwitcher from './ColorSwitcher.svelte';
    import Heading from '$lib/page/Heading.svelte';
    import { scale } from 'svelte/transition';
    import { m } from "$lib/paraglide/messages";
    import { UIPlaceholder } from '../gallery/svg';

    let color = $state("#3b82f6");
</script>

<div class="grid gap-8 md:gap-12 md:grid-cols-2 items-center" style:--bg={color}>
    <div class="grid gap-4">
        <Heading level="h2"
            icon={BrushCleaning}
            title={m['projects.doosearch.landing.customization.title']()}
        />
        <p>{m['projects.doosearch.landing.customization.description']()}</p>

        <div class="flex justify-center items-center -mb-4 md:m-0 xl:-mx-8">
            <ColorSwitcher bind:color />
        </div>
    </div>

    <div>
        {#key color}
            <div in:scale>
                <UIPlaceholder class="w-full aspect-video -mb-8 md:m-0 md:-rotate-3 rounded-md md:rounded-xl" />
            </div>
        {/key}
    </div>
</div>
