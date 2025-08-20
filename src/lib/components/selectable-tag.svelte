<script lang="ts">
	import type { SvelteHTMLElements } from 'svelte/elements';
	type TagButtonProps = SvelteHTMLElements['button'] & {
		onclick?: (selected: boolean, event: MouseEvent) => void;
	};
	const { class: className, children, onclick, ...props }: TagButtonProps = $props();

	let selected = $state(false);

	const handleClick = (e: MouseEvent) => {
		onclick?.(selected, e);

		selected = !selected;
	};
</script>

<button
	class={[
		' h-8 rounded-lg border-2  px-4 text-sm font-medium transition-colors',
		selected ? 'border-concrete-300 bg-concrete-200' : 'border-transparent bg-concrete-100',
		className
	]}
	onclick={handleClick}
>
	{@render children?.()}
</button>
