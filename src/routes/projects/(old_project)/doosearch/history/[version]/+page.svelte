<script lang="ts">
    import type { PageData } from './$types';
    import { m } from "$lib/paraglide/messages";
    import { Heading, Restyle,
        ListContainer as Ul,
        ListItem as Li
    } from "$lib/page";
    import Gallery from '$lib/gallery/Gallery.svelte';
    import { Button } from '$lib/components/ui/button';
    import { DialogLinks, DisplayLinksButton } from '$routes/projects/links';
    import { formatDate, getRelativeTime } from "$routes/projects/projects.helpers";
    import { Lister, ReleaseTypeBadge, SideNavigation, Summary } from "$routes/projects/changelog";
    import { Bug, Sparkles, Trash2, ArrowLeft, Fullscreen, SquarePlus, Link } from '@lucide/svelte/icons';

    let { data }: { data: PageData } = $props();

    const release = $derived(data.release);

    let dialogLinksOpen = $state(false);
</script>

{#if release.links && release.links.length > 0}
    <DialogLinks bind:open={dialogLinksOpen}
        links={release.links}
        accent={data.project.bgAccent} />
{/if}

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
                <div class="-mx-4 sm:rounded-4xl pt-4 bg-primary/50 overflow-clip">
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

        <!-- Links -->
        {#if release.links && release.links.length > 0}
            <Restyle tag="section" class="grid gap-4 -mb-4" id="links"
                tintLight="oklch(68.1% 0.162 75.834)"
                tintDark="oklch(85.2% 0.199 91.936)"
            >
                <header class="flex flex-col sm:flex-row gap-4 sm:gap-18 sm:items-center">
                    <Heading level="h3" icon={Link}
                        title={ m['links.title']() }
                    />
                    <DisplayLinksButton 
                        links={release.links} 
                        onclick={() => dialogLinksOpen = true} 
                    />
                </header>
                <Ul class="flex flex-wrap gap-y-3 gap-x-13">
                    {#each release.links as {label}}
                        <Li>{label}</Li>
                    {/each}
                </Ul>
            </Restyle>
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
