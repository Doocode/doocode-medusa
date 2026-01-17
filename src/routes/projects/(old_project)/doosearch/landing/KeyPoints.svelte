<script lang="ts">
    import { Info } from '@lucide/svelte/icons';
    import Heading from '$lib/page/Heading.svelte';
    import { Specs } from '$routes/projects/specs';
    import type { Project } from '$routes/projects/projects.types';
    import { m } from "$lib/paraglide/messages";

    interface Props {
        project: Project;
    }

    let { project }: Props = $props();
</script>

<div class="grid gap-8">
    <Heading level="h2"
        icon={Info}
        title={m['projects.doosearch.landing.key_points.title']()}
    />

    <Specs {project} />
</div>
