<script lang="ts">
	import { m } from '$lib/paraglide/messages';
	import { Button } from '$lib/components/ui/button';
	import { type Release } from '$routes/projects/projects.types';
	import { formatDate, getRelativeTime } from '$routes/projects/projects.helpers';
	import { ReleaseTypeBadge, SideNavigation, Summary } from '$routes/projects/changelog';
	import { ArrowLeft } from '@lucide/svelte/icons';

	interface Props {
		release: Release;
		returnUrl?: string;
	}

	let { release, returnUrl }: Props = $props();
</script>

<aside class="top-8 grid gap-x-8 gap-y-4 self-start sm:grid-cols-2 lg:sticky lg:grid-cols-1">
	<header class="grid gap-y-4">
		<div class="mb-8 flex">
			<Button variant="outline" href={returnUrl} class="gap-2">
				<ArrowLeft class="h-5! w-5!" />
				{m['projects.history.back_to_history']()}
			</Button>
		</div>

		<div class="flex flex-wrap items-end gap-3">
			<h2
				class={{
					'text-primary': true,
					'text-6xl': release.versionString.length <= 6,
					'text-4xl': release.versionString.length > 6
				}}
			>
				{release.versionString}
			</h2>
			{#if release.type}
				<div class="pb-2">
					<ReleaseTypeBadge type={release.type} />
				</div>
			{/if}
		</div>
		<time class="block text-sm text-balance text-muted-foreground md:text-base">
			{m['status.released_on.value']({ date: formatDate(release.releaseDate) })} - {getRelativeTime(
				release.releaseDate
			)}
		</time>

		<Summary {release} hideLabel />
	</header>

	<SideNavigation {release} />
</aside>
