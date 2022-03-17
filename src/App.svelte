<script>
    import { onMount } from 'svelte';
	export let name;
    onMount(async() => {
        console.log('try to fetch');
        let response = await fetch('https://raw.githubusercontent.com/saewoonam/svelte-pages/main/src/App.svelte');
        let t = await response.text()
        console.log('results:', t);
    });
</script>

<main>
	<h1>Hello {name}!</h1>
	<p>Visit the <a href="https://svelte.dev/tutorial">Svelte tutorial</a> to learn how to build Svelte apps.</p>
</main>

<style>
	main {
		text-align: center;
		padding: 1em;
		max-width: 240px;
		margin: 0 auto;
	}

	h1 {
		color: #ff3e00;
		text-transform: uppercase;
		font-size: 4em;
		font-weight: 100;
	}

	@media (min-width: 640px) {
		main {
			max-width: none;
		}
	}
</style>
