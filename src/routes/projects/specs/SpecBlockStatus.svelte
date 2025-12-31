<script lang="ts">
    import { SpecBlock } from ".";
    import type { Component } from "svelte";
    import { m } from "$lib/paraglide/messages";
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
        "flex flex-col items-start gap-1 rounded-md md:rounded-lg text-sm [&_span]:-mx-0.5": true,
        "text-blue-600 dark:text-blue-400": status === ProjectStatus.InDevelopment,
        "text-green-600 dark:text-green-400": status === ProjectStatus.Completed,
        "text-yellow-600 dark:text-yellow-400": status === ProjectStatus.OnHold,
        "text-red-600 dark:text-red-400": status === ProjectStatus.Abandoned,
        "text-gray-600 dark:text-gray-400": status === ProjectStatus.Archived
    }}>
        {#if status === ProjectStatus.InDevelopment}
            <Construction class="w-6! h-6!" />
            <span>{m['projects.status.in_development']()}</span>
        {:else if status === ProjectStatus.Completed}
            <CircleCheck class="w-6! h-6!" />
            <span>{m['projects.status.completed']()}</span>
        {:else if status === ProjectStatus.OnHold}
            <CirclePause class="w-6! h-6!" />
            <span>{m['projects.status.on_hold']()}</span>
        {:else if status === ProjectStatus.Abandoned}
            <CircleX class="w-6! h-6!" />
            <span>{m['projects.status.abandoned']()}</span>
        {:else if status === ProjectStatus.Archived}
            <FolderArchive class="w-6! h-6!" />
            <span>{m['projects.status.archived']()}</span>
        {/if}
    </div>
</SpecBlock>