<script lang="ts">
    import type { PageProps } from './$types';
    import ImagePlay from '@lucide/svelte/icons/image-play';
    import Heading from '$lib/page/Heading.svelte';

    let { data }: PageProps = $props();
</script>

<main class="container mx-auto px-4 py-8">
    <Heading level="h2"
        icon={ImagePlay}
        title="Image gallery"
    />
</main>