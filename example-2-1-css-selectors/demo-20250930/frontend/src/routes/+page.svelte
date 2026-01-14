<script>
	import { PUBLIC_DAD_JOKE_API } from "$env/static/public";
	import { onMount } from "svelte";

	let joke = null;
	let newJoke = "";
	let showJokeAddedPanel = false;
	let errorMessage = null;
	let numJokes;

	/**
	 * Fetch a dad joke and set it to the "joke" prop above.
	 */
	async function fetchJoke() {
		const response = await fetch(`${PUBLIC_DAD_JOKE_API}/random`, {
			credentials: "include"
		});
		const data = await response.json();
		joke = data.joke;
		numJokes = data.numJokes;
	}

	async function handleSubmitNewJoke() {
		// TODO Submit new joke using a POST to PUBLIC_DAD_JOKE_API.
		// Check that response is 201. If so, display the "joke added" panel.
		// Otherwise, display error message.
		const response = await fetch(PUBLIC_DAD_JOKE_API, {
			method: "POST",
			headers: {
				"Content-Type": "application/json"
			},
			body: JSON.stringify({ joke: newJoke })
		});

		if (response.status === 201) {
			showJokeAddedPanel = true;
			newJoke = "";
			errorMessage = null;
		} else {
			const error = await response.text();
			errorMessage = error;
			showJokeAddedPanel = false;
		}
	}

	// Fetch the first joke when the page loads.
	onMount(fetchJoke);
</script>

<div class="container">
	<h2>Your daily dad joke</h2>

	<div class="joke">
		{#if joke}
			<p>{joke}</p>
		{:else}
			<p>Loading...</p>
		{/if}
	</div>

	<!-- Fetch a new joke when this button is clicked -->
	<button on:click={fetchJoke}>Load another!</button>

	{#if numJokes}
		<p class="num-jokes">You have seen {numJokes} jokes!</p>
	{/if}

	<!-- Form for submitting new jokes -->
	<h3>Feeling funny? Submit your own here!</h3>
	<form on:submit|preventDefault={handleSubmitNewJoke}>
		<input type="text" bind:value={newJoke} />
		<button type="submit">Submit</button>
		{#if showJokeAddedPanel}
			<div class="joke-added">
				<span>Joke added successfully!</span>
				<button on:click={() => (showJokeAddedPanel = false)}>X</button>
			</div>
		{/if}
		{#if errorMessage}
			<div class="error">
				<span>{errorMessage}</span>
				<button on:click={() => (errorMessage = null)}>X</button>
			</div>
		{/if}
	</form>
</div>

<style>
	.container {
		margin-top: 2rem;
		gap: 2rem;
		display: flex;
		flex-direction: column;
		text-align: center;
	}

	h2 {
		font-size: 2.5rem;
	}

	h3 {
		font-size: 2rem;
	}

	.joke {
		font-size: 2rem;
		border: 1px solid rgba(0, 0, 0, 0.1);
		border-radius: 1rem;
		min-height: 8rem;
		display: flex;
		flex-direction: column;
		justify-content: center;
		padding: 0 3rem;

		& > p {
			margin: 0;
		}
	}

	.num-jokes {
		font-style: italic;
		font-size: 1.2rem;
		color: rgb(85, 85, 85);
		margin-top: -1rem;
	}

	button {
		font-size: 2rem;
	}

	form {
		display: grid;
		grid-template-columns: 1fr auto;
		column-gap: 2rem;
		row-gap: 0.5rem;

		& > :is(input, button) {
			font-size: 1.5rem;
		}

		& > :is(.joke-added, .error) {
			grid-column: 1 / 3;
			font-size: 1.5rem;
			font-weight: bold;
			border-radius: 0;
			padding: 0.5rem 1rem;
			box-shadow: none;
			display: flex;
			flex-direction: row;
			justify-content: space-between;
			align-items: center;

			& > span {
				flex-grow: 1;
			}

			& > button {
				background-color: inherit;
				color: inherit;
				box-shadow: none;
				border: 0;
				padding: 0;
				font-size: 1.4rem;
			}
		}

		& > .joke-added {
			background-color: rgb(227, 244, 227);
			color: rgb(3, 92, 3);
		}

		& > .error {
			background-color: rgb(244, 227, 227);
			color: rgb(92, 3, 3);
		}
	}
</style>
