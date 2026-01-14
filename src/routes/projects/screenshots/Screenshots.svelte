<script lang="ts">
    import type { Release } from "../projects.types";
    import { Gallery } from "$lib/gallery";
    import VersionSelect from "./VersionSelect.svelte";
    import { onMount } from "svelte";

    interface Props {
        releases: Release[];
    }

    let { releases = [] }: Props = $props();

    let sortedReleases = $derived([...releases].sort((a, b) => b.versionNumber - a.versionNumber));
    let currentVersionNumber = $state<number | undefined>(sortedReleases.length > 0 ? sortedReleases[0].versionNumber : undefined);
    let selectedRelease = $derived<Release | undefined>(sortedReleases.find(r => r.versionNumber === currentVersionNumber));

    onMount(() => {
        if (sortedReleases.length > 0) {
            currentVersionNumber = sortedReleases[0].versionNumber;
        }
    });
</script>

<main class="grid sm:grid-cols-[220px_1fr] md:grid-cols-[300px_1fr] gap-4 items-start">
    <VersionSelect releases={sortedReleases} bind:currentVersionNumber />
    <section class="bg-primary/30 dark:bg-primary/40 pt-4 pb-3 sm:rounded-4xl sm:overflow-clip">
        {#if selectedRelease && selectedRelease.images}
            {#key currentVersionNumber}
                <Gallery images={ selectedRelease.images } size="large" />
            {/key}
        {/if}
    </section>
    <style>
        section {
            --muted-foreground: var(--foreground);
        }
    </style>
</main>