<script lang="ts">
    import { MessageCircleQuestionMark } from '@lucide/svelte/icons';
    import Heading from '$lib/page/Heading.svelte';
    import { currentLogo } from '../gallery/logo';
</script>

<div class="grid gap-8 md:grid-cols-2 items-center">
    <img src={ currentLogo }
        class="hidden md:flex w-90 lg:w-120 mx-auto"
        alt="Current Doosearch logo" />

    <div class="grid gap-4">
        <Heading level="h2"
            icon={MessageCircleQuestionMark}
            title="Comment ça fonctionne ?"
        />
        <p>Vous saisissez votre requête et Doosearch se charge de le transmettre à votre site web cible. Vous aurez juste besoin de définir vos moteurs de recherche cible (les site web auxquels vous souhaitez interroger), parmi la centaine proposée, et Doosearch se chargera de les transmettre.</p>

        <p>Information : Nos serveurs ne conservent aucune info concernant vos recherches.</p>

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
