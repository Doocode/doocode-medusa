<script lang="ts">
    import Button from "$lib/components/ui/button/button.svelte";
    import CogIcon from "@lucide/svelte/icons/cog";
    import LanguageSwitcher from "./LanguageSwitcher.svelte";
    import DarkModeSwitcher from "./DarkModeSwitcher.svelte";
    import * as Popover from "$lib/components/ui/popover/index.js";
</script>

<div class="flex items-center gap-1 [&_div]:flex [&_div]:items-center [&_div]:gap-1 py-1.5">
    <Popover.Root>
        <Popover.Trigger>
            <Button
                variant="secondary"
                size="icon"
                class="h-11.25 w-11.25"
            >
                <CogIcon class="h-6! w-6!" />
                <span class="sr-only">Settings</span>
            </Button>
        </Popover.Trigger>

        <Popover.Content class="rounded-3xl">
            <div class="flex justify-end gap-2">
                <LanguageSwitcher />
                <DarkModeSwitcher />
            </div>
        </Popover.Content>
    </Popover.Root>
</div>