import { z } from 'zod';
import { LegalPersonSchema } from './LegalPerson';
import { NaturalPersonSchema } from './NaturalPerson';

export const RecipientSchema = LegalPersonSchema.merge(NaturalPersonSchema).merge(
	z.object({
		childs: z.array(z.string()),
		is_active: z.boolean(),
		is_blocked: z.boolean(),
		parent_ref: z.string()
	})
);
