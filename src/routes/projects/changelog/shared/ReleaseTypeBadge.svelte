<script lang="ts">
	import { ReleaseType } from '$routes/projects/core';

	interface Props {
		type: ReleaseType;
	}

	let { type }: Props = $props();
</script>

<span
	class={{
		'rounded-full px-2.5 py-1 text-xs font-semibold': true,
		'bg-red-200 text-red-800 dark:bg-red-800/70 dark:text-red-300': type === ReleaseType.Alpha,
		'bg-yellow-200 text-yellow-800 dark:bg-yellow-800/70 dark:text-yellow-300':
			type === ReleaseType.Beta,
		'bg-green-200 text-green-800 dark:bg-green-800/70 dark:text-green-300':
			type === ReleaseType.Stable,
		'bg-gray-200 text-gray-800 dark:bg-gray-800/70 dark:text-gray-300': !type
	}}
>
	{type}
</span>
