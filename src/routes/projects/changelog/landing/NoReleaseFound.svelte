<script lang="ts">
	import { SearchX, BrushCleaning } from '@lucide/svelte/icons';
	import { Button } from '$lib/components/ui/button';
	import { m } from '$lib/paraglide/messages';

	interface Props {
		searchValue?: string;
	}

	let { searchValue = $bindable('') }: Props = $props();
</script>

<div
	class="flex flex-col items-center justify-center rounded-2xl border-2 border-dashed bg-muted/20 py-24 text-center"
>
	<div class="relative mb-6">
		<SearchX class="relative z-10 size-20 text-primary" />
	</div>

	<h3 class="mb-2 text-2xl font-bold">{m['status.search.no_results_title']()}</h3>

	<p class="mb-8 max-w-md text-sm text-balance text-muted-foreground">
		{m['status.search.no_results_desc']({ query: searchValue })}
	</p>

	<Button size="lg" onclick={() => (searchValue = '')}>
		<BrushCleaning class="size-5!" />
		{m['actions.clear_search']()}
	</Button>
</div>
