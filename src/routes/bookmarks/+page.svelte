<script lang="ts">
	import Loader from '$lib/components/loader.svelte';
	import { recipesApi } from '$lib/features/recipes/api/recipesApi';
	import RecipesGrid from '$lib/features/recipes/components/recipes-grid.svelte';
	import { bookmarks } from '$lib/features/recipes/state/bookmarks-state.svelte';

	let recipesPromise = $state(recipesApi.fetchRecipesByIds(bookmarks.get().map(String)));
</script>

<h1 class="mb-3">Bookmarks</h1>
{#await recipesPromise}
	<div class="flex h-[30vh] items-center justify-center"><Loader /></div>
{:then recipes}
	<RecipesGrid {recipes} />
{/await}
