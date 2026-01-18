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
        SlideshowThumbnails as Thumbnails,
        SlideshowSwipeManager,
        SlideshowController
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
    
    const controller = new SlideshowController(() => open);
    
    // Swipe logic
    const swipe = new SlideshowSwipeManager({
        onSwipeLeft: handleNext,
        onSwipeRight: handlePrevious,
        onSwipeDown: onClose
    });

    function onClose() {
        open = false;
    }

    function handlePrevious() {
        if (index > 0) {
            controller.setDirection('right');
            index--;
        }
    }

    function handleNext() {
        if (index < images.length - 1) {
            controller.setDirection('left');
            index++;
        }
    }

    function handleFirst() {
        if (index > 0) {
            controller.setDirection('right');
            index = 0;
        }
    }

    function handleLast() {
        if (index < images.length - 1) {
            controller.setDirection('left');
            index = images.length - 1;
        }
    }

    function captureClick(node: HTMLElement) {
        const handler = (e: MouseEvent) => {
            if (swipe.hasMoved) {
                e.preventDefault();
                e.stopPropagation();
            }
        };
        node.addEventListener('click', handler, true);
        return {
            destroy() {
                node.removeEventListener('click', handler, true);
            }
        };
    }
</script>

<svelte:window 
    onmousemove={(e) => { controller.handleUserActivity(); swipe.handleMove(e.clientX, e.clientY); }} 
    onkeydown={controller.handleUserActivity}
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

    {#if controller.uiVisible}
        <Header {onClose} />

        <Caption open
            caption={currentImage.alt}
            description={currentImage.description}
        />
        
        <Thumbnails 
            images={images}
            currentIndex={index}
            onSelect={(i) => {
                const direction = i > index ? 'left' : 'right';
                controller.setDirection(direction);
                index = i;
                controller.resetHideTimer();
            }}
        />
    {/if}

    <div transition:fade|global={{ duration: 150 }}>
        {#key index}
            <div
                class="fixed inset-0 p-4 md:p-10 z-50 flex items-center justify-center pointer-events-none overflow-hidden"
                in:fly={{ 
                    x: controller.slideDirection === 'left' ? 200 : -200, 
                    duration: 400, 
                    easing: quintOut 
                }}
                out:fly={{ 
                    x: controller.slideDirection === 'left' ? -200 : 200, 
                    duration: 400, 
                    easing: quintOut 
                }}
            >
                <div 
                    class="w-full h-full flex items-center justify-center pointer-events-auto touch-none select-none transition-transform duration-75 ease-out"
                    style:transform="translate({swipe.dragX}px, {swipe.dragY}px)"
                    role="presentation"
                    ontouchstart={swipe.onTouchStart}
                    onmousedown={swipe.onMouseDown}
                    onclick={(e) => {
                        const target = e.target as HTMLElement;
                        if (target.tagName !== 'IMG' && target.tagName !== 'VIDEO') {
                            onClose();
                        }
                    }}
                    use:captureClick
                >
                    <Item image={currentImage} />
                </div>
            </div>
        {/key}
    </div>

    {#if controller.uiVisible}
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