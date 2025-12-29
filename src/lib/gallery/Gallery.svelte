<script lang="ts">
    import { cn } from "$lib/utils.js";
    import type { GalleryImageItem } from ".";
    import Slideshow from "./Slideshow.svelte";

    interface Props {
        images?: GalleryImageItem[];
        class?: string;
        size?: 'small' | 'medium' | 'large';
    }

    let {
        images = [],
        size = 'medium',
        class: className,
        ...restProps
    }: Props = $props();

    let openSlideshow = $state(false);
    let slideIndex = $state(0);

    function onItemClick(event: Event, index: number) {
        event.preventDefault();
        openSlideshow = true;
        slideIndex = index;
    }
</script>

<main
    class={cn("flex gap-4 overflow-x-auto overflow-y-hidden pb-6 scroll-smooth", className)}
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
</main>

<Slideshow {images}
    bind:open={openSlideshow}
    bind:index={slideIndex} />

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