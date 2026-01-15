export class SlideshowController {
    uiVisible = $state(true);
    slideDirection = $state<'left' | 'right'>('right');
    
    private hideTimer: number | undefined;
    private readonly HIDE_DELAY = 5000*20;

    constructor(
        private getOpen: () => boolean
    ) {
        $effect(() => {
            if (this.getOpen()) {
                document.body.style.overflow = 'hidden';
                this.resetHideTimer();
            } else {
                document.body.style.overflow = '';
                this.clearHideTimer();
            }

            return () => {
                document.body.style.overflow = '';
                this.clearHideTimer();
            };
        });
    }

    private clearHideTimer() {
        if (this.hideTimer) {
            clearTimeout(this.hideTimer);
            this.hideTimer = undefined;
        }
    }

    resetHideTimer = () => {
        this.uiVisible = true;
        this.clearHideTimer();
        this.hideTimer = window.setTimeout(() => {
            this.uiVisible = false;
        }, this.HIDE_DELAY);
    }

    handleUserActivity = () => {
        this.resetHideTimer();
    }

    setDirection(direction: 'left' | 'right') {
        this.slideDirection = direction;
    }
}
