<script lang="ts">
    import type { Snippet } from "svelte";
    import type { Project } from "./projects";

    interface Props {
        project: Project,
        mainAction?: Snippet
    }

    let { project, mainAction }: Props = $props();
</script>

<header
    class:accent={!!project.bgAccent}
    class={{
        "bg-slate-300 dark:bg-slate-700": true,
    }}

    style:--bg-accent={project.bgAccent ? project.bgAccent.light : "transparent"}
    style:--bg-accent-dark={project.bgAccent ? project.bgAccent.dark : "transparent"}
>
    <div
        class={{
            "max-w-7xl m-auto flex justify-between items-center": true,
        }}
    >
        <a
            href="/projects/{project.codename}"
            class="grid p-4 hover:underline underline-offset-3
                hover:bg-black/30 dark:hover:bg-white/30 active:scale-85
                active:rounded-2xl transition-all duration-100"
        >
            <img src={project.logo} alt={project.name} class="h-16 w-16"/>
            <h1 class="text-lg font-black">{project.name}</h1>
        </a>

        <div class="main_action">
            {@render mainAction?.()}
        </div>
    </div>
</header>

<style>
    header.accent {
        background-color: var(--bg-accent);
    }

    :root.dark header.accent {
        background-color: var(--bg-accent-dark);
    }
</style>