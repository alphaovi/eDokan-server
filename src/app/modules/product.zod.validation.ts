import { z } from 'zod';

const VariantValidationSchema = z.object({
  type: z.string().nonempty('Type is required'),
  value: z.string().nonempty('Value is required'),
});

const InventoryValidationSchema = z.object({
  quantity: z.number(),
  inStock: z.boolean(),
});

export const productValidationSchema = z.object({
  name: z.string().nonempty('Name is requried'),
  description: z.string().nonempty('Description is requried'),
  price: z.number(),
  category: z.string().nonempty('Category is requried'),
  tags: z.array(z.string().nonempty('Tages is required')),
  variants: z.array(VariantValidationSchema),
  inventory: InventoryValidationSchema,
});
