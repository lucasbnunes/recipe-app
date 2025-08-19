<script lang="ts">
	import CategoriesGrid from '$lib/features/recipes/components/categories-grid.svelte';
	import PopularRecipesGrid from '$lib/features/recipes/components/popular-recipes-grid.svelte';
	import SearchBar from '$lib/features/recipes/components/search-bar.svelte';
	import type { PageProps } from './$types';

	const { data }: PageProps = $props();
</script>

<form method="GET" action={`/recipes`}>
	<SearchBar />
</form>

<h2 class="mb-7">Popular recipes</h2>
<PopularRecipesGrid recipes={data.recipes} />

<h2 class="mt-9 mb-7">Explore by meal type</h2>
<CategoriesGrid />
