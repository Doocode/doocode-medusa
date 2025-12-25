<script>
    import NavTools from "./tools/NavTools.svelte";
    import NavbarPages from "./pages/NavbarPages.svelte";
</script>

<header class="bg-primary text-primary-foreground text-center flex items-center justify-between px-1.5">
    <NavbarPages />

    <h1>
        <a href="/" class="font-black text-2xl px-4 py-3 hover:underline">Doocode</a>
    </h1>

    <NavTools />
</header>
