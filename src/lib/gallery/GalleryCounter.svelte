<script lang="ts">
    import { Clapperboard, Image } from '@lucide/svelte/icons';

    interface Props {
        imageCount?: number;
        videoCount?: number;
    }

    let {
        imageCount = 0,
        videoCount = 0
    }: Props = $props();
</script>

<div class="flex gap-6">
    {#if imageCount > 0}
        <div class="flex items-center gap-1 text-muted-foreground">
            <span class="text-2xl font-thin">
                {imageCount}
            </span>
            <span class="sr-only">images</span>
            <Image size={24} strokeWidth={1.75} />
        </div>
    {/if}
    {#if videoCount > 0}
        <div class="flex items-center gap-1 text-muted-foreground">
            <span class="text-2xl font-thin">
                {videoCount}
            </span>
            <span class="sr-only">videos</span>
            <Clapperboard size={24} strokeWidth={1.75} />
        </div>
    {/if}
</div>
