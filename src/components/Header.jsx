import './Header.css'
import { Breadcrumbs } from './Breadcrumbs.jsx'
import { Cart } from './Cart.jsx'
import { Logo } from './Logo.jsx'

export function Header (){
  
   
    return(
        
        <main className='header'>
            <div className='leftContainer'>
                <Logo />
                <Breadcrumbs />
            </div>
            <Cart/>
        </main>
       
    )
}