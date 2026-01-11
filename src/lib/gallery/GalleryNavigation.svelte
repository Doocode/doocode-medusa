<script lang="ts">
    import { cn } from "$lib/utils.js";
    import { m } from "$lib/paraglide/messages";
    import { Button } from "$lib/components/ui/button";
    import { ArrowLeft, ArrowRight, SkipBack, SkipForward } from '@lucide/svelte/icons';

    interface Props {
        class?: string;
        canScrollLeft?: boolean;
        canScrollRight?: boolean;
        onScrollBackward: (event: MouseEvent) => void;
        onScrollForward: (event: MouseEvent) => void;
    }

    let {
        class: className,
        canScrollLeft = false,
        canScrollRight = true,
        onScrollBackward,
        onScrollForward
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

<nav class={cn("flex justify-end gap-4 px-4", className)}>
    <Button
        class="rounded-full hover:bg-primary hover:text-background active:scale-90"
        variant="secondary"
        size="icon"
        onclick={onScrollBackward}
        disabled={!canScrollLeft}
    >
        {#if shiftPressed}
            <SkipBack class="w-5! h-5!" strokeWidth={2.5} />
            <span class="sr-only">{ m['actions.scroll.start']() }</span>
        {:else}
            <ArrowLeft class="w-6! h-6!" />
            <span class="sr-only">{ m['actions.scroll.backward']() }</span>
        {/if}
    </Button>
    <Button
        class="rounded-full hover:bg-primary hover:text-background active:scale-90"
        variant="secondary"
        size="icon"
        onclick={onScrollForward}
        disabled={!canScrollRight}
    >
        {#if shiftPressed}
            <SkipForward class="w-5! h-5!" strokeWidth={2.5} />
            <span class="sr-only">{ m['actions.scroll.end']() }</span>
        {:else}
            <ArrowRight class="w-6! h-6!" />
            <span class="sr-only">{ m['actions.scroll.forward']() }</span>
        {/if}
    </Button>
</nav>
