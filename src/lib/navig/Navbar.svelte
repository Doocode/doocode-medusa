<script>
    import Button from "$lib/components/ui/button/button.svelte";
    import MenuIcon from "@lucide/svelte/icons/menu";
    import DarkModeSwitcher from "./tools/DarkModeSwitcher.svelte";
</script>

<header class="bg-primary text-primary-foreground text-center flex items-center justify-between px-1.5">
    <Button variant="secondary" size="icon" class="h-11.25 w-11.25">
        <MenuIcon class="h-6! w-6!" />
    </Button>

    <h1 class="font-black text-2xl px-4 py-3 hover:underline">Doocode</h1>

    <DarkModeSwitcher />
</header>