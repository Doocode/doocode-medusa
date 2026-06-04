<script lang="ts">
	import { m } from '$lib/paraglide/messages';
	import { scale, slide } from 'svelte/transition';
	import { Button } from '$lib/components/ui/button';
	import { Captions, CaptionsOff } from '@lucide/svelte';

	interface Props {
		open?: boolean;
		caption?: string;
		description?: string;
	}

	let { open = $bindable(false), caption = '', description = '' }: Props = $props();
</script>

{#if open}
	<div
		class="fixed -top-px right-0 left-0 z-60 flex max-w-125
        flex-col rounded-b-xl border border-border/50 bg-background/70 px-5 pt-20 pb-3 backdrop-blur-2xl
        md:right-auto md:left-4 md:min-w-60 md:rounded-b-2xl md:px-4
        md:pt-24 dark:bg-primary/20
    "
		transition:slide|global
	>
		<strong class="text-sm font-black text-primary md:text-base lg:text-lg">{caption}</strong>
		{#if description}
			<div class="mt-2 mb-3 h-1 w-16 shrink-0 rounded-full bg-primary"></div>
			<p class="pb-1 text-sm md:max-w-[60vw] md:text-base">
				{description}
			</p>
		{/if}
	</div>
{/if}

<div class="fixed top-4 left-4 z-60 md:top-8 md:left-8" transition:scale>
	<Button
		variant="outline"
		size="icon"
		onclick={() => (open = !open)}
		class="h-12 w-12 backdrop-blur-2xl hover:scale-120 active:scale-90"
		title={m['slideshow.toggle_captions']()}
	>
		{#if open}
			<Captions class="h-7! w-7!" strokeWidth={1.75} />
		{:else}
			<CaptionsOff class="h-7! w-7!" strokeWidth={1.75} />
		{/if}
	</Button>
</div>
