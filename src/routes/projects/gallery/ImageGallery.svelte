<script lang="ts">
    import { type GalleryImage, GalleryItem } from './index';

    interface Props {
        images: GalleryImage[];
    }

    let { images }: Props = $props();

    let sortedImages = $derived(images.sort((a, b) => a.order - b.order));

    function onImageClick(image: GalleryImage) {
        alert('TODO: Implement image viewer');
    }
</script>

<div class="w-full">
    <div class="grid grid-cols-[repeat(auto-fill,minmax(175px,1fr))] gap-4">
        {#each sortedImages as image}
            <GalleryItem {image}
                onclick={onImageClick}
            />
        {/each}
    </div>
</div>
