import { z } from 'zod';

export const EmployeeSchema = z.object({
	company: z.string(),
	email: z.string(),
	employeeId: z.string(),
	name: z.string()
});
