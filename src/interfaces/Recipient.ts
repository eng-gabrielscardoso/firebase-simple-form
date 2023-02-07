import type { z } from 'zod';
import type { RecipientSchema } from '@src/validation/Recipient';

export type IRecipient = z.infer<typeof RecipientSchema>;
