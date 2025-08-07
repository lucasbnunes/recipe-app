import { httpClient } from '$lib/api/api-factory';
import type { RecipeListResponse } from '../types';

export const recipesApi = {
	fetchPopularRecipes: () => {
		return httpClient.get<RecipeListResponse>('', {
			searchParams: new URLSearchParams({
				limit: '4',
				skip: '20'
			})
		});
	}
};
