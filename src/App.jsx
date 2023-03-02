import initialProducts  from './mocks/products.json'
import { Routes, Route } from 'react-router-dom'
//components
import { Header } from './components/Header.jsx'
//views
import { Products } from './views/Products.jsx'
import { ProductDetails } from './views/ProductDetails.jsx'

import { useState } from 'react'

import './GlobalStyles.css'

function App() {
    const [products] = useState(initialProducts)
    return (
        <div className="App">
            <Header />
            <Routes>
                <Route exact path="/" element={ <Products products={products}/> }/>
                <Route path="/:product" element={ <ProductDetails /> } />
            </Routes>
        </div>
    )
}

export default App
