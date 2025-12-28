<script lang="ts">
    import Heading from '$lib/page/Heading.svelte';
    import Headphones from '@lucide/svelte/icons/headphones';
    import Dribbble from '@lucide/svelte/icons/dribbble';
    import Smile from '@lucide/svelte/icons/smile';
    import Crown from '@lucide/svelte/icons/crown';
    import Drum from '@lucide/svelte/icons/drum';
    import Leaf from '@lucide/svelte/icons/leaf';
</script>

<svelte:head>
    <title>Heading demo • Doocode.xyz</title>
</svelte:head>

<main class="max-w-7xl mx-auto p-4 py-8 flex flex-col gap-6">
    <strong class="-mb-6 text-primary hover:underline underline-offset-2 flex justify-start">
        <a href="/demo">Demo</a>
    </strong>
    <h1 class="text-4xl font-black mb-4">Heading</h1>
    <p class="mb-8">Display various heading styles.</p>

    <h3 class="max-w-7xl pt-2 text-xl font-bold text-chart-1">Heading with icon</h3>
	<div class="grid grid-cols-[repeat(auto-fill,minmax(175px,1fr))] gap-6 mb-14">
        <Heading level="h1" icon={Headphones} title="Heading Level 1" />
        <Heading level="h2" icon={Dribbble} title="Heading Level 2" />
        <Heading level="h3" icon={Smile} title="Heading Level 3" />
        <Heading level="h4" icon={Crown} title="Heading Level 4" />
        <Heading level="h5" icon={Drum} title="Heading Level 5" />
        <Heading level="h6" icon={Leaf} title="Heading Level 6" />
    </div>

    <h3 class="max-w-7xl pt-2 text-xl font-bold text-chart-2">Heading without icon</h3>
	<div class="grid grid-cols-[repeat(auto-fill,minmax(175px,1fr))] gap-6">
        <Heading level="h1" title="Heading Level 1" />
        <Heading level="h2" title="Heading Level 2" />
        <Heading level="h3" title="Heading Level 3" />
        <Heading level="h4" title="Heading Level 4" />
        <Heading level="h5" title="Heading Level 5" />
        <Heading level="h6" title="Heading Level 6" />
    </div>
</main>