<script>
	import "$lib/css/styles.css";
</script>

<nav>
	<h1>CS719 - Daily Dad Joke 🙊</h1>

	<span class="expand" />

	<img class="icon" src="Svelte_Logo.png" alt="" />
</nav>

<main>
	<slot />
</main>

<style>
	nav {
		color: white;
		display: flex;
		flex-direction: row;
		background-color: rgb(1, 32, 65);
		box-shadow: 0 3px 5px rgba(0, 0, 0, 0.3);
		padding: 0 1rem;
		gap: 1rem;
		align-items: center;

		& > .icon {
			width: 64px;
			height: 64px;
			object-fit: contain;
			padding: 0.5rem 0;
		}

		& > .expand {
			flex-grow: 1;
		}

		& a {
			color: inherit;
			text-decoration: none;
			align-self: stretch;
			padding: 0 1.1rem;
			font-size: 1.1rem;
			display: flex;
			flex-direction: column;
			justify-content: center;
			font-weight: bold;

			&:hover {
				background-color: rgba(255, 255, 255, 0.2);
			}

			&.active {
				background-color: rgba(255, 255, 255, 0.3);
			}
		}
	}

	main {
		max-width: 800px;
		margin: 0 auto;
	}

	@media screen and (max-width: 820px) {
		main {
			width: calc(100% - 20px);
			margin: 0 10px;
		}
	}
</style>
