<script lang="ts">
	import Button from '$lib/components/ui/button/button.svelte';
	import PinIcon from '@lucide/svelte/icons/pin';
</script>

<svelte:head>
	<title>Buttons demo • Doocode.xyz</title>
</svelte:head>

<main class="container mx-auto flex flex-col gap-6 p-4 py-8 [&_td]:py-0.5 [&_th]:text-start">
	<strong class="-mb-6 flex justify-start text-primary underline-offset-2 hover:underline">
		<a href="/demo">Demo</a>
	</strong>
	<h1 class="mb-4 text-4xl font-black">Buttons</h1>

	<p class="mb-8">Demonstrates various button styles and sizes.</p>

	<div class="grid gap-8 md:grid-cols-2">
		<div>
			<h2 class="mb-4 text-2xl font-bold text-chart-1">Variants</h2>
			<table>
				<tbody>
					<tr>
						<th class="w-37.5">Default</th>
						<td><Button>Button</Button></td>
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
		</div>

		<div>
			<h2 class="mb-4 text-2xl font-bold text-chart-2">Sizes</h2>
			<table>
				<tbody>
					<tr>
						<th>Icon</th>
						<td>
							<Button size="icon">
								<PinIcon />
							</Button>
						</td>
					</tr>
					<tr>
						<th class="w-37.5">Small</th>
						<td><Button size="sm">Button</Button></td>
					</tr>
					<tr>
						<th>Large</th>
						<td><Button size="lg">Button</Button></td>
					</tr>
				</tbody>
			</table>
		</div>
	</div>
</main>
