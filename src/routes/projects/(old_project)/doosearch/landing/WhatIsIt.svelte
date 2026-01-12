<script lang="ts">
    import { SearchCheck } from '@lucide/svelte/icons';
    import Heading from '$lib/page/Heading.svelte';
    import {
        ListContainer as Ul,
        ListItem as Li
    } from "$lib/page";
	import { staticImages } from '../gallery/landing';
</script>

<div class="grid gap-4">
    <div class="grid gap-8 md:grid-cols-2 items-center">
        <div class="grid gap-4 row-start-2 md:row-start-1 lg:col-start-1">
            <Heading level="h2" class="text-balance"
                icon={SearchCheck}
                title="Qu'est-ce que Doosearch ?"
            />
            <Ul>
                <Li>Une sélection de plus de 100 <a href="#definition_01" class="text-primary hover:underline">moteurs de recherche</a>*</Li>
                <Li>Executer une requête sur plusieurs sites web en simultané</Li>
                <Li>La personnalisation du fond d'écran et de couleur du thème</Li>
                <Li>Utilisable depuis votre PC, tablette et smartphone</Li>
            </Ul>
        </div>

        <!-- TODO: Use slideshow -->
        <div class="
            flex md:justify-center items-center md:mx-auto relative
            row-start-0 md:row-start-1 lg:row-end-3 lg:col-start-2
            [&_img]:rounded-md [&_img]:lg:rounded-b-2xl
            [&_img]:rotate-x-15 [&_img]:-rotate-y-15
            [&_img]:ring-4 md:[&_img]:ring-6 xl:[&_img]:ring-8
            [&_img]:ring-background [&_img]:hover:ring-primary
        ">
            <a href={staticImages.Img_Search_PC} target="_blank" rel="noopener noreferrer">
                <img src={staticImages.Img_Search_PC}
                    class="w-[80vw]"
                    alt="Doosearch search page on a PC screen" />
            </a>
            <a href={staticImages.Img_Search_Mobile} target="_blank" rel="noopener noreferrer" class="absolute right-0 md:-right-8 top-4">
                <img src={staticImages.Img_Search_Mobile}
                    class="w-[25vw] md:w-30 lg:w-40 xl:w-50"
                    alt="Doosearch search page on a mobile screen" />
            </a>
        </div>

        <div class="md:col-start-1 md:col-end-3 md:max-w-160 md:mx-auto lg:mx-0 lg:col-end-2 lg:mt-4 bg-primary/20 dark:bg-[#5e3416] p-4 md:p-8 rounded-2xl text-balance 2xl:-ml-8" id="definition_01">
            <p>Doosearch est une page web vous offrant la possibilité de lancer une recherche vers plus de 100 moteurs de recherche* différents (dont Google, Bing, DuckDuckGo et Qwant).</p>

            <div class="bg-primary h-1.5 w-16 rounded-full mt-10 mb-4"></div>
            <p class="text-sm">* Un <strong class="text-primary">moteur de recherche</strong> est un outil mis à disposition par un site web pour trouver plus rapidement des informations sur internet. Il présente par la suite les résultats obtenus en fonction des mots clés saisis.</p>
        </div>
    </div>
</div>