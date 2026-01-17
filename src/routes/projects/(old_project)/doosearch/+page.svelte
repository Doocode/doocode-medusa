<script lang="ts">
    import type { PageProps } from './$types';
    import { 
        WhatIsIt,
        KeyPoints,
        HowItWorks,
        MiniGallery,
        SearchEngines,
        MultiSearch,
        Customization,
        Everywhere
    } from './landing';

    let { data }: PageProps = $props();
</script>

<div class="container mx-auto px-4 py-8 grid gap-18">
    <WhatIsIt />
    <KeyPoints project={data.project} />
    <HowItWorks />
    <MiniGallery />
    <SearchEngines />
    <MultiSearch />
    <Customization />
    <Everywhere />
</div>