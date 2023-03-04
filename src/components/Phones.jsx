import { Link } from 'react-router-dom'
import { AddToCartIcon, RemoveFromCartIcon } from './Icons.jsx'
import PropTypes from 'prop-types'
import { useCart } from '../hooks/useCart.jsx'

function  ListOfPhones ({ phones }) { 
    const { addToCart, cart, removeFromCart } = useCart()
    const checkPhoneInCart = phone => cart.some(item => item.id === phone.id)
   
    return (
        <ul>{phones.map(phone => {
            const { model } = phone
            const dashedModel = model.replace(/\s/g, '-')
            const isPhoneInCart = checkPhoneInCart(phone)
            return (
                <li key={phone.id}>
                    <Link to={`/${dashedModel}`}>
                        <img src={phone.image} alt={model} />
                        <div className='product-container'>
                            <span>{phone.brand} {model}</span> 
                            <h3>${phone.price}</h3>
                        </div>
                    </Link>
                    <button 
                        style={{backgroundColor: isPhoneInCart ? 'red': 'green'}}
                        onClick={() => isPhoneInCart ? removeFromCart(phone): addToCart(phone)}>
                        {
                            isPhoneInCart
                                ? <RemoveFromCartIcon/>
                                : <AddToCartIcon />
                        }
                    </button>
                </li>
            )
        })}</ul>
    )
}

function NoPhonesResults () {
    return (
        <p>No se encontraron móviles para esta búsqueda</p>
    )
}

export function Phones ({ phones }) {
    const hasPhones = phones?.length > 0
    return (
        hasPhones
            ? <ListOfPhones phones={phones} />
            : <NoPhonesResults />
    )
}

ListOfPhones.propTypes = {
    phones: PropTypes.array.isRequired
}

Phones.propTypes = {
    phones: PropTypes.array.isRequired
}