<script lang="ts">
	import { goto } from '$app/navigation';
	import SelectableTag from '$lib/components/selectable-tag.svelte';
	import { onMount } from 'svelte';

	const CATEGORIES = [
		{
			title: 'Snacks',
			value: 'snacks'
		},
		{
			title: 'Dessert',
			value: 'dessert'
		},
		{
			title: 'Lunch',
			value: 'lunch'
		},
		{
			title: 'Dinner',
			value: 'dinner'
		},
		{
			title: 'Breakfast',
			value: 'breakfast'
		}
	];

	let active = $state<string | null>(null);

	onMount(() => {
		const searchParams = new URLSearchParams(window.location.search);
		active = searchParams.get('category') || '';
	});

	const handleClick = (selected: boolean, categoryValue: string) => {
		const searchParams = new URLSearchParams(window.location.search);

		if (!selected) {
			removeCategoryFromSearchParams(searchParams);
		} else {
			addCategoryToSearchParams(categoryValue, searchParams);
		}
	};

	const removeCategoryFromSearchParams = (searchParams: URLSearchParams) => {
		searchParams.delete('category');
		const newUrl = `${window.location.pathname}`;
		goto(newUrl, { replaceState: true });
	};

	const addCategoryToSearchParams = (categoryValue: string, searchParams: URLSearchParams) => {
		active = categoryValue;
		searchParams.set('category', categoryValue);
		const newUrl = `${window.location.pathname}?${searchParams?.toString()}`;
		goto(newUrl, { replaceState: true });
	};
</script>

<ul class="flex flex-wrap gap-2">
	{#each CATEGORIES as category}
		<li>
			<SelectableTag
				selected={active === category.value}
				onToggle={(selected) => handleClick(selected, category.value)}
			>
				{category.title}
			</SelectableTag>
		</li>
	{/each}
</ul>
