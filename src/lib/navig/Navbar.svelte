<script>
    import Button from "$lib/components/ui/button/button.svelte";
    import MenuIcon from "@lucide/svelte/icons/menu";
    import { fade } from "svelte/transition";
    import NavTools from "./tools/NavTools.svelte";

    let displayTools = $state(false);
</script>

<header class="bg-primary text-primary-foreground text-center flex items-center justify-between px-1.5">
    <Button variant="secondary" size="icon" class="h-11.25 w-11.25">
        <MenuIcon class="h-6! w-6!" />
    </Button>

    {#if !displayTools}
        <h1 transition:fade={{ duration: 100 }}>
            <a href="/" class="font-black text-2xl px-4 py-3 hover:underline">Doocode</a>
        </h1>
    {/if}

    <NavTools bind:visible={displayTools} />
</header>