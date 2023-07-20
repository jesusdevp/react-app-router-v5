import styles from '../styles/styles.module.css'
import { useProduct } from '../hooks/useProduct'
import { CSSProperties, createContext } from 'react'
import { InitialValues, Product, ProductCardHandlers, ProductContextProps, onChangeArgs } from '../interfaces/interfaces'

export const ProductContext = createContext({} as ProductContextProps )

const { Provider } = ProductContext;

export interface ProductCardProps {
  product: Product,
  children: ( args: ProductCardHandlers ) => JSX.Element,
  className?: string,
  style?:  CSSProperties,
  onChange?: ( args: onChangeArgs ) => void,
  value?: number,
  initialValues?: InitialValues
}

export const ProductCard = ({ children, product, className, style, onChange, value, initialValues   }: ProductCardProps) => {

    const { counter, increaseBy, reset, maxCount, isMaxCountReached } = useProduct({
      onChange,
      product,
      value,
      initialValues
    })

  return (
    <Provider value={{
        counter,
        increaseBy,
        product,
        maxCount
    }} >
        <div 
          className={ `${ styles.productCard } ${ className }` }
          style={ style }  
        >
        { children({
          count: counter,
          isMaxCountReached,
          maxCount: initialValues?.maxCount,
          product,
          increaseBy,
          reset
        }) }
        </div>
    </Provider>
  )
}