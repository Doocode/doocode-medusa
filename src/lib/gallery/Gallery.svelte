<script lang="ts">
    import { cn } from "$lib/utils.js";
    import { GalleryHeader, GalleryItemType, type GalleryItemContent, GalleryTile } from ".";
    import { Slideshow } from "../slideshow";

    interface Props {
        images?: GalleryItemContent[];
        class?: string;
        classHeader?: string;
        size?: 'small' | 'medium' | 'large';
    }

    let {
        images = [],
        size = 'medium',
        class: className,
        classHeader = "",
        ...restProps
    }: Props = $props();

    let imageCount = $derived(images.filter(img => img.type !== GalleryItemType.Video).length);
    let videoCount = $derived(images.filter(img => img.type === GalleryItemType.Video).length);

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
        <GalleryHeader
            class={classHeader}
            {imageCount} {videoCount}
            {canScrollLeft} {canScrollRight}
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
            {#each images as item, index}
                <GalleryTile
                    {item}
                    {size}
                    onclick={(e) => onItemClick(e, index)}
                />
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