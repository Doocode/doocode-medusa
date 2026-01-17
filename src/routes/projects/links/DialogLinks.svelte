<script lang="ts">
    import { SearchBar } from "$lib/page";
    import LinkTile from "./LinkTile.svelte";
    import { formatDate } from "../projects.helpers";
    import { Search, LayoutGrid, List, Unlink } from "@lucide/svelte";
    import * as Dialog from "$lib/components/ui/dialog";
    import type { ProjectLink, TwColor } from "../projects.types";
    import { getRelativeTime } from "../projects.helpers";
    import { Button } from "$lib/components/ui/button";
    import { ButtonGroup } from "$lib/components/ui/button-group";
    import { m } from "$lib/paraglide/messages";
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
            const date = link.updatedOn || link.createdOn;
            if (!date) return latest;
            const d = new Date(date);
            return !latest || d > latest ? d : latest;
        }, null as Date | null);
    });

    function toggleSearch() {
        showSearch = !showSearch;
        if (!showSearch) searchQuery = "";
    }
</script>

{#snippet toolButton(Icon: any, active: boolean, title: string, click: () => void)}
    <Button size="icon" class="size-11" {title}
        variant={active ? 'default' : 'outline'}
        onclick={click}>
        <Icon class="size-5!" />
    </Button>
{/snippet}

<Dialog.Root bind:open>
    <Dialog.Content 
        class={cn("sm:max-w-115 transition-all duration-300", 
            viewMode === 'grid' && "sm:max-w-3xl", 
            accent && "project_theme"
        )}
        style={accent ? `--accent-light: ${accent.light}; --accent-dark: ${accent.dark};` : undefined}
    >
        <Dialog.Header class="flex flex-row items-center justify-between space-y-0 pr-6 -mt-2">
            <Dialog.Title>{ m['links.title']() }</Dialog.Title>

            <div class="flex items-center gap-2">
                {#if links.length > 3}
                    <div class="hidden sm:block">
                        <ButtonGroup>
                            {@render toolButton(List, viewMode === 'list',
                                m['links.view_mode.list'](),
                                () => viewMode = 'list'
                            )}
                            {@render toolButton(LayoutGrid, viewMode === 'grid',
                                m['links.view_mode.grid'](),
                                () => viewMode = 'grid'
                            )}
                        </ButtonGroup>
                    </div>
                {/if}
                {@render toolButton(Search, showSearch,
                    m['actions.search'](),
                    toggleSearch
                )}
            </div>
        </Dialog.Header>

        {#if showSearch}
            <div class="pb-2 -mx-2 sm:mx-0">
                <SearchBar bind:value={searchQuery} placeholder={ m['links.filter_placeholder']() } autofocus />
            </div>
        {/if}

        <div class={cn(
            "py-2 max-h-[60vh] overflow-y-auto pr-2 -mr-4 -ml-2 sm:-mr-2 sm:ml-0", 
            viewMode === 'grid' ? "grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-2" : "grid gap-2"
        )}>
            {#each filteredLinks as link}
                <LinkTile {link} display={viewMode} />
            {/each}

            {#if filteredLinks.length === 0}
                <div class="flex flex-col items-center justify-center py-8 text-muted-foreground border-2 border-dashed rounded-xl bg-muted/30 col-span-full">
                    <Unlink class="size-15 mb-2" />
                    <span class="text-sm">{ m['links.no_links_found']() }</span>
                </div>
            {/if}
        </div>

        <Dialog.Footer class="sm:justify-center">
            {#if lastUpdated}
                <p class="text-xs text-muted-foreground text-center">
                    { m['status.updated_on.value']({ date: formatDate(lastUpdated) }) }<br>
                    <span class="text-base font-light">{getRelativeTime(lastUpdated)}</span>
                </p>
            {/if}
        </Dialog.Footer>
    </Dialog.Content>
</Dialog.Root>