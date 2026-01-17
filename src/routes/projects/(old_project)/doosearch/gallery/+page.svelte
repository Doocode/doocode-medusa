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
    import type { PageProps } from './$types';

    let { data }: PageProps = $props();
</script>

<svelte:head>
    <title>[{ data.project.name }] { m['projects.gallery']() } • Doocode.xyz</title>
</svelte:head>

<main class="container mx-auto pt-8 grid gap-16 [&_p]:text-balance">
    <div class="grid gap-2" id="screenshots">
        <Heading level="h2" icon={Fullscreen} class="px-4"
            title={ m['projects.screenshots']() }
        />

        <Screenshots {releases} size="large" />
    </div>

    <div class="grid gap-16 lg:grid-cols-2 xl:grid-cols-5 lg:gap-4 lg:-mt-12">
        <article class="flex flex-col gap-4 sm:bg-blue-500/50 dark:sm:bg-chart-1/50 sm:rounded-3xl lg:rounded-4xl sm:overflow-clip sm:pt-4 lg:pt-6 lg:pb-4 xl:col-span-3">
            <div id="bts" class="grid gap-2 px-4 lg:px-8 lg:flex lg:gap-8 lg:items-end lg:justify-between lg:[&>p]:max-w-100">
                <Heading level="h2" icon={Construction}
                    title={ m['projects.bts']() }
                />
                <p>Avez-vous une idée de comment a été réalisé ce projet ?</p>
            </div>
            <Gallery images={ bts } size="small"
                class="mt-auto" classGallery="lg:px-8" classHeader="lg:px-8" />
        </article>

        <article id="mockups" class="flex flex-col gap-4 sm:bg-chart-2/50 sm:rounded-3xl lg:rounded-4xl sm:overflow-clip sm:pt-4 lg:pt-6 lg:pb-4 xl:col-span-2">
            <div class="grid gap-2 px-4 lg:px-8 lg:flex lg:gap-8 lg:items-end lg:justify-between lg:[&>p]:max-w-80">
                <Heading level="h2" icon={DraftingCompass}
                    title={ m['projects.mockups']() }
                />
                <p>Quelques explorations au sujet de l'interface qui était prévue pour la version 1.4 ou une éventuelle application mobile.</p>
            </div>
            <Gallery images={ mockups } size="small"
                class="mt-auto" classGallery="lg:px-8" classHeader="lg:px-8" />
        </article>

        <style>
            @media (width >= 640px) {
                article {
                    --muted-foreground: var(--foreground);
                }
            }
        </style>
    </div>

    <div id="logos" class="grid gap-4">
        <Heading level="h2" icon={PencilRuler} class="px-4"
            title={ m['projects.logos']() }
        />
        <Gallery images={ logos } />
    </div>
</main>