<script lang="ts">
    import { ArrowLeft, ArrowRight, SkipBack, SkipForward } from '@lucide/svelte/icons';
    import { Button } from "$lib/components/ui/button";
    import { m } from "$lib/paraglide/messages";
    import { scale } from "svelte/transition";

    interface Props {
        count: number;
        index: number;
        dragX?: number;
        handlePrevious: () => void;
        handleNext: () => void;
        handleFirst: () => void;
        handleLast: () => void;
    }

    let {
        count,
        index,
        dragX = 0,
        handlePrevious,
        handleNext,
        handleFirst,
        handleLast,
    }: Props = $props();

    let hasPrevious = $derived(index > 0);
    let hasNext = $derived(index < count - 1);
    let shiftPressed = $state(false);

    let prevScale = $derived(dragX > 0 ? 1 + Math.min(Math.abs(dragX) / 1000, 0.5) : 1);
    let nextScale = $derived(dragX < 0 ? 1 + Math.min(Math.abs(dragX) / 1000, 0.5) : 1);

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

    function onPreviousClick() {
        if (shiftPressed) {
            handleFirst();
        } else {
            handlePrevious();
        }
    }

    function onNextClick() {
        if (shiftPressed) {
            handleLast();
        } else {
            handleNext();
        }
    }
</script>

<svelte:window onkeydown={handleKeyDown} onkeyup={handleKeyUp} />

{#snippet navButton(show: boolean, scaleVal: number, click: () => void, Icon: any, ShiftIcon: any, label: string, shiftLabel: string)}
    {#if show}
        <div
            transition:scale|global={{ duration: 300 }}
            style:transform="scale({scaleVal})"
            class="transition-transform duration-75"
        >
            <Button
                size="icon"
                onclick={click}
                class="sm:size-16 rounded-full hover:scale-120 active:scale-90 pointer-events-auto"
            >
                {#if shiftPressed}
                    <ShiftIcon class="sm:size-8!" strokeWidth={3} />
                    <span class="sr-only">{shiftLabel}</span>
                {:else}
                    <Icon class="sm:size-8!" strokeWidth={3} />
                    <span class="sr-only">{label}</span>
                {/if}
            </Button>
        </div>
    {/if}
{/snippet}

<main class="fixed flex justify-between items-center inset-0 pointer-events-none z-60 md:px-8">
    <div>
        {@render navButton(
            hasPrevious, prevScale, onPreviousClick,
            ArrowLeft, SkipBack,
            m['slideshow.previous'](),
            m['slideshow.first']())
        }
    </div>

    <div>
        {@render navButton(
            hasNext, nextScale, onNextClick,
            ArrowRight, SkipForward,
            m['slideshow.next'](),
            m['slideshow.last']())
        }
    </div>
</main>