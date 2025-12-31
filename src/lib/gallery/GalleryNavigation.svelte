<script lang="ts">
    import { cn } from "$lib/utils.js";
    import { m } from "$lib/paraglide/messages";
    import { Button } from "$lib/components/ui/button";
    import { ArrowLeft, ArrowRight } from '@lucide/svelte/icons';

    interface Props {
        class?: string;
        canScrollLeft?: boolean;
        canScrollRight?: boolean;
        onScrollBackward: () => void;
        onScrollForward: () => void;
    }

    let {
        class: className,
        canScrollLeft = false,
        canScrollRight = true,
        onScrollBackward,
        onScrollForward
    }: Props = $props();
</script>

<nav class={cn("flex justify-end gap-4 px-4", className)}>
    <Button
        class="rounded-full hover:bg-primary hover:text-background active:scale-90"
        variant="secondary"
        size="icon"
        onclick={onScrollBackward}
        disabled={!canScrollLeft}
        title={ m['actions.scroll.backward']() }
    >
        <ArrowLeft class="w-6! h-6!" />
    </Button>
    <Button
        class="rounded-full hover:bg-primary hover:text-background active:scale-90"
        variant="secondary"
        size="icon"
        onclick={onScrollForward}
        disabled={!canScrollRight}
        title={ m['actions.scroll.forward']() }
    >
        <ArrowRight class="w-6! h-6!" />
    </Button>
</nav>
