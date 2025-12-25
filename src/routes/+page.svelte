<script lang="ts">
    import Button from '$lib/components/ui/button/button.svelte';

    function toggleDarkMode() {
        document.documentElement.classList.toggle('dark');
    }
</script>

<svelte:head>
    <title>Doocode</title>
</svelte:head>

<h1>Welcome to Doocode</h1>

<Button variant="default" onclick={toggleDarkMode}>
    Toggle dark mode
</Button>
<Button variant="secondary" onclick={toggleDarkMode}>
    Toggle dark mode
</Button>