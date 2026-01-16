<script lang="ts">
    import {
        DraftingCompass, PencilRuler, Fullscreen, Construction
    } from '@lucide/svelte/icons';
    import { m } from "$lib/paraglide/messages";
    import Heading from '$lib/page/Heading.svelte';
    import { logos } from './logo';
    import { Gallery } from "$lib/gallery";
    import { bts, mockups } from "./bts";
    import { Screenshots } from "$routes/projects/screenshots";
    import { releases } from "../data/releases";
</script>

<main class="container mx-auto pt-8 grid gap-16 [&_p]:text-balance">
    <div class="grid gap-2">
        <Heading level="h2" icon={Fullscreen} class="px-4"
            title={ m['projects.screenshots']() }
        />

        <Screenshots {releases} />
    </div>

    <div class="grid gap-16 lg:grid-cols-2 xl:grid-cols-5 lg:gap-4 lg:-mt-12">
        <div class="flex flex-col gap-4 lg:bg-blue-500/50 dark:lg:bg-chart-1/50 lg:rounded-4xl lg:overflow-clip lg:pt-6 lg:pb-4 xl:col-span-3">
            <div class="grid gap-2 px-4 lg:px-8">
                <Heading level="h2" icon={Construction}
                    title={ m['projects.bts']() }
                />
                <p>Avez-vous une idée de comment a été réalisé ce projet ?</p>
            </div>
            <Gallery images={ bts } size="small"
                class="mt-auto" classGallery="lg:px-8" classHeader="lg:px-8" />
        </div>

        <div class="flex flex-col gap-4 lg:bg-chart-2/50 lg:rounded-4xl lg:overflow-clip lg:pt-6 lg:pb-4 xl:col-span-2">
            <div class="grid gap-2 px-4 lg:px-8">
                <Heading level="h2" icon={DraftingCompass}
                    title={ m['projects.mockups']() }
                />
                <p>Quelques explorations au sujet de l'interface qui était prévue pour la version 1.4 ou une éventuelle application mobile.</p>
            </div>
            <Gallery images={ mockups } size="small"
                class="mt-auto" classGallery="lg:px-8" classHeader="lg:px-8" />
        </div>
    </div>

    <div class="grid gap-4">
        <Heading level="h2" icon={PencilRuler} class="px-4"
            title={ m['projects.logos']() }
        />
        <Gallery images={ logos } />
    </div>
</main>