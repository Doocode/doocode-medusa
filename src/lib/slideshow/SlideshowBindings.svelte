<script lang="ts">
    interface Props {
        isOpen: boolean;
        onClose: () => void;
        handlePrevious: () => void;
        handleNext: () => void;
        handleFirst: () => void;
        handleLast: () => void;
    }

    let {
        isOpen = $bindable(false),
        onClose,
        handlePrevious,
        handleNext,
        handleFirst,
        handleLast
    }: Props = $props();

    function handleKeydown(e: KeyboardEvent) {
        if (!isOpen) return;

        switch (e.key) {
            case 'Escape':
                onClose();
                break;
            case 'ArrowLeft':
            case 'ArrowUp':
                e.preventDefault();
                handlePrevious();
                break;
            case 'ArrowRight':
            case 'ArrowDown':
            case ' ':
            case 'Enter':
                e.preventDefault();
                handleNext();
                break;
            case 'Home':
                e.preventDefault();
                handleFirst();
                break;
            case 'End':
                e.preventDefault();
                handleLast();
                break;
        }
    }
</script>

<svelte:window onkeydown={handleKeydown} />