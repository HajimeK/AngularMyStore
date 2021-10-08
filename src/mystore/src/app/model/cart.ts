import { Product } from "./product";
import { User } from "./user";

export type Cart = {
    user: User,
    items: CartItem[]
};

export type CartItem = {
    product: Product,
    quantity: number
};