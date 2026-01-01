<script lang="ts">
    import type { PageProps } from './$types';
    import {
        ArrowUp01, ArrowRight, BrushCleaning, Info,
        MessageCircleQuestionMark, MonitorSmartphone,
        PackageSearch, SearchCheck, ImagePlay
    } from '@lucide/svelte/icons';
    import Heading from '$lib/page/Heading.svelte';
    import { Specs } from '$routes/projects/specs';
    import {
        ListContainer as Ul,
        ListItem as Li
    } from "$lib/page";
    import { currentLogo } from './gallery/logo';
	import CrossPlaform from './gallery/svg/CrossPlaform.svelte';
	import { customize } from './gallery/homepage';
	import { Button } from '$lib/components/ui/button';
	import MultiSearch from './gallery/svg/MultiSearch.svelte';
	import { Gallery } from '$lib/gallery';
	import { mobile_images, pc_images } from './gallery/screen/v1.3';

    let { data }: PageProps = $props();
</script>

<div class="max-w-7xl mx-auto px-4 py-8 grid gap-18">
    <div class="grid gap-4">
        <div class="grid gap-8 md:grid-cols-2 items-center">
            <div class="grid gap-4">
                <Heading level="h2" class="text-balance"
                    icon={SearchCheck}
                    title="Qu'est-ce que Doosearch ?"
                />
                <Ul>
                    <Li>Une sélection de plus de 100 <a href="#definition_01" class="underline">moteurs de recherche</a>*</Li>
                    <Li>Executer une requête sur plusieurs sites web en simultané</Li>
                    <Li>La personnalisation du fond d'écran et de couleur du thème</Li>
                    <Li>Utilisable depuis votre PC, tablette et smartphone</Li>
                </Ul>
            </div>

            <img src={ currentLogo }
                class="hidden md:flex w-90 lg:w-120 lg:row-start-1 lg:row-end-3 lg:col-start-2 mx-auto"
                alt="Current Doosearch logo">

            <div class="md:col-start-1 md:col-end-3 md:max-w-160 md:mx-auto lg:mx-0 lg:col-end-2 lg:mt-4 bg-primary/20 dark:bg-[#5e3416] p-4 md:p-8 rounded-2xl text-balance 2xl:-ml-8" id="definition_01">
                <p>Doosearch est une page web vous offrant la possibilité de lancer une recherche vers plus de 100 moteurs de recherche* différents (dont Google, Bing, DuckDuckGo et Qwant).</p>

                <div class="bg-primary h-1.5 w-16 rounded-full mt-10 mb-4"></div>
                <p class="text-sm">* Un <strong class="text-primary">moteur de recherche</strong> est un outil mis à disposition par un site web pour trouver plus rapidement des informations sur internet. Il présente par la suite les résultats obtenus en fonction des mots clés saisis.</p>
            </div>
        </div>

        <!-- TODO: gallery image -->
    </div>



    <div class="grid gap-8">
        <Heading level="h2"
            icon={Info}
            title="Quelques points clés"
        />

        <Specs project={data.project} />
    </div>



    <div class="grid gap-8 md:grid-cols-2 items-center">
        <img src={ currentLogo }
            class="hidden md:flex w-90 lg:w-120 mx-auto"
            alt="Current Doosearch logo">

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



    <div class="grid gap-4">
        <Heading level="h2"
            icon={ImagePlay}
            title="Doosearch en action"
        />
        <p class="mb-6">Parce que une image vaut mille mots, voici quelques captures d’écran de Doosearch en action.</p>

        <div class="-mx-4">
            <Gallery size="large" images={ [...pc_images, ...mobile_images] } />
        </div>
    </div>



    <div class="grid gap-8 md:grid-cols-2 items-center">
        <div class="grid gap-4">
            <Heading level="h2"
                icon={ArrowUp01}
                title="Plus de 100 moteurs de recherche"
            />
            <p>Vous avez le tournis, pas vrai ? Il y en a pour tous les goûts. Il y a des moteurs spécialisés dans le high-tech, le commerce en ligne et même pour la cuisine. Vous pouvez également tentez de retrouver une personne de votre famille sur les différents réseaux sociaux que vous connaissez.</p>

            <!-- TODO: image de nuage/bulles flottantes et animés de moteurs -->
        </div>

        <img src={ currentLogo }
            class="hidden md:flex w-90 lg:w-100 mx-auto"
            alt="Current Doosearch logo">
    </div>



    <div class="grid gap-8 md:grid-cols-2 items-center md:pb-12">
        <MultiSearch class="h-50 w-50 md:h-auto md:w-full aspect-square max-w-70 max-h-70 m-auto -rotate-6" />

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



    <div class="grid gap-8 md:gap-12 md:grid-cols-2 items-center">
        <div class="grid gap-4">
            <Heading level="h2"
                icon={BrushCleaning}
                title="Une page à votre image"
            />
            <p>Laissez votre personnalité s’exprimer. Adieu le fond monotone et austère de votre navigateur. Place à de la couleur vivantes, pétillantes voir même pastel. Et pourquoi ne pas mettre une image en fond d'écran ? Je parie que vous allez opter pour un fond d’écran original et unique.</p>
        </div>

        <img src={customize} alt="Gif de personnalisation du fond d'écran et du thème de Doosearch"
            class="w-full rounded-xl shadow-lg border border-foreground/20 md:rotate-6" />
    </div>



    <div class="grid gap-4  lg:gap-8 md:grid-cols-2 items-center">
        <!-- TODO: illustration
            - svg animation morphose : PC, tablette et smartphone
            - css animation : rotation 3d prisme (3 faces : PC, tablette, smartphone)
        -->
        <CrossPlaform class="w-full lg:h-120 -mb-8" />

        <div class="grid gap-4">
            <Heading level="h2"
                icon={MonitorSmartphone}
                title="Partout avec vous"
            />
            <p>Vous êtes du genre clavier/souris ou smartphone/tablette ? Doosearch est parfaitement adapté pour une utilisation sur PC, tablette et smartphone, car il a été pensé pour. Une seule et même adresse URL suffit pour tous vos appareils.</p>
        </div>
    </div>
</div>