<script lang="ts">
	import { m } from '$lib/paraglide/messages';
	import { Clapperboard, Image } from '@lucide/svelte/icons';

	interface Props {
		imageCount?: number;
		videoCount?: number;
	}

	let { imageCount = 0, videoCount = 0 }: Props = $props();
</script>

<div class="flex gap-6">
	{#if imageCount > 0}
		<div
			class="flex items-center gap-1 text-muted-foreground"
			title={m['gallery.count_images']({ count: imageCount })}
		>
			<span class="text-2xl font-thin">
				{imageCount}
			</span>
			<Image size={24} strokeWidth={1.75} />
		</div>
	{/if}
	{#if videoCount > 0}
		<div
			class="flex items-center gap-1 text-muted-foreground"
			title={m['gallery.count_videos']({ count: videoCount })}
		>
			<span class="text-2xl font-thin">
				{videoCount}
			</span>
			<Clapperboard size={24} strokeWidth={1.75} />
		</div>
	{/if}
</div>
