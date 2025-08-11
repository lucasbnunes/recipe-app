<script lang="ts">
	import CategoriesGrid from '$lib/features/recipes/components/categories-grid.svelte';
	import RecipesGrid from '$lib/features/recipes/components/recipes-grid.svelte';
	import type { PageProps } from './$types';

	const { data }: PageProps = $props();
</script>

<h2 class="mb-7">Popular recipes</h2>
<RecipesGrid recipes={data.recipes} />

<h2 class="mt-9 mb-7">Explore by meal type</h2>
<CategoriesGrid />
