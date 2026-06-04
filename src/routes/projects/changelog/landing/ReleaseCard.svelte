<script lang="ts">
	import { ReleaseTypeBadge, Summary } from '..';
	import { Package, ChevronRight } from '@lucide/svelte/icons';
	import type { Release } from '$routes/projects/core';
	import { LinksBubbles } from '$routes/projects/links';
	import { formatDate, getRelativeTime } from '../../projects.helpers';

	interface Props {
		release: Release;
	}

	let { release }: Props = $props();
</script>

<div class="flex md:gap-6">
	<!-- Left: Date section (Desktop only) -->
	<div class="hidden w-25 shrink-0 pt-1 text-right text-balance md:block">
		<div class="mb-2 text-xs font-bold text-primary">
			{getRelativeTime(release.releaseDate)}
		</div>
		<time class="mt-5 block text-base leading-tight font-normal text-foreground">
			{formatDate(release.releaseDate, {
				weekday: 'long',
				year: 'numeric',
				month: 'long',
				day: 'numeric'
			})}
		</time>
	</div>

	<!-- Left: Timeline (Desktop only) -->
	<div class="relative hidden flex-col items-center md:flex">
		<!-- Timeline dot -->
		<div class="z-10 mt-1 h-4 w-4 rounded-full bg-primary"></div>
		<!-- Timeline line -->
		<div class="mt-2 w-0.5 flex-1 bg-border"></div>
	</div>

	<!-- Right: Content -->
	<div class="min-w-0 flex-1 md:pb-8">
		<a
			href="/projects/doosearch/history/{release.versionString}"
			class="group/card flex items-start justify-between gap-4 rounded-xl border-3 border-secondary bg-background p-6 transition-all duration-200 hover:border-primary dark:hover:border-primary"
		>
			<div class="min-w-0 flex-1">
				<header class="mb-2 flex flex-wrap items-center gap-3">
					<h3 class="flex items-center gap-2 text-xl font-bold md:text-2xl">
						<Package class="h-5 w-5 text-primary md:h-6 md:w-6" />
						{release.versionString}
					</h3>
					{#if release.type}
						<ReleaseTypeBadge type={release.type} />
					{/if}
				</header>

				<!-- Date (Mobile only) -->
				<time class="mb-3 block text-sm text-muted-foreground md:hidden">
					{formatDate(release.releaseDate)}
				</time>

				<!-- Description & Links -->
				{#if release.links && release.links.length > 0}
					<div class="mt-4 mb-2">
						<LinksBubbles links={release.links} size="lg" />
					</div>
				{/if}
				{#if release.description}
					<p class="mb-3 line-clamp-2 text-sm text-foreground/70 md:text-base">
						{release.description}
					</p>
				{/if}

				<Summary {release} />
			</div>

			<ChevronRight
				class="-mr-1 h-9 w-9 shrink-0 text-muted-foreground transition-all group-hover/card:translate-x-1 group-hover/card:text-primary"
			/>
		</a>
	</div>
</div>
