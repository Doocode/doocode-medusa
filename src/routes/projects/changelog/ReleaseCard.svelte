<script lang="ts">
    import { getLocale } from "$lib/paraglide/runtime";
    import { ReleaseTypeBadge, Summary } from ".";
    import { Package, ChevronRight } from '@lucide/svelte/icons';
    import type { Release } from '$routes/projects/projects.types';

    interface Props {
        release: Release;
    }

    let { release }: Props = $props();

    function formatDate(date: Date): string {
        return new Intl.DateTimeFormat(getLocale(), {
            year: 'numeric',
            month: 'long',
            day: 'numeric'
        }).format(date);
    }

    function formatFullDate(date: Date): string {
        return new Intl.DateTimeFormat(getLocale(), {
            weekday: 'long',
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

<a 
    href="/projects/doosearch/history/{release.versionString}"
    class="group block p-6 rounded-xl border-3 border-secondary
           hover:border-primary dark:hover:border-primary
           hover:shadow-lg transition-all duration-200
           bg-background
           md:p-0 md:border-0 md:rounded-none md:shadow-none md:bg-transparent"
>
    <!-- Mobile layout -->
    <div class="flex items-start justify-between gap-4 md:hidden">
        <div class="flex-1 min-w-0">
            <!-- Header -->
            <header class="flex flex-wrap items-center gap-3 mb-2">
                <h3 class="text-xl font-bold flex items-center gap-2">
                    <Package class="w-5 h-5 text-primary" />
                    {release.versionString}
                </h3>
                {#if release.type}
                    <ReleaseTypeBadge type={release.type} />
                {/if}
            </header>

            <!-- Date -->
            <time class="text-sm text-muted-foreground block mb-3">
                {formatDate(release.releaseDate)}
            </time>

            <!-- Description -->
            {#if release.description}
                <p class="text-sm text-foreground/70 line-clamp-2 mb-3">
                    {release.description}
                </p>
            {/if}

            <!-- Summary -->
            <Summary {release} />
        </div>

        <!-- Arrow indicator -->
        <ChevronRight class="w-9 h-9 text-muted-foreground group-hover:text-primary group-hover:translate-x-1 transition-all shrink-0 -mr-1" />
    </div>

    <!-- Desktop timeline layout -->
    <div class="hidden md:flex md:gap-6">
        <!-- Left: Date section (150px fixed) -->
        <div class="w-40 shrink-0 text-right pt-1 text-balance">
            <div class="text-xs text-accent-foreground mb-1">
                {getRelativeTime(release.releaseDate)}
            </div>
            <time class="text-sm font-medium text-foreground block leading-tight">
                {formatFullDate(release.releaseDate)}
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
        <div class="flex-1 min-w-0 pb-12 group/content">
            <div class="p-6 rounded-xl border-3 border-secondary
                       group-hover:border-primary dark:group-hover:border-primary
                       group-hover:shadow-lg transition-all duration-200
                       bg-background flex gap-4">
                <div class="flex-1 min-w-0">
                    <!-- Header -->
                    <header class="flex flex-wrap items-center gap-3 mb-2">
                        <h3 class="text-2xl font-bold flex items-center gap-2">
                            <Package class="w-6 h-6 text-primary" />
                            {release.versionString}
                        </h3>
                        {#if release.type}
                            <ReleaseTypeBadge type={release.type} />
                        {/if}
                    </header>

                    <!-- Description -->
                    {#if release.description}
                        <p class="text-base text-foreground/70 line-clamp-2 mb-3">
                            {release.description}
                        </p>
                    {/if}

                    <!-- Summary -->
                    <Summary {release} />
                </div>

                <!-- Arrow indicator -->
                <ChevronRight class="w-9 h-9 text-muted-foreground group-hover/content:text-primary group-hover/content:translate-x-1 transition-all shrink-0 -mr-1" />
            </div>
        </div>
    </div>
</a>
