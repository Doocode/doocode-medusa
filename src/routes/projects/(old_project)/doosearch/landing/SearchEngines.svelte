<script lang="ts">
    import { ArrowUp01 } from '@lucide/svelte/icons';
    import Heading from '$lib/page/Heading.svelte';
    import { currentLogo } from '../gallery/logo';
</script>

<div class="grid gap-8 md:grid-cols-2 items-center">
    <div class="grid gap-4">
        <Heading level="h2"
            icon={ArrowUp01}
            title="Plus de 100 moteurs de recherche"
        />
        <p>Vous avez le tournis, pas vrai ? Il y en a pour tous les goûts. Il y a des moteurs spécialisés dans le high-tech, le commerce en ligne et même pour la cuisine. Vous pouvez également tentez de retrouver une personne de votre famille sur les différents réseaux sociaux que vous connaissez.</p>
    </div>

    <!-- TODO: image de nuage/bulles flottantes et animés de moteurs -->

    <img src={ currentLogo }
        class="hidden md:flex w-90 lg:w-100 mx-auto"
        alt="Current Doosearch logo" />
</div>
