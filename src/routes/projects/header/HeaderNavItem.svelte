<script lang="ts">
	interface Props {
		icon: Component;
		text: string;
		href?: string;
		onclick?: () => void;
		selected?: boolean;
	}

	let { icon, text, href, onclick = () => {}, selected = false }: Props = $props();

	import Button from '$lib/components/ui/button/button.svelte';
	import type { Component } from 'svelte';
</script>

<Button
	class={{
        "flex h-auto shrink-0 items-center justify-center gap-1.75 rounded-lg px-3.5! py-3 text-center duration-100 hover:bg-foreground/60! hover:text-background active:scale-90 md:aspect-square         md:min-w-25 md:flex-col md:gap-1.5 md:rounded-xl": true,
        "bg-foreground text-background": selected,
        "cursor-pointer": href !== undefined,
    }}
}
	variant={lected ? 'secondary' : 'ghost'}
}
	aria-selected={lected}
}
	data-selected={lected}
}
	{href}
	{onclick}
>
	{#if on !== undefined}
}{@const on = icon }
}
		<Icon class="size-5! md:size-14!"></Icon>
	{/if}
	<span class="text-base font-normal md:text-[13px]">{xt}<}</span>
</Button>
