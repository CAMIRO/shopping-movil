import './Products.css'
import { Link } from 'react-router-dom'
import PropTypes from 'prop-types'



export function Products ({ products }){
    return(
        
        <main className='products'>
            <ul>{products.slice(0,12).map(product => {
                const { id, model } = product
                const dashedModel = model.replace(/\s/g, '-')
                return (
             
                    <li key={id}>
                        <Link to={`/${dashedModel}`}>
                            <img src={product.imgUrl} alt={model} />
                            <div>
                                {product.brand} {model} - ${product.price}
                            </div>
                        </Link>
                    </li>
                )
            })}</ul>
        </main>
       
    )
}

Products.propTypes = {
    products: PropTypes.array.isRequired
}