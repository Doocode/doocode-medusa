<script lang="ts">
	import { SearchBar } from '$lib/page';
	import { m } from '$lib/paraglide/messages';
	import Heading from '$lib/page/Heading.svelte';
	import { History } from '@lucide/svelte/icons';
	import type { Release } from '$routes/projects/projects.types';
	import { ReleaseCard, NoReleaseFound } from '$routes/projects/changelog';

	interface Props {
		releases: Release[];
	}

	let { releases }: Props = $props();

	let searchValue: string = $state('');

	const filtered_releases = $derived.by(() => {
		if (!searchValue.trim()) return releases;

		const query = searchValue.toLowerCase();

		return releases.filter((release: Release) => {
			// Search in version string
			if (release.versionString.toLowerCase().includes(query)) return true;

			// Search in description
			if (release.description?.toLowerCase().includes(query)) return true;

			// Search in features
			if (release.features?.some((f) => f.toLowerCase().includes(query))) return true;

			// Search in improvements
			if (release.improvements?.some((i) => i.toLowerCase().includes(query))) return true;

			// Search in bugfixes
			if (release.bugfixes?.some((b) => b.toLowerCase().includes(query))) return true;

			// Search in removed features
			if (release.removals?.some((r) => r.toLowerCase().includes(query))) return true;

			// Search in links
			if (
				release.links?.some(
					(link) =>
						link.type.toLowerCase().includes(query) ||
						link.label?.toLowerCase().includes(query) ||
						link.url.toLowerCase().includes(query)
				)
			)
				return true;

			// Search in images (alt, legend, description)
			if (
				release.images?.some(
					(img) =>
						img.alt.toLowerCase().includes(query) ||
						img.legend?.toLowerCase().includes(query) ||
						img.description?.toLowerCase().includes(query)
				)
			)
				return true;

			return false;
		});
	});
</script>

<main class="container mx-auto grid max-w-5xl gap-8 px-4 pt-8 pb-16">
	<header class="flex flex-col gap-6 md:mb-8 md:flex-row md:items-end md:justify-between">
		<Heading level="h2" icon={History} title={m['projects.history.long_title']()} />

		<nav>
			<SearchBar
				bind:value={searchValue}
				placeholder={m['actions.search']()}
				class="w-full md:w-96"
				statusText={searchValue
					? m['status.search.count_results_found']({ count: filtered_releases.length })
					: undefined}
			/>
			<!-- 
                TODO: Filters panel with options like :
                - Version type : stable, beta, alpha, etc.
                - Date range
                - Version number range : above/below a certain version
                - Links included : include/exclude links types (github, website, etc.)
            -->
		</nav>
	</header>

	<div class="grid gap-4 md:gap-1">
		{#each filtered_releases as release}
			<ReleaseCard {release} />
		{:else}
			<NoReleaseFound bind:searchValue />
		{/each}
	</div>
</main>
