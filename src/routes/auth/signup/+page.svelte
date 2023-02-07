<script lang="ts">
	import { fly } from 'svelte/transition';
	import Card from '@components/base/Card.svelte';
	let displayCompanyDetails: boolean = false;
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
						placeholder="Name"
						class="input-field"
						required
					/>
					<input
						type="text"
						name="recipientNaturalPersonPosition"
						id="recipientNaturalPersonPosition"
						placeholder="Position"
						class="input-field"
						required
					/>
					<input
						type="email"
						name="recipientNaturalPersonEmail"
						id="recipientNaturalPersonEmail"
						placeholder="Email address"
						class="input-field"
						required
					/>
					<input
						type="phone"
						name="recipientNaturalPersonPhone"
						id="recipientNaturalPersonPhone"
						placeholder="Contact number"
						class="input-field"
						required
					/>
					<input
						type="password"
						name="recipientPassword"
						id="recipientPassword"
						placeholder="Password"
						class="input-field"
						required
					/>
					<input
						type="text"
						name="recipientNaturalPersonBirthDate"
						id="recipientNaturalPersonBirthDate"
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
					<div transition:fly="{{ y: 100, duration: 500 }}" class="w-full flex flex-col gap-2">
						<p class="text-lg font-bold text-blue-600">Company Details</p>
						<input
							type="text"
							name="recipientLegalPersonCompanyName"
							id="recipientLegalPersonCompanyName"
							placeholder="Company name"
							class="input-field"
							required
						/>
						<input
							type="number"
							name="legalPersonCompanyRegistrationNumber"
							id="legalPersonCompanyRegistrationNumber"
							placeholder="Company registration number"
							class="input-field"
							required
						/>
						<input
							type="text"
							name="legalPersonCompanyCountryOffice"
							id="legalPersonCompanyCountryOffice"
							placeholder="Company Head Office Country"
							class="input-field"
							required
						/>
						<input
							type="text"
							name="legalPersonCompanyAddressOffice"
							id="legalPersonCompanyAddressOffice"
							placeholder="Company Address"
							class="input-field"
							required
						/>
						<div>
							<input
								type="checkbox"
								name="recipientAgreements"
								id="recipientAgreements"
								class="input-field"
								required
							/>
							<label for="recipientAgreements"
								>I've read and agree with the terms and conditions</label
							>
						</div>
					</div>
				{/if}
				<button type="submit" class="button-primary">Sign Up</button>
			</form>
			<p>
				Already have an account? <a href="/auth/signin" class="link-primary">Sign in here!</a>
			</p>
		</div>
	</Card>
</div>
