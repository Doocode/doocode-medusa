<script lang="ts">
    interface Props {
        caption: string;
    }

    let { caption }: Props = $props();
</script>

<div 
    class="absolute bottom-0 left-0 right-0 z-20 
        bg-linear-to-t from-foreground/80 via-foreground/60 to-transparent
        px-6 pt-8 pb-2
        transform translate-y-full md:group-hover:translate-y-0
        transition-transform duration-300 ease-in-out
        md:translate-y-full"
>
    <p class="text-background text-sm font-medium text-center m-0">
        {caption}
    </p>
</div>

<style>
    @media (max-width: 768px) {
        div {
            transform: translateY(0);
            background: linear-gradient(
                to top,
                rgba(0, 0, 0, 0.7) 0%,
                rgba(0, 0, 0, 0.4) 70%,
                transparent 100%
            );
            padding: 1.5rem 1rem 0.75rem;
        }

        p {
            font-size: 0.75rem;
        }
    }
</style>
