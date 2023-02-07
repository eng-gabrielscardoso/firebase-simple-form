import { z } from 'zod';

export const LegalPersonSchema = z.object({
	legal_person_address_office: z.string(),
	legal_person_company_name: z.string(),
	legal_person_country: z.string(),
	legal_person_registration: z.string()
});
