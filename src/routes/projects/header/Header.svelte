<script lang="ts">
	import type { Snippet } from 'svelte';
	import type { Project } from '../projects';
	import { Restyle } from '$lib/page';

	interface Props {
		project: Project;
		mainAction?: Snippet;
		children?: Snippet;
	}

	let { project, mainAction, children }: Props = $props();
</script>

<header
	class:accent={!!project.bgAccent}
	class={{
		'bg-slate-300 dark:bg-slate-700': true
	}}
	style:--bg-accent={project.bgAccent ? project.bgAccent.light : 'transparent'}
	style:--bg-accent-dark={project.bgAccent ? project.bgAccent.dark : 'transparent'}
>
	<div
		class={{
			'container m-auto flex items-center justify-between': true
		}}
	>
		<div class="flex flex-1">
			<a
				href="/projects/{project.codename}"
				class="grid p-4 underline-offset-3 transition-all
                    duration-100 hover:bg-black/30 hover:underline
                    active:scale-85 active:rounded-2xl dark:hover:bg-white/30"
			>
				<img src={project.logo} alt={project.name} class="h-16 w-16" />
				<h1 class="text-lg font-black">{project.name}</h1>
			</a>
		</div>

		<div class="hidden min-w-0 flex-4 items-center justify-center md:flex">
			{@render children?.()}
		</div>

		<div class="main_action flex flex-1 justify-end">
			{@render mainAction?.()}
		</div>
	</div>
</header>

<Restyle
	class={{
		'mb-2 flex justify-center rounded-b-xl border-b bg-linear-to-b pb-0.5 md:hidden': true,
		'border-primary from-primary to-primary/50': !!project.bgAccent,
		'border-slate-300 from-slate-300 to-slate-200/50 dark:border-slate-700 dark:from-slate-700 dark:to-slate-800/50':
			!project.bgAccent
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
