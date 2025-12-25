<script lang="ts">
	import { setLocale } from '$lib/paraglide/runtime';
	import { m } from '$lib/paraglide/messages.js';
	import Button from '$lib/components/ui/button/button.svelte';
</script>

<svelte:head>
	<title>Paraglide Demo</title>
</svelte:head>

<h1 class="text-3xl font-bold">Paraglide i18n Demo</h1>
<p>{m.hello_world({ name: 'Doocode User' })}</p>
<div>
	<Button onclick={() => setLocale('en')}>en</Button>
	<Button onclick={() => setLocale('fr')}>fr</Button>
</div>
<p>
	If you use VSCode, install the
	<a
		href="https://marketplace.visualstudio.com/items?itemName=inlang.vs-code-extension"
		target="_blank"
	>
		Sherlock i18n extension
	</a>
	for a better i18n experience.
</p>
