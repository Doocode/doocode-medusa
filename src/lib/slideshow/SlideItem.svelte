<script lang="ts">
    import { GalleryItemType, type GalleryItemContent } from "../gallery";
    
    interface Props {
        image: GalleryItemContent
    }

    let {
        image
    }: Props = $props();
</script>

<main
    class="w-full h-full flex items-center justify-center relative"
>
    {#if image.type === GalleryItemType.Video}
        <video
            class={{
                "pointer-events-auto max-w-full max-h-full object-contain": true,
                "rounded-lg md:rounded-xl": !image.withTransparencyBg,
            }}
            src={image.src}
            title={image.alt}
            controls
            preload="metadata"
        >
            <track kind="captions" />
        </video>
    {:else}
        <img
            class={{
                "pointer-events-auto max-w-full max-h-full object-contain": true,
                "rounded-lg md:rounded-xl": !image.withTransparencyBg,
            }}
            src={image.src}
            alt={image.alt}
            title={image.alt}
            loading="lazy"
        />
    {/if}
</main>