import {Product} from "@/prima/client";

export type OrderItem = Pick<Product, 'id' | 'name' | 'price'> &{

    quantity: number;
    subtotal: number;
}