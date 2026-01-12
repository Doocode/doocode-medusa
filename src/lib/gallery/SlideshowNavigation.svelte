<script lang="ts">
    import { ArrowLeft, ArrowRight, SkipBack, SkipForward } from '@lucide/svelte/icons';
    import { Button } from "$lib/components/ui/button";
    import { m } from "$lib/paraglide/messages";
    import { scale } from "svelte/transition";

    interface Props {
        count: number;
        index: number;
        handlePrevious: () => void;
        handleNext: () => void;
        handleFirst: () => void;
        handleLast: () => void;
    }

    let {
        count,
        index,
        handlePrevious,
        handleNext,
        handleFirst,
        handleLast,
    }: Props = $props();

    let hasPrevious = $derived(index > 0);
    let hasNext = $derived(index < count - 1);
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

<main class="fixed flex justify-between items-center inset-0 pointer-events-none z-60 md:px-8">
    <div>
        {#if hasPrevious}
            <div transition:scale|global={{ duration: 300 }}>
                <Button
                    size="icon"
                    onclick={onPreviousClick}
                    class="w-16 h-16 rounded-full hover:scale-120 active:scale-90 pointer-events-auto"
                >
                    {#if shiftPressed}
                        <SkipBack class="w-8! h-8!" strokeWidth={3} />
                        <span class="sr-only">{ m['slideshow.first']() }</span>
                    {:else}
                        <ArrowLeft class="w-8! h-8!" strokeWidth={3} />
                        <span class="sr-only">{ m['slideshow.previous']() }</span>
                    {/if}
                </Button>
            </div>
        {/if}
    </div>

    <div>
        {#if hasNext}
            <div transition:scale|global={{ duration: 300 }}>
                <Button
                    size="icon"
                    onclick={onNextClick}
                    class="w-16 h-16 rounded-full hover:scale-120 active:scale-90 pointer-events-auto"
                >
                    {#if shiftPressed}
                        <SkipForward class="w-8! h-8!" strokeWidth={3} />
                        <span class="sr-only">{ m['slideshow.last']() }</span>
                    {:else}
                        <ArrowRight class="w-8! h-8!" strokeWidth={3} />
                        <span class="sr-only">{ m['slideshow.next']() }</span>
                    {/if}
                </Button>
            </div>
        {/if}
    </div>
</main>