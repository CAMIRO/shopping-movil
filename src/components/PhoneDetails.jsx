import './PhoneDetails.css'
import PropTypes from 'prop-types'


function ListOfPhoneDetails ({ phoneDetails }) {
    const {
        brand, 
        model, 
        price, 
        cpu,
        os,
        displayResolution,
        battery, 
        primaryCamera, 
        secondaryCmera,
        dimentions, 
        weight 
    } = phoneDetails
    return (
        <div className='descriptionContainer'>
            <p><strong>{brand} {model}</strong> Precio: ${price}</p>
            <ul>
                <li><strong>CPU:</strong> {cpu}</li>
                <li><strong>OS:</strong>{os}</li>
                <li><strong>Display Resolution:</strong> {displayResolution}</li>
                <li><strong>Battery Capacity:</strong> {battery}</li>
                <li><strong>Primary Camera:</strong> {primaryCamera}</li>
                <li><strong>Secondary Camera:</strong> {secondaryCmera}</li>
                <li><strong>Dimentions:</strong> {dimentions}</li>                
                <li><strong>Weight:</strong> {weight}</li>            
            </ul>
        </div>
    )
}

export function PhoneDetails ({ phoneDetails }) {
    const hasPhoneDetails = Object.keys(phoneDetails)
    return (
        hasPhoneDetails
            ? <ListOfPhoneDetails phoneDetails={phoneDetails} />
            : <p>No se encontraron detalles para esta búsqueda</p>
    )
}


PhoneDetails.propTypes = {
    phoneDetails: PropTypes.object
}


ListOfPhoneDetails.propTypes = {
    phoneDetails: PropTypes.object
}