<script lang="ts">
	import { cn } from '$lib/utils.js';
	import { GalleryCounter, GalleryNavigation } from '.';

	interface Props {
		class?: string;
		canScrollLeft?: boolean;
		canScrollRight?: boolean;
		onScrollBackward: (event: MouseEvent) => void;
		onScrollForward: (event: MouseEvent) => void;
		imageCount?: number;
		videoCount?: number;
	}

	let {
		class: className,
		canScrollLeft = false,
		canScrollRight = true,
		onScrollBackward,
		onScrollForward,
		imageCount = 0,
		videoCount = 0
	}: Props = $props();
</script>

<header class={cn('flex items-center justify-between px-4', className)}>
	<GalleryNavigation {canScrollLeft} {canScrollRight} {onScrollBackward} {onScrollForward} />
	<GalleryCounter {imageCount} {videoCount} />
</header>
