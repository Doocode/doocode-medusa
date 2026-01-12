<script lang="ts">
    import { fade, fly } from "svelte/transition";
    import { m } from "$lib/paraglide/messages";
    import { quintOut } from "svelte/easing";
    import {
        SlideItem as Item,
        SlideshowBindings as Bindings,
        SlideshowNavigation as Navigation,
        SlideshowFooter as Footer,
        SlideshowHeader as Header,
        SlideshowCaption as Caption,
        type GalleryItemContent
    } from ".";

    interface Props {
        images?: GalleryItemContent[];
        index?: number;
        open?: boolean;
    }

    let {
        images = [],
        index = $bindable(0),
        open = $bindable(false)
    }: Props = $props();

    let currentImage: GalleryItemContent = $derived(images[index]);
    let slideDirection = $state<'left' | 'right'>('right');
    let uiVisible = $state(true);
    let hideTimer: number | undefined;

    const HIDE_DELAY = 5 * 1000;

    function resetHideTimer() {
        uiVisible = true;
        if (hideTimer) {
            clearTimeout(hideTimer);
        }
        hideTimer = window.setTimeout(() => {
            uiVisible = false;
        }, HIDE_DELAY);
    }

    function handleUserActivity() {
        resetHideTimer();
    }

    $effect(() => {
        if (open) {
            document.body.style.overflow = 'hidden';
            resetHideTimer();
        } else {
            document.body.style.overflow = '';
            if (hideTimer) {
                clearTimeout(hideTimer);
            }
        }

        return () => {
            document.body.style.overflow = '';
            if (hideTimer) {
                clearTimeout(hideTimer);
            }
        };
    });

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

    function handleFirst() {
        if (index > 0) {
            slideDirection = 'right';
            index = 0;
        }
    }

    function handleLast() {
        if (index < images.length - 1) {
            slideDirection = 'left';
            index = images.length - 1;
        }
    }
</script>

<svelte:window onmousemove={handleUserActivity} onkeydown={handleUserActivity} />
{#if open}
    <button
        transition:fade
        onclick={onClose}
        class="fixed inset-0 bg-black/70 backdrop-blur-xl z-40">
        <span class="sr-only">{ m['slideshow.close']() }</span>
    </button>

    <Bindings
        isOpen={open}
        {onClose}
        {handlePrevious}
        {handleNext}
        {handleFirst}
        {handleLast}
    />

    {#if uiVisible}
        <Header {onClose} />

        <Caption open
            caption={currentImage.alt}
            description={currentImage.description}
        />
    {/if}

    <div transition:fade|global={{ duration: 150 }}>
        {#key index}
            <div
                class="fixed inset-4 md:inset-10 z-50 flex items-center justify-center pointer-events-none overflow-hidden"
                in:fly={{ 
                    x: slideDirection === 'left' ? 200 : -200, 
                    duration: 400, 
                    easing: quintOut 
                }}
                out:fly={{ 
                    x: slideDirection === 'left' ? -200 : 200, 
                    duration: 400, 
                    easing: quintOut 
                }}
            >
                <Item image={currentImage} />
            </div>
        {/key}
    </div>

    {#if uiVisible}
        <Navigation {index}
            count={images.length}
            {handlePrevious} {handleNext}
            {handleFirst} {handleLast} />

        <Footer {index}
            total={images.length}
            url={currentImage.src} />
    {/if}
{/if}