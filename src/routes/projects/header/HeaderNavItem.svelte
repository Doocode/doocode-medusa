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
        "h-auto flex md:flex-col items-center justify-center text-center gap-1 md:gap-1.5 md:min-w-25 rounded-full md:rounded-xl md:aspect-square duration-100 \
        hover:bg-foreground/60! hover:text-background active:scale-90": true,
        "text-background bg-foreground": selected,
        "cursor-pointer": href !== undefined,
    }}
    variant={selected ? 'secondary' : 'ghost'}
    aria-selected={selected}
    {href} {onclick}
>
    {#if icon !== undefined}
        {@const Icon = icon }
        <Icon class="w-5! h-5! md:w-14! md:h-14!" />
    {/if}
    <span class="font-normal md:text-[13px]">{text}</span>
</Button>