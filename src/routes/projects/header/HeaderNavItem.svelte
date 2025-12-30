<script lang="ts">
    interface Props {
        icon: Component;
        text: string;
        href?: string;
        onclick?: () => void;
        selected?: boolean;
    }

    let {
        icon, text, href,
        onclick = () => {},
        selected = false
    }: Props = $props();

    import Button from '$lib/components/ui/button/button.svelte';
    import type { Component } from 'svelte';
</script>

<Button
    class={{
        "h-auto flex md:flex-col items-center justify-center text-center gap-1 md:gap-0.75 md:min-w-25 rounded-full md:rounded-2xl duration-150 \
        hover:bg-foreground/60! hover:text-background hover:scale-105 active:scale-90": true,
        "text-background bg-foreground": selected,
        "cursor-pointer": href !== undefined,
    }}
    variant={selected ? 'secondary' : 'ghost'}
    aria-selected={selected}
    {href} {onclick}
>
    {#if icon !== undefined}
        {@const Icon = icon }
        <Icon class="w-5! h-5! md:w-16! md:h-16!" />
    {/if}
    <span class="font-normal md:text-[13px]">{text}</span>
</Button>