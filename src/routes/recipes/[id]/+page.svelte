<script lang="ts">
	import Tabs from '$lib/components/tabs.svelte';
	import Rating from '$lib/features/recipes/components/rating.svelte';
	import RecipeDetails from '$lib/features/recipes/components/recipe-details.svelte';
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
	<h3 class="mb-3">Ingredients</h3>
	<ul>
		{#each recipe.ingredients as ingredient}
			<li>{ingredient}</li>
		{/each}
	</ul>
{/snippet}

{#snippet instructions()}
	<h3 class="mb-3">Instructions</h3>
	<ol>
		{#each recipe.instructions as instruction}
			<li>{instruction}</li>
		{/each}
	</ol>
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

<h3 class="mt-7 mb-3">Recipe details</h3>
<RecipeDetails {recipe} />

<h3 class="mt-7 mb-3">Reviews</h3>
<Rating {recipe} />
