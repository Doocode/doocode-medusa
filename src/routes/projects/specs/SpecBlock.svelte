<script lang="ts">
	import type { Component, Snippet } from 'svelte';

	interface Props {
		icon: Component;
		title: string;
		children?: Snippet;
	}

	let { icon, title, children }: Props = $props();
</script>

<main
	class="spec-block relative flex aspect-square flex-none flex-col items-start justify-between border-r lg:aspect-4/3 xl:aspect-video"
>
	<header class="flex flex-col items-start justify-start gap-1">
		{#key icon}
			{@const Icon = icon}
			<Icon class="h-7! w-7! text-primary md:h-8! md:w-8!" strokeWidth={2.5} />
		{/key}
		<strong class="text-sm font-bold">{title}</strong>
	</header>

	<footer class="-mb-1.5 text-sm text-primary md:mb-0">
		{@render children?.()}
	</footer>
</main>
