<script lang="ts">
    import type { Snippet } from "svelte";
    import type { Project } from "../projects";
    import { Restyle } from "$lib/page";

    interface Props {
        project: Project,
        mainAction?: Snippet,
        children?: Snippet
    }

    let { project, mainAction, children }: Props = $props();
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
            "container m-auto flex justify-between items-center": true,
        }}
    >
        <div class="flex flex-1">
            <a
                href="/projects/{project.codename}"
                class="grid p-4 hover:underline underline-offset-3
                    hover:bg-black/30 dark:hover:bg-white/30 active:scale-85
                    active:rounded-2xl transition-all duration-100"
            >
                <img src={project.logo} alt={project.name} class="h-16 w-16"/>
                <h1 class="text-lg font-black">{project.name}</h1>
            </a>
        </div>

        <div class="hidden md:flex items-center justify-center flex-4 min-w-0">
            {@render children?.()}
        </div>

        <div class="main_action flex-1 flex justify-end">
            {@render mainAction?.()}
        </div>
    </div>
</header>

<Restyle
    class={{
        "flex justify-center md:hidden bg-linear-to-b rounded-b-xl border-b pb-0.5 mb-2": true,
        "from-primary to-primary/50 border-primary": !!project.bgAccent,
        "from-slate-300 to-slate-200/50 dark:from-slate-700 dark:to-slate-800/50 border-slate-300 dark:border-slate-700": !project.bgAccent
    }}
    tintLight={project.bgAccent ? project.bgAccent.light : undefined}
    tintDark={project.bgAccent ? project.bgAccent.dark : undefined}
>
    {@render children?.()}
</Restyle>

<style>
    header.accent {
        background-color: var(--bg-accent);
    }

    :root.dark header.accent {
        background-color: var(--bg-accent-dark);
    }
</style>