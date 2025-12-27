<script lang="ts">
    import { toggleMode } from "mode-watcher";
    import { m } from '$lib/paraglide/messages.js';
    import SunIcon from "@lucide/svelte/icons/sun";
    import MoonIcon from "@lucide/svelte/icons/moon";
    import { Button } from "$lib/components/ui/button/index.js";

    interface Props {
        compact?: boolean;
    }

    let { compact = $bindable(false) }: Props = $props();
</script>

<Button
    onclick={toggleMode}
    variant={ compact ? "ghost" : "secondary" }
    size="icon"
    class={{
        "h-11.25 w-11.25": !compact,
        "h-10 w-10": compact,
    }}
    title={m['dark_mode.title']()}
> 
    <SunIcon
        class={{
            "scale-100 rotate-0 transition-all! dark:scale-0 dark:-rotate-90": true,
            "h-6! w-6!": !compact,
            "h-5! w-5!": compact
        }}
    />
    <MoonIcon
        class={{
            "absolute scale-0 rotate-90 transition-all! dark:scale-100 dark:rotate-0": true,
            "h-6! w-6!": !compact,
            "h-5! w-5!": compact
        }}
    />
    <span class="sr-only">{m['dark_mode.title']()}</span>
</Button>