<script lang="ts">
	import Card from '@components/base/Card.svelte';
</script>

<svelte:head>
	<title>Sign In | Firebase Simple Form</title>
</svelte:head>

<div class="h-screen w-screen flex justify-center items-center p-4">
	<Card class="w-full md:w-1/3 text-center" title="Sign In">
		<div class="flex flex-col gap-4">
			<form class="w-full flex flex-col gap-4">
				<p>Please inform your credentials to log in your account.</p>
				<input
					type="email"
					name="recipientEmail"
					id="recipientEmail"
					placeholder="Email address"
					class="p-2 border-b border-gray-300 outline-none focus:border-blue-600"
					required
				/>
				<input
					type="password"
					name="recipientPassword"
					id="recipientPassword"
					placeholder="Password"
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
