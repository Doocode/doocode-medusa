<script lang="ts">
    import { buttonVariants } from "$lib/components/ui/button";
    import * as Dialog from "$lib/components/ui/dialog";
	import { type ProjectLink, LinkType } from "../projects.types";
    import { getLocale } from "$lib/paraglide/runtime";
    import { 
        Github, Globe, BookOpen, Scale, AppWindow, 
        Command, Terminal, Smartphone, Puzzle, 
        Archive, Link as LinkIcon, Download, ExternalLink 
    } from "@lucide/svelte";
    import type { Component } from 'svelte';
    import { SearchBar } from "$lib/page";

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

    const icons: Record<string, Component> = {
        [LinkType.Website]: Globe,
        [LinkType.Repository]: Github,
        [LinkType.Documentation]: BookOpen,
        [LinkType.License]: Scale,
        [LinkType.WindowsExecutable]: AppWindow,
        [LinkType.WindowsInstaller]: AppWindow,
        [LinkType.MacOS]: Command,
        [LinkType.Linux]: Terminal,
        [LinkType.Android]: Smartphone,
        [LinkType.iOS]: Smartphone,
        [LinkType.WebExtension]: Puzzle,
        [LinkType.Archive]: Archive,
        [LinkType.Other]: LinkIcon
    };

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

    function getRelativeTime(date: Date): string {
        const now = new Date();
        const diffInMs = date.getTime() - now.getTime();
        const diffInDays = Math.floor(diffInMs / (1000 * 60 * 60 * 24));
        const diffInMonths = Math.floor(diffInDays / 30);
        const diffInYears = Math.floor(diffInDays / 365);

        const rtf = new Intl.RelativeTimeFormat(getLocale(), { numeric: 'auto' });

        if (Math.abs(diffInYears) >= 1) {
            return rtf.format(diffInYears, 'year');
        } else if (Math.abs(diffInMonths) >= 1) {
            return rtf.format(diffInMonths, 'month');
        } else {
            return rtf.format(diffInDays, 'day');
        }
    }

    function isDownload(type: LinkType) {
        return [
            LinkType.WindowsExecutable, LinkType.WindowsInstaller,
            LinkType.MacOS, LinkType.Linux, LinkType.Android, 
            LinkType.iOS, LinkType.Archive
        ].includes(type);
    }

    function formatUrl(url: string) {
        try {
            const u = new URL(url);
            let path = u.pathname + u.search + u.hash;
            if (path.length > 20) {
                path = path.slice(0, 8) + "..." + path.slice(-8);
            }
            if (path === "/") path = "";
            
            return {
                hostname: u.hostname,
                path,
                valid: true
            };
        } catch {
            return { hostname: url, path: "", valid: false };
        }
    }
</script>

<Dialog.Root bind:open>
    <Dialog.Content class="sm:max-w-115">
        <Dialog.Header>
            <Dialog.Title>Links</Dialog.Title>
            <Dialog.Description>
                Access resources, downloads, and documentation.
            </Dialog.Description>
        </Dialog.Header>

        <div class="pb-2">
            <SearchBar bind:value={searchQuery} placeholder="Search links..." />
        </div>

        <div class="grid gap-3 py-4 max-h-[60vh] overflow-y-auto pr-2 -mr-2">
            {#each filteredLinks as link}
                {@const Icon = icons[link.type] || LinkIcon}
                {@const isDl = isDownload(link.type)}
                {@const urlInfo = formatUrl(link.url)}
                
                <a 
                    href={link.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    class={buttonVariants({ 
                        variant: "outline", 
                        class: "w-full justify-between h-auto py-3 px-4 group hover:border-primary/50 hover:bg-muted/50 overflow-hidden" 
                    })}
                >
                    <div class="flex items-center gap-4 min-w-0 flex-1">
                        <div class="p-2 rounded-md bg-muted group-hover:bg-background border transition-colors shrink-0">
                            <Icon class="size-6" />
                        </div>
                        <div class="flex flex-col items-start gap-0.5 text-left min-w-0 flex-1">
                            <span class="font-semibold text-sm truncate w-full pr-2">{link.label || link.type}</span>
                            <div class="text-xs text-muted-foreground font-normal w-full overflow-hidden whitespace-nowrap opacity-80">
                                {#if urlInfo.valid}
                                    <span class="text-foreground/90 font-medium">{urlInfo.hostname}</span><span class="hidden sm:inline">{urlInfo.path}</span>
                                {:else}
                                    <span class="truncate block">{link.url}</span>
                                {/if}
                            </div>
                        </div>
                    </div>
                    {#if isDl}
                        <Download class="size-4 text-muted-foreground group-hover:text-primary transition-colors shrink-0 ml-2" />
                    {:else}
                        <ExternalLink class="size-4 text-muted-foreground group-hover:text-primary transition-colors shrink-0 ml-2" />
                    {/if}
                </a>
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