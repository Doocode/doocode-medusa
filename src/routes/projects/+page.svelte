<script>
    import { m } from "$lib/paraglide/messages";
    import { projects } from "./projects";
    import ProjectCard from "./ProjectCard.svelte";
    import Package from '@lucide/svelte/icons/package';
</script>

<svelte:head>
    <title>{m['projects.title']()} • Doocode.xyz</title>
</svelte:head>

<main class="max-w-7xl mx-auto px-4 py-8">
    <Package class="w-20 h-20 mb-4 -mx-2 text-primary" />
    <h1 class="text-4xl font-black mb-4">{m['projects.heading']()}</h1>
    <p class="mb-8">{m['projects.description']()}</p>

    <div class="grid gap-4 grid-cols-[repeat(auto-fill,minmax(250px,1fr))] mt-8">
        {#each projects as { codename, name, logo, catchyPhrase, createdAt, updatedAt, bgAccent } }
            <ProjectCard 
                {name} {logo} {codename}
                {catchyPhrase} {bgAccent}
                {createdAt} {updatedAt}
            />
        {/each}
    </div>
</main>