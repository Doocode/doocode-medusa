<script lang="ts">
    import VersionSelect from "./VersionSelect.svelte";
    import type { Release } from "$routes/projects/core";
    import { Gallery } from "$lib/gallery";
    import { onMount } from "svelte";

    interface Props {
        releases: Release[];
        size?: 'small' | 'medium' | 'large';
    }

    let {
        releases = [],
        size = 'medium'
    }: Props = $props();

    let sortedReleases = $derived(
        [...releases]
            .filter(r => r.images && r.images.length > 0)
            .sort((a, b) => b.versionNumber - a.versionNumber)
    );
    let currentVersionNumber = $derived<number | undefined>(sortedReleases.length > 0 ? sortedReleases[0].versionNumber : undefined);
    let selectedRelease = $derived<Release | undefined>(sortedReleases.find(r => r.versionNumber === currentVersionNumber));

    onMount(() => {
        if (sortedReleases.length > 0) {
            currentVersionNumber = sortedReleases[0].versionNumber;
        }
    });
</script>

<main class="grid sm:grid-cols-[220px_1fr] md:grid-cols-[300px_1fr] gap-4 items-start">
    <VersionSelect releases={sortedReleases} bind:currentVersionNumber />
    <section class="bg-primary/30 dark:bg-primary/40 pt-4 sm:rounded-4xl sm:overflow-clip">
        {#if selectedRelease && selectedRelease.images}
            {#key currentVersionNumber}
                <Gallery images={ selectedRelease.images } {size} />
            {/key}
        {/if}
    </section>
    <style>
        section {
            --muted-foreground: var(--foreground);
        }
    </style>
</main>