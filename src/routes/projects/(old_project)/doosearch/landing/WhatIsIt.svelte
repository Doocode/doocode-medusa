<script lang="ts">
	import { SearchCheck } from '@lucide/svelte/icons';
	import Heading from '$lib/page/Heading.svelte';
	import { ListContainer as Ul, ListItem as Li } from '$lib/page';
	import { staticImages as imgs, searchImages as images } from '../gallery/landing';
	import { Slideshow } from '$lib/slideshow';
	import { m } from '$lib/paraglide/messages';

	let slideIndex = $state(0);
	let openSlideshow = $state(false);

	function onItemClick(event: Event, index: number) {
		event.preventDefault();
		openSlideshow = true;
		slideIndex = index;
	}
</script>

<div class="grid">
	<div class="grid items-center gap-8 md:grid-cols-2">
		<div class="row-start-2 grid gap-4 md:row-start-1 lg:col-start-1">
			<Heading
				level="h2"
				class="text-balance"
				icon={SearchCheck}
				title={m['projects.doosearch.landing.what_is_it.title']()}
			/>
			<Ul>
				<Li>{@html m['projects.doosearch.landing.what_is_it.list.search_engines']()}</Li>
				<Li>{m['projects.doosearch.landing.what_is_it.list.multi_search']()}</Li>
				<Li>{m['projects.doosearch.landing.what_is_it.list.customization']()}</Li>
				<Li>{m['projects.doosearch.landing.what_is_it.list.cross_platform']()}</Li>
			</Ul>
		</div>

		<div
			class="
            relative row-start-0 flex items-center md:row-start-1
            md:mx-auto md:mr-12 md:-ml-12 md:justify-center
            lg:col-start-2 lg:row-end-3
            lg:ml-0 [&_img]:rotate-x-15
            [&_img]:-rotate-y-15 [&_img]:rounded-md [&_img]:ring-4
            [&_img]:ring-background [&_img]:hover:ring-primary
            md:[&_img]:ring-6 [&_img]:lg:rounded-b-2xl xl:[&_img]:ring-8
        "
		>
			<a
				href={imgs.Img_Search_PC}
				target="_blank"
				rel="noopener noreferrer"
				role="button"
				tabindex="0"
				onclick={(e) => onItemClick(e, 0)}
			>
				<img src={imgs.Img_Search_PC} class="w-[80vw]" alt="Doosearch search page on a PC screen" />
			</a>
			<a
				href={imgs.Img_Search_Mobile}
				target="_blank"
				role="button"
				tabindex="0"
				onclick={(e) => onItemClick(e, 1)}
				rel="noopener noreferrer"
				class="absolute top-4 right-0 md:-right-8"
			>
				<img
					src={imgs.Img_Search_Mobile}
					class="w-[25vw] md:w-30 lg:w-40 xl:w-50"
					alt="Doosearch search page on a mobile screen"
				/>
			</a>
		</div>

		<div
			class="rounded-2xl bg-primary/20 p-4 text-balance md:col-start-1 md:col-end-3 md:mx-auto md:max-w-160 md:p-8 lg:col-end-2 lg:mx-0 lg:mt-4 2xl:-ml-8 dark:bg-[#5e3416]"
			id="definition_01"
		>
			<p>{m['projects.doosearch.landing.what_is_it.definition.main']()}</p>

			<div class="mt-10 mb-4 h-1.5 w-16 rounded-full bg-primary"></div>
			<p class="text-sm">
				{@html m['projects.doosearch.landing.what_is_it.definition.asterisk']()}
			</p>
		</div>
	</div>

	<Slideshow {images} bind:open={openSlideshow} bind:index={slideIndex} />
</div>
