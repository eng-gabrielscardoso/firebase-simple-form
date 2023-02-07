import type { z } from 'zod';
import type { NaturalPersonSchema } from '@src/validation/NaturalPerson';

export type INaturalPerson = z.infer<typeof NaturalPersonSchema>;
