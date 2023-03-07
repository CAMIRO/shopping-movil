import { useState } from 'react'
import './Cart.css'
import { useCart } from '../hooks/useCart.jsx'
import { CartIcon, ClearCartIcon } from './Icons.jsx'
import PropTypes from 'prop-types'

function CartItem ({ image, price, model, quantity, addToCart }) {
    
    return (
        <li>
            <img src={image} alt={model} />
            <div>
                <strong>{model}</strong> - ${price}
            </div>
            <footer>
                <small >
                Cant : {quantity}
                </small>
                <button onClick={addToCart}>+</button>
            </footer>
        </li>
    )
}

CartItem.propTypes = {
    image: PropTypes.string.isRequired,
    price: PropTypes.string.isRequired,
    model: PropTypes.string.isRequired,
    quantity: PropTypes.number.isRequired,
    addToCart: PropTypes.func.isRequired
}

export function Cart() {
    const [showCart, setShowCart] = useState(false)
    const { cart, clearCart, addToCart } = useCart()

    return (
        <>
            <label 
                className='cart-button' 
                htmlFor="cart" 
                onClick={() => setShowCart(!showCart)}
            >
                <CartIcon /> { cart.length }
            </label>
            
            {
                showCart && (
                    <aside className='cart'>
                        <ul>
                            {cart.map(phone => (
                                <CartItem 
                                    key={phone.id} 
                                    {...phone}
                                    addToCart={() => addToCart(phone)}
                                />
                            ))}
                        </ul>
                        <button onClick={clearCart} >
                            <ClearCartIcon />
                        </button>
                    </aside>
                )
            }
        </>
    )
}