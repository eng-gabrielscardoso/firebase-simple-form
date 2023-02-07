<script lang="ts">
	import { fly } from 'svelte/transition';
	import Card from '@components/base/Card.svelte';
	import { api } from '@src/services/api';

	let displayCompanyDetails: boolean = false;

	let recipientNaturalPersonName = ''
	let recipientNaturalPersonPosition = ''
	let recipientNaturalPersonEmail = ''
	let recipientNaturalPersonPhone = ''
	let recipientPassword = ''
	let recipientNaturalPersonBirthDate = ''
	let recipientLegalPersonCompanyName = ''
	let legalPersonCompanyRegistrationNumber = ''
	let legalPersonCompanyCountryOffice = ''
	let legalPersonCompanyAddressOffice = ''
	let recipientAgreements: boolean = false;

	async function signUpRecipient(): Promise<any> {
		const payload = {
			recipientNaturalPersonName,
			recipientNaturalPersonPosition,
			recipientNaturalPersonEmail,
			recipientNaturalPersonPhone,
			recipientPassword,
			recipientNaturalPersonBirthDate,
			recipientLegalPersonCompanyName,
			legalPersonCompanyRegistrationNumber,
			legalPersonCompanyCountryOffice,
			legalPersonCompanyAddressOffice,
			recipientAgreements,
		}

		try {
			const request = await api.post('/recipients', payload);
		} catch (error) {
			console.log(error);
		} finally {
			console.log('Finished.')
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
						name="recipientNaturalPersonName"
						id="recipientNaturalPersonName"
						bind:value={recipientNaturalPersonName}
						placeholder="Name"
						class="input-field"
						required
					/>
					<input
						type="text"
						name="recipientNaturalPersonPosition"
						id="recipientNaturalPersonPosition"
						bind:value={recipientNaturalPersonPosition}
						placeholder="Position"
						class="input-field"
						required
					/>
					<input
						type="email"
						name="recipientNaturalPersonEmail"
						id="recipientNaturalPersonEmail"
						bind:value={recipientNaturalPersonEmail}
						placeholder="Email address"
						class="input-field"
						required
					/>
					<input
						type="phone"
						name="recipientNaturalPersonPhone"
						id="recipientNaturalPersonPhone"
						bind:value={recipientNaturalPersonPhone}
						placeholder="Contact number"
						class="input-field"
						required
					/>
					<input
						type="password"
						name="recipientPassword"
						id="recipientPassword"
						bind:value={recipientPassword}
						placeholder="Password"
						class="input-field"
						required
					/>
					<input
						type="text"
						name="recipientNaturalPersonBirthDate"
						id="recipientNaturalPersonBirthDate"
						bind:value={recipientNaturalPersonBirthDate}
						placeholder="Date of Birth (YYYY-MM-DD)"
						class="input-field"
						required
					/>
				</div>
				<div>
					<label class="relative inline-flex items-center cursor-pointer">
						<input
							type="checkbox"
							value=""
							class="sr-only peer"
							on:click={(_) => !displayCompanyDetails}
							bind:checked={displayCompanyDetails}
						/>
						<div
							class="w-11 h-6 bg-gray-200 rounded-full peer peer-focus:ring-2 peer-focus:ring-blue-300 dark:peer-focus:ring-blue-800 dark:bg-gray-700 peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-0.5 after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all dark:border-gray-600 peer-checked:bg-blue-600"
						/>
						<span class="ml-3 text-sm font-medium text-gray-900 dark:text-gray-300"
							>Show company details</span
						>
					</label>
				</div>
				{#if displayCompanyDetails}
					<div transition:fly={{ y: 100, duration: 500 }} class="w-full flex flex-col gap-2">
						<p class="text-lg font-bold text-blue-600">Company Details</p>
						<input
							type="text"
							name="recipientLegalPersonCompanyName"
							id="recipientLegalPersonCompanyName"
							bind:value={recipientLegalPersonCompanyName}
							placeholder="Company name"
							class="input-field"
							required
						/>
						<input
							type="number"
							name="legalPersonCompanyRegistrationNumber"
							id="legalPersonCompanyRegistrationNumber"
							bind:value={legalPersonCompanyRegistrationNumber}
							placeholder="Company registration number"
							class="input-field"
							required
						/>
						<input
							type="text"
							name="legalPersonCompanyCountryOffice"
							id="legalPersonCompanyCountryOffice"
							bind:value={legalPersonCompanyCountryOffice}
							placeholder="Company Head Office Country"
							class="input-field"
							required
						/>
						<input
							type="text"
							name="legalPersonCompanyAddressOffice"
							id="legalPersonCompanyAddressOffice"
							bind:value={legalPersonCompanyAddressOffice}
							placeholder="Company Address"
							class="input-field"
							required
						/>
						<div>
							<input
								type="checkbox"
								name="recipientAgreements"
								id="recipientAgreements"
								bind:value={recipientAgreements}
								class="input-field"
								required
							/>
							<label for="recipientAgreements"
								>I've read and agree with the terms and conditions</label
							>
						</div>
					</div>
				{/if}
				<button type="submit" class="button-primary" on:click={(e) => signUpRecipient()}
					>Sign Up</button
				>
			</form>
			<p>
				Already have an account? <a href="/auth/signin" class="link-primary">Sign in here!</a>
			</p>
		</div>
	</Card>
</div>
