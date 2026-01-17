<script lang="ts">
    import { ReleaseTypeBadge, Summary } from ".";
    import { Package, ChevronRight } from '@lucide/svelte/icons';
    import type { Release } from '$routes/projects/projects.types';
    import { LinksBubbles } from '$routes/projects/links';
    import { formatDate, getRelativeTime } from "../projects.helpers";

    interface Props {
        release: Release;
    }

    let { release }: Props = $props();
</script>

{#snippet header(size: 'small' | 'large')}
    <header class="flex flex-wrap items-center gap-3 mb-2">
        {#if release.links && release.links.length > 0}
            <LinksBubbles links={release.links} size="sm" />
        {/if}

        <h3 class="{size === 'small' ? 'text-xl' : 'text-2xl'} font-bold flex items-center gap-2">
            {#if !release.links || release.links.length === 0}
                <Package class="{size === 'small' ? 'w-5 h-5' : 'w-6 h-6'} text-primary" />
            {/if}
            {release.versionString}
        </h3>
        {#if release.type}
            <ReleaseTypeBadge type={release.type} />
        {/if}
    </header>
{/snippet}

{#snippet description(size: 'small' | 'large')}
    {#if release.description}
        <p class="{size === 'small' ? 'text-sm' : 'text-base'} text-foreground/70 line-clamp-2 mb-3">
            {release.description}
        </p>
    {/if}
{/snippet}

{#snippet arrow()}
    <ChevronRight class="w-9 h-9 text-muted-foreground group-hover:text-primary group-hover/content:text-primary group-hover:translate-x-1 group-hover/content:translate-x-1 transition-all shrink-0 -mr-1" />
{/snippet}

<a 
    href="/projects/doosearch/history/{release.versionString}"
    class="group block p-6 rounded-xl border-3 border-secondary
           hover:border-primary dark:hover:border-primary
           hover:shadow-lg transition-all duration-200
           md:hover:shadow-none
           bg-background
           md:p-0 md:border-0 md:rounded-none md:shadow-none md:bg-transparent"
>
    <!-- Mobile layout -->
    <div class="flex items-start justify-between gap-4 md:hidden">
        <div class="flex-1 min-w-0">
            {@render header('small')}

            <!-- Date -->
            <time class="text-sm text-muted-foreground block mb-3">
                {formatDate(release.releaseDate)}
            </time>

            {@render description('small')}

            <Summary {release} />
        </div>

        {@render arrow()}
    </div>

    <!-- Desktop timeline layout -->
    <div class="hidden md:flex md:gap-6">
        <!-- Left: Date section (150px fixed) -->
        <div class="w-25 shrink-0 text-right pt-1 text-balance">
            <div class="text-xs text-primary font-bold mb-2">
                {getRelativeTime(release.releaseDate)}
            </div>
            <time class="text-base font-base mt-5 text-foreground block leading-tight">
                {formatDate(release.releaseDate, {
                    weekday: 'long',
                    year: 'numeric',
                    month: 'long',
                    day: 'numeric'
                })}
            </time>
        </div>

        <!-- Center: Timeline -->
        <div class="relative flex flex-col items-center">
            <!-- Timeline dot -->
            <div class="w-4 h-4 rounded-full bg-primary z-10 mt-1"></div>
            <!-- Timeline line -->
            <div class="w-0.5 flex-1 bg-border mt-2"></div>
        </div>

        <!-- Right: Content -->
        <div class="flex-1 min-w-0 pb-8 group/content">
            <div class="p-6 rounded-xl border-3 border-secondary
                       group-hover:border-primary dark:group-hover:border-primary
                       group-hover:shadow-lg transition-all duration-200
                       bg-background flex gap-4">
                <div class="flex-1 min-w-0">
                    {@render header('large')}

                    {@render description('large')}

                    <Summary {release} />
                </div>

                {@render arrow()}
            </div>
        </div>
    </div>
</a>
