<script lang="ts">
	import { type Project } from "$routes/projects/projects.types";
	import { SpecContainer, SpecBlock, BlockDate, BlockVersion, BlockStatus } from '$routes/projects/specs';
    import { SquareActivity, Flag, History, Calendar1, Scale, SquareArrowOutUpRightIcon } from '@lucide/svelte/icons';

    interface Props {
        project: Project
    }

    let { project }: Props = $props();
</script>

<SpecContainer>
    {#if project.versionName}
        <BlockVersion icon={Flag} title="Version"
            versionName={project.versionName} />
    {/if}
    {#if project.updatedAt}
        <BlockDate icon={History} title="Mise à jour le"
            date={project.updatedAt} />
    {/if}
    {#if project.createdAt}
        <BlockDate icon={Calendar1} title="Créé le"
            date={project.createdAt} />
    {/if}
    {#if project.licenseName}
        <SpecBlock icon={Scale} title="Licence">
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
        <BlockStatus icon={SquareActivity} title="Statut"
            status={project.status} />
    {/if}
</SpecContainer>