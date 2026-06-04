<script lang="ts">
	import type { GalleryItemContent } from '../gallery';
	import { GalleryItemType } from '../gallery';
	import { cn } from '$lib/utils';
	import { fade } from 'svelte/transition';

	interface Props {
		images: GalleryItemContent[];
		currentIndex: number;
		onSelect: (index: number) => void;
	}

	let { images, currentIndex, onSelect }: Props = $props();

	let scrollContainer: HTMLDivElement;

	$effect(() => {
		if (scrollContainer && currentIndex >= 0) {
			const selectedElement = scrollContainer.children[currentIndex] as HTMLElement;
			if (selectedElement) {
				const containerWidth = scrollContainer.clientWidth;
				const elementLeft = selectedElement.offsetLeft;
				const elementWidth = selectedElement.clientWidth;

				// Center the selected element
				scrollContainer.scrollTo({
					left: elementLeft - containerWidth / 2 + elementWidth / 2,
					behavior: 'smooth'
				});
			}
		}
	});
</script>

<div
	class="pointer-events-none fixed right-0 bottom-16 left-0 z-60 flex justify-center px-4"
	transition:fade
>
	<div
		bind:this={scrollContainer}
		class="hide-scrollbar pointer-events-auto flex max-w-full gap-2 overflow-x-auto rounded-xl bg-black/50 p-3 backdrop-blur-md"
	>
		{#each images as image, i}
			<button
				class={cn(
					'relative h-12 shrink-0 overflow-hidden transition-all duration-200 ease-out md:h-16',
					i === currentIndex
						? 'rounded-sm ring-2 ring-white brightness-100'
						: 'rounded-sm brightness-80 hover:brightness-50'
				)}
				onclick={() => onSelect(i)}
				aria-label={`Go to slide ${i + 1}`}
			>
				{#if image.type === GalleryItemType.Video}
					<video
						src={image.src}
						class="pointer-events-none h-full w-auto max-w-none"
						preload="metadata"
						muted
					></video>
				{:else}
					<img
						src={image.src}
						alt={image.alt}
						class="pointer-events-none h-full w-auto max-w-none"
						loading="lazy"
					/>
				{/if}
			</button>
		{/each}
	</div>
</div>

<style>
	.hide-scrollbar {
		scrollbar-width: none;
		-ms-overflow-style: none;
	}
	.hide-scrollbar::-webkit-scrollbar {
		display: none;
	}
</style>
