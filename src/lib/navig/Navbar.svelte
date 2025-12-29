<script lang="ts">
    import NavTools from "./tools/NavTools.svelte";
    import MenuPages from "./pages/MenuPages.svelte";
    import { isProjectDetailPath } from "./navig.helpers";
    import { page } from '$app/state';
    import AstroInline from "./AstroInline.svelte";

    let isProjectDetail: boolean = $derived(isProjectDetailPath(page.url.pathname));
</script>

<header
    class={{
        'px-1.5 text-center flex items-center justify-between': true,
        'bg-primary text-primary-foreground': !isProjectDetail,
        'bg-black text-white dark:bg-white dark:text-black': isProjectDetail
    }}
>
    <MenuPages />

    <h1>
        <a href="/" class="text-2xl px-4 py-3 hover:scale-110 flex items-baseline duration-100">
            <span class="sr-only">Doocode.xyz</span>
            <AstroInline />
        </a>
    </h1>

    <NavTools />
</header>
