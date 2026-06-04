<script lang="ts">
    import { m } from "$lib/paraglide/messages";
    import { ReleaseTypeBadge } from "../changelog";
    import type { Release } from "$routes/projects/core";
    import { ImagePlay } from "@lucide/svelte/icons";

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
                class={{
                    "w-full flex items-center gap-3 px-4 py-3 rounded-lg transition-all duration-150 group text-left": true,
                    "text-primary bg-primary/30 ring-1 ring-primary": isSelected,
                    "text-slate-600 dark:text-slate-400 hover:bg-secondary hover:text-slate-900 dark:hover:text-slate-100 focus:outline-none focus:ring-2 focus:ring-slate-500": !isSelected
                }}
            >
                <div class="flex gap-2 items-center">
                    <span class="font-medium">{release.versionString}</span>
                    <ReleaseTypeBadge type={release.type!} />
                </div>

                <div class="ml-auto flex gap-1 items-center"
                    title={ m['gallery.count_images']( { count: imageCount } ) }>
                    <span class="text-2xl font-thin">
                        {imageCount}
                    </span>
                    <ImagePlay size={24} strokeWidth={1.75} />
                </div>
            </button>
        {/each}
    </div>
</nav>
