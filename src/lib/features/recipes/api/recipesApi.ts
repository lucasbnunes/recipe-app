import { httpClient } from '$lib/api/api-factory';
import type { Recipe, RecipeListResponse } from '../types';

export const recipesApi = {
	fetchPopularRecipes: () => {
		/* the API doesn't provide a "popular recipes" endpoint,
		 so we fetch 4 results for demonstration purpose */
		return httpClient.get<RecipeListResponse>('', {
			searchParams: new URLSearchParams({
				limit: '4',
				skip: '20'
			})
		});
	},
	fetchRecipes: (params?: URLSearchParams) => {
		return httpClient.get<RecipeListResponse>('', {
			searchParams: params
		});
	},
	fetchSingleRecipe: (id: string) => {
		return httpClient.get<Recipe>(id);
	},

	/**
	 * The API doesn't provide a way to fetch multiple recipes by Id,
	 * so we simulate the response by using Promise.all
	 */
	fetchRecipesByIds: (ids: string[]) => {
		return Promise.all(ids.map((item) => recipesApi.fetchSingleRecipe(String(item))));
	}
};
