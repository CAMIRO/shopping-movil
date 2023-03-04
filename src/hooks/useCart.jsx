import { useContext } from 'react'
import { CartContext } from '../context/cart.jsx'

export const useCart = () => {
    const context = useContext(CartContext)
    if( context === undefined){
        throw new Error('UseCart debe ser usado dentro de un CartProvider')
    }
    return context
}