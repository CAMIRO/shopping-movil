

import PropTypes from 'prop-types'
import { postPhone } from '../services/phones.js'
import { AddToCartIcon } from './Icons.jsx'
import { useAddPhone } from '../hooks/useAddPhone.jsx'
import { useCart } from '../hooks/useCart.jsx'

export function PhoneFormActions({ phoneDetails }) {

    const { addToCart } = useCart()

    const options = phoneDetails?.options
    const colors = options?.colors
    const storages = options?.storages

    

    const { 
        id,
        selectedStorageCode, 
        selectedColorCode,  
        setSelectedStorageCode, 
        setSelectedColorCode 
    } = useAddPhone({ colors, storages })

  
    const handleSubmit = async () => {
        event.preventDefault()

        const { imgUrl: image, price, model } = phoneDetails
        const data = {
            id,
            selectedColorCode,
            selectedStorageCode
        }
        const post = await postPhone(data)
        if (post.count ){
            alert('producto agregado al carrito exitosamente')
            addToCart({...data, image, price, model })
        }else{
            alert('Error al intentar agregar producto al carrito')
        }
        
    }

    return (
        <div className='actionsContainer'>
            <form className='form' onSubmit={handleSubmit}>
                <p>Agregar al carrito de compra</p>
                <div className='actions'>
                    <label>
                        Almacenamiento
                        <select onChange={e => setSelectedStorageCode(e.target.value)} >
                            {storages?.map(storage =>
                                <option key={storage.code} value={storage.code}>{storage.name}</option>
                            )}
                        </select>
                    </label>
                    {
                        colors && (
                            <label>
                                color
                                <select onChange={e => setSelectedColorCode(e.target.value)} >
                                    {colors?.map(color =>
                                        <option key={color.code} value={color.code}>{color.name}</option>
                                    )}
                                </select>
                            </label>
                        )
                    }
                </div>
                <button 
                    type='submit'
                    style={{backgroundColor: 'green'}}
                >
                Añadir  <AddToCartIcon/>   
                </button>
            </form>
        </div>
    )
}

PhoneFormActions.propTypes = {
    phoneDetails: PropTypes.object
}

