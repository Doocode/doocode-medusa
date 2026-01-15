<script lang="ts">
    import * as Dialog from "$lib/components/ui/dialog";
	import type { ProjectLink } from "../projects.types";
    import { getLocale } from "$lib/paraglide/runtime";
    import { Link as LinkIcon } from "@lucide/svelte";
    import { SearchBar } from "$lib/page";
    import LinkButton from "./LinkButton.svelte";
    import { getRelativeTime } from "../projects.helpers";

    interface Props {
        open?: boolean,
        links?: ProjectLink[];
    }

    let { open = $bindable(false), links = [] }: Props = $props();

    let searchQuery = $state("");

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

    function formatDate(date: Date): string {
        return new Intl.DateTimeFormat(getLocale(), {
            year: 'numeric',
            month: 'long',
            day: 'numeric'
        }).format(date);
    }
</script>

<Dialog.Root bind:open>
    <Dialog.Content class="sm:max-w-115">
        <Dialog.Header>
            <Dialog.Title>Links</Dialog.Title>
        </Dialog.Header>

        <div class="pb-2">
            <SearchBar bind:value={searchQuery} placeholder="Search links..." />
        </div>

        <div class="grid gap-3 py-4 max-h-[60vh] overflow-y-auto pr-2 -mr-2">
            {#each filteredLinks as link}
                <LinkButton {link} />
            {/each}

            {#if filteredLinks.length === 0}
                <div class="flex flex-col items-center justify-center py-8 text-muted-foreground border-2 border-dashed rounded-xl bg-muted/30">
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