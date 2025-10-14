"use client"

import { ProductSchema } from "@/src/schema"
import { toast } from "react-toastify"
import { createProducts } from "@/actions/create-product-action"
import { useRouter } from "next/navigation"


export default function AddProductForm({ Children }: { Children: React.ReactNode }) {
    const router = useRouter()

    const handleSubmit = async (formData: FormData) => {
        const data = {
            name: formData.get('name'),
            price: formData.get('price'),
            categoryId: formData.get('categoryId'),
            image: formData.get('imageUrl')
        }
        const result = ProductSchema.safeParse(data)
        if (!result.success) {
            result.error.issues.forEach(issue => {
                toast.error(issue.message)
            })
            console.log({
  name: formData.get("name"),
  price: formData.get("price"),
  categoryId: formData.get("categoryId"),
})
            return
        }

        const response = await createProducts(result.data)
        if(response?.errors) {
            response.errors.forEach(issue =>{
                toast.error(issue.message)
            })
            return
        }
        toast.success('Producto Creado Correctamente')
        router.push('/admin/products')

    }
    return (
        <div className="bg-white mt-10 px-5 py-10 rounded-md shadow-md max-w-3xl mx-auto">

            <form
                className='space-y-5'
                action={handleSubmit}>

                {Children}

                <input
                    type="submit"
                    className='bg-indigo-600 hover:bg-indigo-800 text-white w-full mt-5 p-3 uppercase'
                    value='Registrar Producto' />

            </form>

        </div>
    )

}