<script lang="ts">
	import type { Snippet } from 'svelte';
	import type { ClassValue, SvelteHTMLElements } from 'svelte/elements';

	type IconButtonProps = SvelteHTMLElements['button'] & {
		children: Snippet<[]>;
	};

	const { children, class: className }: IconButtonProps = $props();
</script>

<button class={['rounded-full p-1', className]}>
	{@render children()}
</button>
