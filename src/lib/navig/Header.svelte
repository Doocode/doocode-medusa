<script lang="ts">
	import HeaderPages from './pages/HeaderPages.svelte';
	import DarkModeSwitcher from './tools/DarkModeSwitcher.svelte';
	import LanguageSwitcher from './tools/LanguageSwitcher.svelte';
	import AstroLogo from './AstroInline.svelte';
	import { isProjectDetailPath } from './navig.helpers';
	import { page } from '$app/state';

	let isProjectDetail: boolean = $derived(isProjectDetailPath(page.url.pathname));
</script>

<header
	class={{
		'duration-200': true,
		'bg-primary py-4 text-primary-foreground': !isProjectDetail,
		'bg-black text-white dark:bg-white dark:text-black': isProjectDetail
	}}
>
	<div class="container m-auto flex items-center justify-between">
		<h1 class="flex flex-1 justify-start" style:--logo-color="var(--background)">
			<a
				href="/"
				class={{
					'flex items-baseline px-4 duration-100 hover:scale-110 active:scale-90 active:-rotate-3': true,
					'py-3 text-3xl': !isProjectDetail,
					'py-1.5 text-2xl': isProjectDetail
				}}
			>
				<span class="sr-only">Doocode.xyz</span>
				<AstroLogo />
			</a>
		</h1>

		<HeaderPages />

		<div
			class={{
				'flex flex-1 items-center justify-end px-2': true,
				'gap-1': !isProjectDetail,
				'gap-0.75': isProjectDetail
			}}
		>
			<LanguageSwitcher compact={isProjectDetail} />
			<DarkModeSwitcher compact={isProjectDetail} />
		</div>
	</div>
</header>
