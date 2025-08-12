<script lang="ts">
	import RecipesGrid from '$lib/features/recipes/components/recipes-grid.svelte';
	import type { PageProps } from './$types';

	const { data }: PageProps = $props();
</script>

<h1>Recipes</h1>
<p class="text-muted mt-2 max-w-3xl">
	Explore a world of flavors with our curated collection of recipes. Find inspiration for every
	meal, from quick weeknight dinners to elaborate weekend feasts.
</p>

<RecipesGrid recipes={data.recipes} class="mt-7" />
