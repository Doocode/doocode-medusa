<script lang="ts">
    import type { Release } from '$routes/projects/projects.types';
    import { m } from '$lib/paraglide/messages';
    import type { Component } from 'svelte';
    import {
        Bug, ImagePlay, Sparkles, SquarePlus, Trash2, Link
    } from "@lucide/svelte/icons";

    const colors: Record<string, { text: string, hoverBg: string, hoverText: string, ring: string, badge: string }> = {
        links: {
            text: "text-amber-600 dark:text-amber-400",
            hoverBg: "hover:bg-amber-200 dark:hover:bg-amber-900/60",
            hoverText: "hover:text-amber-700 dark:hover:text-amber-300",
            ring: "focus:ring-amber-500",
            badge: "bg-amber-200 text-amber-700 dark:bg-amber-900 dark:text-amber-400"
        },
        features: {
            text: "text-green-600 dark:text-green-400",
            hoverBg: "hover:bg-green-200 dark:hover:bg-green-900/60",
            hoverText: "hover:text-green-700 dark:hover:text-green-300",
            ring: "focus:ring-green-500",
            badge: "bg-green-200 text-green-700 dark:bg-green-900 dark:text-green-400"
        },
        improvements: {
            text: "text-blue-600 dark:text-blue-400",
            hoverBg: "hover:bg-blue-200 dark:hover:bg-blue-900/60",
            hoverText: "hover:text-blue-700 dark:hover:text-blue-300",
            ring: "focus:ring-blue-500",
            badge: "bg-blue-200 text-blue-700 dark:bg-blue-900 dark:text-blue-400"
        },
        bugfixes: {
            text: "text-orange-600 dark:text-orange-400",
            hoverBg: "hover:bg-orange-200 dark:hover:bg-orange-900/60",
            hoverText: "hover:text-orange-700 dark:hover:text-orange-300",
            ring: "focus:ring-orange-500",
            badge: "bg-orange-200 text-orange-700 dark:bg-orange-900 dark:text-orange-400"
        },
        screenshots: {
            text: "text-purple-600 dark:text-purple-400",
            hoverBg: "hover:bg-purple-200 dark:hover:bg-purple-900/60",
            hoverText: "hover:text-purple-700 dark:hover:text-purple-300",
            ring: "focus:ring-purple-500",
            badge: "bg-purple-200 text-purple-700 dark:bg-purple-900 dark:text-purple-400"
        },
        removed: {
            text: "text-red-600 dark:text-red-400",
            hoverBg: "hover:bg-red-200 dark:hover:bg-red-900/60",
            hoverText: "hover:text-red-700 dark:hover:text-red-300",
            ring: "focus:ring-red-500",
            badge: "bg-red-200 text-red-700 dark:bg-red-900 dark:text-red-400"
        }
    };

    interface Props {
        release: Release;
    }

    let { release }: Props = $props();
</script>

<nav class="grid -ml-4">
    <h2 class="text-2xl font-bold mt-16 sm:mt-0 lg:mt-16 mb-4 mx-4">Navigation</h2>

    {#snippet link(id: string, label: string, icon: Component, count: number)}
        {@const style = colors[id] || {
            text: "text-slate-600 dark:text-slate-400",
            hoverBg: "hover:bg-slate-100 dark:hover:bg-slate-800",
            hoverText: "hover:text-slate-900 dark:hover:text-slate-100",
            ring: "focus:ring-slate-500",
            badge: "bg-slate-100 text-slate-700 dark:bg-slate-800 dark:text-slate-400"
        }}
        <a
            href="#{id}"
            class="w-full flex items-center gap-3 px-4 py-3 rounded-lg transition-all duration-150 group
                {style.text} {style.hoverBg} {style.hoverText}
                focus:outline-none focus:ring-2 {style.ring}"
        >
            {#key icon}
                {@const Icon = icon}
                <Icon size={24} class="shrink-0" />
            {/key}
            <span class="font-medium">{label}</span>
            <span class="ml-auto text-sm aspect-square font-bold w-7 h-7 flex items-center justify-center text-center -my-1 rounded-full {style.badge}">
                {count}
            </span>
        </a>
    {/snippet}

    {#if release.images?.length}
        {@render link('screenshots', m['projects.screenshots'](), ImagePlay, release.images.length)}
    {/if}

    {#if release.links?.length}
        {@render link('links', m['links.title'](), Link, release.links.length)}
    {/if}

    {#if release.features?.length}
        {@render link('features', m['changelog.features.title'](), SquarePlus, release.features.length)}
    {/if}

    {#if release.improvements?.length}
        {@render link('improvements', m['changelog.improvements.title'](), Sparkles, release.improvements.length)}
    {/if}

    {#if release.bugfixes?.length}
        {@render link('bugfixes', m['changelog.bug_fixes.title'](), Bug, release.bugfixes.length)}
    {/if}

    {#if release.removals?.length}
        {@render link('removed', m['changelog.removals.title'](), Trash2, release.removals.length)}
    {/if}
</nav>