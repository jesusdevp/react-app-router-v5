import { ProductButtons, ProductCard, ProductImage, ProductTitle } from '../components';
import '../styles/custom-styles.css'

const product = {
    id: '1',
    title: 'Coffee Mug',
    img: './coffee-mug.png'
}

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
            <ProductCard product={ product } >
                <ProductCard.Image />
                <ProductCard.Title title="" />
                <ProductCard.Buttons />
            </ProductCard>

            <ProductCard 
                product={ product }
                className='bg-dark text-white'
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

            <ProductCard 
                product={ product }
                style={{
                    backgroundColor: '#70D1F8'
                }}
            >
                <ProductImage style={{ boxShadow: '10px 10px 10px rgba(0,0,0,0.2)' }} />
                <ProductTitle 
                    style={{ 
                       fontWeight: 'bold'
                     }}
                />
                <ProductButtons 
                    style={{ 
                        display: 'flex',
                        justifyContent: 'flex-end'
                     }}
                />
            </ProductCard>
        </div>
    </div>
  )
}