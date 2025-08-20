<script lang="ts">
	import type { SvelteHTMLElements } from 'svelte/elements';

	type MouseEventButton = MouseEvent & { currentTarget: EventTarget & HTMLButtonElement };

	type TagButtonProps = SvelteHTMLElements['button'] & {
		onToggle?: (selected: boolean, event: MouseEventButton) => void;
		selected?: boolean;
	};

	const {
		class: className,
		children,
		onToggle,
		onclick,
		selected: selectedProps,
		...props
	}: TagButtonProps = $props();

	let selected = $state(!!selectedProps);

	$effect(() => {
		selected = !!selectedProps;
	});

	const handleClick = (e: MouseEventButton) => {
		onclick?.(e);
		selected = !selected;
		onToggle?.(selected, e);
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
