<script lang="ts">
	import type { Component } from "svelte";
	import { SpecBlock } from ".";

    interface Props {
        icon: Component;
        title: string;
        versionName: string;
    }

    let { icon, title, versionName }: Props = $props();

    let splitVersion = $derived(versionName.split('.'));
    let major = $derived(splitVersion[0] || '0');
    let minor = $derived(splitVersion[1] || '0');
    let patch = $derived(splitVersion[2] || '0');
</script>

<SpecBlock {icon} {title}>
    <p class="text-3xl text-foreground capitalize [&_span]:font-bold font-mono">
        <span class="text-chart-1">{major}</span>.<span class="text-chart-2">{minor}</span>.<span class="text-chart-3">{patch}</span>
    </p>
</SpecBlock>