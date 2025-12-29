<script lang="ts">
    import { Button } from "$lib/components/ui/button";
    import { Download } from "@lucide/svelte";

    interface Props {
        caption?: string;
        description?: string;
        index: number;
        total: number;
        url: string;
    }

    let {
        caption = '',
        description = '',
        index,
        total,
        url
    }: Props = $props();
</script>

<!-- TODO: Auto fade out after 5s -->
<footer class="fixed bottom-0 left-0 right-0 flex justify-between items-end pointer-events-none z-50 p-4 md:p-8">
    <div class="flex-1 flex justify-start">
        <!-- TODO: Replace with bullets or progress bar -->
        <div
            class="bg-slate-500/50 backdrop-blur-2xl text-white px-3 py-1.5 rounded-lg pointer-events-auto"
        >
            <span class="font-black">{index + 1}</span> / {total}
        </div>
    </div>

    {#if caption}
        <div class="grid fixed md:static bottom-20 left-4 right-4 bg-slate-900/50 dark:bg-slate-700/50 backdrop-blur-2xl px-5 py-3 md:px-7 md:py-5 rounded-xl text-white text-center hover:opacity-30 duration-150 pointer-events-auto">
            <strong class="font-black text-sm md:text-base lg:text-lg">{caption}</strong>
            {#if description}
                <p class="md:max-w-[60vw] text-sm md:text-base md:pb-1 md:px-2 mt-1">
                    {description}
                </p>
            {/if}
        </div>
    {/if}

    <nav class="flex-1 flex justify-end">
        <Button
            size="icon"
            href={url}
            target="_blank"
            variant="secondary"
            rel="noopener noreferrer"
            class="w-12 h-12 hover:scale-120 active:scale-90 pointer-events-auto"
            title="Open image in new tab"
        >
            <Download class="w-6! h-6!" strokeWidth={2} />
        </Button>
    </nav>
</footer>