<script lang="ts">
	import CategoriesTagGroup from '$lib/features/recipes/components/categories-tag-group.svelte';
	import RecipesGrid from '$lib/features/recipes/components/recipes-grid.svelte';
	import SearchBar from '$lib/features/recipes/components/search-bar.svelte';
	import type { PageProps } from './$types';

	const { data }: PageProps = $props();
</script>

<h1>Recipes</h1>
<p class="mt-2 max-w-3xl text-muted">
	Explore a world of flavors with our curated collection of recipes. Find inspiration for every
	meal, from quick weeknight dinners to elaborate weekend feasts.
</p>

<span class="mt-7 block text-lg font-medium">Filter by meal type</span>
<CategoriesTagGroup class="mb-7" />

<RecipesGrid recipes={data.recipes} class="mt-7" />
