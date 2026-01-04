<script lang="ts">
    import { m } from "$lib/paraglide/messages";
    import Heading from '$lib/page/Heading.svelte';
    import { History } from '@lucide/svelte/icons';
    import type { PageData } from './$types';
    import ReleaseCard from "./ReleaseCard.svelte";

    let { data }: { data: PageData } = $props();
</script>

<main class="max-w-7xl mx-auto pt-8 px-4 pb-16 grid gap-8">
    <Heading level="h2" icon={History}
        title={ m['projects.history.long_title']() }
    />

    <div class="grid gap-4">
        {#each data.releases as release}
            <ReleaseCard {release} />
        {/each}
    </div>
</main>