import initialProducts  from './mocks/products.json'
import { Products } from './components/Products.jsx'
import { useState } from 'react'

function App() {
    const [products] = useState(initialProducts)
    return (
        <Products products={products} />
    )
}

export default App