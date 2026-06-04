<script lang="ts">
	import { GalleryItemType, type GalleryItemContent } from '.';
	import { Play } from '@lucide/svelte/icons';

	interface Props {
		item: GalleryItemContent;
		size?: 'small' | 'medium' | 'large';
		onclick: (event: MouseEvent) => void;
	}

	let { item, size = 'medium', onclick }: Props = $props();
</script>

<a
	class={{
		'group relative shrink-0 rounded-xl p-1.5 active:scale-110 md:rounded-2xl md:p-2': true,
		'bg-slate-300 duration-150 hover:bg-primary dark:bg-slate-700 dark:hover:bg-primary':
			!item.transparentBg,
		'bg-checkerboard duration-200 hover:bg-size-[2.5rem_2.5rem]!': item.transparentBg
	}}
	href={item.src}
	role="button"
	tabindex="0"
	target="_blank"
	{onclick}
	ondragstart={(e) => e.preventDefault()}
>
	{#if item.type === GalleryItemType.Video}
		<video
			src={item.src}
			title={item.alt}
			class={{
				'object-contain duration-200': true,
				'h-32': size === 'small',
				'h-39.75': size === 'medium',
				'h-39.75 md:h-64': size === 'large'
			}}
			class:rounded-lg={!item.transparentBg}
			muted
			preload="metadata"
			draggable="false"
		>
		</video>

		<div class="pointer-events-none absolute inset-0 flex items-center justify-center">
			<div
				class="rounded-full bg-black/50 p-3 backdrop-blur-sm duration-150 group-hover:bg-black md:p-4"
			>
				<Play class="h-6 w-6 fill-white text-white md:h-8 md:w-8" />
			</div>
		</div>
	{:else}
		<img
			src={item.src}
			alt={item.alt}
			title={item.alt}
			class={{
				'object-contain duration-200': true,
				'h-32': size === 'small',
				'h-39.75': size === 'medium',
				'h-39.75 md:h-64': size === 'large'
			}}
			class:rounded-lg={!item.transparentBg}
			loading="lazy"
			draggable="false"
		/>
	{/if}
</a>

<style>
	.bg-checkerboard {
		--color-1: #dce2e9;
		--color-2: #b0bbc9;

		background: repeating-conic-gradient(var(--color-1) 0 25%, var(--color-2) 0 50%) 50% / 2rem 2rem;
		background-position: center;
	}

	.bg-checkerboard:hover img {
		transform: scale(0.9);
	}

	:root.dark .bg-checkerboard {
		--color-1: #5e6876;
		--color-2: #314158;
	}
</style>
