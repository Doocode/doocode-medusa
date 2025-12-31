<script lang="ts">
	import {
        ListContainer as Ul,
        ListItem as Li
    } from "$lib/page";
</script>

<svelte:head>
    <title>Lists demo • Doocode.xyz</title>
</svelte:head>

<main class="max-w-7xl mx-auto p-4 py-8 flex flex-col gap-6 [&_td]:py-0.5 [&_th]:text-start">
    <strong class="-mb-6 text-primary hover:underline underline-offset-2 flex justify-start">
        <a href="/demo">Demo</a>
    </strong>
    <h1 class="text-4xl font-black mb-4">Lists</h1>

    <p class="mb-8">Display a list of items.</p>

    <div class="grid gap-8 md:grid-cols-2">
        <div>
            <h2 class="text-2xl font-bold text-chart-1 mb-4">Unordered</h2>
            <Ul>
                <Li>Lorem ipsum dolor sit amet nunca. Lorem ipsum dolor sit amet nunca.</Li>
                <Li>Lorem ipsum dolor sit amet nunca.</Li>
                <Li>First item</Li>
                <Li>Second item</Li>
                <Li>Third item</Li>
                <Li>Fourth item</Li>
                <Li>Fifth item</Li>
                <Li>Sixth item</Li>
                <Li>Seventh item</Li>
                <Li>Eighth item</Li>
                <Li>Ninth item</Li>
            </Ul>
        </div>

        <div>
            <h2 class="text-2xl font-bold text-chart-2 mb-4">Ordered</h2>
            <Ul type="ol">
                <Li>Lorem ipsum dolor sit amet nunca. Lorem ipsum dolor sit amet nunca.</Li>
                <Li>Lorem ipsum dolor sit amet nunca.</Li>
                <Li>First item</Li>
                <Li>Second item</Li>
                <Li>Third item</Li>
                <Li>Fourth item</Li>
                <Li>Fifth item</Li>
                <Li>Sixth item</Li>
                <Li>Seventh item</Li>
                <Li>Eighth item</Li>
                <Li>Ninth item</Li>
                <Li>Tenth item</Li>
            </Ul>
        </div>
    </div>
</main>