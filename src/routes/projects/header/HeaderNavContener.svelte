<script lang="ts">
    import type { Snippet } from "svelte";

    interface Props {
        children?: Snippet;
    }

    let {
        children
    }: Props = $props();
</script>

<nav class="flex md:flex-wrap items-start md:justify-center gap-1 p-2 md:p-0 overflow-auto md:overflow-visible">
    {@render children?.()}
</nav>