import { ProductCard as ProductCardHOC } from "./ProductCard";

import { ProductImage } from ".";
import { ProductButtons } from ".";
import { ProductTitle } from ".";
import { ProductHocProps } from "../interfaces/interfaces";

export { ProductButtons } from "./ProductButtons";
export { ProductImage } from "./ProductImage";
export { ProductTitle } from "./ProductTitle";

export const ProductCard: ProductHocProps = Object.assign( ProductCardHOC, {
    Title: ProductTitle,
    Image: ProductImage,
    Buttons: ProductButtons
})

export default ProductCard