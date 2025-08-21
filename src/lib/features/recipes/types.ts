export interface Recipe {
	id: number;
	name: string;
	ingredients: string[];
	instructions: string[];
	prepTimeMinutes: number;
	cookTimeMinutes: number;
	servings: number;
	difficulty: string;
	cuisine: string;
	tags: string[];
	userId: number;
	image: string;
	rating: number;
	reviewCount: number;
	mealType: MealType[];
}

export interface RecipeListResponse {
	recipes: Recipe[];
	total: number;
	skip: number;
	limit: number;
}

type MealType = 'snacks' | 'breakfast' | 'lunch' | 'dinner' | 'dessert';

export type Category = {
	title: string;
	value: MealType;
	image: string;
};
