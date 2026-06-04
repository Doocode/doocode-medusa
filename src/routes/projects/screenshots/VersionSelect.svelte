<script lang="ts">
	import { m } from '$lib/paraglide/messages';
	import { ReleaseTypeBadge } from '../changelog';
	import type { Release } from '$routes/projects/core';
	import { ImagePlay } from '@lucide/svelte/icons';

	interface Props {
		releases: Release[];
		currentVersionNumber?: number;
	}

	let { releases, currentVersionNumber = $bindable() }: Props = $props();
</script>

<nav class="grid items-start">
	<h3 class="mx-4 mb-4 text-lg font-bold">Versions</h3>

	<div class="mx-4 flex flex-col gap-1 sm:m-0">
		{#each releases as release (release.versionNumber)}
			{@const isSelected = release.versionNumber === currentVersionNumber}
			{@const imageCount = release.images?.length ?? 0}

			<button
				onclick={() => (currentVersionNumber = release.versionNumber)}
				class={{
					'group flex w-full items-center gap-3 rounded-lg px-4 py-3 text-left transition-all duration-150': true,
					'bg-primary/30 text-primary ring-1 ring-primary': isSelected,
					'text-slate-600 hover:bg-secondary hover:text-slate-900 focus:ring-2 focus:ring-slate-500 focus:outline-none dark:text-slate-400 dark:hover:text-slate-100':
						!isSelected
				}}
			>
				<div class="flex items-center gap-2">
					<span class="font-medium">{release.versionString}</span>
					<ReleaseTypeBadge type={release.type!} />
				</div>

				<div
					class="ml-auto flex items-center gap-1"
					title={m['gallery.count_images']({ count: imageCount })}
				>
					<span class="text-2xl font-thin">
						{imageCount}
					</span>
					<ImagePlay size={24} strokeWidth={1.75} />
				</div>
			</button>
		{/each}
	</div>
</nav>
