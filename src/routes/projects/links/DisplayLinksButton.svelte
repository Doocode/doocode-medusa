<script lang="ts">
	import { Link as LinkIcon, Download } from '@lucide/svelte/icons';
	import { type ProjectLink, LinkType } from '$routes/projects/core';
	import { Button } from '$lib/components/ui/button';
	import LinksBubbles from './LinksBubbles.svelte';
	import { m } from '$lib/paraglide/messages';
	import { cn } from '$lib/utils';

	interface Props {
		links: ProjectLink[];
		onclick?: () => void;
		class?: string;
	}

	let { links, onclick, class: className }: Props = $props();

	function isDownload(type: LinkType) {
		return [
			LinkType.WindowsExecutable,
			LinkType.WindowsInstaller,
			LinkType.MacOS,
			LinkType.Linux,
			LinkType.Android,
			LinkType.iOS,
			LinkType.Archive
		].includes(type);
	}

	const hasDownload = $derived(links.some((l) => isDownload(l.type)));
</script>

<Button
	variant="outline"
	{onclick}
	class={cn(
		'group relative flex h-auto min-w-70 flex-1 items-center justify-start gap-4 overflow-hidden rounded-xl border-3 border-transparent bg-input/50! py-4 text-start hover:border-primary hover:bg-primary/30! active:bg-primary/60! sm:min-w-100',
		className
	)}
	aria-label="View project links"
>
	<!-- Shine effect -->
	<div
		class="animate-shine pointer-events-none absolute inset-0 z-0 -translate-x-full"
		aria-hidden="true"
	>
		<div
			class="h-full w-1/2 skew-x-[-15deg] bg-linear-to-r from-transparent via-primary/30 to-transparent"
		></div>
	</div>

	<div class="z-10">
		<LinksBubbles {links} size="lg" />
	</div>

	<div class="sr-only z-10 sm:not-sr-only">
		<div class="mb-1 leading-none font-bold transition-colors group-hover:text-primary sm:text-lg">
			{m['links.title']()}
		</div>
		<div class="text-muted-foreground sm:text-xs">{m['actions.click_to_open']()}</div>
	</div>

	<div class="z-10 ml-auto">
		{#if hasDownload}
			<Download class="h-7! w-7!" strokeWidth={1.5} />
		{:else}
			<LinkIcon class="h-7! w-7!" strokeWidth={1.5} />
		{/if}
	</div>
</Button>

<style>
	@keyframes shine {
		0% {
			transform: translateX(-100%);
		}
		15% {
			transform: translateX(200%);
		}
		100% {
			transform: translateX(200%);
		}
	}
	.animate-shine {
		animation: shine 10s cubic-bezier(0.4, 0, 0.2, 1) infinite;
		contain: strict;
	}
</style>
