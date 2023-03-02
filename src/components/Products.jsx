import './Products.css'
import { AddToCartIcon } from './Icons.jsx'
import PropTypes from 'prop-types'



export function Products ({ products }){
    return(
        <main className='products'>
            <ul>{products.slice(0,12).map(product => (
                <li key={product.id}>
                    <img src={product.imgUrl} alt={product.model} />
                    <div>
                        <strong>{product.brand} {product.model}</strong> - ${product.price}
                    </div>
                    <div>
                        <button>
                            <AddToCartIcon />
                        </button>
                    </div>
                </li>
            ))}</ul>
        </main>
    )
}

Products.propTypes = {
    products: PropTypes.array.isRequired
}