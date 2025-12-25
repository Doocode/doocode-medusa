<script lang="ts">
    import Button from "$lib/components/ui/button/button.svelte";
    import XIcon from "@lucide/svelte/icons/x";
    import CogIcon from "@lucide/svelte/icons/cog";
    import LanguageSwitcher from "./LanguageSwitcher.svelte";
    import DarkModeSwitcher from "./DarkModeSwitcher.svelte";
    import { slide } from "svelte/transition";

    interface Props {
        visible?: boolean;
    }

    let {
        visible = $bindable(false)
    }: Props = $props();
</script>

<div class="flex items-center gap-1 [&>div]:flex [&>div]:items-center [&>div]:gap-1 py-1.5">
    {#if visible}
        <div transition:slide={{ axis: 'x' }}>
            <LanguageSwitcher />
            <DarkModeSwitcher />

            <Button
                onclick={() => (visible = false)}
                variant="secondary"
                size="icon"
                class="h-11.25 w-11.25 ml-4"
            >
                <XIcon class="h-6! w-6!" />
                <span class="sr-only">Close</span>
            </Button>
        </div>
    {:else}
        <div transition:slide={{ axis: 'x' }}>
            <Button
                onclick={() => (visible = !visible)}
                variant="secondary"
                size="icon"
                class="h-11.25 w-11.25"
            >
                <CogIcon class="h-6! w-6!" />
                <span class="sr-only">Settings</span>
            </Button>
        </div>
    {/if}
</div>