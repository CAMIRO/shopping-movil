import './Header.css'
import { Breadcrumbs } from './Breadcrumbs.jsx'
import { ShopButton } from './ShopButton.jsx'
import { Logo } from './Logo.jsx'

export function Header (){
  
   
    return(
        
        <main className='header'>
            <div className='leftContainer'>
                <Logo />
                <Breadcrumbs />
            </div>
            <ShopButton/>
        </main>
       
    )
}