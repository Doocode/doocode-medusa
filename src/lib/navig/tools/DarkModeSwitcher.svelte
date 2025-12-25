<script lang="ts">
    import { toggleMode } from "mode-watcher";
    import { m } from '$lib/paraglide/messages.js';
    import SunIcon from "@lucide/svelte/icons/sun";
    import MoonIcon from "@lucide/svelte/icons/moon";
    import { Button } from "$lib/components/ui/button/index.js";
</script>

<Button
    onclick={toggleMode}
    variant="secondary"
    size="icon"
    class="w-11.25 h-11.25"
    title={m['dark_mode.title']()}
> 
    <SunIcon
        class="h-6! w-6! scale-100 rotate-0 transition-all! dark:scale-0 dark:-rotate-90"
    />
    <MoonIcon
        class="absolute h-6! w-6! scale-0 rotate-90 transition-all! dark:scale-100 dark:rotate-0"
    />
    <span class="sr-only">{m['dark_mode.title']()}</span>
</Button>