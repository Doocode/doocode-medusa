<script lang="ts">
	import type { Component, Snippet } from "svelte";

    interface Props {
        icon: Component;
        title: string;
        children?: Snippet;
    }

    let { icon, title, children }: Props = $props();
</script>

<main class="flex flex-col justify-between items-start md:aspect-square flex-none bg-secondary md:bg-transparent rounded-2xl md:rounded-none p-4 gap-6 md:p-0 md:w-44">
    <header class="flex flex-col justify-start items-start gap-1">
        {#key icon}
            {@const Icon = icon }
            <Icon class="text-primary w-7! h-7! md:w-8! md:h-8!" strokeWidth={2.5} />
        {/key}
        <strong class="font-bold text-sm">{title}</strong>
    </header>

    <footer class="text-primary text-sm -mb-1.5 md:mb-0">
        {@render children?.()}
    </footer>
</main>