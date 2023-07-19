import { ProductButtons, ProductCard, ProductImage, ProductTitle } from '../components';
import '../styles/custom-styles.css'
import { useShoppingcart } from '../hooks/useShoppingCart';
import { products } from '../data/products';


export const ShoppingPage = () => {

    const { shoppingCart, onProductCountChange }  = useShoppingcart()
 
  return (
    <div>
        <h1>Shopping Page</h1>
        <hr />
        <div style={{
            display: 'flex',  
            flexDirection: 'row',
            flexWrap: 'wrap'
        }} >

            {
                products.map(product => (
                    <ProductCard
                        key={ product.id }
                        product={ product }
                        className='bg-dark text-white'
                        onChange={ onProductCountChange }
                        value={ shoppingCart[product.id]?.count || 0 }
                    >
                    <ProductImage 
                        className='custom-image'
                        style={{ boxShadow: '10px 10px 10px rgba(0,0,0,0.5)' }}
                    />
                    <ProductTitle 
                        title=""
                        className='text-bold'
                    />
                    <ProductButtons className='custom-buttons' />
                </ProductCard>
                ))
            }

            <div className='shopping-cart' >
                {
                    Object.entries( shoppingCart ).map( ([key, product]) => (
                        <ProductCard
                        key={ key }
                        product={ product }
                        className='bg-dark text-white'
                        style={{ width: '100px' }}
                        value={ product.count }
                        onChange={ onProductCountChange }
                    >
                        <ProductImage 
                            className='custom-image'
                        />
                        <ProductTitle 
                            title=""
                            className='text-bold'
                        />
                        <ProductButtons className='custom-buttons' />
                    </ProductCard>
                    ) )
                }
            </div>
        </div>
    </div>
  )
}
