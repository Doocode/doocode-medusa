<script lang="ts">
    import { SearchCheck } from '@lucide/svelte/icons';
    import Heading from '$lib/page/Heading.svelte';
    import {
        ListContainer as Ul,
        ListItem as Li
    } from "$lib/page";
	import {
        staticImages as imgs,
        searchImages as images
    } from '../gallery/landing';
    import { Slideshow } from '$lib/slideshow';
    import { m } from "$lib/paraglide/messages";

    let slideIndex = $state(0);
    let openSlideshow = $state(false);

    function onItemClick(event: Event, index: number) {
        event.preventDefault();
        openSlideshow = true;
        slideIndex = index;
    }
</script>

<div class="grid">
    <div class="grid gap-8 md:grid-cols-2 items-center">
        <div class="grid gap-4 row-start-2 md:row-start-1 lg:col-start-1">
            <Heading level="h2" class="text-balance"
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

        <div class="
            flex md:justify-center items-center md:mx-auto relative
            row-start-0 md:row-start-1 lg:row-end-3 lg:col-start-2
            [&_img]:rounded-md [&_img]:lg:rounded-b-2xl
            [&_img]:rotate-x-15 [&_img]:-rotate-y-15
            [&_img]:ring-4 md:[&_img]:ring-6 xl:[&_img]:ring-8
            [&_img]:ring-background [&_img]:hover:ring-primary
            md:-ml-12 md:mr-12 lg:ml-0
        ">
            <a href={imgs.Img_Search_PC}
                target="_blank"
                rel="noopener noreferrer"
                role="button"
                tabindex="0"
                onclick={(e) => onItemClick(e, 0)}
            >
                <img src={imgs.Img_Search_PC}
                    class="w-[80vw]"
                    alt="Doosearch search page on a PC screen" />
            </a>
            <a href={imgs.Img_Search_Mobile}
                target="_blank"
                role="button"
                tabindex="0"
                onclick={(e) => onItemClick(e, 1)}
                rel="noopener noreferrer" class="absolute right-0 md:-right-8 top-4"
            >
                <img src={imgs.Img_Search_Mobile}
                    class="w-[25vw] md:w-30 lg:w-40 xl:w-50"
                    alt="Doosearch search page on a mobile screen" />
            </a>
        </div>

        <div class="md:col-start-1 md:col-end-3 md:max-w-160 md:mx-auto lg:mx-0 lg:col-end-2 lg:mt-4 bg-primary/20 dark:bg-[#5e3416] p-4 md:p-8 rounded-2xl text-balance 2xl:-ml-8" id="definition_01">
            <p>{m['projects.doosearch.landing.what_is_it.definition.main']()}</p>

            <div class="bg-primary h-1.5 w-16 rounded-full mt-10 mb-4"></div>
            <p class="text-sm">{@html m['projects.doosearch.landing.what_is_it.definition.asterisk']()}</p>
        </div>
    </div>

    <Slideshow {images}
        bind:open={openSlideshow}
        bind:index={slideIndex} />
</div>