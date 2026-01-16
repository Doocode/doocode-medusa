<script lang="ts">
    import { m } from "$lib/paraglide/messages";
    import { type Project } from "$routes/projects/projects.types";
    import { SpecContainer, SpecBlock, BlockDate, BlockVersion, BlockStatus } from '$routes/projects/specs';
    import { SquareActivity, Flag, History, Calendar1, Scale, SquareArrowOutUpRightIcon } from '@lucide/svelte/icons';

    interface Props {
        class?: string;
        project: Project
    }

    let { class: className, project }: Props = $props();
</script>

<SpecContainer class={className}>
    {#if project.versionName}
        <BlockVersion icon={Flag} title={m['projects.version']()}
            versionName={project.versionName} />
    {/if}
    {#if project.updatedOn}
        <BlockDate icon={History} title={m['status.updated_on.title']()}
            date={project.updatedOn} />
    {/if}
    {#if project.createdOn}
        <BlockDate icon={Calendar1} title={m['status.created_on.title']()}
            date={project.createdOn} />
    {/if}
    {#if project.licenseName}
        <SpecBlock icon={Scale} title={m['projects.license']()}>
            {#if project.licenseUrl}
                <a
                    href={project.licenseUrl}
                    class="hover:underline underline-offset-2"
                    target="_blank"
                    rel="noopener noreferrer"
                >
                    <span>{project.licenseName}</span>
                    <SquareArrowOutUpRightIcon class="inline-block w-4 h-4" />
                </a>
            {:else}
                {project.licenseName}
            {/if}
        </SpecBlock>
    {/if}
    {#if project.status}
        <BlockStatus icon={SquareActivity} title={m['projects.status.title']()}
            status={project.status} />
    {/if}
</SpecContainer>