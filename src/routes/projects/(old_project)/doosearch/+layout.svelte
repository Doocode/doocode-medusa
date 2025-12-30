<script lang="ts">
    import type { LayoutProps } from './$types';

    let { data, children }: LayoutProps = $props();

    import { Header, MainAction, NavItem, NavContener } from '../../header/index';
    import { House, ImagePlay } from '@lucide/svelte';
    import { m } from "$lib/paraglide/messages";
    import { page } from '$app/state';

    let dialogLinks = $state(false)
    let projectRootUrl = $derived(`/projects/${data.project.codename}`);
</script>

<Header project={data.project}>
    {#snippet mainAction()}
        {@const { href, ...action } = data.project.mainAction}

        <MainAction {...action}
            onClick={() => dialogLinks = !dialogLinks} />
    {/snippet}

    <NavContener>
        <NavItem icon={House}
            text={ m['home.title']() }
            href={`${projectRootUrl}`}
            selected={page.url.pathname === `${projectRootUrl}`} />
        <NavItem icon={ImagePlay}
            text={ m['projects.gallery']() }
            href={`${projectRootUrl}/gallery`}
            selected={page.url.pathname === `${projectRootUrl}/gallery`} />
    </NavContener>
</Header>

<main class="project_theme"
    style:--accent-light={data.project.bgAccent?.light}
    style:--accent-dark={data.project.bgAccent?.dark}
>
    {@render children()}
</main>