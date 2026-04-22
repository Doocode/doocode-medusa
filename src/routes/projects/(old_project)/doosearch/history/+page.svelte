<script lang="ts">
	import type { PageData } from './$types';
	import { m } from '$lib/paraglide/messages';
	import { ListVersionsPage } from '$routes/projects/changelog';
	import type { Release } from '$routes/projects/projects.types';

	let { data }: { data: PageData } = $props();
	let releases: Release[] = $derived(data.releases);
</script>

<svelte:head>
	<title>[{data.project.name}] {m['projects.history.long_title']()} • Doocode.xyz</title>
</svelte:head>

<ListVersionsPage {releases} />
