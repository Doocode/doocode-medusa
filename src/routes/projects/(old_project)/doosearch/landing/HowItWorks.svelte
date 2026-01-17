<script lang="ts">
    import { MessageCircleQuestionMark } from '@lucide/svelte/icons';
    import Heading from '$lib/page/Heading.svelte';
    import { currentLogo } from '../gallery/logo';
    import { m } from "$lib/paraglide/messages";
</script>

<div class="grid gap-8 md:grid-cols-2 items-center">
    <img src={ currentLogo }
        class="hidden md:flex w-90 lg:w-120 mx-auto"
        alt="Current Doosearch logo" />

    <div class="grid gap-4">
        <Heading level="h2"
            icon={MessageCircleQuestionMark}
            title={m['projects.doosearch.landing.how_it_works.title']()}
        />
        <p>{m['projects.doosearch.landing.how_it_works.description']()}</p>

        <p>{m['projects.doosearch.landing.how_it_works.info']()}</p>

        <!-- TODO: img fonctionnement schema -->
        <!-- TODO: liens assistance
            - Permission d’ouvrir plusieurs onglets
            - Problème avec certains moteurs de recherche
                - Url non supportée (GET/POST)
                - Url perimée
                - Caractère spéciaux non supportés
        -->
    </div>
</div>
