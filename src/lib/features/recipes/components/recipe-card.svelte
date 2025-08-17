<script lang="ts">
	import type { SvelteHTMLElements } from 'svelte/elements';
	import type { Recipe } from '../types';

	type RecipeCardProps = SvelteHTMLElements['a'] & {
		recipe: Recipe;
	};

	const { recipe, class: className, ...props }: RecipeCardProps = $props();
</script>

<a
	href={`/recipes/${recipe.id}`}
	class={['group flex w-full min-w-[180px] flex-col gap-2 rounded-md sm:max-w-[180px]', className]}
	{...props}
>
	<div class="overflow-hidden rounded-lg">
		<img
			alt={`${recipe.name} picture`}
			src={recipe.image}
			class="w-full transition-transform group-hover:scale-105 group-focus:scale-105"
		/>
	</div>

	<div class="flex flex-col">
		<p class="line-clamp-1 font-medium">{recipe.name}</p>
		<div class="flex gap-2 text-muted">
			<span>
				{recipe.difficulty}
			</span>
			<span> • </span>
			<span class="flex items-center">{recipe.cookTimeMinutes + recipe.prepTimeMinutes}min</span>
		</div>
	</div>
</a>
