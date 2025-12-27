<script lang="ts">
    import { isProjectDetailPath } from "../navig.helpers";
    import PackageIcon from "@lucide/svelte/icons/package";
    import HomeIcon from "@lucide/svelte/icons/house";
    import BugIcon from "@lucide/svelte/icons/bug";
    import { m } from "$lib/paraglide/messages";
    import type { Component } from "svelte";
    import { page } from '$app/state';

    let isProjectDetail: boolean = $derived(isProjectDetailPath(page.url.pathname));

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
        {@const Icon = icon }
        <a {href} class={{
            'flex items-center duration-100 \
            hover:bg-secondary/70 hover:text-secondary-foreground \
            active:bg-secondary active:text-secondary-foreground': true,
            "text-sm px-3 py-2 gap-1 rounded-md": isProjectDetail,
            "gap-2 px-3 py-2 rounded-lg": !isProjectDetail,

            'bg-secondary text-secondary-foreground': (
                page.url.pathname === href ||
                (href === '/projects' && page.url.pathname.startsWith('/projects/')) ||
                (href === '/demo' && page.url.pathname.startsWith('/demo/'))
            ),
        }}>
            <Icon class={{
                "h-4! w-4!": isProjectDetail,
                "h-5! w-5!": !isProjectDetail
            }} />
            <span>{label}</span>
        </a>
    {/snippet}

    {@render item({ href: '/',          icon: HomeIcon,     label: m['home.title']() })}
    {@render item({ href: '/projects',  icon: PackageIcon,  label: m['projects.title']() })}
    {@render item({ href: '/demo',      icon: BugIcon,      label: 'Demo' })}
</nav>