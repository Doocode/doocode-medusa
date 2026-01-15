<script lang="ts">
    import { SpecBlock } from ".";
    import type { Component } from "svelte";
    import { formatDate } from "../projects.helpers";

    interface Props {
        icon: Component;
        title: string;
        date: Date;
    }

    let { icon, title, date }: Props = $props();

    const dateFormat: Intl.DateTimeFormatOptions = {
        year: 'numeric',
        month: 'short',
        day: 'numeric',
        weekday: 'short',
    };
</script>

<SpecBlock {icon} {title}>
    <p class="text-balance">{formatDate(date, dateFormat)}</p>
</SpecBlock>