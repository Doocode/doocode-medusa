<script lang="ts">
    import { Button } from "$lib/components/ui/button";
    import ArrowLeft from '@lucide/svelte/icons/arrow-left';
    import ArrowRight from '@lucide/svelte/icons/arrow-right';

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

    $inspect(hasPrevious);
</script>

<main class="fixed flex justify-between items-center inset-0 pointer-events-none z-60 md:px-8">
    <div>
        {#if hasPrevious}
            <Button
                size="icon"
                onclick={handlePrevious}
                class="w-16 h-16 rounded-full hover:scale-120 active:scale-90 pointer-events-auto"
            >
                <ArrowLeft class="w-8! h-8!" strokeWidth={3} />
            </Button>
        {/if}
    </div>

    <div>
        {#if hasNext}
            <Button
                size="icon"
                onclick={handleNext}
                class="w-16 h-16 rounded-full hover:scale-120 active:scale-90 pointer-events-auto"
            >
                <ArrowRight class="w-8! h-8!" strokeWidth={3} />
            </Button>
        {/if}
    </div>
</main>