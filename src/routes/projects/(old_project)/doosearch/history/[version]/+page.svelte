<script lang="ts">
    import { m } from "$lib/paraglide/messages";
    import Heading from '$lib/page/Heading.svelte';
    import { Package, Bug, Sparkles, TrendingUp, Trash2, ArrowLeft, Fullscreen } from '@lucide/svelte/icons';
    import Gallery from '$lib/gallery/Gallery.svelte';
    import { Button } from '$lib/components/ui/button';
    import type { PageData } from './$types';
    import ReleaseTypeBadge from "../ReleaseTypeBadge.svelte";
    import { ListContainer as Ul, ListItem as Li } from "$lib/page";

    let { data }: { data: PageData } = $props();

    const release = $derived(data.release);

    function formatDate(date: Date): string {
        return new Intl.DateTimeFormat('fr-FR', {
            year: 'numeric',
            month: 'long',
            day: 'numeric'
        }).format(date);
    }
</script>

<main class="max-w-7xl mx-auto pt-8 px-4 pb-16 grid gap-8">
    <!-- Back button -->
    <div>
        <Button 
            variant="secondary" 
            href="/projects/doosearch/history"
            class="gap-2"
        >
            <ArrowLeft class="w-4 h-4" />
            Back to releases
        </Button>
    </div>

    <!-- Header -->
    <header class="space-y-4">
        <div class="flex flex-wrap items-end gap-3">
            <Heading level="h2" icon={Package}
                title={release.versionString}
            />
            {#if release.type}
                <ReleaseTypeBadge type={release.type} />
            {/if}
        </div>
        <time class="text-sm md:text-base text-muted-foreground block">
            Released on {formatDate(release.releaseDate)}
        </time>
    </header>

    <!-- Description -->
    {#if release.description}
        <div class="prose dark:prose-invert max-w-none">
            <p class="text-lg text-foreground/90">
                {release.description}
            </p>
        </div>
    {/if}

    <!-- Changes sections -->
    <div class="space-y-8">
        <!-- Gallery -->
        {#if release.images && release.images.length > 0}
            <section class="mt-8 grid gap-4">
                <Heading level="h2" icon={Fullscreen}
                    title={ m['projects.screenshots']() }
                />
                <div class="-mx-4">
                    <Gallery images={release.images} size="large" />
                </div>
            </section>
        {/if}

        <!-- Features -->
        {#if release.features && release.features.length > 0}
            <section class="rounded-xl border-2 grid gap-6 border-green-200 dark:border-green-600/50 p-6 bg-green-50/50 dark:bg-green-950/20">
                <Heading level="h3" icon={Sparkles} title="New Features" />
                <Ul>
                    {#each release.features as feature}
                        <Li>
                            <span class="w-1.5 h-1.5 rounded-full bg-green-600 dark:bg-green-400 mt-2 flex-shrink-0"></span>
                            <span>{feature}</span>
                        </Li>
                    {/each}
                </Ul>
            </section>
        {/if}

        <!-- Improvements -->
        {#if release.improvements && release.improvements.length > 0}
            <section class="rounded-xl border-2 border-blue-200 dark:border-blue-900/30 p-6 bg-blue-50/50 dark:bg-blue-950/20">
                <h3 class="flex items-center gap-2 text-xl md:text-2xl font-semibold mb-4 text-blue-700 dark:text-blue-400">
                    <TrendingUp class="w-6 h-6" />
                    Improvements
                </h3>
                <ul class="space-y-3">
                    {#each release.improvements as improvement}
                        <li class="flex items-start gap-3 text-sm md:text-base text-foreground/90">
                            <span class="w-1.5 h-1.5 rounded-full bg-blue-600 dark:bg-blue-400 mt-2 flex-shrink-0"></span>
                            <span>{improvement}</span>
                        </li>
                    {/each}
                </ul>
            </section>
        {/if}

        <!-- Bug Fixes -->
        {#if release.bugfixes && release.bugfixes.length > 0}
            <section class="rounded-xl border-2 border-orange-200 dark:border-orange-900/30 p-6 bg-orange-50/50 dark:bg-orange-950/20">
                <h3 class="flex items-center gap-2 text-xl md:text-2xl font-semibold mb-4 text-orange-700 dark:text-orange-400">
                    <Bug class="w-6 h-6" />
                    Bug Fixes
                </h3>
                <ul class="space-y-3">
                    {#each release.bugfixes as bugfix}
                        <li class="flex items-start gap-3 text-sm md:text-base text-foreground/90">
                            <span class="w-1.5 h-1.5 rounded-full bg-orange-600 dark:bg-orange-400 mt-2 flex-shrink-0"></span>
                            <span>{bugfix}</span>
                        </li>
                    {/each}
                </ul>
            </section>
        {/if}

        <!-- Removed Features -->
        {#if release.removedFeatures && release.removedFeatures.length > 0}
            <section class="rounded-xl border-2 border-red-200 dark:border-red-900/30 p-6 bg-red-50/50 dark:bg-red-950/20">
                <h3 class="flex items-center gap-2 text-xl md:text-2xl font-semibold mb-4 text-red-700 dark:text-red-400">
                    <Trash2 class="w-6 h-6" />
                    Removed Features
                </h3>
                <ul class="space-y-3">
                    {#each release.removedFeatures as removed}
                        <li class="flex items-start gap-3 text-sm md:text-base text-foreground/90">
                            <span class="w-1.5 h-1.5 rounded-full bg-red-600 dark:bg-red-400 mt-2 flex-shrink-0"></span>
                            <span>{removed}</span>
                        </li>
                    {/each}
                </ul>
            </section>
        {/if}
    </div>
</main>
