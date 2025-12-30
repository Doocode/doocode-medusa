<script lang="ts">
    import type { PageProps } from './$types';
    import { Info } from '@lucide/svelte/icons';
    import Heading from '$lib/page/Heading.svelte';
    import { Specs } from '$routes/projects/specs';

    let { data }: PageProps = $props();
</script>

<main class="max-w-7xl mx-auto px-4 py-8 grid">
    <Heading level="h2"
        icon={Info}
        title="Details"
    />

    <Specs project={data.project} />
</main>