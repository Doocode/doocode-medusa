<script lang="ts">
    import { Button } from "$lib/components/ui/button";
    import { X } from "@lucide/svelte";

    interface Props {
        onClose: () => void;
    }

    let {
        onClose
    }: Props = $props();
</script>

<header class="fixed top-0 left-0 right-0 flex justify-between items-start pointer-events-none z-70 p-4 md:p-6">
    <div class="flex-1 flex justify-start"></div>

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
