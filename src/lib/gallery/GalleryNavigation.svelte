<script lang="ts">
    import { cn } from "$lib/utils.js";
    import { m } from "$lib/paraglide/messages";
    import { Button } from "$lib/components/ui/button";
    import { ArrowLeft, ArrowRight, Image, SkipBack, SkipForward } from '@lucide/svelte/icons';

    interface Props {
        class?: string;
        canScrollLeft?: boolean;
        canScrollRight?: boolean;
        onScrollBackward: (event: MouseEvent) => void;
        onScrollForward: (event: MouseEvent) => void;
        count?: number;
    }

    let {
        class: className,
        canScrollLeft = false,
        canScrollRight = true,
        onScrollBackward,
        onScrollForward,
        count = 0
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

<nav class={cn("flex justify-between items-center px-4", className)}>
    <div class="flex gap-4">
        <Button
            class="rounded-full hover:bg-primary hover:text-background active:scale-90 focus-visible:ring-primary"
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
            class="rounded-full hover:bg-primary hover:text-background active:scale-90 focus-visible:ring-primary"
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
    </div>
    {#if count > 0}
        <div class="flex items-center gap-1 text-muted-foreground">
            <span class="text-2xl font-thin">
                {count}
            </span>
            <span class="sr-only">images</span>
            <Image size={24} strokeWidth={1.75} />
        </div>
    {/if}
</nav>
