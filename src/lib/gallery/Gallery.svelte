<script lang="ts">
    import type { GalleryImageItem } from ".";

    interface Props {
        images?: GalleryImageItem[];
    }

    let { images = [] }: Props = $props();
</script>

<main class="flex gap-4 overflow-x-auto overflow-y-hidden pb-6">
    {#each images as {src, alt} }
        <img {src} {alt} title={alt}
            class="h-64 object-cover rounded-lg"
        />
    {/each}
</main>