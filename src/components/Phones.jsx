import { Link } from 'react-router-dom'
import PropTypes from 'prop-types'

function  ListOfPhones ({ phones }) { 
    return (
        <ul>{phones.map(phone => {
            const { model } = phone
            const dashedModel = model.replace(/\s/g, '-')
            return (
                <li key={phone.id}>
                    <Link to={`/${dashedModel}`}>
                        <img src={phone.image} alt={model} />
                        <div className='product-container'>
                            <span>{phone.brand} {model}</span> 
                            <h3>${phone.price}</h3>
                        </div>
                       
                    </Link>
                </li>
            )
        })}</ul>
    )
}

function NoPhonesResults () {
    return (
        <p>No se encontraron móviles para esta búsqueda</p>
    )
}

export function Phones ({ phones }) {
    const hasPhones = phones?.length > 0
    return (
        hasPhones
            ? <ListOfPhones phones={phones} />
            : <NoPhonesResults />
    )
}

ListOfPhones.propTypes = {
    phones: PropTypes.array.isRequired
}

Phones.propTypes = {
    phones: PropTypes.array.isRequired
}