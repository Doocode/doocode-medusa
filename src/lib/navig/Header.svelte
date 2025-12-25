<script>
    import HeaderPages from "./pages/HeaderPages.svelte";
    import DarkModeSwitcher from "./tools/DarkModeSwitcher.svelte";
    import LanguageSwitcher from "./tools/LanguageSwitcher.svelte";
</script>

<header class="bg-primary text-primary-foreground">
    <div class="max-w-7xl m-auto flex items-center justify-between">
        <h1 class="font-black text-3xl flex-1">
            <a href="/" class="px-4 py-3 grid hover:underline">Doocode</a>
        </h1>

        <HeaderPages />

        <div class="flex items-center justify-end gap-2 px-2 flex-1">
            <LanguageSwitcher />
            <DarkModeSwitcher />
        </div>
    </div>
</header>