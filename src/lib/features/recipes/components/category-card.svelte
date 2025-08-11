<script lang="ts">
	import type { SvelteHTMLElements } from 'svelte/elements';
	type Category = {
		title: string;
		url: string;
		image: string;
	};

	type CategoryCardProps = SvelteHTMLElements['a'] & {
		category: Category;
	};

	const { class: className, category, ...props }: CategoryCardProps = $props();
</script>

<a
	href={`/recipes/${category.url.replace('/', '')}`}
	class={['flex w-full min-w-[180px] flex-col gap-2 sm:max-w-[180px]', className]}
	{...props}
>
	<div class="overflow-hidden rounded-lg">
		<img alt={`${category.title} picture`} src={category.image} class="w-full" />
	</div>

	<div class="flex flex-col">
		<p class="font-medium">{category.title}</p>
	</div>
</a>
