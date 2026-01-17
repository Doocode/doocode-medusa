<script lang="ts">
    import { buttonVariants } from "$lib/components/ui/button";
    import { type ProjectLink, LinkType } from "../projects.types";
    import { 
        Github, Globe, BookOpen, Scale, AppWindow, 
        Command, Terminal, Smartphone, Puzzle, 
        Archive, Link as LinkIcon, Download, ExternalLink 
    } from "@lucide/svelte";
    import type { Component } from 'svelte';
    import { getRelativeTime } from "../projects.helpers";

    interface Props {
        link: ProjectLink;
        display?: 'list' | 'grid';
    }

    let { link, display = 'list' }: Props = $props();

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

    let Icon = $derived(icons[link.type] || LinkIcon);
    let isDl = $derived(isDownload(link.type));
    let urlInfo = $derived(formatUrl(link.url));
</script>

<a 
    href={link.url}
    target="_blank"
    rel="noopener noreferrer"
    class={buttonVariants({ 
        variant: "outline", 
        class: display === 'list' 
            ? "w-full justify-between h-auto py-3 px-4 group overflow-hidden rounded-2xl"
            : "w-full flex-col h-auto py-6 px-4 gap-3 relative rounded-3xl"
    })}
>
    {#if display === 'list'}
        <div class="flex items-center gap-4 min-w-0 flex-1">
            <div class="p-2 sm:p-3 rounded-lg bg-primary shrink-0 text-primary-foreground">
                <Icon class="size-6 sm:size-8" />
            </div>
            <div class="flex flex-col items-start gap-0.5 text-left min-w-0 flex-1">
                <span class="font-semibold text-sm text-primary truncate w-full">{link.label || link.type}</span>
                <div class="text-xs font-normal w-full overflow-hidden whitespace-nowrap opacity-80">
                    {#if urlInfo.valid}
                        <span class="font-medium">{urlInfo.hostname}</span>
                    {:else}
                        <span class="truncate block">{link.url}</span>
                    {/if}
                </div>
                {#if link.updatedOn || link.createdOn}
                    {@const date = new Date(link.updatedOn || link.createdOn!)}
                    {@const label = link.updatedOn ? "Updated" : "Added"}
                    <span class="text-[10px] text-muted-foreground hidden sm:block pt-0.5">
                        {label} {getRelativeTime(date)}
                    </span>
                {/if}
            </div>
        </div>
        {#if isDl}
            <Download class="size-4 group-hover:text-primary transition-colors shrink-0 ml-2" />
        {:else}
            <ExternalLink class="size-4 group-hover:text-primary transition-colors shrink-0 ml-2" />
        {/if}
    {:else}
        <!-- Grid Variant -->
        <div class="p-4 rounded-2xl bg-primary text-primary-foreground">
            <Icon class="size-10" />
        </div>
        <div class="flex flex-col items-center gap-1 text-center w-full min-w-0">
            <span class="font-bold text-md leading-tight truncate w-full px-2">{link.label || link.type}</span>
            <div class="text-xs text-muted-foreground w-full truncate px-2 opacity-80">
                {#if urlInfo.valid}
                    {urlInfo.hostname}
                {:else}
                    {link.url}
                {/if}
            </div>
        </div>
        
        <div class="absolute top-3 right-3 group-hover:text-primary transition-colors">
            {#if isDl}
                <Download class="size-4" />
            {:else}
                <ExternalLink class="size-4" />
            {/if}
        </div>
    {/if}
</a>
