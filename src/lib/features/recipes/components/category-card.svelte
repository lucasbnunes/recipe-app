<script lang="ts">
	import type { SvelteHTMLElements } from 'svelte/elements';
	import type { Category } from '../types';

	type CategoryCardProps = SvelteHTMLElements['a'] & {
		category: Category;
	};

	const { class: className, category, ...props }: CategoryCardProps = $props();
</script>

<a
	href={`/recipes?category=${category.value}`}
	class={['flex w-full min-w-[180px] flex-col gap-2 sm:max-w-[180px]', className]}
	{...props}
>
	<div class="overflow-hidden rounded-lg">
		<enhanced:img alt={`${category.title} picture`} src={category.image} class="w-full" />
	</div>

	<div class="flex flex-col">
		<p class="font-medium">{category.title}</p>
	</div>
</a>
