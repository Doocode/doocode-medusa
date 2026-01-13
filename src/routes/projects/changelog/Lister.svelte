<script lang="ts">
    import type { HTMLAttributes } from "svelte/elements";
    import type { Component } from 'svelte';
    import {
        Heading, Restyle,
        ListContainer as Ul,
        ListItem as Li
    } from "$lib/page";

    interface Props extends HTMLAttributes<HTMLElement> {
        icon: Component;
        heading: string;
        items: string[];
        tintLight?: string;
        tintDark?: string;
    }

    let { icon, heading, items, tintLight, tintDark, ...restProps }: Props = $props();
</script>

<Restyle {tintLight} {tintDark}
    tag="section"
    class="grid gap-6"
    {...restProps}
>
    <Heading {icon}
        level="h3"
        title={heading}
    />

    <Ul>
        {#each items as item}
            <Li>{item}</Li>
        {/each}
    </Ul>
</Restyle>
