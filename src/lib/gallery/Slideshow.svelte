<script lang="ts">
    import { fade, fly } from "svelte/transition";
    import { quintOut } from "svelte/easing";
    import {
        SlideItem as Item,
        SlideshowBindings as Bindings,
        SlideshowNavigation as Navigation,
        SlideshowFooter as Footer,
        type GalleryImageItem
    } from ".";

    interface Props {
        images?: GalleryImageItem[];
        index?: number;
        open?: boolean;
    }

    let {
        images = [],
        index = $bindable(0),
        open = $bindable(false)
    }: Props = $props();

    let currentImage: GalleryImageItem = $derived(images[index]);
    let slideDirection = $state<'left' | 'right'>('right');

    function onClose() {
        open = false;
    }

    function handlePrevious() {
        if (index > 0) {
            slideDirection = 'right';
            index--;
        }
    }

    function handleNext() {
        if (index < images.length - 1) {
            slideDirection = 'left';
            index++;
        }
    }
</script>

{#if open}
    <button
        transition:fade
        onclick={onClose}
        class="fixed inset-0 bg-black/70 backdrop-blur-xl">
        <span class="sr-only">Close slideshow</span>
    </button>

    <Bindings
        isOpen={open}
        {onClose}
        {handlePrevious}
        {handleNext}
    />

    <!-- TODO: Header (ToogleButton:[Presentation|Grid] -  ...   - Close) -->

    <div transition:fade={{ duration: 150 }}>
        {#key index}
            <div
                class="fixed inset-4 md:inset-10 z-50 flex items-center justify-center pointer-events-none overflow-hidden"
                in:fly={{ 
                    x: slideDirection === 'left' ? 100 : -100, 
                    duration: 400, 
                    easing: quintOut 
                }}
                out:fly={{ 
                    x: slideDirection === 'left' ? -100 : 100, 
                    duration: 400, 
                    easing: quintOut 
                }}
            >
                <Item image={currentImage} />
            </div>
        {/key}
    </div>

    <Navigation bind:index
        count={images.length}
        {handlePrevious} {handleNext} />

    <Footer {index}
        total={images.length}
        url={currentImage.src}
        caption={currentImage.alt}
        description={currentImage.description}
    />
{/if}