<script lang="ts">
    import { cn } from "$lib/utils.js";
	import type { Snippet } from "svelte";

    interface Props {
        class?: string;
        children?: Snippet;
    }

    let { class: className, children }: Props = $props();
</script>

<main class={cn("\
    grid grid-cols-[repeat(auto-fit,minmax(120px,1fr))] divide-border gap-x-4 gap-y-8\
", className)}>
    {@render children?.()}
</main>

<style>
    @media (max-width: 419px) {
        :global(.spec-block:nth-child(2n) .spec-border-r) { display: none; }
        :global(.spec-block:nth-last-child(-n+2) .spec-border-b) { display: none; }
    }
    @media (min-width: 420px) and (max-width: 559px) {
        :global(.spec-block:nth-child(3n) .spec-border-r) { display: none; }
        :global(.spec-block:nth-last-child(-n+3) .spec-border-b) { display: none; }
    }
    @media (min-width: 560px) and (max-width: 767px) {
        :global(.spec-block:nth-child(4n) .spec-border-r) { display: none; }
        :global(.spec-block:nth-last-child(-n+4) .spec-border-b) { display: none; }
    }
</style>