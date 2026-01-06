<script lang="ts">
    import type { Snippet } from 'svelte';
    import { cn } from "$lib/utils.js";

    interface Props {
        class?: string;
        tag?: string;
        tintLight?: string;
        tintDark?: string;
        children: Snippet;
    }

    let { class: className, tintLight, tintDark, tag = "div", children }: Props = $props();
</script>

<svelte:element
    this={tag}
    class={cn("restyle-wrapper", className)}
    style:--tintLight={tintLight}
    style:--tintDark={tintDark}
>
    {@render children()}
</svelte:element>

{#if tintLight && !tintDark}
    <style>
        .restyle-wrapper {
            --primary: var(--tintLight);
        }
    </style>
{:else if tintDark && !tintLight}
    <style>
        :root.dark .restyle-wrapper {
            --primary: var(--tintDark);
        }
    </style>
{:else if tintLight && tintDark}
    <style>
        .restyle-wrapper {
            --primary: var(--tintLight);
        }
        :root.dark .restyle-wrapper {
            --primary: var(--tintDark);
        }
    </style>
{/if}