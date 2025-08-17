<script lang="ts">
	import IconButton from '$lib/components/icon-button.svelte';
	import { Bookmark } from '@lucide/svelte';

	import type { Recipe } from '../types';
	import { bookmarks } from '../state/bookmarks-state.svelte';
	import type { ClassValue } from 'svelte/elements';

	interface SaveButtonProps {
		recipeId: Recipe['id'];
		class?: ClassValue;
	}

	const { recipeId: id, class: className }: SaveButtonProps = $props();
</script>

<IconButton
	class={['group/iconbutton text-white', className]}
	onclick={(event: MouseEvent) => {
		event.stopPropagation();
		event.preventDefault();
		bookmarks.toggleBookmark(id);
	}}
>
	<Bookmark
		class={[
			'transition-all group-hover/iconbutton:stroke-3',
			bookmarks.hasBookmark(id) && 'fill-white'
		]}
	/>
</IconButton>
