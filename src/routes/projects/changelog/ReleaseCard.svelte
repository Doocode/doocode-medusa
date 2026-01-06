<script lang="ts">
    import { ReleaseTypeBadge, Summary } from ".";
    import { Package, ChevronRight } from '@lucide/svelte/icons';
    import type { Release } from '$routes/projects/projects.types';

    interface Props {
        release: Release;
    }

    let { release }: Props = $props();

    function formatDate(date: Date): string {
        return new Intl.DateTimeFormat('fr-FR', {
            year: 'numeric',
            month: 'long',
            day: 'numeric'
        }).format(date);
    }
</script>

<a 
    href="/projects/doosearch/history/{release.versionString}"
    class="group block p-6 rounded-xl border-3 border-secondary
           hover:border-primary dark:hover:border-primary
           hover:shadow-lg transition-all duration-200
           bg-background"
>
    <div class="flex items-start justify-between gap-4">
        <div class="flex-1 min-w-0">
            <!-- Header -->
            <header class="flex flex-wrap items-center gap-3 mb-2">
                <h3 class="text-xl md:text-2xl font-bold flex items-center gap-2">
                    <Package class="w-5 h-5 md:w-6 md:h-6 text-primary" />
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
                <p class="text-sm md:text-base text-foreground/70 line-clamp-2 mb-3">
                    {release.description}
                </p>
            {/if}

            <!-- Summary -->
            <Summary {release} />
        </div>

        <!-- Arrow indicator -->
        <ChevronRight class="w-9 h-9 text-muted-foreground group-hover:text-primary group-hover:translate-x-1 transition-all shrink-0 -mr-1" />
    </div>
</a>
