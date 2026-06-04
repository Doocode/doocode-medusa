<script lang="ts">
	import { Button } from '$lib/components/ui/button';
	import { m } from '$lib/paraglide/messages';
	import { Download } from '@lucide/svelte';
	import { slide } from 'svelte/transition';

	interface Props {
		index: number;
		total: number;
		url: string;
	}

	let { index, total, url }: Props = $props();

	async function downloadImage() {
		try {
			const response = await fetch(url);
			const blob = await response.blob();
			const blobUrl = URL.createObjectURL(blob);

			const link = document.createElement('a');
			link.href = blobUrl;
			link.download = url.split('/').pop() || 'image';
			document.body.appendChild(link);
			link.click();
			document.body.removeChild(link);

			URL.revokeObjectURL(blobUrl);
		} catch (error) {
			window.open(url, '_blank');
		}
	}
</script>

<footer
	class="pointer-events-none fixed right-0 bottom-0 left-0 z-50 flex items-end justify-between p-4 md:p-8"
	transition:slide|global
>
	<div class="flex flex-1 justify-start">
		<!-- TODO: Replace with bullets or progress bar -->
		<div
			class="pointer-events-auto rounded-lg bg-slate-500/50 px-3 py-1.5 text-white backdrop-blur-2xl"
		>
			<span class="font-black">{index + 1}</span> / {total}
		</div>
	</div>

	<nav class="flex flex-1 justify-end">
		<Button
			size="icon"
			variant="secondary"
			onclick={downloadImage}
			class="pointer-events-auto h-12 w-12 hover:scale-120 active:scale-90"
			title={m['slideshow.download_image']()}
		>
			<Download class="h-6! w-6!" strokeWidth={2} />
		</Button>
	</nav>
</footer>
