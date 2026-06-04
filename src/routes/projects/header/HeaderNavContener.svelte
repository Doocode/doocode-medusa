<script lang="ts">
    import type { Snippet } from "svelte";

    interface Props {
        children?: Snippet;
    }

    let {
        children
    }: Props = $props();

    let navContainer: HTMLElement;
    let isDown = false;
    let startX: number;
    let scrollLeft: number;

    function scrollToSelected() {
        if (!navContainer) return;
        const activeItem = navContainer.querySelector('[data-selected="true"]') as HTMLElement;
        if (activeItem) {
            const containerWidth = navContainer.clientWidth;
            const itemLeft = activeItem.offsetLeft;
            const itemWidth = activeItem.clientWidth;
            
            navContainer.scrollTo({
                left: itemLeft - containerWidth / 2 + itemWidth / 2,
                behavior: 'smooth'
            });
        }
    }

    $effect(() => {
        if (!navContainer) return;
        
        // Initial scroll
        scrollToSelected();

        // Watch for selection changes
        const observer = new MutationObserver(scrollToSelected);
        observer.observe(navContainer, { 
            attributes: true, 
            subtree: true, 
            attributeFilter: ['data-selected'] 
        });

        return () => observer.disconnect();
    });

    function handleMouseDown(e: MouseEvent) {
        isDown = true;
        startX = e.pageX;
        scrollLeft = navContainer.scrollLeft;
    }

    function handleMouseLeave() {
        isDown = false;
    }

    function handleMouseUp() {
        isDown = false;
    }

    function handleMouseMove(e: MouseEvent) {
        if (!isDown) return;
        e.preventDefault();
        const x = e.pageX;
        const walk = (x - startX) * 2; // Scroll-fast
        navContainer.scrollLeft = scrollLeft - walk;
    }
</script>

<nav 
    bind:this={navContainer}
    class={{
        "flex items-center px-1 mx-auto w-fit max-w-full relative select-none \
        gap-1 overflow-x-auto flex-nowrap hide-scrollbar cursor-grab active:cursor-grabbing": true,
    }}
    onmousedown={handleMouseDown}
    onmouseleave={handleMouseLeave}
    onmouseup={handleMouseUp}
    onmousemove={handleMouseMove}
    role="navigation"
>
    {@render children?.()}
</nav>

<style>
    :global(.hide-scrollbar) {
        scrollbar-width: none;
        -ms-overflow-style: none;
    }
    :global(.hide-scrollbar::-webkit-scrollbar) {
        display: none;
    }
</style>