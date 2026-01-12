<script lang="ts">
    import { cn } from "$lib/utils.js";
    import { getContext } from "svelte";
    import type { Snippet } from "svelte";

    interface Props {
        class?: string;
        children?: Snippet;
    }

    let {
        class: className,
        children
    }: Props = $props();

    const listType = getContext<'ul' | 'ol'>('listType') ?? 'ul';
</script>

{#if listType === 'ol'}
    <li class={cn("relative before:content-[counter(list-item)] before:flex before:w-6 before:absolute before:-left-8 before:-top-1.5 before:text-primary before:font-semibold before:justify-end before:text-2xl", className)}>
        {@render children?.()}
    </li>
{:else}
    <li class={cn("relative before:content-[''] before:flex before:w-4 before:aspect-square before:bg-primary before:rounded-full before:absolute before:-left-8 before:top-1", className)}>
        {@render children?.()}
    </li>
{/if}