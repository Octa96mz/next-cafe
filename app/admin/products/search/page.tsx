import ProductTable from "@/components/products/ProductsTable";
import Heading from "@/components/ui/Heading";
import { prisma } from "@/src/lib/prisma";
import ProductSearchForm from '@/components/products/ProductSearchForm';

async function searchProduct(searchTerm: string) {
    const products = await prisma.product.findMany({
        where: {
            name: {
                contains: searchTerm,
                mode: "insensitive"
            }
        },
        include: {
            category: true
        }
    })
    return products
}

export default async function SearchPage({
  searchParams,
}: {
  searchParams: Promise<{ search?: string }>
}) {
  const { search } = await searchParams; 
  const query = search || '';

  const products = await searchProduct(query)

  return (
      <>

            <Heading>Resultado de búsqueda</Heading>

            <div className='flex flex-col lg:flex-row lg:justify-end gap-5'>

                <ProductSearchForm />

            </div>

            {products.length ? (
                <ProductTable
                    products={products}
                />
            ) : <p className="text-center text-lg">No se encontraron productos.</p>}

        </>
    )
}