<script lang="ts">
    import { getLocale } from "$lib/paraglide/runtime";
    import { m } from "$lib/paraglide/messages";
    import { Package, Bug, Sparkles, Trash2, ArrowLeft, Fullscreen, SquarePlus } from '@lucide/svelte/icons';
    import Gallery from '$lib/gallery/Gallery.svelte';
    import { Button } from '$lib/components/ui/button';
    import type { PageData } from './$types';
    import { Lister, ReleaseTypeBadge, Summary } from "$routes/projects/changelog";
    import { Heading, Restyle } from "$lib/page";

    let { data }: { data: PageData } = $props();

    const release = $derived(data.release);

    function formatDate(date: Date): string {
        return new Intl.DateTimeFormat(getLocale(), {
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

        <Summary {release} hideLabel />
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
    <div class="grid gap-16">
        <!-- Gallery -->
        {#if release.images && release.images.length > 0}
            <Restyle tag="section" class="mt-8 grid gap-4"
                tintLight="oklch(54.1% 0.281 293.009)"
                tintDark="oklch(70.2% 0.183 293.541)"
            >
                <Heading level="h3" icon={Fullscreen}
                    title={ m['projects.screenshots']() }
                />
                <div class="-mx-4">
                    <Gallery images={release.images} size="large" />
                </div>
            </Restyle>
        {/if}

        <!-- Features -->
        {#if release.features && release.features.length > 0}
            <Lister
                icon={SquarePlus}
                heading="New Features"
                items={release.features}
                tintLight="oklch(62.7% 0.194 149.214)"
                tintDark="oklch(79.2% 0.209 151.711)"
            />
        {/if}

        <!-- Improvements -->
        {#if release.improvements && release.improvements.length > 0}
            <Lister
                icon={Sparkles}
                heading="Improvements"
                items={release.improvements}
                tintLight="oklch(54.6% 0.245 262.881)"
                tintDark="oklch(70.7% 0.165 254.624)"
            />
        {/if}

        <!-- Bug Fixes -->
        {#if release.bugfixes && release.bugfixes.length > 0}
            <Lister
                icon={Bug}
                heading="Bug Fixes"
                items={release.bugfixes}
                tintLight="oklch(64.6% 0.222 41.116)"
                tintDark="oklch(75% 0.183 55.934)"
            />
        {/if}

        <!-- Removed Features -->
        {#if release.removedFeatures && release.removedFeatures.length > 0}
            <Lister
                icon={Trash2}
                heading="Removed Features"
                items={release.removedFeatures}
                tintLight="oklch(62.3% 0.234 25.406)"
                tintDark="oklch(78.1% 0.174 25.406)"
            />
        {/if}
    </div>
</main>
