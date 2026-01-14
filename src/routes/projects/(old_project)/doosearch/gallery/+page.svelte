<script lang="ts">
    import { m } from "$lib/paraglide/messages";
    import Heading from '$lib/page/Heading.svelte';

    import { DraftingCompass, PencilRuler, Fullscreen, Eye, EyeOff, History, Construction } from '@lucide/svelte/icons';

    import { logos } from './logo';
    import { v1_2, v1_3 } from "./screen";
    import { Gallery } from "$lib/gallery";
    import { bts, mockups } from "./bts";
    import { slide } from "svelte/transition";
    import Button from "$lib/components/ui/button/button.svelte";
    import { resolve } from "$app/paths";

    let displayOldVersion = $state(false);
</script>

<main class="container mx-auto pt-8 grid gap-16 [&_p]:text-balance">
    <div class="grid gap-2">
        <Heading level="h2" icon={Fullscreen} class="px-4"
            title={ m['projects.screenshots']() }
        />

        <h3 class="text-primary font-bold px-4 mt-6">Version actuelle</h3>
        <p class="px-4 -mt-1.5 mb-2">Captures d'écran de la <strong class="text-primary">version 1.3</strong></p>
        <Gallery images={ v1_3 } size="large" />

        <div class="grid gap-2 px-4 pt-8">
            <h3 class="text-primary font-bold">Ancienne version</h3>
            <p class="-mt-1.5 mb-2">Captures d'écran de la <strong class="text-primary">version 1.2</strong></p>

            <nav class="mb-2 flex flex-wrap items-center gap-2">
                <Button onclick={() => displayOldVersion = !displayOldVersion}>
                    {#if displayOldVersion}
                        <EyeOff class="w-5! h-5!" />
                        Masquer les images
                    {:else}
                        <Eye class="w-5! h-5!" />
                        Afficher les images
                    {/if}
                </Button>

                <Button variant="secondary" href={resolve('/projects/doosearch/history')}>
                    <History class="w-5! h-5!" />
                    Voir l'historique des versions
                </Button>
            </nav>
        </div>
        
        {#if displayOldVersion}
            <div transition:slide>
                <Gallery images={ v1_2 } />
            </div>
        {/if}
    </div>

    <div class="grid gap-4">
        <Heading level="h2" icon={PencilRuler} class="px-4"
            title={ m['projects.logos']() }
        />
        <Gallery images={ logos } />
    </div>

    <div class="grid gap-4">
        <Heading level="h2" icon={Construction} class="px-4"
            title={ m['projects.bts']() }
        />
        <Gallery images={ bts } />
    </div>

    <div class="grid gap-4">
        <Heading level="h2" icon={DraftingCompass} class="px-4"
            title={ m['projects.mockups']() }
        />
        <p class="px-4 -mt-2">Quelques explorations au sujet de l'interface qui était prévue pour la version 1.4 ou une éventuelle application mobile.</p>
        <Gallery images={ mockups } size="small" />
    </div>
</main>