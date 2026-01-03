<script lang="ts">
    import { m } from "$lib/paraglide/messages";
    import { scale, slide } from "svelte/transition";
    import { Button } from "$lib/components/ui/button";
    import { Captions, CaptionsOff } from "@lucide/svelte";

    interface Props {
        open?: boolean;
        caption?: string;
        description?: string;
    }

    let {
        open = $bindable(false),
        caption = '',
        description = ''
    }: Props = $props();
</script>

{#if open}
    <div class="fixed -top-px left-0 right-0 md:left-4 md:right-auto z-60
        flex flex-col px-5 pb-3 pt-20 md:px-4 md:pt-24 md:min-w-60 max-w-125
        backdrop-blur-2xl rounded-b-xl md:rounded-b-2xl border border-border/50
        bg-background/70 dark:bg-primary/20
    " transition:slide|global>
        <strong class="font-black text-primary text-sm md:text-base lg:text-lg">{caption}</strong>
        {#if description}
            <div class="bg-primary h-1 w-16 rounded-full mb-3 mt-2 shrink-0"></div>
            <p class="md:max-w-[60vw] text-sm md:text-base pb-1">
                {description}
            </p>
        {/if}
    </div>
{/if}

<div class="fixed top-4 left-4 md:top-8 md:left-8 z-60" transition:scale>
    <Button variant="outline"
        size="icon"
        onclick={() => open = !open}
        class="w-12 h-12 hover:scale-120 active:scale-90 backdrop-blur-2xl"
        title={ m['slideshow.toggle_captions']() }
    >
        {#if open}
            <Captions class="w-7! h-7!" strokeWidth={1.75} />
        {:else}
            <CaptionsOff class="w-7! h-7!" strokeWidth={1.75} />
        {/if}
    </Button>
</div>