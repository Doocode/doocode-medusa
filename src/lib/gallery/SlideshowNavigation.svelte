<script lang="ts">
    interface Props {
        isOpen: boolean;
        onClose: () => void;
        handlePrevious: () => void;
        handleNext: () => void;
    }

    let {
        isOpen = $bindable(false),
        onClose,
        handlePrevious,
        handleNext
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
                e.preventDefault();
                handleNext();
                break;
        }
    }
</script>

<svelte:window onkeydown={handleKeydown} />