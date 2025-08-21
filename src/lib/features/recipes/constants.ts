import snack from '$lib/assets/snacks.png?enhanced';
import breakfast from '$lib/assets/breakfast.png?enhanced';
import lunch from '$lib/assets/lunch.png?enhanced';
import dinner from '$lib/assets/dinner.png?enhanced';
import dessert from '$lib/assets/dessert.png?enhanced';
import type { Category } from './types';

export const CATEGORIES: Array<Category> = [
	{
		title: 'Snacks',
		value: 'snacks',
		image: snack
	},
	{
		title: 'Dessert',
		value: 'dessert',
		image: dessert
	},
	{
		title: 'Lunch',
		value: 'lunch',
		image: lunch
	},
	{
		title: 'Dinner',
		value: 'dinner',
		image: dinner
	},
	{
		title: 'Breakfast',
		value: 'breakfast',
		image: breakfast
	}
];
