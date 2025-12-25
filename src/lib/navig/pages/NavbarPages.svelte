<script lang="ts">
    import Button from "$lib/components/ui/button/button.svelte";
    import MenuIcon from "@lucide/svelte/icons/menu";
    import * as Popover from "$lib/components/ui/popover/index.js";
    import PackageIcon from "@lucide/svelte/icons/package";
    import HouseIcon from "@lucide/svelte/icons/house";
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

<Popover.Root>
    <Popover.Trigger>
        <Button variant="secondary" size="icon" class="h-11.25 w-11.25">
            <MenuIcon class="h-6! w-6!" />
        </Button>
    </Popover.Trigger>

    <Popover.Content class="rounded-3xl">
        <nav class="flex flex-col gap-1">
            {#snippet item({
                href, icon, label
            }: Item) }
                <a {href} class={{
                    'flex items-center gap-2 px-3 py-2 rounded-lg duration-100 \
                    hover:bg-secondary/50 hover:text-secondary-foreground \
                    active:bg-secondary active:text-secondary-foreground': true,
                    'bg-primary text-primary-foreground': page.url.pathname === href
                }}>
                    <svelte:component this={icon} class="h-5! w-5!"/>
                    <span>{label}</span>
                </a>
            {/snippet}

            {@render item({
                href: '/', icon: HouseIcon,
                label: m['home.title']()
            })}

            {@render item({
                href: '/projects', icon: PackageIcon,
                label: m['projects.title']()
            })}

            {@render item({
                href: '/demo/paraglide', icon: BugIcon,
                label: 'Demo'
            })}
        </nav>
    </Popover.Content>
</Popover.Root>