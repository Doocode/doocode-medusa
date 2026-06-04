<script lang="ts">
	import { buttonVariants } from '$lib/components/ui/button';
	import { type ProjectLink, LinkType } from '$routes/projects/core';
	import {
		Github,
		Globe,
		BookOpen,
		Scale,
		AppWindow,
		Command,
		Terminal,
		Smartphone,
		Puzzle,
		Archive,
		Link as LinkIcon,
		Download,
		ExternalLink
	} from '@lucide/svelte';
	import type { Component } from 'svelte';
	import { getRelativeTime } from '../projects.helpers';
	import { m } from '$lib/paraglide/messages';

	interface Props {
		link: ProjectLink;
		display?: 'list' | 'grid';
	}

	let { link, display = 'list' }: Props = $props();

	const icons: Record<string, Component> = {
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
		[LinkType.Archive]: Archive,
		[LinkType.Other]: LinkIcon
	};

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

	function formatUrl(url: string) {
		try {
			const u = new URL(url);
			let path = u.pathname + u.search + u.hash;
			if (path.length > 20) {
				path = path.slice(0, 8) + '...' + path.slice(-8);
			}
			if (path === '/') path = '';

			return {
				hostname: u.hostname,
				path,
				valid: true
			};
		} catch {
			return { hostname: url, path: '', valid: false };
		}
	}

	const typeColors: Record<string, { bg: string; text: string; hover: string }> = {
		[LinkType.WindowsExecutable]: {
			bg: 'bg-blue-600 dark:bg-blue-500 text-white',
			text: 'text-blue-600 dark:text-blue-400',
			hover: 'group-hover:text-blue-600 dark:group-hover:text-blue-400'
		},
		[LinkType.WindowsInstaller]: {
			bg: 'bg-emerald-600 dark:bg-emerald-500 text-white',
			text: 'text-emerald-600 dark:text-emerald-400',
			hover: 'group-hover:text-emerald-600 dark:group-hover:text-emerald-400'
		},
		[LinkType.Android]: {
			bg: 'bg-emerald-500 dark:bg-emerald-400 text-white dark:text-emerald-950',
			text: 'text-emerald-600 dark:text-emerald-400',
			hover: 'group-hover:text-emerald-600 dark:group-hover:text-emerald-400'
		},
		[LinkType.MacOS]: {
			bg: 'bg-zinc-800 dark:bg-zinc-200 text-white dark:text-zinc-900',
			text: 'text-zinc-800 dark:text-zinc-200',
			hover: 'group-hover:text-zinc-800 dark:group-hover:text-zinc-200'
		},
		[LinkType.iOS]: {
			bg: 'bg-sky-500 dark:bg-sky-400 text-white dark:text-sky-950',
			text: 'text-sky-600 dark:text-sky-400',
			hover: 'group-hover:text-sky-600 dark:group-hover:text-sky-400'
		},
		[LinkType.Repository]: {
			bg: 'bg-neutral-800 dark:bg-neutral-200 text-white dark:text-neutral-900',
			text: 'text-neutral-800 dark:text-neutral-200',
			hover: 'group-hover:text-neutral-800 dark:group-hover:text-neutral-200'
		},
		[LinkType.Linux]: {
			bg: 'bg-orange-500 dark:bg-orange-400 text-white dark:text-orange-950',
			text: 'text-orange-600 dark:text-orange-400',
			hover: 'group-hover:text-orange-600 dark:group-hover:text-orange-400'
		},
		[LinkType.WebExtension]: {
			bg: 'bg-purple-600 dark:bg-purple-500 text-white',
			text: 'text-purple-600 dark:text-purple-400',
			hover: 'group-hover:text-purple-600 dark:group-hover:text-purple-400'
		},
		[LinkType.Archive]: {
			bg: 'bg-yellow-600 dark:bg-yellow-500 text-white dark:text-yellow-950',
			text: 'text-yellow-700 dark:text-yellow-400',
			hover: 'group-hover:text-yellow-700 dark:group-hover:text-yellow-400'
		},
		[LinkType.Website]: {
			bg: 'bg-indigo-600 dark:bg-indigo-500 text-white',
			text: 'text-indigo-600 dark:text-indigo-400',
			hover: 'group-hover:text-indigo-600 dark:group-hover:text-indigo-400'
		},
		[LinkType.Documentation]: {
			bg: 'bg-teal-600 dark:bg-teal-500 text-white',
			text: 'text-teal-600 dark:text-teal-400',
			hover: 'group-hover:text-teal-600 dark:group-hover:text-teal-400'
		},
		[LinkType.License]: {
			bg: 'bg-slate-600 dark:bg-slate-500 text-white',
			text: 'text-slate-600 dark:text-slate-400',
			hover: 'group-hover:text-slate-600 dark:group-hover:text-slate-400'
		}
	};

	let Icon = $derived(icons[link.type] || LinkIcon);
	let isDl = $derived(isDownload(link.type));
	let urlInfo = $derived(formatUrl(link.url));
	let colors = $derived(
		typeColors[link.type] || {
			bg: 'bg-primary text-primary-foreground',
			text: 'text-primary',
			hover: 'group-hover:text-primary'
		}
	);
