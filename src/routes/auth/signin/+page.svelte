<script lang="ts">
	import { goto } from '$app/navigation';
	import { z } from 'zod';
	import {
		setPersistence,
		signInWithEmailAndPassword,
		browserSessionPersistence
	} from 'firebase/auth';
	import { auth } from '@src/services/firebase';
	import Card from '@components/base/Card.svelte';
	import { user } from '@src/lib/store/User';

	let email: string = '';
	let password: string = '';

	async function login() {
		try {
			const data = z
				.object({ email: z.string().email(), password: z.string().min(3) })
				.parse({ email, password });

			await setPersistence(auth, browserSessionPersistence);
			const loggedIn = await signInWithEmailAndPassword(auth, data.email, data.password);
			user.set(loggedIn.user);
			goto('dashboard');
		} catch (error: any) {
			const errorCode = error.code;
			const errorMessage = error.message;
		}
	}
</script>

<svelte:head>
	<title>Sign In | Firebase Simple Form</title>
</svelte:head>

<div class="h-screen w-screen flex justify-center items-center p-4">
	<Card class="w-full md:w-1/3 text-center" title="Sign In">
		<div class="flex flex-col gap-4">
			<form class="w-full flex flex-col gap-4" on:submit={login}>
				<p>Please inform your credentials to log in your account.</p>
				<input
					type="email"
					name="recipientEmail"
					id="recipientEmail"
					placeholder="Email address"
					bind:value={email}
					class="p-2 border-b border-gray-300 outline-none focus:border-blue-600"
					required
				/>
				<input
					type="password"
					name="recipientPassword"
					id="recipientPassword"
					placeholder="Password"
					bind:value={password}
					class="p-2 border-b border-gray-300 outline-none focus:border-blue-600"
					required
				/>
				<button type="submit" class="button-primary">Log In</button>
			</form>
			<p>
				Don't have an account? <a href="/auth/signup" class="text-blue-600 hover:underline"
					>Sign up now!</a
				>
			</p>
		</div>
	</Card>
</div>
