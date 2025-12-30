<script lang="ts">
    import { cn } from "$lib/utils.js";
	import type { Snippet } from "svelte";

    interface Props {
        class?: string;
        children?: Snippet;
    }

    let { class: className, children }: Props = $props();
</script>

<main class={cn("flex overflow-x-auto overflow-y-hidden scroll-smooth gap-2", className)}>
    {@render children?.()}
</main>