<script lang="ts">
    import type { TwColor } from "./projects";
    import { m } from "$lib/paraglide/messages";
    import { getLocale } from "$lib/paraglide/runtime";
    import BallonIcon from "@lucide/svelte/icons/balloon";
    import ClockFadingIcon from "@lucide/svelte/icons/clock-fading";

    interface Props {
        codename: string;
        name: string;
        logo: string;
        catchyPhrase: string;
        createdAt: Date;
        updatedAt?: Date;
        bgAccent?: TwColor | undefined;
    }

    let { codename, name, logo, catchyPhrase, createdAt, updatedAt, bgAccent }: Props = $props();

    const dateFormat: Intl.DateTimeFormatOptions = {
        year: 'numeric',
        month: 'long',
        day: 'numeric',
    };
</script>

<a
    href="/projects/{codename}"

    class={{
        "flex flex-col items-center justify-center p-4 border rounded-2xl \
        border-gray-400/70 dark:border-gray-500 \
        hover:scale-[102%] \
        transition-all duration-200 [&_p]:text-sm \
        bg-(--bg-accent) dark:bg-(--bg-accent-dark) ": true,
    }}
    class:accent={!!bgAccent}
    
    style:--bg-accent={bgAccent ? bgAccent.light : "transparent"}
    style:--bg-accent-dark={bgAccent ? bgAccent.dark : "transparent"}
    style:--card-shadow={bgAccent ? bgAccent.dark : "transparent"}
>
    <img src={logo} alt={name} class="max-w-25" />
    <h2 class="text-2xl font-black my-2">{name}</h2>

    <p class="text-center text-balance font-medium">{catchyPhrase}</p>
    
    <div class="flex items-center justify-center gap-1 mt-4 border-t border-black/50 dark:border-white/70 pt-3.5 w-full">
        {#if updatedAt}
            {@const date = updatedAt.toLocaleDateString(getLocale(), dateFormat)}
            <p>{m["status.updated_on"]({ date })}</p>
            <ClockFadingIcon class="h-4! w-4!"/>
        {:else}
            {@const date = createdAt.toLocaleDateString(getLocale(), dateFormat)}
            <p>{m["status.created_on"]({ date })}</p>
            <BallonIcon class="h-4! w-4!"/>
        {/if}
    </div>
</a>

<style>
    a.accent {
        border-color: rgb(0 0 0 / 30%) !important;
        box-shadow: 0 0 0 var(--card-shadow);

        &:hover {
            box-shadow: 0 0 0 .5rem var(--card-shadow);
        }
    }

    :root.dark a.accent {
        border-color: rgb(255 255 255 / 70%) !important;
        box-shadow: 0 0 0 var(--bg-accent);

        &:hover {
            box-shadow: 0 0 0 .5rem var(--bg-accent);
        }
    }

    a:not(.accent) {
        &:hover {
            box-shadow: 0 0 0 .5rem rgba(0, 0, 0, 0.1);
        }
    }
    :root.dark a:not(.accent) {
        &:hover {
            box-shadow: 0 0 0 .5rem rgba(255, 255, 255, 0.3);
        }
    }
</style>