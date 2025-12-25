<script lang="ts">
    import Button from "$lib/components/ui/button/button.svelte";
    import * as DropdownMenu from "$lib/components/ui/dropdown-menu/index.js";
    import { m } from "$lib/paraglide/messages";
    import { setLocale, getLocale } from "$lib/paraglide/runtime";
    import LanguagesIcon from "@lucide/svelte/icons/languages";

    interface Language {
        code: string;
        name: string;
    }

    const languages: Language[] = [
        { code: 'en', name: 'English' },
        { code: 'fr', name: 'Français' },
    ];
</script>

<DropdownMenu.Root>
    <DropdownMenu.Trigger>
        <Button
            variant="secondary"
            size="icon"
            class="h-11.25 w-11.25"
            title={m['language.title']()}
        >
            <LanguagesIcon class="h-6! w-6!" />
            <span class="sr-only">{m['language.title']()}</span>
        </Button>
    </DropdownMenu.Trigger>

    <DropdownMenu.Content align="end" class="w-40">
        <DropdownMenu.Group>
            <DropdownMenu.Label class="flex items-center gap-2">
                <LanguagesIcon class="h-4.5! w-4.5!" />
                {m['language.title']()}
            </DropdownMenu.Label>

            <DropdownMenu.Separator />

            <DropdownMenu.RadioGroup value={getLocale()}>
                {#each languages as language}
                    <DropdownMenu.RadioItem
                        onclick={() => setLocale(language.code)}
                        value={language.code}
                    >
                        {language.name}
                    </DropdownMenu.RadioItem>
                {/each}
            </DropdownMenu.RadioGroup>
        </DropdownMenu.Group>
    </DropdownMenu.Content>
</DropdownMenu.Root>
