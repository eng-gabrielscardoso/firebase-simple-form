<script lang="ts">
	import Card from '@components/base/Card.svelte';
	import { db } from '@src/services/firebase';
	import { createRecipient } from '@src/services/recipients/recipients';

	let userName = '';
	let jobPosition = '';
	let email = '';
	let phone = '';
	let password = '';
	let birthday = '';

	async function signUpUser(): Promise<any> {
		const payload = {
			userName,
			jobPosition,
			email,
			phone,
			password,
			birthday
		};

		try {
			const request = await createRecipient(db, payload);
		} catch (error) {
			console.error(error);
		} finally {
			console.log('Finished.');
		}
	}
</script>

<svelte:head>
	<title>Sign Up | Firebase Simple Form</title>
</svelte:head>
<div class="h-screen w-screen flex justify-center items-center p-4">
	<Card class="min-h-fit max-h-full w-full md:w-1/2 overflow-y-scroll text-center" title="Sign Up">
		<div class="flex flex-col gap-4">
			<form class="w-full flex flex-col gap-2 mt-2">
				<div class="w-full flex flex-col gap-2">
					<p class="text-lg font-bold text-blue-600">Primary Contact Details</p>
					<input
						type="text"
						name="userName"
						id="userName"
						bind:value={userName}
						placeholder="Name"
						class="input-field"
						required
					/>
					<input
						type="text"
						name="jobPosition"
						id="jobPosition"
						bind:value={jobPosition}
						placeholder="Position"
						class="input-field"
						required
					/>
					<input
						type="email"
						name="email"
						id="email"
						bind:value={email}
						placeholder="Email address"
						class="input-field"
						required
					/>
					<input
						type="phone"
						name="phone"
						id="phone"
						bind:value={phone}
						placeholder="Contact number"
						class="input-field"
						required
					/>
					<input
						type="password"
						name="password"
						id="password"
						bind:value={password}
						placeholder="Password"
						class="input-field"
						required
					/>
					<input
						type="text"
						name="birthday"
						id="birthday"
						bind:value={birthday}
						placeholder="Date of Birth (YYYY-MM-DD)"
						class="input-field"
						required
					/>
				</div>
				<button type="submit" class="button-primary" on:click={(e) => signUpUser()}>Sign Up</button>
			</form>
			<p>
				Already have an account? <a href="/auth/signin" class="link-primary">Sign in here!</a>
			</p>
		</div>
	</Card>
</div>
