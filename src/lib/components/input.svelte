<script lang="ts">
	import type { Snippet } from 'svelte';
	import type { HTMLInputAttributes } from 'svelte/elements';

	export interface InputProps extends HTMLInputAttributes {
		startAdornment?: Snippet;
		endAdornment?: Snippet;
	}
	const {
		class: className,
		startAdornment,
		endAdornment,
		value = $bindable(),
		...props
	}: InputProps = $props();
</script>

<div
	class={[
		'flex items-center gap-2 rounded-lg bg-concrete-100 px-4 py-2 focus-within:ring-2',
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
		{value}
		class="form-input h-full w-full flex-1 rounded-lg border-none bg-transparent p-0 px-1 text-base leading-normal font-normal !ring-0 placeholder:text-concrete-500"
	/>
	{#if endAdornment}
		<div class="text-concrete-500">
			{@render endAdornment()}
		</div>
	{/if}
</div>
