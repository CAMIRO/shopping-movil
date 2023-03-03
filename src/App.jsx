
import { Routes, Route } from 'react-router-dom'
//components
import { Header } from './components/Header.jsx'
//views
import { Products } from './views/Products.jsx'
import { ProductDetails } from './views/ProductDetails.jsx'



import './GlobalStyles.css'

function App() {
    
    
    return (
        <div className="App">
            <Header />
            <Routes>
                <Route exact path="/" element={ <Products /> }/>
                <Route path="/:product" element={ <ProductDetails /> } />
            </Routes>
        </div>
    )
}

export default App
