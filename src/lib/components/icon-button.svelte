<script lang="ts">
	import type { Snippet } from 'svelte';
	import type { SvelteHTMLElements } from 'svelte/elements';

	type IconButtonProps = SvelteHTMLElements['button'] & {
		children: Snippet<[]>;
	};

	const { children, class: className, ...props }: IconButtonProps = $props();
</script>

<button class={['rounded-lg p-1', className]} {...props}>
	{@render children()}
</button>
