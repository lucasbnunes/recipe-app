<script lang="ts">
	import type { Recipe } from '../types';
	import type { SvelteHTMLElements } from 'svelte/elements';
	import RecipeCard from './recipe-card.svelte';

	type RecipesGridProps = SvelteHTMLElements['ul'] & {
		recipes: Recipe[];
	};

	const { recipes, class: className, ...props }: RecipesGridProps = $props();
</script>

<ul
	class={[
		'grid max-w-full grid-cols-[repeat(auto-fill,_minmax(180px,_1fr))] gap-x-4 gap-y-6 sm:justify-start',
		className
	]}
	{...props}
>
	{#each recipes as recipe (recipe.id)}
		<li>
			<RecipeCard {recipe} />
		</li>
	{/each}
</ul>
