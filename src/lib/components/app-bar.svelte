<script>
	import Logo from './logo.svelte';
</script>

<header class="flex h-14 items-center border-b-1 border-zinc-200 p-4 font-medium">
	<a href="/">
		<Logo />
	</a>
	<nav class="mr-8 ml-auto">
		<ul class="flex items-center gap-4">
			<li>
				<a href="/recipes">Recipes</a>
			</li>
		</ul>
	</nav>
</header>
