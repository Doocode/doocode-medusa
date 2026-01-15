import { ReleaseType, type Release } from "$routes/projects/projects.types";
import { links } from "../data/links";
import {
    v1_3_2 as screens_v1_3_2,
    v1_3_0 as screens_v1_3_0,
    v1_2 as screens_v1_2
} from "../gallery/screen";

export const v1_3_2: Release = {
    releaseDate: new Date('2018-09-20'),
    versionNumber: 26,
    versionString: 'v1.3.2',
    type: ReleaseType.Stable,
    description: 'Quelques améliorations de la stabilité et corrections de bugs.',
    features: [
        "Support de la traduction vers l'anglais",
        "Ajout du thème sombre",
        "Ajout d'un QR Code pour ouvrir le site sur mobile",
    ],
    improvements: [
        "Passage du site web en HTTPS",
        "Sites web épinglés : Nouvelle interface de saisie/modification d'un site web épinglé",
        "Premier lancement : Nouvelle interface avec l'ajout d'une navigation par étapes (pointillés et sections)",
        "Premier lancement : Ajout d'une page pour expliquer le fonctionnement du LocalStorage",
        "Moteurs de recherche : Renommage de \"OC\" en \"Open Classrooms\"",
        "Mise à jour des logos de certains moteurs de recherche",
    ],
    bugfixes: [
        "Bugfix : Paramètres écrasés lors de la mise à jour depuis une version antérieure",
        "Moteurs de recherche : lister les moteurs selectionnés en utilisant le mot-cle \"séléctionné\"",
        "Réparation des urls de certains moteurs de recherche",
        "Améliorations de la stabilité et corrections de bugs."
    ],
    removedFeatures: [
        "Suppression de la dépendance Animate.css",
        "Suppression de la police \"Roboto\""
    ],
    images: [...screens_v1_3_2],
    links
};

export const v1_3_1: Release = {
    releaseDate: new Date('2018-08-20'),
    versionNumber: 25,
    versionString: 'v1.3.1',
    type: ReleaseType.Stable,
    description: 'Mise à jour corrective de la version 1.3',
    features: [
        "Paramètres : Ajout d'un réglage pour régler la luminosité du fond d'écran",
    ],
    improvements: [
        "Responsivité mobile : Page \"Recherche\" et \"Paramètres\" améliorées",
        "Page d'accueil : Remplacement de certaines images animés par des vidéos YouTube"
    ],
    bugfixes: [
    ],
    removedFeatures: [
        "Suppression de la page \"Découvrir Doosearch\""
    ],
    //images: [...screens_v1_3_1],
};

export const v1_3_0: Release = {
    releaseDate: new Date('2018-07-20'),
    versionNumber: 24,
    versionString: 'v1.3.0',
    type: ReleaseType.Stable,
    description: 'La dernière grosse mise à jour de Doosearch',
    features: [
        "Nouvelle interface graphique avec une barre de recherche opaque",
        "Permettre de lancer une recherche sur plusieurs sites web en simultanée",
        "Possibilité d'épingler des moteurs de recherches dans les favoris",
        "Choix d'une image comme fond d'écran",
        "Nouveau menu contextuel (clic droit) sur un moteur de recherche",
        "Ajout de plusieurs moteurs de recherche supplémentaires",
        "Nouvelle page \"Accès rapide\" pour épingler des sites web",
        "Création d'une page d'introduction lors du premier lancement",
        "Ajout d'une barre de recherche pour filtrer un moteur de recherche",
        "Ajout d'options pour choisir le comportement après la validation de la recherche"
    ],
    improvements: [
        "Plus de choix dans la liste des couleurs de fond d'écran et de thème",
        "Mise en surbrillance du moteur de recherche sélectionné dans la liste",
        "Amélioration de la responsivité mobile",
    ],
    removedFeatures: [],
    images: [...screens_v1_3_0],
};

export const v1_2: Release = {
    releaseDate: new Date('2015-12-25'),
    versionNumber: 23,
    versionString: 'v1.2.0',
    type: ReleaseType.Stable,
    description: 'Ajout de nouvelles fonctionnalités',
    bugfixes: [],
    features: [
        "Ajout d'une page de paramètres : choix du moteur de recherche par défaut",
        "Personnalisation du fond d'écran : choix des couleurs de l'interface",
        "Nouvelles options d'affichage des moteurs de recherche : en liste ou en grille",
        "Création d'un menu contextuel sur la liste des moteurs de recherche"
    ],
    improvements: [],
    removedFeatures: [],
    images: [...screens_v1_2],
};

export const releases: Release[] = [
    v1_3_2, v1_3_1, v1_3_0, v1_2
];
