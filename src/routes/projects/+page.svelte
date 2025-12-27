<script>
    import { m } from "$lib/paraglide/messages";
    import { projects } from "./projects";
    import ProjectCard from "./ProjectCard.svelte";
</script>

<svelte:head>
    <title>{m['projects.title']()} • Doocode</title>
</svelte:head>

<div class="m-auto max-w-7xl p-4">
    <h1 class="text-3xl md:text-6xl font-bold">{m['projects.heading']()}</h1>

    <div class="grid gap-4 grid-cols-[repeat(auto-fill,minmax(250px,1fr))] mt-8">
        {#each projects as { codename, name, logo, catchyPhrase, createdAt, updatedAt, bgAccent } }
            <ProjectCard 
                {name} {logo} {codename}
                {catchyPhrase} {bgAccent}
                {createdAt} {updatedAt}
            />
        {/each}
    </div>
</div>