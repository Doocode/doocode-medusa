<script lang="ts">
    interface Props {
        src: string;
        srcMobile?: string;
        caption: string;
    }

    let { src, srcMobile, caption }: Props = $props();
</script>

<div 
    class="relative w-full aspect-square overflow-hidden"
    style:--bg-image={`url('${srcMobile || src}')`}
>
    <!-- Blurred background -->
    <div 
        class="absolute inset-0 bg-cover bg-center scale-110 z-0"
        style="background-image: var(--bg-image); filter: blur(20px) brightness(0.7);"
    ></div>

    <!-- Main image -->
    <picture class="relative z-10">
        {#if srcMobile}
            <source 
                media="(max-width: 768px)" 
                srcset={srcMobile}
            />
        {/if}
        <img 
            {src}
            alt={caption}
            loading="lazy"
            class="relative w-[90%] h-[90%] m-[5%] object-contain z-10"
        />
    </picture>
</div>
