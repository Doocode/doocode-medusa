<script lang="ts">
	import { DialogLinks } from '$routes/projects/links';
	import { ChangelogBody, SidePanel } from '$routes/projects/changelog';
	import type { Release, Project } from '$routes/projects/core';

	interface Props {
		project: Project;
		release: Release;
		returnUrl?: string;
	}

	let { project, release, returnUrl = '/projects' }: Props = $props();

	let dialogLinksOpen = $state(false);
</script>

{#if release.links && release.links.length > 0}
	<DialogLinks bind:open={dialogLinksOpen} links={release.links} accent={project.bgAccent} />
{/if}

<main
	class="container mx-auto grid items-start gap-16 px-4 pt-8 pb-16 lg:grid-cols-[300px_1fr] xl:grid-cols-[350px_1fr]"
>
	<SidePanel {release} {returnUrl} />

	<ChangelogBody {release} bind:dialogLinksOpen />
</main>
