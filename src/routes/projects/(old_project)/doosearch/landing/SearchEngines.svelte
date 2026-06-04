<script lang="ts">
	import { ArrowUp01 } from '@lucide/svelte/icons';
	import Heading from '$lib/page/Heading.svelte';
	import { currentLogo } from '../gallery/logo';
	import { m } from '$lib/paraglide/messages';
</script>

<div class="grid items-center gap-8 md:grid-cols-2">
	<div class="grid gap-4">
		<Heading
			level="h2"
			icon={ArrowUp01}
			title={m['projects.doosearch.landing.search_engines.title']()}
		/>
		<p>{m['projects.doosearch.landing.search_engines.description']()}</p>
	</div>

	<!-- TODO: image de nuage/bulles flottantes et animés de moteurs -->

	<img
		src={currentLogo}
		class="mx-auto hidden w-90 md:flex lg:w-100"
		alt="Current Doosearch logo"
	/>
</div>
