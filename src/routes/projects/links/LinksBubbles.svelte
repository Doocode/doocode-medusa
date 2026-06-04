<script lang="ts">
	import {
		Globe,
		Github,
		BookOpen,
		Scale,
		AppWindow,
		Command,
		Terminal,
		Smartphone,
		Puzzle,
		Package,
		Link as LinkIcon
	} from '@lucide/svelte/icons';
	import { LinkType, type ProjectLink } from '$routes/projects/core';
	import { cn } from '$lib/utils';

	interface Props {
		links: ProjectLink[];
		max?: number;
		size?: 'sm' | 'md' | 'lg';
		class?: string;
	}

	let { links, max = 3, size = 'md', class: className }: Props = $props();

	const linkIcons = {
		[LinkType.Website]: Globe,
		[LinkType.Repository]: Github,
		[LinkType.Documentation]: BookOpen,
		[LinkType.License]: Scale,
		[LinkType.WindowsExecutable]: AppWindow,
		[LinkType.WindowsInstaller]: AppWindow,
		[LinkType.MacOS]: Command,
		[LinkType.Linux]: Terminal,
		[LinkType.Android]: Smartphone,
		[LinkType.iOS]: Smartphone,
		[LinkType.WebExtension]: Puzzle,
		[LinkType.Archive]: Package,
		[LinkType.Other]: LinkIcon
	};

	const linksDetails = $derived(
		links
			? links.map((l) => ({
					icon: linkIcons[l.type] || LinkIcon,
					label: l.label || l.type
				}))
			: []
	);

	const visibleLinks = $derived(linksDetails.slice(0, max));
	const remainingCount = $derived(Math.max(0, linksDetails.length - max));

	const sizeClasses = {
		sm: {
			container: '-space-x-2',
			bubble: 'w-8 h-8 p-1.5',
			icon: 'w-4! h-4!',
			text: 'text-xs'
		},
		md: {
			container: '-space-x-2.5',
			bubble: 'w-10 h-10 p-2',
			icon: 'w-5! h-5!',
			text: 'text-xs'
		},
		lg: {
			container: '-space-x-3',
			bubble: 'w-12 h-12 p-2',
			icon: 'w-6! h-6!',
			text: 'text-sm'
		}
	};

	let s = $derived(sizeClasses[size]);
</script>

<div class={cn('isolate flex', s.container, className)}>
	{#each visibleLinks as link, i}
		<div
			class={cn(
				'relative flex items-center justify-center rounded-full border-2 border-background bg-primary text-primary-foreground shadow-sm',
				s.bubble
			)}
			style="z-index: {10 - i}"
		>
			<link.icon class={s.icon} />
		</div>
	{/each}
	{#if remainingCount > 0}
		<div
			class={cn(
				'relative flex items-center justify-center rounded-full border-2 border-background bg-muted font-bold text-muted-foreground shadow-sm',
				s.bubble,
				s.text
			)}
			style="z-index: 0"
		>
			+{remainingCount}
		</div>
	{/if}
</div>
