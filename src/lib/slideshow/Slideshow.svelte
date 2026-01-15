<script lang="ts">
	import type { GalleryItemContent } from "$lib/gallery";
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
        SlideshowSwipeManager
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
    
    // Swipe logic
    const swipe = new SlideshowSwipeManager({
        onSwipeLeft: handleNext,
        onSwipeRight: handlePrevious,
        onSwipeDown: onClose
    });

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

<svelte:window 
    onmousemove={(e) => { handleUserActivity(); swipe.handleMove(e.clientX, e.clientY); }} 
    onkeydown={handleUserActivity}
    onmouseup={swipe.handleEnd}
    ontouchmove={swipe.onTouchMove}
    ontouchend={swipe.onTouchEnd}
/>
{#if open}
    <button
        transition:fade
        onclick={onClose}
        class="fixed inset-0 bg-black/70 backdrop-blur-xl z-40 touch-none">
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
                <div 
                    class="contents pointer-events-auto touch-none select-none"
                    role="presentation"
                    ontouchstart={swipe.onTouchStart}
                    onmousedown={swipe.onMouseDown}
                    onclickCapture={(e) => {
                        if (swipe.hasMoved) {
                            e.preventDefault();
                            e.stopPropagation();
                        }
                    }}
                >
                    <Item image={currentImage} />
                </div>
            </div>
        {/key}
    </div>

    {#if uiVisible}
        <Navigation {index}
            count={images.length}
            dragX={swipe.dragX}
            {handlePrevious} {handleNext}
            {handleFirst} {handleLast} />

        <Footer {index}
            total={images.length}
            url={currentImage.src} />
    {/if}
{/if}