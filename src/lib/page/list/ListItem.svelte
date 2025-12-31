<script lang="ts">
    import { cn } from "$lib/utils.js";
    import type { Snippet } from "svelte";

    interface Props {
        class?: string;
        children?: Snippet;
    }

    let {
        class: className,
        children
    }: Props = $props();
</script>

<li class={cn("relative before:content-[''] before:flex before:w-4 before:aspect-square before:bg-primary before:rounded-full before:absolute before:-left-8 before:top-1", className)}>
    {@render children?.()}
</li>