import { redirect } from 'next/navigation'
import Heading from "@/components/ui/Heading";
import { prisma } from "@/src/lib/prisma";
import ProductTable from "@/components/products/ProductsTable";
import ProductPagination from "@/components/products/ProductPagination";
import Link from 'next/link';
import ProductSearchForm from '@/components/products/ProductSearchForm';


async function productCount() {
    return await prisma.product.count()
}

async function getProducts(page: number, pageSize: number) {

    const skip = (page - 1) * pageSize


    const products = await prisma.product.findMany({
        take: pageSize,
        skip,
        include: {
            category: true
        }
    })
    return products
}

export type ProductsWithCategory = Awaited<ReturnType<typeof getProducts>>;

export default async function ProductsPage({
  searchParams,
}: {
  searchParams: Promise<{ page?: string }>
}) {
  const { page } = await searchParams; // 👈 importante
  const currentPage = Number(page) || 1;
  const pageSize = 10;

  if (currentPage < 0) redirect('/admin/products');

  const [products, totalProducts] = await Promise.all([
    getProducts(currentPage, pageSize),
    productCount(),
  ]);

  const totalPages = Math.ceil(totalProducts / pageSize);

  if (currentPage > totalPages) redirect('/admin/products');

  return (
    <>
      <Heading>Administrar Productos</Heading>

      <div className='flex flex-col lg:flex-row lg:justify-between gap-5'>
        <Link
          href={`/admin/products/new`}
          className='bg-amber-400 w-full lg:w-auto text-xl px-10 py-3 text-center font-bold cursor-pointer'
        >
          Crear Producto
        </Link>

        <ProductSearchForm />
      </div>

      <ProductTable products={products} />
      <ProductPagination page={currentPage} totalPages={totalPages} />
    </>
  );
}