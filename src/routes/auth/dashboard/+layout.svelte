<script>
	import { goto } from '$app/navigation';
	import { user } from '@src/lib/store/User';
	import { auth } from '@src/services/firebase';
	import { onAuthStateChanged, signOut } from 'firebase/auth';
	import { onMount } from 'svelte';

	onMount(() => {
		onAuthStateChanged(auth, (account) => {
			$user = account;
			if (!account) goto('/');
		});
	});

	async function logout() {
		await signOut(auth);
	}
</script>

<svelte:head>
	<title>Dashboard</title>
</svelte:head>

<main>
	<div class="flex flex-col bg-slate-300 h-screen p-16">
		<header>
			<button on:click={logout} class="button-primary left-16 top-3">Logout</button>
		</header>
		<slot />
	</div>
</main>

<style>
	div :global(> :nth-child(2)) {
		@apply h-full flex-grow;
	}
</style>
