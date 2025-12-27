<script lang="ts">
    import Header from "../Header.svelte";
    import type { PageProps } from "./$types";

    let { data }: PageProps = $props();
</script>

<Header project={data.project} />