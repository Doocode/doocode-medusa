<script>
	import { m } from '$lib/paraglide/messages';
	import { projects } from './projects';
	import ProjectCard from './ProjectCard.svelte';
	import Package from '@lucide/svelte/icons/package';
</script>

<svelte:head>
	<title>{m['projects.title']()} • Doocode.xyz</title>
</svelte:head>

<main class="container mx-auto px-4 py-8">
	<Package class="-mx-2 mb-4 h-20 w-20 text-primary" />
	<h1 class="mb-4 text-4xl font-black">{m['projects.heading']()}</h1>
	<p class="mb-8">{m['projects.description']()}</p>

	<div class="mt-8 grid grid-cols-[repeat(auto-fill,minmax(250px,1fr))] gap-4">
		{#each projects as { codename, name, logo, catchyPhrase, createdOn, updatedOn, bgAccent }}
			<ProjectCard {name} {logo} {codename} {catchyPhrase} {bgAccent} {createdOn} {updatedOn} />
		{/each}
	</div>
</main>
