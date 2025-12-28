<script lang="ts">
    import type { Snippet } from "svelte";

    interface Props {
        children?: Snippet;
    }

    let {
        children
    }: Props = $props();
</script>

<nav class="flex flex-wrap items-start justify-center gap-1">
    {@render children?.()}
</nav>