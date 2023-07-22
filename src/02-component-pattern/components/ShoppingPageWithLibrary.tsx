import { ProductCard, ProductTitle, ProductImage, ProductButtons } from 'jes-product'
import { products } from '../data/products'

export const ShoppingPageWithLibrary = () => {
  return (
    <div>
        <ProductCard
        product={ products[1] }
        initialValues={{
            count: 4,
            maxCount: 10
        }}
    >
        {
            () => (
                <div>
                    <ProductImage />
                    <ProductTitle />
                    <ProductButtons />
                </div>
            )
        }
</ProductCard>
    </div>
  )
}
