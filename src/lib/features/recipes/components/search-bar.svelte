<script lang="ts">
	import IconButton from '$lib/components/icon-button.svelte';
	import type { InputProps } from '$lib/components/input.svelte';
	import Input from '$lib/components/input.svelte';
	import { Search } from '@lucide/svelte';
	import { onMount } from 'svelte';

	const {
		name = 'q',
		endAdornment: endAdornmentProp,
		...props
	}: InputProps & {
		name?: string;
	} = $props();

	let searchQuery = $state('');
	onMount(() => {
		const searchParams = new URLSearchParams(window.location.search);
		searchQuery = searchParams.get(name) || '';
	});
</script>

<Input placeholder="Search recipes" class="my-8" {name} bind:value={searchQuery} {...props}>
	{#snippet endAdornment()}
		{#if endAdornmentProp}
			{@render endAdornmentProp()}
		{:else}
			<IconButton type="submit">
				<Search />
			</IconButton>
		{/if}
	{/snippet}
</Input>
