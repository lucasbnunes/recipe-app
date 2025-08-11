<script lang="ts">
	import snack from '$lib/assets/snacks.png';
	import breakfast from '$lib/assets/breakfast.png';
	import lunch from '$lib/assets/lunch.png';
	import dinner from '$lib/assets/dinner.png';
	import dessert from '$lib/assets/dessert.png';
	import CategoryCard from './category-card.svelte';

	const CATEGORIES = [
		{
			title: 'Snacks',
			url: '/snacks',
			image: snack
		},
		{
			title: 'Dessert',
			url: '/dessert',
			image: dessert
		},
		{
			title: 'Lunch',
			url: '/lunch',
			image: lunch
		},
		{
			title: 'Dinner',
			url: '/dinner',
			image: dinner
		},
		{
			title: 'Breakfast',
			url: '/breakfast',
			image: breakfast
		}
	];
</script>

<ul
	class="grid max-w-full grid-cols-[repeat(auto-fill,_minmax(180px,_1fr))] gap-x-4 gap-y-6 sm:justify-start"
>
	{#each CATEGORIES as category}
		<CategoryCard {category} />
	{/each}
</ul>
