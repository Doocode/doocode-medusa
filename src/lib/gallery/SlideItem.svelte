<script lang="ts">
    import type { GalleryImageItem } from ".";
    
    interface Props {
        image: GalleryImageItem
    }

    let {
        image
    }: Props = $props();
</script>

<main
    class="w-full h-full flex items-center justify-center"
>
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
</main>