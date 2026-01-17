<script lang="ts">
    import { PackageSearch, ArrowRight } from '@lucide/svelte/icons';
    import Heading from '$lib/page/Heading.svelte';
    import { Button } from '$lib/components/ui/button';
    import { videos } from '../gallery/screen/v1.3.2';
    import { m } from "$lib/paraglide/messages";
</script>

<div class="grid gap-8 md:grid-cols-2 items-center md:pb-12">
    <video
        class="pointer-events-auto max-w-full max-h-full object-contain rounded-lg md:rounded-xl"
        src={videos.Vid_PC_05}
        title={"Selecting several search engines"}
        controls autoplay loop muted
        preload="metadata"
    >
        <track kind="captions" />
    </video>

    <div class="grid gap-4">
        <Heading level="h2"
            icon={PackageSearch}
            title={m['projects.doosearch.landing.multi_search.title']()}
        />
        <p>{m['projects.doosearch.landing.multi_search.description']()}</p>

        <!-- TODO: img static/gif de demonstation -->
        <!-- TODO: liste des étapes claires -->
        <!-- TODO: lien youtube (pas embed) -->

        <nav class="hidden _flex flex-wrap gap-4 md:mt-4">
            <Button
                href="https://www.youtube.com/watch?v=2hxLgtrusjI"
                target="_blank"
                rel="noopener noreferrer"
                class="rounded-full"
            >
                <ArrowRight class="w-5! h-5!" />
                {m['projects.doosearch.landing.multi_search.watch_video']()}
            </Button>
        </nav>
    </div>
</div>
