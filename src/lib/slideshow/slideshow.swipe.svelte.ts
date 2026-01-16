export class SlideshowSwipeManager {
    isDragging = $state(false);
    hasMoved = $state(false); // To distinguish click vs drag
    dragX = $state(0);
    dragY = $state(0);
    
    private startX = 0;
    private startY = 0;
    private threshold = 100; // px to trigger navigation
    private moveThreshold = 10; // px to consider it a move (and not a click)
    private axis: 'x' | 'y' | null = null;

    onSwipeLeft?: () => void;
    onSwipeRight?: () => void;
    onSwipeDown?: () => void;

    constructor(callbacks?: { onSwipeLeft?: () => void, onSwipeRight?: () => void, onSwipeDown?: () => void }) {
        if (callbacks) {
            this.onSwipeLeft = callbacks.onSwipeLeft;
            this.onSwipeRight = callbacks.onSwipeRight;
            this.onSwipeDown = callbacks.onSwipeDown;
        }
    }

    handleStart = (clientX: number, clientY: number) => {
        this.isDragging = true;
        this.hasMoved = false;
        this.axis = null;
        this.startX = clientX;
        this.startY = clientY;
        this.dragX = 0;
        this.dragY = 0;
    }

    handleMove = (clientX: number, clientY: number) => {
        if (!this.isDragging) return;
        
        const diffX = clientX - this.startX;
        const diffY = clientY - this.startY;
        
        if (!this.hasMoved) {
            if (Math.abs(diffX) > this.moveThreshold || Math.abs(diffY) > this.moveThreshold) {
                this.hasMoved = true;
                // Lock axis
                this.axis = Math.abs(diffX) > Math.abs(diffY) ? 'x' : 'y';
            }
        }

        if (this.hasMoved) {
            if (this.axis === 'x') {
                this.dragX = diffX;
                this.dragY = 0;
            } else {
                this.dragX = 0;
                this.dragY = diffY;
            }
        }
    }

    handleEnd = () => {
        if (!this.isDragging) return;

        // Check for vertical swipe first (close)
        if (this.dragY > this.threshold && Math.abs(this.dragX) < Math.abs(this.dragY) && this.onSwipeDown) {
            this.onSwipeDown();
        } 
        // Then horizontal swipes (navigation)
        else if (Math.abs(this.dragX) > Math.abs(this.dragY)) {
            if (this.dragX < -this.threshold && this.onSwipeLeft) {
                this.onSwipeLeft();
            } else if (this.dragX > this.threshold && this.onSwipeRight) {
                this.onSwipeRight();
            }
        }

        this.isDragging = false;
        this.dragX = 0;
        this.dragY = 0;
        // Do not reset hasMoved here, accessed by click handler
    }

    // Touch events wrapper
    onTouchStart = (e: TouchEvent) => this.handleStart(e.touches[0].clientX, e.touches[0].clientY);
    onTouchMove = (e: TouchEvent) => this.handleMove(e.touches[0].clientX, e.touches[0].clientY);
    onTouchEnd = () => this.handleEnd();

    // Mouse events wrapper
    onMouseDown = (e: MouseEvent) => {
        // Only left click
        if (e.button !== 0) return;
        this.handleStart(e.clientX, e.clientY);
    }
    // Mouse move/up should usually be on window to prevent losing focus
}
