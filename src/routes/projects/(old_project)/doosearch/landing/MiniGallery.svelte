<script lang="ts">
	import { Heading, ListContainer as Ul, ListItem as Li } from '$lib/page';
	import { Gallery } from '$lib/gallery';
	import { m } from '$lib/paraglide/messages';
	import { ArrowRight, ImagePlay } from '@lucide/svelte/icons';
	import { mobile_images, pc_images } from '../gallery/screen/v1.3.2';
</script>

<main class="-mx-4 grid gap-px md:grid-cols-3 lg:grid-cols-5">
	<div
		class="grid gap-4 rounded-t-3xl bg-amber-200 pt-3
    sm:pt-8 sm:pb-4
    md:col-span-2 md:overflow-clip md:rounded-l-4xl
    md:rounded-r-none lg:col-span-3 xl:col-span-4 dark:bg-amber-900"
	>
		<Heading
			level="h2"
			class="px-4 sm:px-8"
			icon={ImagePlay}
			title={m['projects.doosearch.landing.mini_gallery.title']()}
		/>
		<p class="px-4 sm:px-8">{m['projects.doosearch.landing.mini_gallery.description']()}</p>

		<div class="-mx-4 px-4">
			<Gallery
				images={[...pc_images, ...mobile_images]}
				classHeader="sm:px-8"
				classGallery="sm:px-8"
			/>
		</div>
	</div>
	<div
		class="flex flex-col items-start justify-between gap-8
        rounded-b-3xl bg-secondary/50
        p-4 transition-colors
        duration-150 hover:bg-pink-200
        md:rounded-l-none md:rounded-r-4xl lg:col-span-2 xl:col-span-1
        dark:bg-secondary dark:hover:bg-green-900"
	>
		<div
			class="grid gap-4 md:gap-6 md:p-4 [&_a]:py-1.25 [&_a]:hover:text-primary [&_a]:hover:underline"
		>
			<Heading level="h3" icon={ImagePlay} title={m['projects.gallery']()} />
			<Ul>
				<Li><a href="/projects/doosearch/gallery#screenshots">{m['projects.screenshots']()}</a></Li>
				<Li><a href="/projects/doosearch/gallery#bts">{m['projects.bts']()}</a></Li>
				<Li><a href="/projects/doosearch/gallery#mockups">{m['projects.mockups']()}</a></Li>
				<Li><a href="/projects/doosearch/gallery#logos">{m['projects.logos']()}</a></Li>
			</Ul>
		</div>
		<a href="/projects/doosearch/gallery" class="group ml-auto flex items-center gap-3">
			<span class="text-end text-balance text-primary group-hover:underline"
				>{m['projects.doosearch.landing.mini_gallery.link']()}</span
			>
			<div
				class="flex size-10 shrink-0 items-center justify-center rounded-full bg-primary text-primary-foreground"
			>
				<ArrowRight />
			</div>
		</a>
	</div>
</main>

<style>
	main {
		--muted-foreground: var(--foreground);
	}
</style>
