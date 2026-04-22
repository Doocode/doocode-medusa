<script lang="ts">
	import type { PageData } from './$types';
	import { DetailsChangelogPage } from '$routes/projects/changelog';

	let { data }: { data: PageData } = $props();

	const project = $derived(data.project);
	const release = $derived(data.release);
	const returnUrl = $derived(`/projects/${project.codename}/history`);
</script>

<svelte:head>
	<title>[{project.name}] {release.versionString} • Doocode.xyz</title>
</svelte:head>

<DetailsChangelogPage {project} {release} {returnUrl} />
