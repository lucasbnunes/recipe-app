import snack from '$lib/assets/snacks.png';
import breakfast from '$lib/assets/breakfast.png';
import lunch from '$lib/assets/lunch.png';
import dinner from '$lib/assets/dinner.png';
import dessert from '$lib/assets/dessert.png';
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
