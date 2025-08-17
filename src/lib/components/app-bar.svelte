<script>
	import { BookMarked } from '@lucide/svelte';
	import Logo from './logo.svelte';
	import { bookmarks } from '$lib/features/recipes/state/bookmarks-state.svelte';
</script>

<header class="flex h-14 items-center border-b-1 border-zinc-200 p-4 font-medium">
	<a href="/">
		<Logo />
	</a>
	<nav class="mr-8 ml-auto">
		<ul class="flex items-center gap-6">
			<li>
				<a href="/recipes">Explore</a>
			</li>
			<li class="">
				<a
					href="/bookmarks"
					class="relative flex w-full place-items-center rounded-lg bg-concrete-200 p-2 text-sm"
				>
					{#if bookmarks.get().length}
						<span
							class="absolute -top-1 -right-1.5 flex size-4 items-center justify-center rounded-full bg-concrete-800 text-center text-xs text-white"
							>{bookmarks.get().length}</span
						>
					{/if}

					<BookMarked class="size-4.5" />
				</a>
			</li>
		</ul>
	</nav>
</header>
