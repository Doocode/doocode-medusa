<script lang="ts">
    import { Heading, ListContainer as Ul, ListItem as Li } from "$lib/page";
    import { Gallery } from "$lib/gallery";
    import { m } from "$lib/paraglide/messages";
    import { ArrowRight, ImagePlay } from "@lucide/svelte/icons";
    import { mobile_images, pc_images } from '../gallery/screen/v1.3.2';
</script>

<main class="grid -mx-4 gap-px md:grid-cols-3 lg:grid-cols-5">
    <div class="grid gap-4 pt-3 sm:pt-8 sm:pb-4
    bg-amber-200 dark:bg-amber-900
    rounded-t-3xl md:rounded-l-4xl md:rounded-r-none
    md:col-span-2 lg:col-span-3 xl:col-span-4 md:overflow-clip">
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
    <div class="flex flex-col gap-8 justify-between items-start
        bg-secondary/50 dark:bg-secondary
        lg:col-span-2 xl:col-span-1
        hover:bg-pink-200 dark:hover:bg-green-900
        rounded-b-3xl md:rounded-r-4xl md:rounded-l-none p-4
        transition-colors duration-150">
        <div class="grid gap-4 md:p-4 md:gap-6 [&_a]:py-1.25 [&_a]:hover:underline [&_a]:hover:text-primary">
            <Heading level="h3"
                icon={ImagePlay}
                title={ m['projects.gallery']() }
            />
            <Ul>
                <Li><a href="/projects/doosearch/gallery#screenshots">{ m['projects.screenshots']() }</a></Li>
                <Li><a href="/projects/doosearch/gallery#bts">{ m['projects.bts']() }</a></Li>
                <Li><a href="/projects/doosearch/gallery#mockups">{ m['projects.mockups']() }</a></Li>
                <Li><a href="/projects/doosearch/gallery#logos">{ m['projects.logos']() }</a></Li>
            </Ul>
        </div>
        <a href="/projects/doosearch/gallery"
            class="ml-auto flex items-center gap-3 group">
            <span class="text-primary group-hover:underline text-balance text-end">Accéder à la galerie</span>
            <div class="bg-primary text-primary-foreground size-10 rounded-full flex items-center justify-center shrink-0">
                <ArrowRight />
            </div>
        </a>
    </div>
</main>

<style>
    main {
        --muted-foreground: var(--foreground);
    }
</style>