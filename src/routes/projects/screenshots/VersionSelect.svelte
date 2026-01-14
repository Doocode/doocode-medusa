<script lang="ts">
    import type { Release } from "../projects.types";
    import { Image } from "@lucide/svelte/icons";

    interface Props {
        releases: Release[];
        currentVersionNumber?: number;
    }

    let { releases, currentVersionNumber = $bindable() }: Props = $props();
</script>

<nav class="grid items-start">
    <h3 class="text-lg font-bold mx-4 mb-4">Versions</h3>

    <div class="flex flex-col gap-1 mx-4 sm:m-0">
        {#each releases as release (release.versionNumber)}
            {@const isSelected = release.versionNumber === currentVersionNumber}
            {@const imageCount = release.images?.length ?? 0}

            <button
                onclick={() => currentVersionNumber = release.versionNumber}
                class="w-full flex items-center gap-3 px-4 py-3 rounded-lg transition-all duration-150 group text-left
                {isSelected 
                    ? 'text-primary bg-primary/30 ring-1 ring-primary' // Selected
                    : 'text-slate-600 dark:text-slate-400 hover:bg-secondary hover:text-slate-900 dark:hover:text-slate-100 focus:outline-none focus:ring-2 focus:ring-slate-500' // Default text
                }"
            >
                <Image size={24} class="shrink-0 {isSelected ? 'text-primary' : ''}" />
                
                <span class="font-medium">{release.versionString}</span>
                
                <span class="ml-auto text-sm aspect-square font-bold min-w-7 px-1 h-7 flex items-center justify-center text-center -my-1 rounded-full 
                    {isSelected 
                        ? 'bg-primary text-background'  // Selected
                        : 'bg-secondary'}"
                >
                    {imageCount}
                </span>
            </button>
        {/each}
    </div>
</nav>
