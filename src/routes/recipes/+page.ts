import { recipesApi } from '$lib/features/recipes/api/recipesApi';
import type { PageLoad } from './$types';

export const load: PageLoad = async ({ url }) => {
	const searchQuery = url.searchParams.get('q');
	const categoryParam = url.searchParams.get('category');

	if (searchQuery) {
		const result = await recipesApi.searchRecipes(new URLSearchParams(url.searchParams));
		return { recipes: result.recipes };
	}

	if (categoryParam) {
		const result = await recipesApi.fetchRecipesByMealType(categoryParam);
		return { recipes: result.recipes };
	}

	const { recipes } = await recipesApi.fetchRecipes();
	return { recipes };
};
