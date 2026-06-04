<script lang="ts">
	import { BrushCleaning } from '@lucide/svelte/icons';
	import ColorSwitcher from './ColorSwitcher.svelte';
	import Heading from '$lib/page/Heading.svelte';
	import { scale } from 'svelte/transition';
	import { m } from '$lib/paraglide/messages';
	import { UIPlaceholder } from '../gallery/svg';

	let color = $state('#3b82f6');
</script>

<div class="grid items-center gap-8 md:grid-cols-2 md:gap-12" style:--bg={color}>
	<div class="grid gap-4">
		<Heading
			level="h2"
			icon={BrushCleaning}
			title={m['projects.doosearch.landing.customization.title']()}
		/>
		<p>{m['projects.doosearch.landing.customization.description']()}</p>

		<div class="-mb-4 flex items-center justify-center md:m-0 xl:-mx-8">
			<ColorSwitcher bind:color />
		</div>
	</div>

	<div>
		{#key color}
			<div in:scale>
				<UIPlaceholder
					class="-mb-8 aspect-video w-full rounded-md md:m-0 md:-rotate-3 md:rounded-xl"
				/>
			</div>
		{/key}
	</div>
</div>
