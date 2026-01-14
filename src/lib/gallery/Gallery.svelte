<script lang="ts">
    import { cn } from "$lib/utils.js";
    import { GalleryItemType, type GalleryItemContent } from ".";
    import { Slideshow } from "../slideshow";
    import GalleryNavigation from "./GalleryNavigation.svelte";
    import { Play } from '@lucide/svelte/icons';

    interface Props {
        images?: GalleryItemContent[];
        class?: string;
        classNavigation?: string;
        size?: 'small' | 'medium' | 'large';
    }

    let {
        images = [],
        size = 'medium',
        class: className,
        classNavigation = "",
        ...restProps
    }: Props = $props();

    let openSlideshow = $state(false);
    let slideIndex = $state(0);
    let scrollContainer: HTMLDivElement;
    let canScrollLeft = $state(false);
    let canScrollRight = $state(true);

    function onItemClick(event: Event, index: number) {
        event.preventDefault();
        openSlideshow = true;
        slideIndex = index;
    }

    function updateScrollButtons() {
        if (!scrollContainer) return;
        
        canScrollLeft = scrollContainer.scrollLeft > 0;
        canScrollRight = scrollContainer.scrollLeft + scrollContainer.clientWidth < scrollContainer.scrollWidth - 1;
    }

    function scrollBackward(event: MouseEvent) {
        if (!scrollContainer) return;
        
        const scrollAmount = event.shiftKey 
            ? -scrollContainer.scrollWidth 
            : -scrollContainer.clientWidth * 0.8;
        
        scrollContainer.scrollBy({
            left: scrollAmount,
            behavior: 'smooth'
        });
    }

    function scrollForward(event: MouseEvent) {
        if (!scrollContainer) return;
        
        const scrollAmount = event.shiftKey 
            ? scrollContainer.scrollWidth 
            : scrollContainer.clientWidth * 0.8;
        
        scrollContainer.scrollBy({
            left: scrollAmount,
            behavior: 'smooth'
        });
    }
</script>

<main class="grid">
    <div class="grid">
        <GalleryNavigation
            class={classNavigation}
            {canScrollLeft}
            {canScrollRight}
            onScrollBackward={scrollBackward}
            onScrollForward={scrollForward}
        />

        <div
            bind:this={scrollContainer}
            class={cn(
                "flex gap-4 overflow-x-auto overflow-y-hidden pt-4 px-4 pb-1 hide-scrollbar",
                className
            )}
            onscroll={updateScrollButtons}
            {...restProps}
        >
            {#each images as {type, src, alt, withTransparencyBg}, index}
                <a class={{
                    "p-1.5 md:p-2 rounded-xl md:rounded-2xl shrink-0 active:scale-90 relative": true,
                    "bg-slate-300 dark:bg-slate-700 hover:bg-primary dark:hover:bg-primary duration-150": !withTransparencyBg,
                    "bg-checkerboard hover:bg-size-[2.5rem_2.5rem]! duration-200": withTransparencyBg,
                }}
                    href={src}
                    role="button"
                    tabindex="0"
                    target="_blank"
                    onclick={(e) => onItemClick(e, index)}
                >
                    {#if type === GalleryItemType.Video}
                        <video
                            {src}
                            title={alt}
                            class={{
                                "duration-200 object-contain": true,
                                "h-32": size === 'small',
                                "h-39.75": size === 'medium',
                                "h-39.75 md:h-64": size === 'large',
                            }}
                            class:rounded-lg={!withTransparencyBg}
                            muted
                            preload="metadata"
                        >
                        </video>
                    {:else}
                        <img {src} {alt} title={alt}
                            class={{
                                "duration-200 object-contain": true,
                                "h-32": size === 'small',
                                "h-39.75": size === 'medium',
                                "h-39.75 md:h-64": size === 'large',
                            }}
                            class:rounded-lg={!withTransparencyBg}
                            loading="lazy"
                        />
                    {/if}
                    
                    {#if type === GalleryItemType.Video || type === GalleryItemType.AnimatedImage}
                        <div class="absolute inset-0 flex items-center justify-center pointer-events-none">
                            <div class="bg-black/50 backdrop-blur-sm rounded-full p-3 md:p-4">
                                <Play class="w-6 h-6 md:w-8 md:h-8 text-white fill-white" />
                            </div>
                        </div>
                    {/if}
                </a>
            {/each}
        </div>
    </div>

    <Slideshow {images}
        bind:open={openSlideshow}
        bind:index={slideIndex} />
</main>

<style>
    .hide-scrollbar {
        scrollbar-width: none; /* Firefox */
        -ms-overflow-style: none; /* IE and Edge */
    }
    
    .hide-scrollbar::-webkit-scrollbar {
        display: none; /* Chrome, Safari, Opera */
    }

    .bg-checkerboard {
        --color-1: #dce2e9;
        --color-2: #b0bbc9;

        background: repeating-conic-gradient(
            var(--color-1) 0 25%, var(--color-2) 0 50%
        ) 50% / 2rem 2rem;
        background-position: center;

        &:hover img {
            transform: scale(.9);
        }
    }
    :root.dark .bg-checkerboard {
        --color-1: #5e6876;
        --color-2: #314158;
    }
</style>