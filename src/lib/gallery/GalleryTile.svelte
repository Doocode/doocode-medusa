<script lang="ts">
    import { GalleryItemType, type GalleryItemContent } from ".";
    import { Play } from '@lucide/svelte/icons';

    interface Props {
        item: GalleryItemContent;
        size?: 'small' | 'medium' | 'large';
        onclick: (event: MouseEvent) => void;
    }

    let {
        item,
        size = 'medium',
        onclick
    }: Props = $props();
</script>

<a class={{
    "p-1.5 md:p-2 rounded-xl md:rounded-2xl shrink-0 active:scale-110 relative": true,
    "bg-slate-300 dark:bg-slate-700 hover:bg-primary dark:hover:bg-primary duration-150": !item.withTransparencyBg,
    "bg-checkerboard hover:bg-size-[2.5rem_2.5rem]! duration-200": item.withTransparencyBg,
}}
    href={item.src}
    role="button"
    tabindex="0"
    target="_blank"
    {onclick}
    ondragstart={(e) => e.preventDefault()}
>
    {#if item.type === GalleryItemType.Video}
        <video
            src={item.src}
            title={item.alt}
            class={{
                "duration-200 object-contain": true,
                "h-32": size === 'small',
                "h-39.75": size === 'medium',
                "h-39.75 md:h-64": size === 'large',
            }}
            class:rounded-lg={!item.withTransparencyBg}
            muted
            preload="metadata"
            draggable="false"
        >
        </video>
    {:else}
        <img src={item.src} alt={item.alt} title={item.alt}
            class={{
                "duration-200 object-contain": true,
                "h-32": size === 'small',
                "h-39.75": size === 'medium',
                "h-39.75 md:h-64": size === 'large',
            }}
            class:rounded-lg={!item.withTransparencyBg}
            loading="lazy"
            draggable="false"
        />
    {/if}
    
    {#if item.type === GalleryItemType.Video}
        <div class="absolute inset-0 flex items-center justify-center pointer-events-none">
            <div class="bg-black/50 backdrop-blur-sm rounded-full p-3 md:p-4">
                <Play class="w-6 h-6 md:w-8 md:h-8 text-white fill-white" />
            </div>
        </div>
    {/if}
</a>

<style>
    .bg-checkerboard {
        --color-1: #dce2e9;
        --color-2: #b0bbc9;

        background: repeating-conic-gradient(
            var(--color-1) 0 25%, var(--color-2) 0 50%
        ) 50% / 2rem 2rem;
        background-position: center;
    }

    .bg-checkerboard:hover img {
        transform: scale(.9);
    }
    
    :root.dark .bg-checkerboard {
        --color-1: #5e6876;
        --color-2: #314158;
    }
</style>
