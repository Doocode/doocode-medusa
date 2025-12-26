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
        description: string;
        createdAt: Date;
        updatedAt?: Date;
        bgAccent?: TwColor | undefined;
    }

    let { codename, name, logo, description, createdAt, updatedAt, bgAccent }: Props = $props();

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
        border-gray-200 dark:border-gray-600 \
        hover:shadow-lg shadow-gray-300 dark:shadow-gray-600 \
        transition-shadow duration-200 [&_p]:text-sm \
        bg-(--bg-accent) dark:bg-(--bg-accent-dark) ": true,
    }}
    style="--bg-accent: {bgAccent ? bgAccent.light : 'transparent'}; --bg-accent-dark: {bgAccent ? bgAccent.dark : 'transparent'};"
>
    <img src={logo} alt={name} class="max-w-25" />
    <h2 class="text-2xl font-black my-2">{name}</h2>

    <p class="font-bold">{description}</p>
    
    <div class="flex items-center gap-1">
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