import { ProductType } from "./types";

export const getProductIdentifier = (product:ProductType)=>{
    return product.head + product.tail
}