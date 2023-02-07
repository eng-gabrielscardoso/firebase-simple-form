import type { z } from 'zod';
import type { EmployeeSchema } from '@src/validation/Employee';

export type IEmployee = z.infer<typeof EmployeeSchema>;
