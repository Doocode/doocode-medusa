<script lang="ts">
    import SummaryCount from "./SummaryCount.svelte";
    import type { Release } from '$routes/projects/projects.types';

    interface Props {
        release: Release;
    }

    let { release }: Props = $props();
</script>

<div class="flex flex-wrap gap-x-6 gap-y-2">
    {#if release.features?.length}
        <SummaryCount 
            type="features" 
            count={release.features.length} 
            label={release.features.length === 1 ? 'feature' : 'features'} 
        />
    {/if}
    {#if release.improvements?.length}
        <SummaryCount 
            type="improvements" 
            count={release.improvements.length} 
            label={release.improvements.length === 1 ? 'improvement' : 'improvements'} 
        />
    {/if}
    {#if release.bugfixes?.length}
        <SummaryCount 
            type="bugfixes" 
            count={release.bugfixes.length} 
            label={release.bugfixes.length === 1 ? 'bugfix' : 'bugfixes'} 
        />
    {/if}
    {#if release.images?.length}
        <SummaryCount 
            type="screenshots" 
            count={release.images.length} 
            label={release.images.length === 1 ? 'screenshot' : 'screenshots'} 
        />
    {/if}
</div>
