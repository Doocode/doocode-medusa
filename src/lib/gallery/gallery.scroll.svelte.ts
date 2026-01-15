export default class GalleryScrollManager {
    node = $state<HTMLDivElement | undefined>(undefined);
    canScrollLeft = $state(false);
    canScrollRight = $state(false);
    isDragging = $state(false);

    private isDown = false;
    private startX = 0;
    private initialScrollLeft = 0;

    constructor() {
        $effect(() => {
            const el = this.node;
            if (!el) return;

            this.updateButtons();

            const resizeObserver = new ResizeObserver(() => this.updateButtons());
            resizeObserver.observe(el);

            return () => resizeObserver.disconnect();
        });
    }

    updateButtons = () => {
        const el = this.node;
        if (!el) return;
        this.canScrollLeft = el.scrollLeft > 0;
        this.canScrollRight = el.scrollLeft + el.clientWidth < el.scrollWidth - 1;
    }

    handleMouseDown = (e: MouseEvent) => {
        if (!this.node) return;
        this.isDown = true;
        this.isDragging = false;
        this.startX = e.pageX - this.node.offsetLeft;
        this.initialScrollLeft = this.node.scrollLeft;
    }

    handleMouseLeave = () => {
        this.isDown = false;
    }

    handleMouseUp = () => {
        this.isDown = false;
    }

    handleMouseMove = (e: MouseEvent) => {
        if (!this.isDown || !this.node) return;
        e.preventDefault();
        const x = e.pageX - this.node.offsetLeft;
        const walk = (x - this.startX);
        this.node.scrollLeft = this.initialScrollLeft - walk;
        if (Math.abs(x - this.startX) > 5) {
            this.isDragging = true;
        }
    }

    scrollBackward = (event: MouseEvent) => {
        if (!this.node) return;
        
        const scrollAmount = event.shiftKey 
            ? -this.node.scrollWidth 
            : -this.node.clientWidth * 0.8;
        
        this.node.scrollBy({
            left: scrollAmount,
            behavior: 'smooth'
        });
    }

    scrollForward = (event: MouseEvent) => {
        if (!this.node) return;
        
        const scrollAmount = event.shiftKey 
            ? this.node.scrollWidth 
            : this.node.clientWidth * 0.8;
        
        this.node.scrollBy({
            left: scrollAmount,
            behavior: 'smooth'
        });
    }
}