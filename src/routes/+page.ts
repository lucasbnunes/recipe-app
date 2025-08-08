import { recipesApi } from '$lib/features/recipes/api/recipesApi';
import type { PageLoad } from './$types';

export const load: PageLoad = async () => {
	const popularRecipes = await recipesApi.fetchPopularRecipes();
	return { recipes: popularRecipes.recipes };
};
