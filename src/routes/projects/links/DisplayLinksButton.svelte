<script lang="ts">
    import { Button } from '$lib/components/ui/button';
    import {  Link as LinkIcon, Download } from '@lucide/svelte/icons';
    import { type ProjectLink, LinkType } from "../projects.types";
    import LinksBubbles from "./LinksBubbles.svelte";
    import { cn } from "$lib/utils";

    let { links, onclick, class: className }: { links: ProjectLink[], onclick?: () => void, class?: string } = $props();

    function isDownload(type: LinkType) {
        return [
            LinkType.WindowsExecutable, LinkType.WindowsInstaller,
            LinkType.MacOS, LinkType.Linux, LinkType.Android, 
            LinkType.iOS, LinkType.Archive
        ].includes(type);
    }
    
    const hasDownload = $derived(links.some(l => isDownload(l.type)));
</script>

<Button
    variant="outline"
    {onclick}
    class={cn("group relative overflow-hidden flex items-center justify-start py-4 gap-4 min-w-70 sm:min-w-100 bg-input/50! border-3 border-transparent hover:border-primary hover:bg-primary/30! active:bg-primary/60! rounded-xl h-auto text-start", className)}
    aria-label="View project links"
>
    <!-- Shine effect -->
    <div class="absolute inset-0 -translate-x-full pointer-events-none z-0 animate-shine" aria-hidden="true">
        <div class="w-1/2 h-full bg-linear-to-r from-transparent via-primary/30 to-transparent skew-x-[-15deg]"></div>
    </div>

    <div class="z-10">
        <LinksBubbles {links} size="lg" />
    </div>

    <div class="z-10">
        <div class="text-lg font-bold leading-none mb-1 group-hover:text-primary transition-colors">Links</div>
        <div class="text-xs text-muted-foreground">{links.length} available</div>
    </div>

    <div class="ml-auto z-10">
        {#if hasDownload}
            <Download class="w-7! h-7!" strokeWidth={1.5} />
        {:else}
            <LinkIcon class="w-7! h-7!" strokeWidth={1.5} />
        {/if}
    </div>
</Button>

<style>
    @keyframes shine {
        0% { transform: translateX(-100%); }
        15% { transform: translateX(200%); }
        100% { transform: translateX(200%); }
    }
    .animate-shine {
        animation: shine 10s cubic-bezier(0.4, 0, 0.2, 1) infinite;
        contain: strict;
    }
</style>