<script lang="ts">
    import { type GalleryImage, GalleryItemCaption, GalleryItemPicture } from './index';

    interface Props {
        image: GalleryImage;
        onclick?: (image: GalleryImage) => void;
    }

    let { image, onclick = () => {} }: Props = $props();

    function handleKeydown(e: KeyboardEvent) {
        if (e.key === 'Enter' || e.key === ' ') {
            onclick(image);
        }
    }
</script>

<div 
    class="group relative cursor-pointer rounded-xl overflow-hidden
        bg-foreground
        shadow-[0_0_0_2px_var(--foreground)]
        hover:shadow-[0_20px_25px_-5px_rgba(0,0,0,0.1),0_10px_10px_-5px_rgba(0,0,0,0.04),0_0_0_6px_var(--foreground)]
        focus:outline-2 focus:outline-ring focus:outline-offset-2
        transition-all duration-300 ease-in-out"
    role="button"
    tabindex="0"
    onclick={() => onclick(image)}
    onkeydown={handleKeydown}
>
    <GalleryItemPicture 
        src={image.src}
        srcMobile={image.srcMobile}
        caption={image.caption}
    />

    <GalleryItemCaption caption={image.caption} />
</div>
