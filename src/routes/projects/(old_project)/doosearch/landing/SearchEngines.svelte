<script lang="ts">
    import { ArrowUp01 } from '@lucide/svelte/icons';
    import Heading from '$lib/page/Heading.svelte';
    import { currentLogo } from '../gallery/logo';
    import { m } from "$lib/paraglide/messages";
</script>

<div class="grid gap-8 md:grid-cols-2 items-center">
    <div class="grid gap-4">
        <Heading level="h2"
            icon={ArrowUp01}
            title={m['projects.doosearch.landing.search_engines.title']()}
        />
        <p>{m['projects.doosearch.landing.search_engines.description']()}</p>
    </div>

    <!-- TODO: image de nuage/bulles flottantes et animés de moteurs -->

    <img src={ currentLogo }
        class="hidden md:flex w-90 lg:w-100 mx-auto"
        alt="Current Doosearch logo" />
</div>
