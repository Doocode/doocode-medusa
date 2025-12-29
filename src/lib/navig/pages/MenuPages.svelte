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

    let isOpen = $state(false);

    interface Item {
        href: string;
        icon: Component;
        label: string;
    }

    function onItemClick() {
        isOpen = false;
    }
</script>

<Popover.Root bind:open={isOpen}>
    <Popover.Trigger>
        <Button variant="secondary" size="icon" class="h-11.25 w-11.25">
            <MenuIcon class="h-6! w-6!" />
        </Button>
    </Popover.Trigger>

    <Popover.Content class="rounded-3xl">
        <nav class="flex flex-col">
            {#snippet item({
                href, icon, label
            }: Item) }
                {@const Icon = icon }
                <a {href} onclick={onItemClick} class={{
                    'flex items-center gap-2 px-4 py-3 rounded-lg duration-100 \
                    hover:bg-secondary/50 hover:text-secondary-foreground \
                    active:bg-secondary active:text-secondary-foreground': true,
                    'bg-primary text-primary-foreground': page.url.pathname === href
                }}>
                    <Icon class="h-5! w-5!"/>
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
                href: '/demo', icon: BugIcon,
                label: 'Demo'
            })}
        </nav>
    </Popover.Content>
</Popover.Root>