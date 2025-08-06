<script lang="ts">
	import type { Snippet } from 'svelte';
	import type { HTMLInputAttributes } from 'svelte/elements';

	interface InputProps extends HTMLInputAttributes {
		startAdornment?: Snippet;
		endAdornment?: Snippet;
	}

	const { class: className, startAdornment, endAdornment, ...props }: InputProps = $props();
</script>

<div
	class={[
		'flex items-center gap-2 rounded-lg bg-concrete-100 px-4 py-2 focus-within:outline-2 focus-within:outline-concrete-500',
		className
	]}
>
	{#if startAdornment}
		<div class="text-concrete-500">
			{@render startAdornment()}
		</div>
	{/if}

	<input
		{...props}
		class="form-input h-full w-full flex-1 rounded-lg border-none bg-transparent p-0 px-1 text-base leading-normal font-normal outline-0 placeholder:text-concrete-500"
	/>
	{#if endAdornment}
		<div class="text-concrete-500">
			{@render endAdornment()}
		</div>
	{/if}
</div>
