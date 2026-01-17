<script lang="ts">
    import { MonitorSmartphone } from '@lucide/svelte/icons';
    import Heading from '$lib/page/Heading.svelte';
    import { CrossPlatform } from '../gallery/svg';
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
            title="Partout avec vous"
        />
        <p>Vous êtes du genre clavier/souris ou smartphone/tablette ? Doosearch est parfaitement adapté pour une utilisation sur PC, tablette et smartphone, car il a été pensé pour. Une seule et même adresse URL suffit pour tous vos appareils.</p>
    </div>
</div>
