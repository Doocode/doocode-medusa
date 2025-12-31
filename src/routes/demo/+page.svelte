<script lang="ts">
	import { resolve } from '$app/paths';
	import Button from '$lib/components/ui/button/button.svelte';

	import { GamepadDirectional, FlaskConical, Heading6, Package, List } from '@lucide/svelte/icons';
</script>

<svelte:head>
    <title>Demonstration • Doocode.xyz</title>
</svelte:head>

<main class="max-w-7xl mx-auto px-4 py-8">
	<FlaskConical class="w-20 h-20 mb-4 -mx-2 text-primary" />
	<h1 class="text-4xl font-black mb-4">Demo Pages</h1>
	<p class="mb-8">This section contains various demo pages showcasing different UI components and features.</p>

	<nav class="grid grid-cols-[repeat(auto-fill,minmax(150px,1fr))] gap-2">
		<Button href={resolve('/demo/heading')}
			class="h-auto flex flex-col items-center gap-2 rounded-3xl active:scale-95 aspect-square">
			<Heading6 class="w-16! h-16!" />
			<span>Heading</span>
		</Button>

		<Button href={resolve('/demo/lists')}
			class="h-auto flex flex-col items-center gap-2 rounded-3xl active:scale-95 aspect-square">
			<List class="w-16! h-16!" />
			<span>Lists</span>
		</Button>

		<Button href={resolve('/demo/buttons')}
			class="h-auto flex flex-col items-center gap-2 rounded-3xl active:scale-95 aspect-square">
			<GamepadDirectional class="w-16! h-16!" />
			<span>Buttons</span>
		</Button>

		<Button href={resolve('/demo/projects')}
			class="h-auto flex flex-col items-center gap-2 rounded-3xl active:scale-95 aspect-square">
			<Package class="w-16! h-16!" />
			<span>Projects</span>
		</Button>

		<!-- TODO: Gallery, Input -->
	</nav>
</main>
