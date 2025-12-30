<script lang="ts">
	import { SpecBlock } from ".";
	import type { Component } from "svelte";
	import { ProjectStatus } from "../projects.types";
    import { Construction, CircleCheck, CirclePause, CircleX, FolderArchive } from '@lucide/svelte/icons';

    interface Props {
        icon: Component;
        title: string;
        status: ProjectStatus;
    }

    let { icon, title, status }: Props = $props();
</script>

<SpecBlock {icon} {title}>
    <div class={{
        "flex items-center gap-2 rounded-md md:rounded-lg -mx-1 -my-0.5 px-2 py-1.5 text-sm font-medium": true,
        "bg-blue-200 dark:bg-blue-800/50 text-blue-600 dark:text-blue-400": status === ProjectStatus.InDevelopment,
        "bg-green-100 dark:bg-green-800/50 text-green-600 dark:text-green-400": status === ProjectStatus.Completed,
        "bg-yellow-100 dark:bg-yellow-800/50 text-yellow-600 dark:text-yellow-400": status === ProjectStatus.OnHold,
        "bg-red-200 dark:bg-red-800/50 text-red-600 dark:text-red-400": status === ProjectStatus.Abandoned,
        "bg-gray-100 dark:bg-gray-500/50 text-gray-600 dark:text-gray-400": status === ProjectStatus.Archived
    }}>
        {#if status === ProjectStatus.InDevelopment}
            <Construction class="w-5! h-5!" />
            <span>En chantier</span>
        {:else if status === ProjectStatus.Completed}
            <CircleCheck class="w-5! h-5!" />
            <span>Terminé</span>
        {:else if status === ProjectStatus.OnHold}
            <CirclePause class="w-5! h-5!" />
            <span>En pause</span>
        {:else if status === ProjectStatus.Abandoned}
            <CircleX class="w-5! h-5!" />
            <span>Abandonné</span>
        {:else if status === ProjectStatus.Archived}
            <FolderArchive class="w-5! h-5!" />
            <span>Archivé</span>
        {/if}
    </div>
</SpecBlock>