<script lang="ts">
	import IconButton from '$lib/components/icon-button.svelte';
	import type { InputProps } from '$lib/components/input.svelte';
	import Input from '$lib/components/input.svelte';
	import { Search } from '@lucide/svelte';

	const {
		name = 'q',
		endAdornment,
		...props
	}: InputProps & {
		name?: string;
	} = $props();

	const searchParams = new URLSearchParams(window.location.search);
	let searchQuery = $state(searchParams.get(name));
</script>

<Input placeholder="Search recipes" class="my-8" {name} bind:value={searchQuery} {...props}>
	{#snippet endAdornment()}
		{#if endAdornment}
			{@render endAdornment()}
		{:else}
			<IconButton type="submit">
				<Search />
			</IconButton>
		{/if}
	{/snippet}
</Input>
