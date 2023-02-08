<script lang="ts">
	import { onMount } from 'svelte';
	import type { DocumentData } from 'firebase/firestore/lite';
	import { db } from '@src/services/firebase';
	import { getRecipients } from '@src/services/recipients/recipients';
	import Card from '@components/base/Card.svelte';

	let recipients: DocumentData[] = [];

	async function fetchRecipients() {
		const response = await getRecipients(db);
		recipients = response;
	}

	onMount(async () => {
		await fetchRecipients();
	});
</script>

<svelte:head>
	<title>Firebase Simple Form</title>
</svelte:head>
<div class="h-screen w-screen flex justify-center items-center p-4">
	<Card class="w-full md:w-1/2 text-center" title="Latest recipients">
		<ul>
			{#each recipients as recipient}
				<li>{recipient.natural_person_name}</li>
			{/each}
		</ul>
	</Card>
</div>
