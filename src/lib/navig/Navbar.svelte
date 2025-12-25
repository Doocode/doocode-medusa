<script>
    import { fade } from "svelte/transition";
    import NavTools from "./tools/NavTools.svelte";
    import NavbarPages from "./pages/NavbarPages.svelte";

    let displayTools = $state(false);
</script>

<header class="bg-primary text-primary-foreground text-center flex items-center justify-between px-1.5">
    <NavbarPages />

    {#if !displayTools}
        <h1 transition:fade={{ duration: 100 }}>
            <a href="/" class="font-black text-2xl px-4 py-3 hover:underline">Doocode</a>
        </h1>
    {/if}

    <NavTools bind:visible={displayTools} />
</header>
