<script lang="ts">
    import { Button } from '$lib/components/ui/button';
    import { 
        Globe, Github, BookOpen, Scale, AppWindow, Command, Terminal, 
        Smartphone, Puzzle, Archive, Link as LinkIcon
    } from '@lucide/svelte/icons';
    import { type ProjectLink, LinkType } from "../projects.types";
    import { cn } from "$lib/utils";

    let { links, onclick, class: className }: { links: ProjectLink[], onclick?: () => void, class?: string } = $props();

    const linkIcons = {
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

    const linksDetails = $derived(links ? links.map(l => ({
        icon: linkIcons[l.type] || LinkIcon,
        label: l.label || l.type
    })) : []);
    
    const visibleLinks = $derived(linksDetails.slice(0, 3));
    const remainingCount = $derived(Math.max(0, linksDetails.length - 3));
</script>

<Button
    variant="outline"
    {onclick}
    class={cn("group flex items-center justify-start py-4 gap-4 min-w-100 bg-input/50! border-3 border-transparent hover:border-primary hover:bg-primary/30! active:bg-primary/60! rounded-xl h-auto text-start", className)}
    aria-label="View project links"
>
    <div class="flex -space-x-3 isolate">
        {#each visibleLinks as link, i}
            <div class="relative bg-primary text-primary-foreground rounded-full p-2 border-2 border-background w-10 h-10 flex items-center justify-center shadow-sm" style="z-index: {10 - i}">
                <link.icon class="w-5! h-5!" />
            </div>
        {/each}
        {#if remainingCount > 0}
            <div class="relative bg-muted text-muted-foreground rounded-full border-2 border-background w-10 h-10 flex items-center justify-center text-xs font-bold shadow-sm" style="z-index: 0">
                +{remainingCount}
            </div>
        {/if}
    </div>
    <div>
        <div class="text-sm font-bold leading-none mb-1 group-hover:text-primary transition-colors">Links</div>
        <div class="text-xs text-muted-foreground">{links.length} available</div>
    </div>

    <div class="ml-auto">
        <LinkIcon class="w-5! h-5!" />
    </div>
</Button>