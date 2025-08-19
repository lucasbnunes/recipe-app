<script lang="ts">
	import IconButton from '$lib/components/icon-button.svelte';
	import Input from '$lib/components/input.svelte';
	import RecipesGrid from '$lib/features/recipes/components/recipes-grid.svelte';
	import { Search } from '@lucide/svelte';
	import type { PageProps } from './$types';

	const { data }: PageProps = $props();

	const searchParams = new URLSearchParams(window.location.search);
	let searchQuery = $state(searchParams.get('q'));
</script>

<h1>Recipes</h1>
<p class="mt-2 max-w-3xl text-muted">
	Explore a world of flavors with our curated collection of recipes. Find inspiration for every
	meal, from quick weeknight dinners to elaborate weekend feasts.
</p>

<form method="GET" action={`/recipes`}>
	<Input placeholder="Search recipes" class="my-8" name="q" bind:value={searchQuery}>
		{#snippet endAdornment()}
			<IconButton type="submit">
				<Search />
			</IconButton>
		{/snippet}
	</Input>
</form>

<RecipesGrid recipes={data.recipes} class="mt-7" />
