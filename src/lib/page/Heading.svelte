<script lang="ts">
    import { cn } from "$lib/utils.js";
    import type { Component } from "svelte";

    interface Props {
        icon?: Component;
        title?: string;
        level?: 'h1' | 'h2' | 'h3' |'h4' | 'h5' | 'h6';
        class?: string;
    }

    let {
        icon,
        title = "Lorem ipsum",
        level = 'h1',
        class: className,
        ...restProps
    }: Props = $props();
</script>

<svelte:element this={level}
    class={cn("flex flex-col justify-start items-start font-black", className)}
    {...restProps}
>
    {#if icon}
        {@const Icon = icon }
        <Icon class={{
            "text-primary": true,
            'w-18! h-18! mb-2 -mx-1.5': level === 'h1',
            'w-16! h-16! mb-2 -mx-1': level === 'h2',
            'w-14! h-14! mb-2 -mx-0.5': level === 'h3',
            'w-12! h-12! mb-2 -mx-0.5': level === 'h4',
            'w-10! h-10! mb-2 -mx-0.5': level === 'h5',
            'w-8! h-8! mb-2 -mx-px': level === 'h6',
        }} />
    {/if}

    <span class={{
        'text-4xl': level === 'h1',
        'text-3xl': level === 'h2',
        'text-2xl': level === 'h3',
        'text-xl': level === 'h4',
        'text-lg': level === 'h5',
        'text-base': level === 'h6',
    }}>{title}</span>
</svelte:element>