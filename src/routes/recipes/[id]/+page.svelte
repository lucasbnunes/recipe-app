<script lang="ts">
	import Tabs from '$lib/components/tabs.svelte';
	import type { PageProps } from './$types';

	const { data }: PageProps = $props();
	const { recipe } = data;
</script>

<div class="relative h-[340px] overflow-hidden rounded-lg">
	<img
		src={recipe.image}
		alt={recipe.name}
		class="absolute inset-0 h-full w-full object-cover object-center"
	/>
	<div class="absolute inset-0 bg-gradient-to-t from-black/40 via-black/10 to-black/0"></div>
	<div class="absolute bottom-0 z-10 px-5 py-6 text-white">
		<h2>{recipe.name}</h2>
	</div>
</div>

{#snippet ingredients()}
	<span>ingredients tab</span>
{/snippet}

{#snippet instructions()}
	<span>instructions tab</span>
{/snippet}

<Tabs
	class="mt-4"
	tabs={[
		{
			title: 'Ingredients',
			id: 'ingredients',
			content: ingredients
		},
		{
			title: 'Instructions',
			id: 'instructions',
			content: instructions
		}
	]}
/>
