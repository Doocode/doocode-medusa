<script lang="ts">
	import type { Component, Snippet } from "svelte";

    interface Props {
        icon: Component;
        title: string;
        children?: Snippet;
    }

    let { icon, title, children }: Props = $props();
</script>

<main class="flex flex-col justify-between items-start bg-secondary/60 rounded-2xl md:rounded-3xl p-4 md:p-6 aspect-square flex-none w-40 md:w-44">
    <header class="flex flex-col justify-start items-start gap-1">
        {#key icon}
            {@const Icon = icon }
            <Icon class="text-primary w-7! h-7! md:w-8! md:h-8!" strokeWidth={2.5} />
        {/key}
        <strong class="font-bold text-sm">{title}</strong>
    </header>

    <footer class="text-primary -mb-1">
        {@render children?.()}
    </footer>
</main>