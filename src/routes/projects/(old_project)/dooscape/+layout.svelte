<script lang="ts">
    import type { LayoutProps } from './$types';

    let { data, children }: LayoutProps = $props();

    import {
        Header, MainAction,
        NavItem as Page,
        NavContener as Nav
    } from '$routes/projects/header/index';
    import { History, House, ImagePlay, Newspaper } from '@lucide/svelte';
    import { m } from "$lib/paraglide/messages";
    import { page } from '$app/state';

    let dialogLinks = $state(false)
    let projectRootUrl = $derived(`/projects/${data.project.codename}`);
</script>

<Header project={data.project}>
    {#snippet mainAction()}
        {@const { ...action } = data.project.mainAction}

        <MainAction {...action}
            onClick={() => dialogLinks = !dialogLinks} />
    {/snippet}

    <Nav>
        <Page icon={House}
            text={ m['home.title']() }
            href={`${projectRootUrl}`}
            selected={page.url.pathname === `${projectRootUrl}`} />
        <Page icon={ImagePlay}
            text={ m['projects.gallery']() }
            href={`${projectRootUrl}/gallery`}
            selected={page.url.pathname === `${projectRootUrl}/gallery`} />
        <Page icon={Newspaper}
            text={ "Actus" }
            href={`${projectRootUrl}/blog`}
            selected={page.url.pathname === `${projectRootUrl}/blog`} />
        <Page icon={History}
            text={ "Historique" }
            href={`${projectRootUrl}/history`}
            selected={page.url.pathname === `${projectRootUrl}/history`} />
    </Nav>
</Header>

<main class="project_theme"
    style:--accent-light={data.project.bgAccent?.light}
    style:--accent-dark={data.project.bgAccent?.dark}
>
    {@render children()}
</main>