import { z } from 'zod';

export const OrderSchema = z.object({
    name: z.string()
        .min(2, 'Tu Nombre es Obligatorio').max(100),
    total: z.number()
        .min(1, 'El total debe ser mayor a 0'),
    order: z.array(z.object({
        id: z.number(),
        name: z.string(),
        price: z.number(),
        quantity: z.number(),
        subtotal: z.number()
    }))
})


export const OrderIdSchema = z.object({
    orderId: z.string()
        .transform((value) => parseInt(value))
        .refine(value => value > 0, { message: 'hay errores' })
})



export const SearchSchema = z.object({
    search: z.string()
        .trim()
        .min(1, 'La busqueda no puede estar vacia')
})

export const ProductSchema = z.object({
  name: z.string()
    .trim()
    .min(1, { message: "El Nombre del Producto no puede ir vacio" }),

  price: z.coerce.number({
    message: "El Precio es obligatorio y debe ser un número válido",
  }).min(1, { message: "Precio no válido" }),

  categoryId: z.coerce.number({
    message: "La Categoría es Obligatoria y debe ser un número válido",
  }).min(1, { message: "La Categoría es Obligatoria" }),
  image: z.string().min(1, { message: "La Imagen es Obligatoria" })
})