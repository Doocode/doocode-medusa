<script lang="ts">
    interface GalleryImage {
        src: string;
        srcMobile?: string;
        caption: string;
        order: number;
    }

    interface Props {
        images: GalleryImage[];
        version: string;
    }

    let { images, version }: Props = $props();

    // Trier les images par ordre
    let sortedImages = $derived(images.sort((a, b) => a.order - b.order));

    function handleImageClick(image: GalleryImage) {
        alert('TODO: Implement image viewer');
    }
</script>

<div class="gallery-container">
    <div class="gallery-grid grid grid-cols-[repeat(auto-fill,minmax(175px,1fr))] gap-4">
        {#each sortedImages as image}
            <div 
                class="gallery-item"
                role="button"
                tabindex="0"
                onclick={() => handleImageClick(image)}
                onkeydown={(e) => e.key === 'Enter' && handleImageClick(image)}
            >
                <div class="image-wrapper" style:--bg-image={`url('${image.srcMobile || image.src}')`}>
                    <picture>
                        {#if image.srcMobile}
                            <source 
                                media="(max-width: 768px)" 
                                srcset={image.srcMobile}
                            />
                        {/if}
                        <img 
                            src={image.src} 
                            alt={image.caption}
                            loading="lazy"
                            class="gallery-image"
                        />
                    </picture>
                    <div class="image-overlay">
                        <p class="image-caption">{image.caption}</p>
                    </div>
                </div>
            </div>
        {/each}
    </div>
</div>

<style>
    .gallery-container {
        width: 100%;
    }

    .gallery-item {
        position: relative;
        cursor: pointer;
        border-radius: 0.75rem;
        overflow: hidden;
        transition: transform 0.3s ease, box-shadow 0.3s ease;
        background: #000;
        box-shadow: 0 0 0 0 rgba(0, 0, 0, 0.1), 
                    0 0 0 0 rgba(0, 0, 0, 0.04),
                    0 0 0 2px var(--foreground);
    }

    .gallery-item:hover {
        box-shadow: 0 20px 25px -5px rgba(0, 0, 0, 0.1), 
                    0 10px 10px -5px rgba(0, 0, 0, 0.04),
                    0 0 0 6px var(--foreground);
    }

    .gallery-item:focus {
        outline: 2px solid hsl(var(--ring));
        outline-offset: 2px;
    }

    .image-wrapper {
        position: relative;
        width: 100%;
        aspect-ratio: 1;
        overflow: hidden;
    }

    .image-wrapper::before {
        content: '';
        position: absolute;
        inset: 0;
        background-image: var(--bg-image);
        background-size: cover;
        background-position: center;
        filter: blur(20px) brightness(0.7);
        transform: scale(1.1);
        z-index: 0;
    }

    .gallery-image {
        position: relative;
        width: 90%;
        height: 90%;
        margin: 5%;
        object-fit: contain;
        z-index: 1;
    }

    .image-overlay {
        position: absolute;
        bottom: 0;
        left: 0;
        right: 0;
        z-index: 2;
        background: linear-gradient(
            to top,
            rgba(0, 0, 0, 0.8) 0%,
            rgba(0, 0, 0, 0.6) 50%,
            transparent 100%
        );
        padding: 2rem 1.5rem .5rem;
        transform: translateY(100%);
        transition: transform 0.3s ease;
    }

    .gallery-item:hover .image-overlay {
        transform: translateY(0);
    }

    .image-caption {
        color: white;
        font-size: 0.875rem;
        font-weight: 500;
        margin: 0;
        text-align: center;
    }

    @media (max-width: 768px) {
        .image-overlay {
            transform: translateY(0);
            background: linear-gradient(
                to top,
                rgba(0, 0, 0, 0.7) 0%,
                rgba(0, 0, 0, 0.4) 70%,
                transparent 100%
            );
            padding: 1.5rem 1rem 0.75rem;
        }

        .image-caption {
            font-size: 0.75rem;
        }
    }
</style>
