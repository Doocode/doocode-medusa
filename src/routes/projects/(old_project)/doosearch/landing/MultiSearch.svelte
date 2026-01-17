<script lang="ts">
    import { PackageSearch, ArrowRight } from '@lucide/svelte/icons';
    import Heading from '$lib/page/Heading.svelte';
    import { Button } from '$lib/components/ui/button';
    import { videos } from '../gallery/screen/v1.3.2';
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
            title="Rechercher en simultanée"
        />
        <p>Saviez-vous que vous pouvez lancer une recherche sur plusieurs sites web en simultané facilement. Promis, vous n’auriez pas de copier-coller à réaliser, c’est assez simple en réalité. Vous avez à sélectionner les moteurs de recherche cible juste avant d’exécuter votre requête. Pour en choisir plusieurs, vous devez faire un clic droit sur le logo du moteur pour ensuite cliquer sur « Ajouter ce moteur ».</p>

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
                Voir la vidéo sur YouTube
            </Button>
        </nav>
    </div>
</div>
