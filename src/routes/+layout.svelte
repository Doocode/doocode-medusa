<script lang="ts">
	import { page } from '$app/state';
	import { locales, localizeHref } from '$lib/paraglide/runtime';
	import './layout.css';
	import './fonts.css';
	import favicon from '$lib/assets/favicon.svg';
	import AppNavigation from '$lib/navig/AppNavigation.svelte';
	import { ModeWatcher } from 'mode-watcher';
	import Footer from '$lib/footer/Footer.svelte';
	import { isProjectDetailPath } from '$lib/navig/navig.helpers';

	let { children } = $props();
	let isProjectPage = $derived.by(() => isProjectDetailPath(page.url.pathname));
</script>

<svelte:head>
	{#if !isProjectPage}
		<link rel="icon" href={favicon} />
	{/if}
</svelte:head>

<ModeWatcher />
<AppNavigation />

{@render children()}

<div style="display:none">
	{#each locales as locale}
		<a href={localizeHref(page.url.pathname, { locale })}>
			{locale}
		</a>
	{/each}
</div>

<Footer />