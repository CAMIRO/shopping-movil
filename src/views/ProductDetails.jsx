import './ProductDetails.css'

import { PhoneDetails } from '../components/PhoneDetails.jsx'
import { PhoneFormActions } from '../components/PhoneFormActions.jsx'
import { useLocation } from 'react-router-dom'
import { usePhoneDetails } from '../hooks/usePhoneDetails.jsx'

export function ProductDetails (){
    const location = useLocation()
    const { id } = location.state

    const { phoneDetails, loading, apiError } = usePhoneDetails(id)
    const { imgUrl, model } = phoneDetails

    return(
        <main className='productDetails'>
            {
                loading
                    ? <p>Cargando...</p>
                    : (
                        <>
                            <div className='imageContainer'>
                                <img src={imgUrl} alt={model} />
                            </div>
                            <div className='detailsContainer'>
                                <PhoneDetails phoneDetails={phoneDetails} />
                                <PhoneFormActions phoneDetails={phoneDetails} />
                                {apiError && <p style={{ color: 'red' }}>{apiError}</p>}
                            </div>
                        </>
                    )
            }
        </main>
    )
}


