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
        "h-auto flex flex-col items-center justify-center text-center gap-0.75 rounded-2xl duration-150 \
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
        <Icon class="w-16! h-16!" strokeWidth={1.5} />
    {/if}
    <span class="font-normal text-[13px]">{text}</span>
</Button>