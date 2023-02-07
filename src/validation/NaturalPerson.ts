import { z } from 'zod';

export const NaturalPersonSchema = z.object({
	natural_person_birth_date: z.date(),
	natural_person_email: z.string().email(),
	natural_person_name: z.string().min(2),
	natural_person_phone: z.string(),
	natural_person_position: z.string()
});
