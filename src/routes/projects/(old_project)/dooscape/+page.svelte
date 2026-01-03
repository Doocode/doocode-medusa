<script lang="ts">
    import type { PageProps } from './$types';
    import { House } from '@lucide/svelte/icons';
    import Heading from '$lib/page/Heading.svelte';
    import { m } from "$lib/paraglide/messages";

    let { data }: PageProps = $props();
</script>

<main class="max-w-7xl mx-auto px-4 py-8">
    <Heading level="h2"
        icon={House}
        title={ m['home.title']() }
    />
</main>