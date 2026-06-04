<script lang="ts">
	import { GalleryItemType, type GalleryItemContent } from '../gallery';

	interface Props {
		image: GalleryItemContent;
	}

	let { image }: Props = $props();
</script>

<main class="relative flex h-full w-full items-center justify-center select-none">
	{#if image.type === GalleryItemType.Video}
		<video
			class={{
				'pointer-events-auto max-h-full max-w-full touch-none object-contain': true,
				'rounded-lg md:rounded-xl': !image.transparentBg
			}}
			src={image.src}
			title={image.alt}
			controls
			preload="metadata"
			draggable="false"
			ondragstart={(e) => e.preventDefault()}
		>
			<track kind="captions" />
		</video>
	{:else}
		<img
			class={{
				'pointer-events-auto max-h-full max-w-full object-contain': true,
				'rounded-lg md:rounded-xl': !image.transparentBg
			}}
			src={image.src}
			alt={image.alt}
			title={image.alt}
			loading="lazy"
			draggable="false"
			ondragstart={(e) => e.preventDefault()}
		/>
	{/if}
</main>
