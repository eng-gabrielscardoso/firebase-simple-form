import type { z } from 'zod';
import type { LegalPersonSchema } from '@src/validation/LegalPerson';

export type ILegalPerson = z.infer<typeof LegalPersonSchema>;
