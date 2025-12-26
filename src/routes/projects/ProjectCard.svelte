<script lang="ts">
    import { getLocale } from "$lib/paraglide/runtime";
    import type { TwColor } from "./projects";

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
    {#if updatedAt}
        <p>Updated on: {updatedAt.toLocaleDateString(getLocale(), dateFormat)}</p>
    {:else}
        <p>Created on: {createdAt.toLocaleDateString(getLocale(), dateFormat)}</p>
    {/if}
</a>