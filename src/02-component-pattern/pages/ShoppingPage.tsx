import { ProductButtons, ProductCard, ProductImage, ProductTitle } from '../components';
import '../styles/custom-styles.css'
import { products } from '../data/products';

const product = products[0]

export const ShoppingPage = () => {
 
  return (
    <div>
        <h1>Shopping Page</h1>
        <hr />
        <div style={{
            display: 'flex',  
            flexDirection: 'row',
            flexWrap: 'wrap'
        }} >

                <ProductCard
                    key={ product.id }
                    product={ product }
                    className='bg-dark text-white'
                    initialValues={{
                        count: 4,
                        maxCount: 10
                    }}
                >
                    {
                        ({ reset, isMaxCountReached, maxCount, count, increaseBy }) => (
                            <>
                                <ProductImage 
                                    className='custom-image'
                                    style={{ boxShadow: '10px 10px 10px rgba(0,0,0,0.5)' }}
                                />
                                <ProductTitle 
                                    title=""
                                    className='text-bold'
                                />
                                <ProductButtons className='custom-buttons' />
                                <button onClick={ reset } >Reset</button>
                                <button onClick={ () => increaseBy(-2) } >-2</button>
                                {
                                    !isMaxCountReached && <button onClick={ () => increaseBy(+2) } >+2</button>
                                }

                                <span>{ count } - { maxCount }</span>
                            </>
                        )
                    }
            </ProductCard>
        </div> 
    </div>
  )
}
