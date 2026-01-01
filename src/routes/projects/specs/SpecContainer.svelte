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
    grid grid-cols-[repeat(auto-fill,minmax(130px,1fr))] gap-2 \
    md:flex md:overflow-x-auto md:overflow-y-hidden md:gap-8 md:divide-x divide-border \
", className)}>
    {@render children?.()}
</main>