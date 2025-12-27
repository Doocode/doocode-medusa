<script lang="ts">
    import MainAction from "../../projects/MainAction.svelte";
    import Header from "../../projects/Header.svelte";
    import { m } from "$lib/paraglide/messages";
    import type { PageProps } from "./$types";

    let { data }: PageProps = $props();
</script>

<svelte:head>
    <title>Projects demo • Doocode.xyz</title>
</svelte:head>

<main class="max-w-7xl mx-auto p-4 py-8 flex flex-col gap-6 [&_td]:py-0.5 [&_th]:text-start">
    <strong class="-mb-6 text-primary hover:underline underline-offset-2 flex justify-start">
        <a href="/demo">Demo</a>
    </strong>
    <h1 class="text-4xl font-black mb-4">Projects</h1>

    <p class="mb-8">Preview of the projects page.</p>
</main>


<h2 class="max-w-7xl mx-auto px-4 pb-4 text-3xl font-black">Header</h2>
<h3 class="max-w-7xl mx-auto px-4 py-2 text-xl font-bold">With accent color</h3>
<Header project={data.project_withAccent}>
    {#snippet mainAction()}
        <MainAction variant="visit" href="#" withAccent
            text={m['actions.visit']({ name: data.project_withAccent.name })}
        />
    {/snippet}
</Header>

<h3 class="max-w-7xl mx-auto px-4 py-2 mt-4 text-xl font-bold">Without accent color</h3>
<Header project={data.project_withoutAccent}>
    {#snippet mainAction()}
        <MainAction variant="visit" href="#" withAccent={false}
            text={m['actions.visit']({ name: data.project_withoutAccent.name })}
        />
    {/snippet}
</Header>