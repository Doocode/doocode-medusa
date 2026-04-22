<script lang="ts">
	import { ReleaseTypeBadge, Summary } from '..';
	import { Package, ChevronRight } from '@lucide/svelte/icons';
	import type { Release } from '$routes/projects/projects.types';
	import { LinksBubbles } from '$routes/projects/links';
	import { formatDate, getRelativeTime } from '../../projects.helpers';

	interface Props {
		release: Release;
	}

	let { release }: Props = $props();
</script>

{#snippet header(size: 'small' | 'large')}
	<header class="mb-2 flex flex-wrap items-center gap-3">
		<h3 class="{size === 'small' ? 'text-xl' : 'text-2xl'} flex items-center gap-2 font-bold">
			<Package class="{size === 'small' ? 'h-5 w-5' : 'h-6 w-6'} text-primary" />
			{release.versionString}
		</h3>
		{#if release.type}
			<ReleaseTypeBadge type={release.type} />
		{/if}
	</header>
{/snippet}

{#snippet description(size: 'small' | 'large')}
	{#if release.links && release.links.length > 0}
		<div class="mt-4 mb-2">
			<LinksBubbles links={release.links} size="lg" />
		</div>
	{/if}
	{#if release.description}
		<p class="{size === 'small' ? 'text-sm' : 'text-base'} mb-3 line-clamp-2 text-foreground/70">
			{release.description}
		</p>
	{/if}
{/snippet}

{#snippet arrow()}
	<ChevronRight
		class="-mr-1 h-9 w-9 shrink-0 text-muted-foreground transition-all group-hover:translate-x-1 group-hover:text-primary group-hover/content:translate-x-1 group-hover/content:text-primary"
	/>
{/snippet}

<a
	href="/projects/doosearch/history/{release.versionString}"
	class="group block rounded-xl border-3 border-secondary bg-background
        p-6 transition-all
        duration-200 hover:border-primary
        md:rounded-none
        md:border-0
        md:bg-transparent md:p-0 dark:hover:border-primary"
>
	<!-- Mobile layout -->
	<div class="flex items-start justify-between gap-4 md:hidden">
		<div class="min-w-0 flex-1">
			{@render header('small')}

			<!-- Date -->
			<time class="mb-3 block text-sm text-muted-foreground">
				{formatDate(release.releaseDate)}
			</time>

			{@render description('small')}

			<Summary {release} />
		</div>

		{@render arrow()}
	</div>

	<!-- Desktop timeline layout -->
	<div class="hidden md:flex md:gap-6">
		<!-- Left: Date section (150px fixed) -->
		<div class="hidden w-25 shrink-0 pt-1 text-right text-balance md:block">
			<div class="mb-2 text-xs font-bold text-primary">
				{getRelativeTime(release.releaseDate)}
			</div>
			<time class="font-base mt-5 block text-base leading-tight text-foreground">
				{formatDate(release.releaseDate, {
					weekday: 'long',
					year: 'numeric',
					month: 'long',
					day: 'numeric'
				})}
			</time>
		</div>

		<!-- Center: Timeline -->
		<div class="relative flex flex-col items-center">
			<!-- Timeline dot -->
			<div class="z-10 mt-1 h-4 w-4 rounded-full bg-primary"></div>
			<!-- Timeline line -->
			<div class="mt-2 w-0.5 flex-1 bg-border"></div>
		</div>

		<!-- Right: Content -->
		<div class="group/content min-w-0 flex-1 pb-8">
			<div
				class="flex gap-4 rounded-xl border-3
                border-secondary bg-background
                p-6 transition-all duration-200
                group-hover:border-primary dark:group-hover:border-primary"
			>
				<div class="min-w-0 flex-1">
					{@render header('large')}

					{@render description('large')}

					<Summary {release} />
				</div>

				{@render arrow()}
			</div>
		</div>
	</div>
</a>
