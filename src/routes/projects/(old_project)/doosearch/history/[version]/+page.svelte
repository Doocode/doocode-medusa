<script lang="ts">
    import { getLocale } from "$lib/paraglide/runtime";
    import { m } from "$lib/paraglide/messages";
    import { Package, Bug, Sparkles, Trash2, ArrowLeft, Fullscreen, SquarePlus } from '@lucide/svelte/icons';
    import Gallery from '$lib/gallery/Gallery.svelte';
    import { Button } from '$lib/components/ui/button';
    import type { PageData } from './$types';
    import { Lister, ReleaseTypeBadge, SideNavigation, Summary } from "$routes/projects/changelog";
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

    function getRelativeTime(date: Date): string {
        const now = new Date();
        const diffInMs = date.getTime() - now.getTime();
        const diffInDays = Math.floor(diffInMs / (1000 * 60 * 60 * 24));
        const diffInMonths = Math.floor(diffInDays / 30);
        const diffInYears = Math.floor(diffInDays / 365);

        const rtf = new Intl.RelativeTimeFormat(getLocale(), { numeric: 'auto' });

        if (Math.abs(diffInYears) >= 1) {
            return rtf.format(diffInYears, 'year');
        } else if (Math.abs(diffInMonths) >= 1) {
            return rtf.format(diffInMonths, 'month');
        } else {
            return rtf.format(diffInDays, 'day');
        }
    }
</script>

<main class="container mx-auto px-4 pt-8 pb-16 grid gap-16 lg:grid-cols-[300px_1fr] xl:grid-cols-[350px_1fr] items-start">
    <aside class="grid gap-y-4 gap-x-8 sm:grid-cols-2 lg:grid-cols-1 lg:sticky top-8 self-start">
        <div class="grid gap-y-4">
            <div class="flex mb-8">
                <Button 
                    variant="outline" 
                    href="/projects/doosearch/history"
                    class="gap-2"
                >
                    <ArrowLeft class="w-5! h-5!" />
                    Back to history
                </Button>
            </div>

            <div class="flex flex-wrap items-end gap-3">
                <h2 class={{
                    "text-primary": true,
                    "text-6xl": release.versionString.length <= 6,
                    "text-4xl": release.versionString.length > 6
                }}>{release.versionString}</h2>
                {#if release.type}
                    <div class="pb-2">
                        <ReleaseTypeBadge type={release.type} />
                    </div>
                {/if}
            </div>
            <time class="text-sm md:text-base text-muted-foreground block text-balance">
                Released on {formatDate(release.releaseDate)} - {getRelativeTime(release.releaseDate)}
            </time>

            <Summary {release} hideLabel />
            <!-- TODO: List links -->
        </div>

        <SideNavigation {release} />
    </aside>

    <div class="grid gap-16">
        <!-- Gallery -->
        {#if release.images && release.images.length > 0}
            <Restyle tag="section" class="grid gap-4 -mb-4" id="screenshots"
                tintLight="oklch(54.1% 0.281 293.009)"
                tintDark="oklch(70.2% 0.183 293.541)"
            >
                <Heading level="h3" icon={Fullscreen}
                    title={ m['projects.screenshots']() }
                />
                <div class="-mx-4 sm:rounded-4xl pt-4 pb-3 bg-primary/50 overflow-clip">
                    <Gallery images={release.images} />
                </div>
                <style>
                    div {
                        --muted-foreground: var(--foreground);
                    }
                </style>
            </Restyle>
        {/if}

        <!-- Description -->
        {#if release.description}
            <div class="prose dark:prose-invert max-w-none">
                <p class="text-lg text-foreground/90">
                    {release.description}
                </p>
            </div>
        {/if}

        <!-- Features -->
        {#if release.features && release.features.length > 0}
            <Lister id="features"
                icon={SquarePlus}
                heading="Features"
                items={release.features}
                tintLight="oklch(62.7% 0.194 149.214)"
                tintDark="oklch(79.2% 0.209 151.711)"
            />
        {/if}

        <!-- Improvements -->
        {#if release.improvements && release.improvements.length > 0}
            <Lister id="improvements"
                icon={Sparkles}
                heading="Improvements"
                items={release.improvements}
                tintLight="oklch(54.6% 0.245 262.881)"
                tintDark="oklch(70.7% 0.165 254.624)"
            />
        {/if}

        <!-- Bug Fixes -->
        {#if release.bugfixes && release.bugfixes.length > 0}
            <Lister id="bugfixes"
                icon={Bug}
                heading="Bug Fixes"
                items={release.bugfixes}
                tintLight="oklch(64.6% 0.222 41.116)"
                tintDark="oklch(75% 0.183 55.934)"
            />
        {/if}

        <!-- Removed Features -->
        {#if release.removedFeatures && release.removedFeatures.length > 0}
            <Lister id="removed"
                icon={Trash2}
                heading="Removed Features"
                items={release.removedFeatures}
                tintLight="oklch(62.3% 0.234 25.406)"
                tintDark="oklch(78.1% 0.174 25.406)"
            />
        {/if}
    </div>
</main>
