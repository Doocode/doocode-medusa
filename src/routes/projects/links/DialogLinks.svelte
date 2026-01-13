<script lang="ts">
    import { buttonVariants } from "$lib/components/ui/button";
    import * as Dialog from "$lib/components/ui/dialog";
	import { type ProjectLink, LinkType } from "../projects.types";
    import { 
        Github, Globe, BookOpen, Scale, AppWindow, 
        Command, Terminal, Smartphone, Puzzle, 
        Archive, Link as LinkIcon, Download, ExternalLink 
    } from "@lucide/svelte";
    import type { Component } from 'svelte';

    interface Props {
        open?: boolean,
        links?: ProjectLink[];
    }

    let { open = $bindable(false), links = [] }: Props = $props();

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
</script>

<Dialog.Root bind:open>
    <Dialog.Content class="sm:max-w-115">
        <Dialog.Header>
            <Dialog.Title>Links</Dialog.Title>
            <Dialog.Description>
                Access resources, downloads, and documentation.
            </Dialog.Description>
        </Dialog.Header>

        <div class="grid gap-3 py-4 max-h-[60vh] overflow-y-auto pr-2 -mr-2">
            {#each links as link}
                {@const Icon = icons[link.type] || LinkIcon}
                {@const isDl = isDownload(link.type)}
                
                <a 
                    href={link.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    class={buttonVariants({ 
                        variant: "outline", 
                        class: "w-full justify-between h-auto py-3 px-4 group hover:border-primary/50 hover:bg-muted/50" 
                    })}
                >
                    <div class="flex items-center gap-4">
                        <div class="p-2 rounded-md bg-muted group-hover:bg-background border transition-colors shrink-0">
                            <Icon class="w-7! h-7!" />
                        </div>
                        <div class="flex flex-col items-start gap-0.5 text-left min-w-0">
                            <span class="font-semibold text-sm truncate w-full">{link.label || link.type}</span>
                            <span class="text-xs text-muted-foreground font-normal truncate w-full opacity-80">{link.url}</span>
                        </div>
                    </div>
                    {#if isDl}
                        <Download class="size-4 text-muted-foreground group-hover:text-primary transition-colors shrink-0 ml-2" />
                    {:else}
                        <ExternalLink class="size-4 text-muted-foreground group-hover:text-primary transition-colors shrink-0 ml-2" />
                    {/if}
                </a>
            {/each}

            {#if links.length === 0}
                <div class="flex flex-col items-center justify-center py-8 text-muted-foreground border-2 border-dashed rounded-xl bg-muted/30">
                    <LinkIcon class="size-8 opacity-20 mb-2" />
                    <span class="text-sm">No links available</span>
                </div>
            {/if}
        </div>

        <Dialog.Footer>
            <Dialog.Close class={buttonVariants({ variant: "secondary", class: "w-full sm:w-auto" })}>Close</Dialog.Close>
        </Dialog.Footer>
    </Dialog.Content>
</Dialog.Root>