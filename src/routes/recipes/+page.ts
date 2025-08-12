import { recipesApi } from '$lib/features/recipes/api/recipesApi';
import type { PageLoad } from './$types';

export const load: PageLoad = async () => {
	const popularRecipes = await recipesApi.fetchRecipes();
	return { recipes: popularRecipes.recipes };
};
