<script lang="ts">
    import { cn } from "$lib/utils.js";
    import type { Snippet } from "svelte";

    interface Props {
        class?: string;
        type?: 'ul' | 'ol';
        children?: Snippet;
    }

    let {
        class: className,
        type = 'ul',
        children
    }: Props = $props();
</script>

{#key type}
    <svelte:element this={type} class={cn("pl-8 grid gap-2.5", className)}>
        {@render children?.()}
    </svelte:element>
{/key}