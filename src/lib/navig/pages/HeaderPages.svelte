<script lang="ts">
    import PackageIcon from "@lucide/svelte/icons/package";
    import HomeIcon from "@lucide/svelte/icons/house";
    import BugIcon from "@lucide/svelte/icons/bug";
    import { m } from "$lib/paraglide/messages";
    import type { Component } from "svelte";
    import { page } from '$app/state';

    interface Item {
        href: string;
        icon: Component;
        label: string;
    }
</script>

<nav class="flex items-center gap-1 justify-center flex-3">
    {#snippet item({
        href, icon, label
    }: Item) }
        <a {href} class={{
            'flex items-center gap-2 px-3 py-2 rounded-lg duration-100 \
            hover:bg-secondary/50 hover:text-secondary-foreground \
            active:bg-secondary active:text-secondary-foreground': true,
            'bg-secondary/70 text-secondary-foreground': page.url.pathname === href
        }}>
            <svelte:component this={icon} class="h-5! w-5!"/>
            <span>{label}</span>
        </a>
    {/snippet}

    {@render item({
        href: '/', icon: HomeIcon,
        label: m['home.title']()
    })}

    {@render item({
        href: '/projects', icon: PackageIcon,
        label: m['projects.title']()
    })}

    {@render item({
        href: '/demo', icon: BugIcon,
        label: 'Demo'
    })}
</nav>