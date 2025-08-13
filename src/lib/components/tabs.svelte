<script lang="ts">
	import { Tabs } from 'bits-ui';
	import type { Snippet } from 'svelte';
	import type { ClassValue } from 'svelte/elements';

	type Tab = {
		content: Snippet<[]>;
		id: string;
		title: string;
	};

	interface TabsProps {
		class?: ClassValue | null;
		tabs: Array<Tab>;
		initialValue?: Tab['id'];
	}

	const { tabs, initialValue, class: className }: TabsProps = $props();
</script>

<Tabs.Root value={initialValue ?? tabs[0].id}>
	<Tabs.List
		class={[
			'relative flex flex-wrap gap-8 border-b border-concrete-200 text-sm font-medium',
			[className]
		]}
	>
		{#each tabs as tab}
			<Tabs.Trigger
				value={tab.id}
				class="border-b-2 border-transparent pt-4 pb-3.5 data-[state=active]:border-b-zinc-800 data-[state=inactive]:text-muted"
			>
				{tab.title}
			</Tabs.Trigger>
		{/each}
	</Tabs.List>

	{#each tabs as tab}
		<Tabs.Content value={tab.id} class="mt-7">
			{@render tab.content()}
		</Tabs.Content>
	{/each}
</Tabs.Root>
