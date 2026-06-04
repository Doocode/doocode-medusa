<script lang="ts">
	import { MainAction } from '$routes/projects/header';
	import { Header } from '$routes/projects/header';
	import { m } from '$lib/paraglide/messages';
	import type { PageProps } from './$types';
	import ProjectCard from '$routes/projects/ProjectCard.svelte';
	import {
		BadgeQuestionMark,
		ImagePlay,
		LayoutGrid,
		List,
		Pointer,
		QrCode,
		RefreshCcw,
		History
	} from '@lucide/svelte/icons';
	import { NavContener, NavItem } from '$routes/projects/header';
	import { ReleaseTypeBadge } from '$routes/projects/changelog';
	import { ReleaseType, LinkType } from '$routes/projects/core';
	import LinkTile from '$routes/projects/links/LinkTile.svelte';
	import { Button } from '$lib/components/ui/button';
	import * as ButtonGroup from '$lib/components/ui/button-group';

	let { data }: PageProps = $props();

	let viewMode: 'grid' | 'list' = $state('grid'); // grid | list

	function toggleViewMode() {
		viewMode = viewMode === 'grid' ? 'list' : 'grid';
	}
</script>

<svelte:head>
	<title>Projects demo • Doocode.xyz</title>
</svelte:head>

<main class="container mx-auto flex flex-col gap-6 p-4 py-8">
	<strong class="-mb-6 flex justify-start text-primary underline-offset-2 hover:underline">
		<a href="/demo">Demo</a>
	</strong>
	<h1 class="mb-4 text-4xl font-black">Projects</h1>

	<p class="mb-8">Preview of the projects components.</p>
</main>

<div class="container mx-auto mt-0 mb-12 px-4">
	<h2 class="pb-4 text-3xl font-black">Project card</h2>

	<div class="grid grid-cols-[repeat(auto-fill,minmax(250px,1fr))] gap-4">
		<div class="grid gap-4">
			<h3 class="text-xl font-bold">With accent color</h3>
			<ProjectCard {...data.project_withAccent} />
		</div>
		<div class="grid gap-4">
			<h3 class="text-xl font-bold">Without accent color</h3>
			<ProjectCard {...data.project_withoutAccent} />
		</div>
	</div>
</div>

<h2 class="container mx-auto px-4 pb-4 text-3xl font-black">Header</h2>
{#snippet navBar()}
	<NavContener>
		<NavItem icon={ImagePlay} text="Click" onclick={() => alert('click')} />
		<NavItem icon={Pointer} text="Link" href="#" />
		<NavItem icon={QrCode} text="Hello" />
		<NavItem icon={History} text="Hello" selected />
		<NavItem icon={BadgeQuestionMark} text="Hello" />
	</NavContener>
{/snippet}
<h3 class="container mx-auto px-4 py-2 text-xl font-bold">With accent color</h3>
<Header project={data.project_withAccent}>
	{#snippet mainAction()}
		<MainAction
			variant="visit"
			href="#"
			withAccent
			text={m['actions.visit']({ name: data.project_withAccent.name })}
		/>
	{/snippet}
	{@render navBar()}
</Header>

<h3 class="container mx-auto mt-4 px-4 py-2 text-xl font-bold">Without accent color</h3>
<Header project={data.project_withoutAccent}>
	{#snippet mainAction()}
		<MainAction
			variant="visit"
			href="#"
			withAccent={false}
			text={m['actions.visit']({ name: data.project_withoutAccent.name })}
		/>
	{/snippet}
	{@render navBar()}
</Header>

<div class="container mx-auto mt-12 mb-4 px-4">
	<h2 class="pb-4 text-3xl font-black">Changelog</h2>

	<div class="grid grid-cols-[repeat(auto-fill,minmax(250px,1fr))] gap-4">
		<div class="grid gap-4">
			<h3 class="text-xl font-bold">Release type badges</h3>

			<div class="flex flex-wrap gap-2">
				<ReleaseTypeBadge type={ReleaseType.Alpha} />
				<ReleaseTypeBadge type={ReleaseType.Beta} />
				<ReleaseTypeBadge type={ReleaseType.Stable} />
			</div>
		</div>
	</div>

	<div class="mt-12">
		<h3 class="mb-6 text-2xl font-bold">Links tiles</h3>
		<div class="mb-4 flex gap-4">
			<ButtonGroup.Root>
				<Button
					variant={viewMode === 'grid' ? 'default' : 'secondary'}
					size="icon"
					class="p-5"
					onclick={() => (viewMode = 'grid')}
				>
					<LayoutGrid class="size-5.5" />
					<span class="sr-only">Grid</span>
				</Button>
				<Button
					variant={viewMode === 'list' ? 'default' : 'secondary'}
					size="icon"
					class="p-5"
					onclick={() => (viewMode = 'list')}
				>
					<List class="size-5.5" />
					<span class="sr-only">List</span>
				</Button>
			</ButtonGroup.Root>
			<ButtonGroup.Root>
				<Button variant="outline" size="icon" class="p-5" onclick={toggleViewMode}>
					<RefreshCcw class="size-5.5" />
					<span class="sr-only">Toggle view mode</span>
				</Button>
			</ButtonGroup.Root>
		</div>
		<div class="grid grid-cols-2 gap-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 xl:grid-cols-6">
			{#each Object.values(LinkType) as type}
				<LinkTile link={{ label: type, url: '#this-is-not-a-link', type }} display={viewMode} />
			{/each}
		</div>
	</div>
</div>
