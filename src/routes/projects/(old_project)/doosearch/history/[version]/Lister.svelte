<script lang="ts">
    import type { Component } from 'svelte';
    import {
        Heading, Restyle,
        ListContainer as Ul,
        ListItem as Li
    } from "$lib/page";

    interface Props {
        icon: Component;
        heading: string;
        items: string[];
        tintLight?: string;
        tintDark?: string;
    }

    let { icon, heading, items, tintLight, tintDark }: Props = $props();
</script>

<Restyle {tintLight} {tintDark}
    tag="section"
    class="grid gap-6"
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
