<script lang="ts">
    import { Button } from "$lib/components/ui/button";
    import { m } from "$lib/paraglide/messages";
    import { X, Maximize2, Minimize2 } from "@lucide/svelte";
    import { scale } from "svelte/transition";

    interface Props {
        onClose: () => void;
    }

    let {
        onClose,
    }: Props = $props();

    let isFullscreen = $state(false);

    function toggleFullscreen() {
        if (!document.fullscreenElement) {
            document.documentElement.requestFullscreen();
        } else {
            document.exitFullscreen();
        }
    }

    $effect(() => {
        const onFullscreenChange = () => {
            isFullscreen = !!document.fullscreenElement;
        };

        document.addEventListener("fullscreenchange", onFullscreenChange);
        return () => document.removeEventListener("fullscreenchange", onFullscreenChange);
    });
</script>

<header class="fixed top-0 left-0 right-0 flex justify-between items-start pointer-events-none z-70 p-4 md:p-6">
    <div class="flex-1 flex justify-start"></div>

    <nav class="flex justify-end gap-2" transition:scale|global={{ duration: 350 }}>
        <Button
            size="icon"
            variant="outline"
            onclick={toggleFullscreen}
            class="w-12 h-12 hover:scale-120 active:scale-90 rounded-lg backdrop-blur-2xl pointer-events-auto"
            title={isFullscreen ? "Exit Fullscreen" : "Fullscreen"}
        >
            {#if isFullscreen}
                <Minimize2 class="w-6! h-6!" strokeWidth={2} />
            {:else}
                <Maximize2 class="w-6! h-6!" strokeWidth={2} />
            {/if}
        </Button>

        <Button
            size="icon"
            variant="destructive"
            onclick={onClose}
            class="w-12 h-12 hover:scale-120 active:scale-90 rounded-lg backdrop-blur-2xl pointer-events-auto"
            title={ m['slideshow.close']() }
        >
            <X class="w-8! h-8!" strokeWidth={2} />
        </Button>
    </nav>
</header>
