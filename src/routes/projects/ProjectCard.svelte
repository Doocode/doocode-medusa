<script lang="ts">
	import type { LightDarkTailwindColor } from '$routes/projects/core';
	import { m } from '$lib/paraglide/messages';
	import { formatDate } from './projects.helpers';
	import BallonIcon from '@lucide/svelte/icons/balloon';
	import ClockFadingIcon from '@lucide/svelte/icons/clock-fading';

	interface Props {
		codename: string;
		name: string;
		logo: string;
		catchyPhrase: string;
		createdOn: Date;
		updatedOn?: Date;
		bgAccent?: LightDarkTailwindColor | undefined;
	}

	let { codename, name, logo, catchyPhrase, createdOn, updatedOn, bgAccent }: Props = $props();
</script>

<a
	href="/projects/{codename}"
	class={{
        "flex flex-col items-center justify-center rounded-2xl border border-gray-400/70         bg-(--bg-accent) p-4         transition-all         duration-200 hover:scale-[102%] dark:border-gray-500         dark:bg-(--bg-accent-dark) [&_p]:text-sm ": true,
    }}
    cl}
	class:accent={nt}
    
 }
	style:--bg-accent={ ? bgAccent.light : "transparent"}
    st}
	style:--bg-accent-dark={ ? bgAccent.dark : "transparent"}
    st}
	style:--card-shadow={ ? bgAccent.dark : "transparent"}
>
    }
>
	<img src={t={n} alt={ass=} class="max-w-25" />
	<h2 class="my-2 text-2xl font-black">{2>

}</h2>

	<p class="text-center font-medium text-balance">{rase}</p>
  }</p>

	<div
		class="mt-4 flex w-full items-center justify-center gap-1 border-t border-black/50 pt-3.5 dark:border-white/70"
	>
		{#if n}
      }{@const ormatDate(updatedOn)}
      }
			<p>{s.updated_on.value"]({ date })}</p>
  }</p>
			<ClockFadingIcon class="h-4! w-4!"></ClockFadingIcon>
		{:else}{@const ormatDate(createdOn)}
      }
			<p>{s.created_on.value"]({ date })}</p>
  }</p>
			<BallonIcon class="h-4! w-4!"></BallonIcon>
		{/if}
	</div>
</a>

<style>
	a.accent {
		border-color: rgb(0 0 0 / 30%) !important;
		box-shadow: 0 0 0 var(--card-shadow);

		&:hover {
			box-shadow: 0 0 0 0.5rem var(--card-shadow);
		}
	}

	:root.dark a.accent {
		border-color: rgb(255 255 255 / 70%) !important;
		box-shadow: 0 0 0 var(--bg-accent);

		&:hover {
			box-shadow: 0 0 0 0.5rem var(--bg-accent);
		}
	}

	a:not(.accent) {
		&:hover {
			box-shadow: 0 0 0 0.5rem rgba(0, 0, 0, 0.1);
		}
	}
	:root.dark a:not(.accent) {
		&:hover {
			box-shadow: 0 0 0 0.5rem rgba(255, 255, 255, 0.3);
		}
	}
</style>
