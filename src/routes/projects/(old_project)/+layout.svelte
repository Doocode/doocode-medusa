<script lang="ts">
    import Header from "../Header.svelte";
    import { m } from "$lib/paraglide/messages";
    import MainAction from "../MainAction.svelte";

    let { data, children } = $props();
</script>

<svelte:head>
    <title>{data.project.name} • Doocode.xyz</title>
    <link rel="icon" href={data.project.logo} />
</svelte:head>

<Header project={data.project}>
    {#snippet mainAction()}
        <MainAction {...data.project.mainAction} />
    {/snippet}
</Header>

{@render children()}