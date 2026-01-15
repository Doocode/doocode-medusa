<script lang="ts">
    import { cn } from "$lib/utils.js";
    import { Slideshow } from "../slideshow";
    import {
        GalleryHeader, GalleryItemType,
        type GalleryItemContent,
        GalleryTile, GalleryScrollManager
    } from ".";

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
    
    const scroller = new GalleryScrollManager();

    $effect(() => {
        images;
        scroller.updateButtons();
    });

    function onItemClick(event: Event, index: number) {
        event.preventDefault();
        if (scroller.isDragging) return;

        openSlideshow = true;
        slideIndex = index;
    }
</script>

<main class="grid">
    <div class="grid">
        <GalleryHeader
            class={classHeader}
            {imageCount} {videoCount}
            canScrollLeft={scroller.canScrollLeft}
            canScrollRight={scroller.canScrollRight}
            onScrollBackward={scroller.scrollBackward}
            onScrollForward={scroller.scrollForward}
        />

        <div
            bind:this={scroller.node}
            class={cn(
                "flex gap-4 overflow-x-auto overflow-y-hidden py-4 px-4 hide-scrollbar cursor-grab active:cursor-grabbing select-none",
                className
            )}
            onscroll={scroller.updateButtons}
            onmousedown={scroller.handleMouseDown}
            onmouseleave={scroller.handleMouseLeave}
            onmouseup={scroller.handleMouseUp}
            onmousemove={scroller.handleMouseMove}
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
</style>