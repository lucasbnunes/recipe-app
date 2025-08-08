<script lang="ts">
	import RecipesGrid from '$lib/features/recipes/components/recipes-grid.svelte';
	import type { PageProps } from './$types';

	const { data }: PageProps = $props();
</script>

<h2 class="mb-7">Popular recipes</h2>
<RecipesGrid recipes={data.recipes} />
