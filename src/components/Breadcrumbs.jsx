import { Link } from 'react-router-dom'
import useBreadcrumbs from 'use-react-router-breadcrumbs'
import './Breadcrumbs.css'

const routes = [
    { path: '/users/:userId', breadcrumb: 'Example 1' },
    { path: '/data', breadcrumb: 'Example 2' }
]

export function Breadcrumbs() {
    const breadcrumbs = useBreadcrumbs(routes)
    console.log(location.pathname)
    
    return (
        <nav key={breadcrumbs.key} className='Breadcrumb'>
            {breadcrumbs.map(({ match, breadcrumb }) => (
                <Link 
                    key={match.pathname} 
                    to={match.pathname} 
                    className={match.pathname === location.pathname ? 'breadcrumb-active' : 'breadcrumb-not-active'}>
                    {breadcrumb} /
                </Link>
            ))}
        </nav>
    )
}