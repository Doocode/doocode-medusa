<script lang="ts">
    import { SearchBar } from "$lib/page";
    import LinkButton from "./LinkButton.svelte";
    import { formatDate } from "../projects.helpers";
    import { Link as LinkIcon, Search, LayoutGrid, List } from "@lucide/svelte";
    import * as Dialog from "$lib/components/ui/dialog";
    import type { ProjectLink, TwColor } from "../projects.types";
    import { getRelativeTime } from "../projects.helpers";
    import { Button } from "$lib/components/ui/button";
    import { ButtonGroup } from "$lib/components/ui/button-group";
    import { cn } from "$lib/utils";

    interface Props {
        open?: boolean,
        links?: ProjectLink[];
        accent?: TwColor;
    }

    let { open = $bindable(false), links = [], accent }: Props = $props();

    let searchQuery = $state("");
    let showSearch = $state(false);
    let viewMode: 'list' | 'grid' = $state('list');

    $effect(() => {
        const mql = window.matchMedia("(min-width: 640px)");
        
        const onChange = () => {
            if (!mql.matches && viewMode === 'grid') {
                viewMode = 'list';
            }
        };

        mql.addEventListener("change", onChange);
        onChange(); // Check immediately
        
        return () => mql.removeEventListener("change", onChange);
    });

    const filteredLinks = $derived(links.filter(link => {
        const term = searchQuery.toLowerCase();
        return (
            link.type.toLowerCase().includes(term) ||
            link.label?.toLowerCase().includes(term) ||
            link.url.toLowerCase().includes(term)
        );
    }));

    const lastUpdated = $derived.by(() => {
        if (!links.length) return null;
        return links.reduce((latest, link) => {
            const date = link.updatedAt || link.createdAt;
            if (!date) return latest;
            const d = new Date(date);
            return !latest || d > latest ? d : latest;
        }, null as Date | null);
    });
</script>

<Dialog.Root bind:open>
    <Dialog.Content 
        class={cn("sm:max-w-115 transition-all duration-300", 
            viewMode === 'grid' && "sm:max-w-3xl", 
            accent && "project_theme"
        )}
        style={accent ? `--accent-light: ${accent.light}; --accent-dark: ${accent.dark};` : undefined}
    >
        <Dialog.Header class="flex flex-row items-center justify-between space-y-0 pr-6 -mt-2">
            <Dialog.Title>Links</Dialog.Title>

            <div class="flex items-center gap-2">
                {#if links.length > 3}
                    <div class="hidden sm:block">
                        <ButtonGroup>
                            <Button size="icon" class="size-11" variant={viewMode === 'list' ? 'default' : 'outline'} onclick={() => viewMode = 'list'}>
                                <List class="size-5!" />
                            </Button>
                                <Button size="icon" class="size-11" variant={viewMode === 'grid' ? 'default' : 'outline'} onclick={() => viewMode = 'grid'}>
                                <LayoutGrid class="size-5!" />
                            </Button>
                        </ButtonGroup>
                    </div>
                {/if}
                <Button variant={showSearch ? "default" : "outline"} size="icon" class="size-11" onclick={() => { showSearch = !showSearch; if (!showSearch) searchQuery = ""; }}>
                    <Search class="size-5!" />
                </Button>
            </div>
        </Dialog.Header>

        {#if showSearch}
            <div class="pb-2">
                <SearchBar bind:value={searchQuery} placeholder="Search links..." />
            </div>
        {/if}

        <div class={cn(
            "py-4 max-h-[60vh] overflow-y-auto pr-2 -mr-4 -ml-2 sm:-mr-2 sm:ml-0", 
            viewMode === 'grid' ? "grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-2" : "grid gap-2"
        )}>
            {#each filteredLinks as link}
                <LinkButton {link} display={viewMode} />
            {/each}

            {#if filteredLinks.length === 0}
                <div class="flex flex-col items-center justify-center py-8 text-muted-foreground border-2 border-dashed rounded-xl bg-muted/30 col-span-full">
                    <LinkIcon class="size-8 opacity-20 mb-2" />
                    <span class="text-sm">No links found</span>
                </div>
            {/if}
        </div>

        <Dialog.Footer class="sm:justify-center">
            {#if lastUpdated}
                <p class="text-xs text-muted-foreground text-center">
                    Last updated on {formatDate(lastUpdated)} - {getRelativeTime(lastUpdated)}
                </p>
            {/if}
        </Dialog.Footer>
    </Dialog.Content>
</Dialog.Root>