<script lang="ts">
    import type { LayoutProps } from './$types';

    let { data, children }: LayoutProps = $props();

    import {
        Header, MainAction,
        NavItem as Page,
        NavContener as Nav
    } from '$routes/projects/header/index';
    import { BugPlay, History, House, ImagePlay, MessageCircleQuestionMark, Newspaper } from '@lucide/svelte';
    import { mainAction as action, links } from './data';
    import { m } from "$lib/paraglide/messages";
    import { page } from '$app/state';
    import { DialogLinks } from '$routes/projects/links';

    let dialogLinks = $state(false)
    let projectRootUrl = $derived(`/projects/${data.project.codename}`);
</script>

<Header project={data.project}>
    {#snippet mainAction()}
        <MainAction {...action}
            onClick={(e) => {
                e.preventDefault();
                dialogLinks = !dialogLinks;
            }}
        />
    {/snippet}

    <Nav>
        <Page icon={House}
            text={ m['home.title']() }
            href={`${projectRootUrl}`}
            selected={page.url.pathname === `${projectRootUrl}`} />
        <Page icon={ImagePlay}
            text={ m['projects.gallery']() }
            href={`${projectRootUrl}/gallery`}
            selected={page.url.pathname.startsWith(`${projectRootUrl}/gallery`)} />
        <Page icon={Newspaper}
            text={ "Actus" }
            href={`${projectRootUrl}/blog`}
            selected={page.url.pathname.startsWith(`${projectRootUrl}/blog`)} />
        <Page icon={History}
            text={ m['projects.history.short_title']() }
            href={`${projectRootUrl}/history`}
            selected={page.url.pathname.startsWith(`${projectRootUrl}/history`)} />
        <Page icon={BugPlay}
            text={ "Code" }
            href={`${projectRootUrl}/development`}
            selected={page.url.pathname.startsWith(`${projectRootUrl}/development`)} />
        <Page icon={MessageCircleQuestionMark}
            text={ "Aide" }
            href={`${projectRootUrl}/help`}
            selected={page.url.pathname.startsWith(`${projectRootUrl}/help`)} />
    </Nav>
</Header>

<main class="project_theme"
    style:--accent-light={data.project.bgAccent?.light}
    style:--accent-dark={data.project.bgAccent?.dark}
>
    {@render children()}
</main>

<DialogLinks bind:open={dialogLinks} {links} />