<script lang="ts">
	import { Button } from '$lib/components/ui/button';
	import { m } from '$lib/paraglide/messages';
	import { X, Maximize2, Minimize2 } from '@lucide/svelte';
	import { scale } from 'svelte/transition';

	interface Props {
		onClose: () => void;
	}

	let { onClose }: Props = $props();

	let isFullscreen = $state(false);

	function toggleFullscreen() {
		if (!document.fullscreenElement) {
			document.documentElement.requestFullscreen();
		} else {
			document.exitFullscreen();
		}
	}

	$effect(() => {
		const onFullscreenChange = () => {
			isFullscreen = !!document.fullscreenElement;
		};

		document.addEventListener('fullscreenchange', onFullscreenChange);
		return () => document.removeEventListener('fullscreenchange', onFullscreenChange);
	});
</script>

<header
	class="pointer-events-none fixed top-0 right-0 left-0 z-70 flex items-start justify-between p-4 md:p-6"
>
	<div class="flex flex-1 justify-start"></div>

	<nav class="flex justify-end gap-2" transition:scale|global={{ duration: 350 }}>
		<Button
			size="icon"
			variant="outline"
			onclick={toggleFullscreen}
			class="pointer-events-auto h-12 w-12 rounded-lg backdrop-blur-2xl hover:scale-120 active:scale-90"
			title={isFullscreen ? m['actions.fullscreen.exit']() : m['actions.fullscreen.enable']()}
		>
			{#if isFullscreen}
				<Minimize2 class="h-6! w-6!" strokeWidth={2} />
			{:else}
				<Maximize2 class="h-6! w-6!" strokeWidth={2} />
			{/if}
		</Button>

		<Button
			size="icon"
			variant="destructive"
			onclick={onClose}
			class="pointer-events-auto h-12 w-12 rounded-lg backdrop-blur-2xl hover:scale-120 active:scale-90"
			title={m['slideshow.close']()}
		>
			<X class="h-8! w-8!" strokeWidth={2} />
		</Button>
	</nav>
</header>
