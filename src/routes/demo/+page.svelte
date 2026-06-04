<script lang="ts">
	import { resolve } from '$app/paths';
	import Button from '$lib/components/ui/button/button.svelte';

	import { GamepadDirectional, FlaskConical, Heading6, Package, List } from '@lucide/svelte/icons';
</script>

<svelte:head>
	<title>Demonstration • Doocode.xyz</title>
</svelte:head>

<main class="container mx-auto px-4 py-8">
	<FlaskConical class="-mx-2 mb-4 h-20 w-20 text-primary" />
	<h1 class="mb-4 text-4xl font-black">Demo Pages</h1>
	<p class="mb-8">
		This section contains various demo pages showcasing different UI components and features.
	</p>

	<nav class="grid grid-cols-[repeat(auto-fill,minmax(150px,1fr))] gap-2">
		<Button
			href={resolve('/demo/heading')}
			class="flex aspect-square h-auto flex-col items-center gap-2 rounded-3xl active:scale-95"
		>
			<Heading6 class="h-16! w-16!" />
			<span>Heading</span>
		</Button>

		<Button
			href={resolve('/demo/lists')}
			class="flex aspect-square h-auto flex-col items-center gap-2 rounded-3xl active:scale-95"
		>
			<List class="h-16! w-16!" />
			<span>Lists</span>
		</Button>

		<Button
			href={resolve('/demo/buttons')}
			class="flex aspect-square h-auto flex-col items-center gap-2 rounded-3xl active:scale-95"
		>
			<GamepadDirectional class="h-16! w-16!" />
			<span>Buttons</span>
		</Button>

		<Button
			href={resolve('/demo/projects')}
			class="flex aspect-square h-auto flex-col items-center gap-2 rounded-3xl active:scale-95"
		>
			<Package class="h-16! w-16!" />
			<span>Projects</span>
		</Button>

		<!-- TODO: Gallery, Input -->
	</nav>
</main>
