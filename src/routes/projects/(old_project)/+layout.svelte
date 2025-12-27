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
        <MainAction
            variant="visit" href="https://chronos.doocode.xyz"
            text={m['actions.visit']({ name: data.project.name })}
            withAccent={data.project.bgAccent != null}
        />
    {/snippet}
</Header>

{@render children()}