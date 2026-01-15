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
    }

    let { link }: Props = $props();

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
        class: "w-full justify-between h-auto py-3 px-4 group hover:border-primary/50 hover:bg-muted/50 overflow-hidden" 
    })}
>
    <div class="flex items-center gap-4 min-w-0 flex-1">
        <div class="p-2 sm:p-3 rounded-md bg-muted group-hover:bg-background border transition-colors shrink-0 text-primary">
            <Icon class="size-6 sm:size-8" />
        </div>
        <div class="flex flex-col items-start gap-0.5 text-left min-w-0 flex-1">
            <span class="font-semibold text-sm text-primary truncate w-full">{link.label || link.type}</span>
            <div class="text-xs text-muted-foreground font-normal w-full overflow-hidden whitespace-nowrap opacity-80">
                {#if urlInfo.valid}
                    <span class="text-foreground/90 font-medium">{urlInfo.hostname}</span><span class="hidden sm:inline">{urlInfo.path}</span>
                {:else}
                    <span class="truncate block">{link.url}</span>
                {/if}
            </div>
            {#if link.updatedAt || link.createdAt}
                {@const date = new Date(link.updatedAt || link.createdAt!)}
                {@const label = link.updatedAt ? "Updated" : "Added"}
                <span class="text-[10px] text-muted-foreground hidden sm:block pt-0.5">
                    {label} {getRelativeTime(date)}
                </span>
            {/if}
        </div>
    </div>
    {#if isDl}
        <Download class="size-4 text-muted-foreground group-hover:text-primary transition-colors shrink-0 ml-2" />
    {:else}
        <ExternalLink class="size-4 text-muted-foreground group-hover:text-primary transition-colors shrink-0 ml-2" />
    {/if}
</a>
