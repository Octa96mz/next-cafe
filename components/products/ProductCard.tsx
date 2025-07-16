import { Product } from "@prisma/client";
import { formatCurrency } from "@/src/utils";
import Image from "next/image";
import AddProductButton from "./AddProductButton";
type ProductCardProps = {
    product:Product
}

export default function ProductCard({ product }: ProductCardProps) {
  return (
    <div className="border bg-white">

        <Image
            width={400}
            height={500}
            src={`/products/${product.image}.jpg`}
            alt={`Image of ${product.name}`}
            />
        <div className="p-5">
            <h3 className="text-2l font-bold">{product.name}</h3>
            <p className="mt-5 font-black text text-amber-500">
                {formatCurrency(product.price)}
            </p>
            <AddProductButton
              product={product}
            />
        </div>
    </div>
  )
}
