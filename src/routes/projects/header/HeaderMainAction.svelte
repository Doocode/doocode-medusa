<script lang="ts">
	import Button from '$lib/components/ui/button/button.svelte';
	import BadgeQuestionMark from '@lucide/svelte/icons/badge-question-mark';
	import MessageCircleMore from '@lucide/svelte/icons/message-circle-more';
	import FlaskConical from '@lucide/svelte/icons/flask-conical';
	import MonitorPlay from '@lucide/svelte/icons/monitor-play';
	import FolderGit2 from '@lucide/svelte/icons/folder-git-2';
	import Download from '@lucide/svelte/icons/download';
	import Earth from '@lucide/svelte/icons/earth';
	import type { MainActionProps } from '../projects';

	/*
        - Download : Download items
        - Try : Try online
        - Demo : View demonstration (video or interactive)
        - Repository : View source code repository
        - Visit : Visit website
        - Help : Get help or support
        - Contact : Contact us
    */

	let {
		variant = 'download',
		onClick = undefined,
		href = undefined,
		text,
		withAccent = false
	}: MainActionProps = $props();
</script>

<Button
	class={{
		'mx-2 flex h-auto min-w-28 flex-col items-end gap-2 rounded-2xl text-end active:scale-95': true,
		'hover:bg-foreground/30 dark:hover:bg-foreground/30': !withAccent,
		'cursor-pointer': !!href
	}}
	target={href ? '_blank' : undefined}
	variant="ghost"
	onclick={onClick}
	{href}
>
	<span class="-mx-1 text-xs">{@html text.replace(/\\n/g, '<br>')}</span>
	<div
		class="-mx-2 flex aspect-square w-14 items-center justify-center rounded-xl bg-foreground text-background"
	>
		{#if variant === 'download'}
			<Download class="h-9! w-9!" />
		{:else if variant === 'visit'}
			<Earth class="h-9! w-9!" />
		{:else if variant === 'help'}
			<BadgeQuestionMark class="h-9! w-9!" />
		{:else if variant === 'contact'}
			<MessageCircleMore class="h-9! w-9!" />
		{:else if variant === 'repository'}
			<FolderGit2 class="h-9! w-9!" />
		{:else if variant === 'try'}
			<FlaskConical class="h-9! w-9!" />
		{:else if variant === 'demo'}
			<MonitorPlay class="h-9! w-9!" />
		{/if}
	</div>
</Button>
