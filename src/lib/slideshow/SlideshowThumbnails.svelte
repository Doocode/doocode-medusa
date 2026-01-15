<script lang="ts">
    import type { GalleryItemContent } from "../gallery";
    import { GalleryItemType } from "../gallery";
    import { cn } from "$lib/utils";
    import { fade } from "svelte/transition";

    interface Props {
        images: GalleryItemContent[];
        currentIndex: number;
        onSelect: (index: number) => void;
    }

    let {
        images,
        currentIndex,
        onSelect
    }: Props = $props();

    let scrollContainer: HTMLDivElement;

    $effect(() => {
        if (scrollContainer && currentIndex >= 0) {
            const selectedElement = scrollContainer.children[currentIndex] as HTMLElement;
            if (selectedElement) {
                const containerWidth = scrollContainer.clientWidth;
                const elementLeft = selectedElement.offsetLeft;
                const elementWidth = selectedElement.clientWidth;

                // Center the selected element
                scrollContainer.scrollTo({
                    left: elementLeft - containerWidth / 2 + elementWidth / 2,
                    behavior: 'smooth'
                });
            }
        }
    });
</script>

<div 
    class="fixed bottom-16 left-0 right-0 z-60 flex justify-center px-4 pointer-events-none"
    transition:fade
>
    <div 
        bind:this={scrollContainer}
        class="flex gap-2 overflow-x-auto hide-scrollbar pointer-events-auto bg-black/50 backdrop-blur-md p-3 rounded-xl max-w-full"
    >
        {#each images as image, i}
            <button
                class={cn(
                    "relative shrink-0 h-12 md:h-16 overflow-hidden transition-all duration-200 ease-out",
                    i === currentIndex ? "brightness-100 ring-2 ring-white rounded-sm" : "brightness-80 hover:brightness-50 rounded-sm"
                )}
                onclick={() => onSelect(i)}
                aria-label={`Go to slide ${i + 1}`}
            >
                {#if image.type === GalleryItemType.Video}
                    <video
                        src={image.src}
                        class="h-full w-auto max-w-none pointer-events-none"
                        preload="metadata"
                        muted
                    ></video>
                {:else}
                    <img
                        src={image.src}
                        alt={image.alt}
                        class="h-full w-auto max-w-none pointer-events-none"
                        loading="lazy"
                    />
                {/if}
            </button>
        {/each}
    </div>
</div>

<style>
    .hide-scrollbar {
        scrollbar-width: none;
        -ms-overflow-style: none;
    }
    .hide-scrollbar::-webkit-scrollbar {
        display: none;
    }
</style>
