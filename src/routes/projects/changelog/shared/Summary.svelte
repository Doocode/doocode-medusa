<script lang="ts">
	import { m } from '$lib/paraglide/messages';
	import SummaryCount from './SummaryCount.svelte';
	import type { Release } from '$routes/projects/projects.types';

	interface Props {
		release: Release;
		hideLabel?: boolean;
	}

	let { release, hideLabel = false }: Props = $props();
</script>

<div
	class={{
		'flex flex-wrap': true,
		'gap-3': hideLabel,
		'gap-x-6 gap-y-2': !hideLabel
	}}
>
	{#if release.breakingChanges?.length}
		<SummaryCount
			{hideLabel}
			type="breaking_changes"
			count={release.breakingChanges.length}
			label={m['changelog.breaking_changes.title']()}
			title={m['changelog.breaking_changes.count_items']({ count: release.breakingChanges.length })}
		/>
	{/if}
	{#if release.features?.length}
		<SummaryCount
			{hideLabel}
			type="features"
			count={release.features.length}
			label={m['changelog.features.title']()}
			title={m['changelog.features.count_items']({ count: release.features.length })}
		/>
	{/if}
	{#if release.improvements?.length}
		<SummaryCount
			{hideLabel}
			type="improvements"
			count={release.improvements.length}
			label={m['changelog.improvements.title']()}
			title={m['changelog.improvements.count_items']({ count: release.improvements.length })}
		/>
	{/if}
	{#if release.bugfixes?.length}
		<SummaryCount
			{hideLabel}
			type="bugfixes"
			count={release.bugfixes.length}
			label={m['changelog.bug_fixes.title']()}
			title={m['changelog.bug_fixes.count_items']({ count: release.bugfixes.length })}
		/>
	{/if}
	{#if release.removals?.length}
		<SummaryCount
			{hideLabel}
			type="removed"
			count={release.removals.length}
			label={m['changelog.removals.title']()}
			title={m['changelog.removals.count_items']({ count: release.removals.length })}
		/>
	{/if}
	{#if release.links?.length}
		<SummaryCount
			{hideLabel}
			type="links"
			count={release.links.length}
			label={m['links.title']()}
			title={m['links.count_items']({ count: release.links.length })}
		/>
	{/if}
	{#if release.images?.length}
		<SummaryCount
			{hideLabel}
			type="screenshots"
			count={release.images.length}
			label={m['changelog.screenshots.title']()}
			title={m['changelog.screenshots.count_items']({ count: release.images.length })}
		/>
	{/if}
</div>
