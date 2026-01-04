<script lang="ts">
    type SummaryType = 'features' | 'improvements' | 'bugfixes' | 'screenshots' | 'removed';

    interface Props {
        type: SummaryType;
        count: number;
        label: string;
    }

    let { type, count, label }: Props = $props();

    import { BugOff, CircleDashed, ImagePlay, Sparkles, SquarePlus, Trash2 } from "@lucide/svelte/icons";
</script>

<div class={{
    "flex items-center gap-1.5": true,
    "text-green-600 dark:text-green-400": type === 'features',
    "text-blue-600 dark:text-blue-400": type === 'improvements',
    "text-orange-600 dark:text-orange-400": type === 'bugfixes',
    "text-purple-600 dark:text-purple-400": type === 'screenshots',
    "text-red-600 dark:text-red-400": type === 'removed',
    "text-gray-600 dark:text-gray-400": !type
}}>
    <span class={{
        "flex items-center gap-1 px-2.5 py-1 rounded-md": true,
        "bg-green-300 text-green-800 dark:bg-green-800/70 dark:text-green-300": type === 'features',
        "bg-blue-300 text-blue-800 dark:bg-blue-800/70 dark:text-blue-300": type === 'improvements',
        "bg-orange-300 text-orange-800 dark:bg-orange-800/70 dark:text-orange-300": type === 'bugfixes',
        "bg-purple-300 text-purple-800 dark:bg-purple-800/70 dark:text-purple-300": type === 'screenshots',
        "bg-red-300 text-red-800 dark:bg-red-800/70 dark:text-red-300": type === 'removed',
        "bg-gray-300 text-gray-800 dark:bg-gray-800/70 dark:text-gray-300": !type
    }}>
        {#if type === "features"}
            <SquarePlus class="w-4.5 h-4.5" />
        {:else if type === "improvements"}
            <Sparkles class="w-4.5 h-4.5" />
        {:else if type === "bugfixes"}
            <BugOff class="w-4.5 h-4.5" />
        {:else if type === "screenshots"}
            <ImagePlay class="w-4.5 h-4.5" />
        {:else if type === "removed"}
            <Trash2 class="w-4.5 h-4.5" />
        {:else}
            <CircleDashed class="w-4.5 h-4.5" />
        {/if}
        <span class="text-lg">{count}</span>
    </span>
    <span>{label}</span>
</div>
