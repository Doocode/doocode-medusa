<script lang="ts">
    type SummaryType = 'features' | 'improvements' | 'bugfixes' | 'breaking_changes' | 'screenshots' | 'removed' | 'links';

    interface Props {
        type: SummaryType;
        count: number;
        title: string;
        label: string;
        hideLabel?: boolean;
    }

    let { type, count, title, label, hideLabel = false }: Props = $props();

    import { Bug, CircleDashed, ImagePlay, Link, Sparkles, SquarePlus, Trash2, TriangleAlert } from "@lucide/svelte/icons";
</script>

<div class={{
    "flex items-center gap-1.5": true,
    "text-pink-600 dark:text-pink-400": type === 'links',
    "text-green-600 dark:text-green-400": type === 'features',
    "text-blue-600 dark:text-blue-400": type === 'improvements',
    "text-orange-600 dark:text-orange-400": type === 'bugfixes',
    "text-yellow-600 dark:text-yellow-400": type === 'breaking_changes',
    "text-purple-600 dark:text-purple-400": type === 'screenshots',
    "text-red-600 dark:text-red-400": type === 'removed',
    "text-gray-600 dark:text-gray-400": !type
}}
    {title}
>
    <span class={{
        "flex items-center gap-1 px-2.5 py-1 rounded-md": true,
        "bg-pink-300 text-pink-800 dark:bg-pink-800/70 dark:text-pink-300": type === 'links',
        "bg-green-300 text-green-800 dark:bg-green-800/70 dark:text-green-300": type === 'features',
        "bg-blue-300 text-blue-800 dark:bg-blue-800/70 dark:text-blue-300": type === 'improvements',
        "bg-orange-300 text-orange-800 dark:bg-orange-800/70 dark:text-orange-300": type === 'bugfixes',
        "bg-amber-300 text-amber-800 dark:bg-amber-800/70 dark:text-amber-300": type === 'breaking_changes',
        "bg-purple-300 text-purple-800 dark:bg-purple-800/70 dark:text-purple-300": type === 'screenshots',
        "bg-red-300 text-red-800 dark:bg-red-800/70 dark:text-red-300": type === 'removed',
        "bg-gray-300 text-gray-800 dark:bg-gray-800/70 dark:text-gray-300": !type
    }}>
        {#if type === "breaking_changes"}
            <TriangleAlert class="w-4.5 h-4.5" />
        {:else if type === "features"}
            <SquarePlus class="w-4.5 h-4.5" />
        {:else if type === "improvements"}
            <Sparkles class="w-4.5 h-4.5" />
        {:else if type === "bugfixes"}
            <Bug class="w-4.5 h-4.5" />
        {:else if type === "screenshots"}
            <ImagePlay class="w-4.5 h-4.5" />
        {:else if type === "removed"}
            <Trash2 class="w-4.5 h-4.5" />
        {:else if type === "links"}
            <Link class="w-4.5 h-4.5" />
        {:else}
            <CircleDashed class="w-4.5 h-4.5" />
        {/if}
        <span class="text-lg">{count}</span>
    </span>
    <span class="lowercase" class:sr-only={hideLabel}>{label}</span>
</div>
