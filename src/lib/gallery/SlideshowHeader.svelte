<script lang="ts">
    import { Button } from "$lib/components/ui/button";
    import { X } from "@lucide/svelte";

    interface Props {
        caption?: string;
        onClose: () => void;
    }

    let {
        caption = '',
        onClose
    }: Props = $props();
</script>

<header class="fixed top-0 left-0 right-0 flex justify-between items-start pointer-events-none z-60 p-4 md:p-6">
    <div class="flex-1 flex justify-start">
        {#if caption}
            <div class="bg-slate-900/50 dark:bg-slate-700/50 backdrop-blur-2xl px-5 py-3 md:px-7 md:py-5 rounded-xl text-white pointer-events-auto">
                <strong class="font-black text-sm md:text-base lg:text-lg">{caption}</strong>
            </div>
        {/if}
    </div>

    <nav class="flex-1 flex justify-end">
        <Button
            size="icon"
            variant="destructive"
            onclick={onClose}
            class="w-12 h-12 hover:scale-120 active:scale-90 rounded-full pointer-events-auto"
            title="Close slideshow"
        >
            <X class="w-8! h-8!" strokeWidth={2} />
        </Button>
    </nav>
</header>
