import { LogoIcon } from './Icons.jsx'
import { Link } from 'react-router-dom'
import './Header.css'

export function Logo() {

    
    return (
        <Link to="/" className='logo'>
            <LogoIcon />
        </Link>
    )
}