<script lang="ts">
    import { cn } from "$lib/utils.js";
    import type { GalleryImageItem } from ".";
    import Slideshow from "./Slideshow.svelte";
    import GalleryNavigation from "./GalleryNavigation.svelte";

    interface Props {
        images?: GalleryImageItem[];
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

    function scrollBackward() {
        if (scrollContainer) {
            scrollContainer.scrollBy({
                left: -scrollContainer.clientWidth * 0.8,
                behavior: 'smooth'
            });
        }
    }

    function scrollForward() {
        if (scrollContainer) {
            scrollContainer.scrollBy({
                left: scrollContainer.clientWidth * 0.8,
                behavior: 'smooth'
            });
        }
    }
</script>

<main class="grid">
    <div
        bind:this={scrollContainer}
        class={cn("flex gap-4 md:overflow-x-hidden overflow-y-hidden pb-4 px-4 pt-1", className)}
        onscroll={updateScrollButtons}
        {...restProps}
    >
        {#each images as {src, alt, withTransparencyBg}, index}
            <a class={{
                "p-2 rounded-2xl shrink-0 active:scale-90": true,
                "bg-slate-300 dark:bg-slate-700 hover:bg-primary dark:hover:bg-primary duration-150": !withTransparencyBg,
                "bg-checkerboard hover:bg-size-[2.5rem_2.5rem]! duration-200": withTransparencyBg,
            }}
                href={src}
                role="button"
                tabindex="0"
                target="_blank"
                onclick={(e) => onItemClick(e, index)}
            >
                <img {src} {alt} title={alt}
                    class={{
                        "duration-200 object-contain": true,
                        "h-32": size === 'small',
                        "h-39.75": size === 'medium',
                        "h-64": size === 'large',
                    }}
                    class:rounded-lg={!withTransparencyBg}
                    loading="lazy"
                />
            </a>
        {/each}
    </div>

    <GalleryNavigation
        class={classNavigation}
        {canScrollLeft}
        {canScrollRight}
        onScrollBackward={scrollBackward}
        onScrollForward={scrollForward}
    />

    <Slideshow {images}
        bind:open={openSlideshow}
        bind:index={slideIndex} />
</main>

<style>
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