<script lang="ts">
    import Button from '$lib/components/ui/button/button.svelte';

    function test() {
        console.log('test');
    }
</script>

<svelte:head>
    <title>Doocode</title>
</svelte:head>

<h1>Welcome to Doocode</h1>

<Button variant="default" onclick={test}>
    Test
</Button>
<Button variant="secondary" onclick={test}>
    Test
</Button>