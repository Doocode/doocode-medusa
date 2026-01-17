<script lang="ts">
    import { MonitorSmartphone } from '@lucide/svelte/icons';
    import Heading from '$lib/page/Heading.svelte';
    import { CrossPlatform } from '../gallery/svg';
    import { m } from "$lib/paraglide/messages";
</script>

<div class="grid gap-4  lg:gap-8 md:grid-cols-2 items-center">
    <!-- TODO: illustration
        - svg animation morphose : PC, tablette et smartphone
        - css animation : rotation 3d prisme (3 faces : PC, tablette, smartphone)
    -->
    <CrossPlatform class="w-full lg:h-120 -mb-8" />

    <div class="grid gap-4">
        <Heading level="h2"
            icon={MonitorSmartphone}
            title={m['projects.doosearch.landing.everywhere.title']()}
        />
        <p>{m['projects.doosearch.landing.everywhere.description']()}</p>
    </div>
</div>
