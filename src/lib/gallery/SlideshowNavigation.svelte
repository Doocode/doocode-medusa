<script lang="ts">
    import { ArrowLeft, ArrowRight } from '@lucide/svelte/icons';
    import { Button } from "$lib/components/ui/button";
    import { m } from "$lib/paraglide/messages";
    import { scale } from "svelte/transition";

    interface Props {
        count: number;
        index: number;
        handlePrevious: () => void;
        handleNext: () => void;
    }

    let {
        count,
        index,
        handlePrevious,
        handleNext
    }: Props = $props();

    let hasPrevious = $derived(index > 0);
    let hasNext = $derived(index < count - 1);
</script>

<main class="fixed flex justify-between items-center inset-0 pointer-events-none z-60 md:px-8">
    <div>
        {#if hasPrevious}
            <div transition:scale|global={{ duration: 300 }}>
                <Button
                    size="icon"
                    onclick={handlePrevious}
                    class="w-16 h-16 rounded-full hover:scale-120 active:scale-90 pointer-events-auto"
                >
                    <ArrowLeft class="w-8! h-8!" strokeWidth={3} />
                    <span class="sr-only">{ m['slideshow.previous']() }</span>
                </Button>
            </div>
        {/if}
    </div>

    <div>
        {#if hasNext}
            <div transition:scale|global={{ duration: 300 }}>
                <Button
                    size="icon"
                    onclick={handleNext}
                    class="w-16 h-16 rounded-full hover:scale-120 active:scale-90 pointer-events-auto"
                >
                    <ArrowRight class="w-8! h-8!" strokeWidth={3} />
                    <span class="sr-only">{ m['slideshow.next']() }</span>
                </Button>
            </div>
        {/if}
    </div>
</main>