<script lang="ts">
    import { cn } from "$lib/utils.js";
    import { SearchIcon } from "@lucide/svelte/icons";
    import * as InputGroup from "$lib/components/ui/input-group/index.js";

    interface Props {
        class?: string;
        value?: string;
        placeholder?: string;
        statusText?: string;
    }

    let {
        class: className,
        value = $bindable(""),
        placeholder = "Search",
        statusText,
    }: Props = $props();
</script>

<InputGroup.Root class={cn("py-5.5 rounded-lg", className)}>
    <InputGroup.Input bind:value {placeholder} />
    <InputGroup.Addon>
        <SearchIcon class="w-5! h-5!" />
    </InputGroup.Addon>
    {#if statusText}
        <InputGroup.Addon align="inline-end">{statusText}</InputGroup.Addon>
    {/if}
</InputGroup.Root>
