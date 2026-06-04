<script lang="ts">
	import { m } from '$lib/paraglide/messages';
	import {
		Bug,
		Sparkles,
		Trash2,
		Fullscreen,
		SquarePlus,
		Link,
		TriangleAlert
	} from '@lucide/svelte/icons';
	import { Heading, Restyle, ListContainer as Ul, ListItem as Li } from '$lib/page';
	import Gallery from '$lib/gallery/Gallery.svelte';
	import { DisplayLinksButton } from '$routes/projects/links';
	import { Lister } from '$routes/projects/changelog';
	import type { Release } from '$routes/projects/core';

	interface Props {
		release: Release;
		dialogLinksOpen?: boolean;
	}

	let { release, dialogLinksOpen = $bindable(false) }: Props = $props();
</script>

<div class="grid gap-16">
	<!-- Gallery -->
	{#if release.images && release.images.length > 0}
		<Restyle
			tag="section"
			class="-mb-4 grid gap-4"
			id="screenshots"
			tintLight="oklch(54.1% 0.281 293.009)"
			tintDark="oklch(70.2% 0.183 293.541)"
		>
			<Heading level="h3" icon={Fullscreen} title={m['projects.screenshots']()} />
			<div class="-mx-4 overflow-clip bg-primary/50 pt-4 sm:rounded-4xl">
				<Gallery images={release.images} />
			</div>
			<style>
				div {
					--muted-foreground: var(--foreground);
				}
			</style>
		</Restyle>
	{/if}

	<!-- Description -->
	{#if release.description}
		<div class="prose dark:prose-invert max-w-none">
			<p class="text-lg text-foreground/90">
				{release.description}
			</p>
		</div>
	{/if}

	<!-- Links -->
	{#if release.links && release.links.length > 0}
		<Restyle
			tag="section"
			class="-mb-4 grid gap-4"
			id="links"
			tintLight="oklch(59.2% 0.249 0.584)"
			tintDark="oklch(71.8% 0.202 349.761)"
		>
			<header class="flex flex-col gap-4 sm:flex-row sm:items-center sm:gap-18">
				<Heading level="h3" icon={Link} title={m['links.title']()} />
				<DisplayLinksButton links={release.links} onclick={() => (dialogLinksOpen = true)} />
			</header>
			<Ul class="flex flex-wrap gap-x-13 gap-y-3">
				{#each release.links as { label }}
					<Li>{label}</Li>
				{/each}
			</Ul>
		</Restyle>
	{/if}

	<!-- Breaking Changes -->
	{#if release.breakingChanges && release.breakingChanges.length > 0}
		<Lister
			id="breaking_changes"
			icon={TriangleAlert}
			heading={m['changelog.breaking_changes.title']()}
			items={release.breakingChanges}
			tintLight="oklch(68.1% 0.162 75.834)"
			tintDark="oklch(85.2% 0.199 91.936)"
		/>
	{/if}

	<!-- Features -->
	{#if release.features && release.features.length > 0}
		<Lister
			id="features"
			icon={SquarePlus}
			heading={m['changelog.features.title']()}
			items={release.features}
			tintLight="oklch(62.7% 0.194 149.214)"
			tintDark="oklch(79.2% 0.209 151.711)"
		/>
	{/if}

	<!-- Improvements -->
	{#if release.improvements && release.improvements.length > 0}
		<Lister
			id="improvements"
			icon={Sparkles}
			heading={m['changelog.improvements.title']()}
			items={release.improvements}
			tintLight="oklch(54.6% 0.245 262.881)"
			tintDark="oklch(70.7% 0.165 254.624)"
		/>
	{/if}

	<!-- Bug Fixes -->
	{#if release.bugfixes && release.bugfixes.length > 0}
		<Lister
			id="bugfixes"
			icon={Bug}
			heading={m['changelog.bug_fixes.title']()}
			items={release.bugfixes}
			tintLight="oklch(64.6% 0.222 41.116)"
			tintDark="oklch(75% 0.183 55.934)"
		/>
	{/if}

	<!-- Removed Features -->
	{#if release.removals && release.removals.length > 0}
		<Lister
			id="removed"
			icon={Trash2}
			heading={m['changelog.removals.title']()}
			items={release.removals}
			tintLight="oklch(62.3% 0.234 25.406)"
			tintDark="oklch(78.1% 0.174 25.406)"
		/>
	{/if}
</div>
