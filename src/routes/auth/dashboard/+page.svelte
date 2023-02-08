<script lang="ts">
	import { user } from '@src/lib/store/User';

	let item = '';
</script>

<div>
	<header class="mt-4">
		<p>Name: {$user?.displayName}</p>
		<p>Email: {$user?.email}</p>
	</header>

	<div class="grid w-1/2 items-center mt-10">
		<input
			class="p-2 border-b border-gray-300 outline-none focus:border-blue-600"
			placeholder="Recipient"
			type="text"
			bind:value={item}
		/>

		<div class="mt-2">
			<button class="button-primary">Add new Recipient</button>
			<button class="button-primary">Remove Recipient</button>
		</div>
	</div>
</div>
