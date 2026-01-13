<script lang="ts">
    import type { Release } from '$routes/projects/projects.types';
    import type { Component } from 'svelte';
    import {
        Bug, ImagePlay, Sparkles, SquarePlus, Trash2
    } from "@lucide/svelte/icons";

    interface Props {
        release: Release;
    }

    let { release }: Props = $props();
</script>

<nav class="grid">
    <h2 class="text-2xl font-bold mt-16 mb-4 mx-4">Navigation</h2>

    {#snippet link(id: string, label: string, icon: Component)}
        <a
            href="#{id}"
            class="w-full flex items-center gap-3 px-4 py-3 rounded-lg transition-colors
                hover:bg-slate-200 dark:hover:bg-slate-800 hover:text-primary
                focus:outline-none focus:ring-2 focus:ring-primary"
        >
            {#key icon}
                {@const Icon = icon}
                <Icon size={24} class="shrink-0" />
            {/key}
            <span class="font-medium">{label}</span>
        </a>
    {/snippet}

    {#if release.images?.length}
        {@render link('screenshots', 'Screenshots', ImagePlay)}
    {/if}

    {#if release.features?.length}
        {@render link('features', 'Features', SquarePlus)}
    {/if}

    {#if release.improvements?.length}
        {@render link('improvements', 'Improvements', Sparkles)}
    {/if}

    {#if release.bugfixes?.length}
        {@render link('bugfixes', 'Bugfixes', Bug)}
    {/if}

    {#if release.removedFeatures?.length}
        {@render link('removed', 'Removed Features', Trash2)}
    {/if}
</nav>