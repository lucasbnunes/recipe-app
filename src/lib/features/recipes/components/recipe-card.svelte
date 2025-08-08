<script lang="ts">
	import type { SvelteHTMLElements } from 'svelte/elements';
	import type { Recipe } from '../types';

	type RecipeCardProps = SvelteHTMLElements['div'] & {
		recipe: Recipe;
	};

	const { recipe, class: className, ...props }: RecipeCardProps = $props();
</script>

<div class={['flex w-full min-w-[180px] flex-col gap-2 sm:max-w-[240px]', className]} {...props}>
	<div class="h-[135px] overflow-hidden rounded-lg">
		<img alt={`${recipe.name} picture`} src={recipe.image} class="w-full" />
	</div>

	<div class="flex flex-col">
		<p class="font-medium">{recipe.name}</p>
		<div class="flex gap-2 text-concrete-600">
			<span>
				{recipe.difficulty}
			</span>
			<span> • </span>
			<span class="flex items-center">{recipe.cookTimeMinutes + recipe.prepTimeMinutes}min</span>
		</div>
	</div>
</div>
