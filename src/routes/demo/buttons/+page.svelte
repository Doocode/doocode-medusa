<script lang="ts">
    import Button from "$lib/components/ui/button/button.svelte";
</script>

<main class="max-w-7xl mx-auto p-4 flex flex-col gap-6 [&_td]:py-0.5">
    <h1 class="text-3xl font-black">Buttons</h1>

    <h2 class="text-2xl font-bold">Variants</h2>
    <table>
        <tbody>
            <tr>
                <th class="w-37.5">Default</th>
                <td><Button>Button</Button></td>
            </tr>
            <tr>
                <th>Primary</th>
                <td><Button variant="primary">Button</Button></td>
            </tr>
            <tr>
                <th>Secondary</th>
                <td><Button variant="secondary">Button</Button></td>
            </tr>
            <tr>
                <th>Destructive</th>
                <td><Button variant="destructive">Button</Button></td>
            </tr>
            <tr>
                <th>Outline</th>
                <td><Button variant="outline">Button</Button></td>
            </tr>
            <tr>
                <th>Ghost</th>
                <td><Button variant="ghost">Button</Button></td>
            </tr>
            <tr>
                <th>Link</th>
                <td><Button variant="link">Button</Button></td>
            </tr>
        </tbody>
    </table>

    <h2 class="text-2xl font-bold">Sizes</h2>
    <table>
        <tbody>
            <tr>
                <th class="w-37.5">Small</th>
                <td><Button size="sm">Button</Button></td>
            </tr>
            <tr>
                <th>Large</th>
                <td><Button size="lg">Button</Button></td>
            </tr>
            <tr>
                <th>Icon</th>
                <td><Button size="icon">🔍</Button></td>
            </tr>
        </tbody>
    </table>
</main>