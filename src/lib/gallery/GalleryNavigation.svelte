<script lang="ts">
    import { cn } from "$lib/utils.js";
    import { m } from "$lib/paraglide/messages";
    import { Button } from "$lib/components/ui/button";
    import { ArrowLeft, ArrowRight, Clapperboard, Image, SquarePlay, SkipBack, SkipForward } from '@lucide/svelte/icons';

    interface Props {
        class?: string;
        canScrollLeft?: boolean;
        canScrollRight?: boolean;
        onScrollBackward: (event: MouseEvent) => void;
        onScrollForward: (event: MouseEvent) => void;
        imageCount?: number;
        videoCount?: number;
    }

    let {
        class: className,
        canScrollLeft = false,
        canScrollRight = true,
        onScrollBackward,
        onScrollForward,
        imageCount = 0,
        videoCount = 0
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

<nav class={cn("flex justify-between items-center px-4", className)}>
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
    <div class="flex gap-6">
        {#if imageCount > 0}
            <div class="flex items-center gap-1 text-muted-foreground">
                <span class="text-2xl font-thin">
                    {imageCount}
                </span>
                <span class="sr-only">images</span>
                <Image size={24} strokeWidth={1.75} />
            </div>
        {/if}
        {#if videoCount > 0}
            <div class="flex items-center gap-1 text-muted-foreground">
                <span class="text-2xl font-thin">
                    {videoCount}
                </span>
                <span class="sr-only">videos</span>
                <SquarePlay size={24} strokeWidth={1.75} />
            </div>
        {/if}
    </div>
</nav>
