<script lang="ts">
	import { Star } from '@lucide/svelte';
	import type { Recipe } from '../types';

	const { recipe }: { recipe: Recipe } = $props();

	/**
	 * Some of the information is hardcoded because the API doesn't provide all the data
	 */
</script>

<div class="flex">
	<div class="flex flex-col gap-2">
		<span class="text-4xl font-black">{recipe.rating}</span>
		<div class="flex items-center gap-1">
			{#each { length: 5 } as _item, index}
				<Star class={['size-[18px]', index < Math.floor(recipe.rating) && 'fill-zinc-800']} />
			{/each}
		</div>
		<span>120 reviews</span>
	</div>
</div>
