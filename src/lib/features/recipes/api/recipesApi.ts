import { httpClient } from '$lib/api/api-factory';
import type { RecipeListResponse } from '../types';

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
	}
};
