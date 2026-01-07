<script lang="ts">
    import { SearchBar } from "$lib/page";
    import type { PageData } from './$types';
    import { m } from "$lib/paraglide/messages";
    import Heading from '$lib/page/Heading.svelte';
    import { History } from '@lucide/svelte/icons';
    import { ReleaseCard } from "$routes/projects/changelog";
    import type { Release } from '$routes/projects/projects.types';

    let { data }: { data: PageData } = $props();
    let search_value: string = $state("");

    const filtered_releases = $derived.by(() => {
        if (!search_value.trim()) return data.releases;

        const query = search_value.toLowerCase();
        
        return data.releases.filter((release: Release) => {
            // Search in version string
            if (release.versionString.toLowerCase().includes(query)) return true;
            
            // Search in description
            if (release.description?.toLowerCase().includes(query)) return true;
            
            // Search in features
            if (release.features?.some(f => f.toLowerCase().includes(query))) return true;
            
            // Search in improvements
            if (release.improvements?.some(i => i.toLowerCase().includes(query))) return true;
            
            // Search in bugfixes
            if (release.bugfixes?.some(b => b.toLowerCase().includes(query))) return true;
            
            // Search in removed features
            if (release.removedFeatures?.some(r => r.toLowerCase().includes(query))) return true;
            
            // Search in images (alt, legend, description)
            if (release.images?.some(img => 
                img.alt.toLowerCase().includes(query) ||
                img.legend?.toLowerCase().includes(query) ||
                img.description?.toLowerCase().includes(query)
            )) return true;
            
            return false;
        });
    });
</script>

<main class="max-w-7xl mx-auto pt-8 px-4 pb-16 grid gap-8">
    <header class="flex flex-col md:flex-row md:items-end md:justify-between gap-6 md:mb-8">
        <Heading level="h2" icon={History}
            title={ m['projects.history.long_title']() }
        />

        <nav>
            <SearchBar
                bind:value={search_value}
                placeholder={ "Find a release" }
                class="w-full md:w-96 py-5.5 rounded-lg"
                statusText={ search_value && filtered_releases.length + " " + "releases found" }
            />
        </nav>
    </header>

    <div class="grid gap-4 md:gap-1">
        {#each filtered_releases as release}
            <ReleaseCard {release} />
        {:else}
            <p class="text-center text-muted-foreground py-12">
                No releases found matching "{search_value}"
            </p>
        {/each}
    </div>
</main>