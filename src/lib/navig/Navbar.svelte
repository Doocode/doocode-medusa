<script lang="ts">
    import NavTools from "./tools/NavTools.svelte";
    import NavbarPages from "./pages/NavbarPages.svelte";
    import { isProjectDetailPath } from "./navig.helpers";
    import { page } from '$app/state';

    let isProjectDetail: boolean = $derived(isProjectDetailPath(page.url.pathname));
</script>

<header
    class={{
        'px-1.5 text-center flex items-center justify-between': true,
        'bg-primary text-primary-foreground': !isProjectDetail,
        'bg-black text-white dark:bg-white dark:text-black': isProjectDetail
    }}
>
    <NavbarPages />

    <h1>
        <a href="/" class="text-2xl px-4 py-3 hover:underline flex items-baseline">
            <strong class="font-black">Doocode</strong>
            <span class="text-lg -mt-1">.xyz</span>
        </a>
    </h1>

    <NavTools />
</header>