</script>

<a
	href={link.url}
	target="_blank"
	rel="noopener noreferrer"
	class={buttonVariants({
		variant: 'outline',
		class:
			display === 'list'
				? 'group h-auto w-full justify-between overflow-hidden rounded-2xl px-4 py-3'
				: 'group relative h-auto w-full flex-col gap-3 rounded-3xl px-4 py-6'
	})}
>
	{#if display === 'list'}
		<div class="flex min-w-0 flex-1 items-center gap-4">
			<div class="shrink-0 rounded-lg p-2 transition-colors sm:p-3 {colors.bg}">
				<Icon class="size-6 sm:size-8" />
			</div>
			<div class="flex min-w-0 flex-1 flex-col items-start gap-0.5 text-left">
				<span class="w-full truncate text-sm font-semibold transition-colors {colors.text}"
					>{link.label || link.type}</span
				>
				<div class="w-full overflow-hidden text-xs font-normal whitespace-nowrap opacity-80">
					{#if urlInfo.valid}
						<span class="font-medium">{urlInfo.hostname}</span>
					{:else}
						<span class="block truncate">{link.url}</span>
					{/if}
				</div>
				{#if link.updatedOn || link.createdOn}
					{@const time = getRelativeTime(new Date(link.updatedOn || link.createdOn!))}
					{@const label = link.updatedOn
						? m['status.updated_on.relative_time']({ time })
						: m['status.added_on.relative_time']({ time })}
					<span class="hidden pt-0.5 text-[10px] text-muted-foreground sm:block">
						{label}
					</span>
				{/if}
			</div>
		</div>
		{#if isDl}
			<Download class="ml-2 size-4 shrink-0 transition-colors {colors.hover}" />
		{:else}
			<ExternalLink class="ml-2 size-4 shrink-0 transition-colors {colors.hover}" />
		{/if}
	{:else}
		<!-- Grid Variant -->
		<div class="rounded-2xl p-4 transition-colors {colors.bg}">
			<Icon class="size-10" />
		</div>
		<div class="flex w-full min-w-0 flex-col items-center gap-1 text-center">
			<span class="text-md w-full px-2 leading-tight font-bold transition-colors {colors.text}"
				>{link.label || link.type}</span
			>
			<div class="w-full truncate px-2 text-xs text-muted-foreground opacity-80">
				{#if urlInfo.valid}
					{urlInfo.hostname}
				{:else}
					{link.url}
				{/if}
			</div>
		</div>

		<div class="absolute top-3 right-3 transition-colors {colors.hover}">
			{#if isDl}
				<Download class="size-4" />
			{:else}
				<ExternalLink class="size-4" />
			{/if}
		</div>
	{/if}
</a>
