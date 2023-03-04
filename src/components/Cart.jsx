import './Cart.css'
import { useCart } from '../hooks/useCart.jsx'
import { useId } from 'react'
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
    const cartCheckboxId = useId()
    const { cart, clearCart, addToCart } = useCart()

    return (
        <>
            <label className='cart-button' htmlFor="cart">
                <CartIcon /> { cart.length }
            </label>
            <input 
                id={cartCheckboxId} 
                type="checkbox" 
                hidden 
            />
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
        </>
    )
}