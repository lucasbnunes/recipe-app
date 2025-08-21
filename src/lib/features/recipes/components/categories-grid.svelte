<script lang="ts">
	import { CATEGORIES } from '../constants';
	import CategoryCard from './category-card.svelte';
</script>

<ul
	class="grid max-w-full grid-cols-[repeat(auto-fill,_minmax(180px,_1fr))] gap-x-4 gap-y-6 sm:justify-start"
>
	{#each CATEGORIES as category}
		<li>
			<CategoryCard {category} />
		</li>
	{/each}
</ul>
