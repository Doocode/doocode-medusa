<script lang="ts">
	interface Props {
		color?: string;
	}

	let { color = $bindable('#3b82f6') }: Props = $props();

	const colors = [
		'#ef4444', // red
		'#f97316', // orange
		'#f59e0b', // amber
		'#eab308', // yellow
		'#84cc16', // lime
		'#22c55e', // green
		'#14b8a6', // teal
		'#06b6d4', // cyan
		'#3b82f6', // blue
		'#6366f1', // indigo
		'#a855f7', // purple
		'#ec4899' // pink
	];
</script>

<div
	class="grid grid-cols-4 place-content-center content-center items-center justify-center gap-1 min-[400px]:grid-cols-6 xl:grid-cols-12"
>
	{#each colors as colorOption}
		<button
			type="button"
			class={{
				'relative aspect-square h-12 w-12 rounded-lg transition-all hover:scale-110 focus:ring-2 focus:ring-foreground focus:ring-offset-2 focus:outline-none': true,
				'z-10 scale-110 ring-2 ring-foreground ring-offset-2': color === colorOption
			}}
			style="background-color: {colorOption}"
			onclick={() => (color = colorOption)}
		>
			{#if color === colorOption}
				<span class="absolute inset-0 flex items-center justify-center">
					<svg
						class="h-6 w-6 text-white drop-shadow-lg"
						fill="none"
						stroke="currentColor"
						viewBox="0 0 24 24"
					>
						<path
							stroke-linecap="round"
							stroke-linejoin="round"
							stroke-width="3"
							d="M5 13l4 4L19 7"
						/>
					</svg>
				</span>
			{/if}
		</button>
	{/each}
</div>
