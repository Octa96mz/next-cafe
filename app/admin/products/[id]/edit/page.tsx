import { prisma } from "@/src/lib/prisma"
import { notFound } from "next/navigation"
import Heading from "@/components/ui/Heading"
import EditProductForm from "@/components/products/EditProductForm"
import ProductForm from "@/components/products/ProductForm"
import GoBackButton from "@/components/ui/GoBackButton"

async function getProductById(id: number) {
  const product = await prisma.product.findUnique({
    where: {
      id
    }
  })
  if (!product) {
    notFound()
  }
  return product
}


export default async function EditProductsPage({
  params,
}: {
  params: Promise<{ id: string }>
}) {
  const { id } = await params; // 👈 importante: await params
  const product = await getProductById(Number(id));

  return (
    <>
      <Heading>Editar Producto: {product.name}</Heading>
      <GoBackButton />
      <EditProductForm Children={<ProductForm product={product} />} />
    </>
  );
}