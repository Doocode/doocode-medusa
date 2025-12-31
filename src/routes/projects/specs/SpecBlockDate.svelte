<script lang="ts">
    import { getLocale } from "$lib/paraglide/runtime";
	import type { Component } from "svelte";
	import { SpecBlock } from ".";

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

    let formattedDate = $derived.by(() => {
        const dateStr = date.toLocaleDateString(getLocale(), dateFormat);
        return dateStr.charAt(0).toUpperCase() + dateStr.slice(1);
    });
</script>

<SpecBlock {icon} {title}>
    <p>{formattedDate}</p>
</SpecBlock>