import { Product } from "../interfaces/interfaces"

const product = {
    id: '1',
    title: 'Coffee Mug',
    img: './coffee-mug.png' 
}

const product2 = {
    id: '2',
    title: 'Coffee Mug - Meme',
    img: './coffee-mug2.png'
}

const product3 = {
    id: '2',
    title: 'Coffee Mug - No image',
    // img: './coffee-mug2.png'
}

export const products: Product[] = [ product, product2, product3 ]