<script lang="ts">
    import { m } from "$lib/paraglide/messages";
    import Heading from '$lib/page/Heading.svelte';
    import { History } from '@lucide/svelte/icons';

</script>

<main class="max-w-7xl mx-auto pt-8 px-4 grid gap-8">
    <Heading level="h2" icon={History}
        title={ m['projects.history.long_title']() }
    />

</main>