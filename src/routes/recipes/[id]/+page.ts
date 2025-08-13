import { recipesApi } from '$lib/features/recipes/api/recipesApi';
import type { PageLoad } from './$types';

export const load: PageLoad = async ({ params }) => {
	const recipe = await recipesApi.fetchSingleRecipe(params.id);

	return { recipe };
};
