<script lang="ts">
	import '../app.css';
	import favicon from '$lib/assets/favicon.svg';
	import AppBar from '$lib/components/app-bar.svelte';
	import Footer from '$lib/components/footer.svelte';

	let { children } = $props();
</script>

<svelte:head>
	<link rel="icon" href={favicon} />
	<link rel="preconnect" href="https://fonts.googleapis.com" />
	<link rel="preconnect" href="https://fonts.gstatic.com" crossorigin="anonymous" />
	<link
		href="https://fonts.googleapis.com/css2?family=Funnel+Sans:ital,wght@0,300..800;1,300..800&display=swap"
		rel="stylesheet"
	/>
	<title>Delight - Home</title>
</svelte:head>

<div class="flex min-h-svh flex-col gap-8">
	<AppBar />
	<main class="mx-auto w-full max-w-5xl flex-1 px-4 py-8">
		{@render children?.()}
	</main>
	<Footer />
</div>
