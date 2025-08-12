<script lang="ts">
	import type { Recipe } from '../types';
	import RecipeCard from './recipe-card.svelte';

	interface RecipesGridProps {
		recipes: Recipe[];
	}

	const { recipes }: RecipesGridProps = $props();
</script>

<ul
	class="grid max-w-full grid-cols-[repeat(auto-fill,_minmax(180px,_1fr))] gap-x-4 gap-y-6 sm:justify-start"
>
	{#each recipes as recipe}
		<RecipeCard {recipe} />
	{/each}
</ul>
