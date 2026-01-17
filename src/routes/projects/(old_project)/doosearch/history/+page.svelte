<script lang="ts">
    import { SearchBar } from "$lib/page";
    import type { PageData } from './$types';
    import { m } from "$lib/paraglide/messages";
    import Heading from '$lib/page/Heading.svelte';
    import { BrushCleaning, History, SearchX } from '@lucide/svelte/icons';
    import { Button } from "$lib/components/ui/button";
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
            if (release.removals?.some(r => r.toLowerCase().includes(query))) return true;

            // Search in links
            if (release.links?.some(link => 
                link.type.toLowerCase().includes(query) ||
                link.label?.toLowerCase().includes(query) ||
                link.url.toLowerCase().includes(query)
            )) return true;
            
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

<svelte:head>
    <title>[{ data.project.name }] { m['projects.history.long_title']() } • Doocode.xyz</title>
</svelte:head>

<main class="container max-w-5xl mx-auto pt-8 px-4 pb-16 grid gap-8">
    <header class="flex flex-col md:flex-row md:items-end md:justify-between gap-6 md:mb-8">
        <Heading level="h2" icon={History}
            title={ m['projects.history.long_title']() }
        />

        <nav>
            <SearchBar
                bind:value={search_value}
                placeholder={ m['actions.search']() }
                class="w-full md:w-96"
                statusText={ search_value ?
                    m['status.search.count_results_found']({ count: filtered_releases.length }) :
                    undefined
                }
            />
        </nav>
    </header>

    <div class="grid gap-4 md:gap-1">
        {#each filtered_releases as release}
            <ReleaseCard {release} />
        {:else}
            <div class="flex flex-col items-center justify-center py-24 text-center border-2 border-dashed rounded-2xl bg-muted/20">
                <div class="relative mb-6">
                    <SearchX class="size-20 text-primary relative z-10" />
                </div>
                
                <h3 class="text-2xl font-bold mb-2">{m['status.search.no_results_title']()}</h3>
                
                <p class="text-muted-foreground text-sm mb-8 max-w-md text-balance">
                    {m['status.search.no_results_desc']({ query: search_value })}
                </p>

                <Button  
                    size="lg"
                    onclick={() => search_value = ""}
                >
                    <BrushCleaning class="size-5!" />
                    {m['actions.clear_search']()}
                </Button>
            </div>
        {/each}
    </div>
</main>