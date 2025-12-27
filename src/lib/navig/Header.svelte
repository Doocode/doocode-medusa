<script lang="ts">
    import HeaderPages from "./pages/HeaderPages.svelte";
    import DarkModeSwitcher from "./tools/DarkModeSwitcher.svelte";
    import LanguageSwitcher from "./tools/LanguageSwitcher.svelte";
    import { isProjectDetailPath } from "./navig.helpers";
    import { page } from '$app/state';

    let isProjectDetail: boolean = $derived(isProjectDetailPath(page.url.pathname));
</script>

<header
    class={{
        'bg-primary text-primary-foreground': !isProjectDetail,
        'bg-black text-white dark:bg-white dark:text-black': isProjectDetail
    }}
>
    <div class="max-w-7xl m-auto flex items-center justify-between">
        <h1 class="font-black flex-1 flex justify-start">
            <a href="/" class={{
                "px-4 grid hover:underline active:scale-90 active:-rotate-3 duration-100": true,
                "py-3 text-3xl": !isProjectDetail,
                "py-1.5 text-2xl": isProjectDetail
            }}>Doocode</a>
        </h1>

        <HeaderPages />

        <div class={{
            "flex items-center justify-end px-2 flex-1": true,
            "gap-1": !isProjectDetail,
            "gap-0.75": isProjectDetail
        }}>
            <LanguageSwitcher compact={isProjectDetail} />
            <DarkModeSwitcher compact={isProjectDetail} />
        </div>
    </div>
</header>