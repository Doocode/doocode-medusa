<script lang="ts">
    import { m } from "$lib/paraglide/messages";
    import { Button } from "$lib/components/ui/button";
    import { ArrowLeft, ArrowRight, SkipBack, SkipForward } from '@lucide/svelte/icons';

    interface Props {
        canScrollLeft?: boolean;
        canScrollRight?: boolean;
        onScrollBackward: (event: MouseEvent) => void;
        onScrollForward: (event: MouseEvent) => void;
    }

    let {
        canScrollLeft = false,
        canScrollRight = true,
        onScrollBackward,
        onScrollForward,
    }: Props = $props();

    let shiftPressed = $state(false);

    function handleKeyDown(e: KeyboardEvent) {
        if (e.key === 'Shift') {
            shiftPressed = true;
        }
    }

    function handleKeyUp(e: KeyboardEvent) {
        if (e.key === 'Shift') {
            shiftPressed = false;
        }
    }
</script>

<svelte:window onkeydown={handleKeyDown} onkeyup={handleKeyUp} />


{#snippet navButton(
    onclick: (event: MouseEvent) => void,
    canScroll: boolean,
    Icon: any,
    ShiftIcon: any,
    label: string,
    shiftLabel: string
)}
    <Button
        class={{
            "rounded-full hover:bg-primary hover:text-background active:scale-90 focus-visible:ring-primary": true,
        }}
        variant={canScroll ? "default" : "secondary"}
        size="icon"
        {onclick}
        disabled={!canScroll}
    >
        {#if shiftPressed}
            <ShiftIcon class="w-5! h-5!" strokeWidth={2.5} />
            <span class="sr-only">{shiftLabel}</span>
        {:else}
            <Icon class="w-6! h-6!" />
            <span class="sr-only">{label}</span>
        {/if}
    </Button>
{/snippet}

<div class="flex gap-4">
    {@render navButton(
        onScrollBackward, canScrollLeft,
        ArrowLeft, SkipBack,
        m['actions.scroll.backward'](),
        m['actions.scroll.start']()
    )}
    {@render navButton(
        onScrollForward, canScrollRight,
        ArrowRight, SkipForward,
        m['actions.scroll.forward'](),
        m['actions.scroll.end']()
    )}
</div>
