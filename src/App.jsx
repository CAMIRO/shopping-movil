
import { Routes, Route } from 'react-router-dom'
//components
import { Header } from './components/Header.jsx'
//views
import { Products } from './views/Products.jsx'
import { ProductDetails } from './views/ProductDetails.jsx'
import { CartProvider } from './context/cart.jsx'


import './GlobalStyles.css'

function App() {
    
    
    return (
        <div className="App">
            <CartProvider>
                <Header />
                <Routes>
                    <Route exact path="/" element={ <Products /> }/>
                    <Route path="/:product" element={ <ProductDetails /> } />
                </Routes>
            </CartProvider>
        </div>
    )
}

export default App
