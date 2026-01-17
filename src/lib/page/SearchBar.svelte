<script lang="ts">
    import { cn } from "$lib/utils.js";
    import { SearchIcon } from "@lucide/svelte/icons";
    import * as InputGroup from "$lib/components/ui/input-group/index.js";

    interface Props {
        class?: string;
        value?: string;
        placeholder?: string;
        statusText?: string;
        autofocus?: boolean;
        [key: string]: any;
    }

    let {
        class: className,
        value = $bindable(""),
        placeholder = "Search",
        statusText,
        autofocus = false,
        ...rest
    }: Props = $props();

    let ref: HTMLElement | null = $state(null);

    $effect(() => {
        if (autofocus && ref) {
            const timer = setTimeout(() => ref?.focus(), 50);
            return () => clearTimeout(timer);
        }
    });
</script>

<InputGroup.Root class={cn("py-5.5 rounded-lg", className)}>
    <InputGroup.Input bind:ref bind:value {placeholder} {autofocus} {...rest} />
    <InputGroup.Addon>
        <SearchIcon class="w-5! h-5!" />
    </InputGroup.Addon>
    {#if statusText}
        <InputGroup.Addon align="inline-end">{statusText}</InputGroup.Addon>
    {/if}
</InputGroup.Root>
