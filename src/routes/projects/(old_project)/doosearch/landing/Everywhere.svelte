<script lang="ts">
	import { MonitorSmartphone } from '@lucide/svelte/icons';
	import Heading from '$lib/page/Heading.svelte';
	import { CrossPlatform } from '../gallery/svg';
	import { m } from '$lib/paraglide/messages';
</script>

<div class="grid items-center gap-4 md:grid-cols-2 lg:gap-8">
	<!-- TODO: illustration
        - svg animation morphose : PC, tablette et smartphone
        - css animation : rotation 3d prisme (3 faces : PC, tablette, smartphone)
    -->
	<CrossPlatform class="-mb-8 w-full lg:h-120" />

	<div class="grid gap-4">
		<Heading
			level="h2"
			icon={MonitorSmartphone}
			title={m['projects.doosearch.landing.everywhere.title']()}
		/>
		<p>{m['projects.doosearch.landing.everywhere.description']()}</p>
	</div>
</div>
