<script lang="ts">
    import type { LayoutProps } from './$types';
    import './projects.css'

    let { data, children }: LayoutProps = $props();
</script>

<svelte:head>
    <title>{data.project.name} • Doocode.xyz</title>
    <link rel="icon" href={data.project.logo} />
</svelte:head>

{@render children()}