import { recipesApi } from '$lib/features/recipes/api/recipesApi';
import type { PageLoad } from './$types';

export const load: PageLoad = async ({ url }) => {
	const searchQuery = url.searchParams.get('q');
	if (searchQuery) {
		const result = await recipesApi.searchRecipes(new URLSearchParams(url.searchParams));
		return { recipes: result.recipes };
	}

	const { recipes } = await recipesApi.fetchRecipes();
	return { recipes };
};
