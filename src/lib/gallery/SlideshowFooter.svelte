<script lang="ts">
    import { Button } from "$lib/components/ui/button";
    import { Download } from "@lucide/svelte";

    interface Props {
        index: number;
        total: number;
        url: string;
    }

    let {
        index,
        total,
        url
    }: Props = $props();

    async function downloadImage() {
        try {
            const response = await fetch(url);
            const blob = await response.blob();
            const blobUrl = URL.createObjectURL(blob);
            
            const link = document.createElement('a');
            link.href = blobUrl;
            link.download = url.split('/').pop() || 'image';
            document.body.appendChild(link);
            link.click();
            document.body.removeChild(link);
            
            URL.revokeObjectURL(blobUrl);
        } catch (error) {
            window.open(url, '_blank');
        }
    }
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

    <nav class="flex-1 flex justify-end">
        <Button
            size="icon"
            variant="secondary"
            onclick={downloadImage}
            class="w-12 h-12 hover:scale-120 active:scale-90 pointer-events-auto"
            title="Download image"
        >
            <Download class="w-6! h-6!" strokeWidth={2} />
        </Button>
    </nav>
</footer>