<script lang="ts">
	import type { ClassValue } from 'svelte/elements';
	import type { Recipe } from '../types';

	interface RecipeDetailsProps {
		class?: ClassValue | null;
		recipe: Recipe;
	}

	const { recipe, class: className }: RecipeDetailsProps = $props();

	type RecipeDetail = {
		label: string;
		value: string;
	};

	function formatRecipeDetails(recipe: Recipe): RecipeDetail[] {
		return [
			{
				label: 'Prep time',
				value: `${recipe.prepTimeMinutes} minutes`
			},
			{
				label: 'Cook time',
				value: `${recipe.cookTimeMinutes} minutes`
			},
			{
				label: 'Servings',
				value: `${recipe.servings}`
			},
			{
				label: 'Difficulty',
				value: recipe.difficulty
			},
			{
				label: 'Cuisine',
				value: recipe.cuisine
			},
			{
				label: 'Tags',
				value: recipe.tags.join(', ')
			}
		];
	}

	const recipeDetails = formatRecipeDetails(recipe);
</script>

<dl class="">
	{#each recipeDetails as detail}
		<div class="flex items-center gap-2 border-t border-concrete-200 py-5 text-sm">
			<dt class="w-1/4 min-w-[100px] text-muted">{detail.label}</dt>
			<dd>{detail.value}</dd>
		</div>
	{/each}
</dl>
