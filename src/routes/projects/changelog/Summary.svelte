<script lang="ts">
    import SummaryCount from "./SummaryCount.svelte";
    import type { Release } from '$routes/projects/projects.types';

    interface Props {
        release: Release;
        hideLabel?: boolean;
    }

    let { release, hideLabel = false }: Props = $props();
</script>

<div class={{
    "flex flex-wrap": true,
    "gap-3": hideLabel,
    "gap-x-6 gap-y-2": !hideLabel
}}>
    {#if release.features?.length}
        <SummaryCount {hideLabel}
            type="features"
            count={release.features.length}
            label={release.features.length === 1 ? 'feature' : 'features'}
        />
    {/if}
    {#if release.improvements?.length}
        <SummaryCount {hideLabel}
            type="improvements"
            count={release.improvements.length}
            label={release.improvements.length === 1 ? 'improvement' : 'improvements'}
        />
    {/if}
    {#if release.bugfixes?.length}
        <SummaryCount {hideLabel}
            type="bugfixes" 
            count={release.bugfixes.length} 
            label={release.bugfixes.length === 1 ? 'bugfix' : 'bugfixes'} 
        />
    {/if}
    {#if release.removedFeatures?.length}
        <SummaryCount {hideLabel}
            type="removed"
            count={release.removedFeatures.length}
            label={release.removedFeatures.length === 1 ? 'removed feature' : 'removed features'}
        />
    {/if}
    {#if release.images?.length}
        <SummaryCount {hideLabel}
            type="screenshots"
            count={release.images.length}
            label={release.images.length === 1 ? 'screenshot' : 'screenshots'}
        />
    {/if}
</div>
