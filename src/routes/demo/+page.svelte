<script lang="ts">
	import { resolve } from '$app/paths';
	import Button from '$lib/components/ui/button/button.svelte';

	import GamepadDirectional from '@lucide/svelte/icons/gamepad-directional';
</script>

<main class="max-w-7xl mx-auto px-4 py-8">
	<h1 class="text-4xl font-black mb-4">Demo Pages</h1>
	<p class="mb-8">This section contains various demo pages showcasing different UI components and features.</p>

	<nav class="grid grid-cols-[repeat(auto-fill,minmax(150px,1fr))] gap-2">
		<Button href={resolve('/demo/buttons')} class="h-auto flex flex-col items-center gap-2 rounded-3xl active:scale-95 aspect-square">
			<GamepadDirectional class="w-16! h-16!" />
			<span>Buttons</span>
		</Button>
	</nav>
</main>
