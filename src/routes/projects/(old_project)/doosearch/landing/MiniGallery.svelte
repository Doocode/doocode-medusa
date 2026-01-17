<script lang="ts">
    import { Heading } from "$lib/page";
    import { ImagePlay } from "@lucide/svelte/icons";
    import { Gallery } from "$lib/gallery";
    import { mobile_images, pc_images } from '../gallery/screen/v1.3.2';
</script>

<main class="grid -mx-4">
    <div class="grid gap-4 bg-amber-200 dark:bg-amber-900 pt-4 sm:pt-8 sm:pb-4 sm:rounded-4xl sm:overflow-clip">
        <Heading level="h2"
            class="px-4 sm:px-8"
            icon={ImagePlay}
            title="Doosearch en action"
        />
        <p class="px-4 sm:px-8">Parce que une image vaut mille mots, voici quelques captures d’écran de Doosearch en action.</p>

        <div class="-mx-4 px-4">
            <Gallery images={ [...pc_images, ...mobile_images] }
                classHeader="sm:px-8"
                classGallery="sm:px-8"
            />
        </div>
    </div>
</main>

<style>
    main {
        --muted-foreground: var(--foreground);
    }
</style>