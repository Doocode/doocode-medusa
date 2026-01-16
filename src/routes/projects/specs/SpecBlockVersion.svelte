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
    <p class="text-foreground [&_span]:font-bold font-mono">
        <span class="text-chart-1 text-4xl">{major}</span>.<span class="text-chart-2 text-3xl">{minor}</span>.<span class="text-chart-3 text-2xl">{patch}</span>
    </p>
</SpecBlock>