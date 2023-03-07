const URL = 'https://itx-frontend-test.onrender.com/api'

export const fetchPhones = async () => {
 
    try {
        const response = await fetch(`${URL}/product`)
        const json = await response.json()

        return json?.map(phone => ({
            id: phone.id,
            brand: phone.brand,
            model: phone.model,
            price: phone.price,
            image: phone.imgUrl
    
        }))
    }catch (error){
        throw new Error('Error obteniendo los móviles')
    }
}

export const fetchPhoneDetails = async ( id ) => {
    try {
        const response = await fetch(`${URL}/product/${id}`)
        return await response.json()

    }catch (error){
        throw new Error('Error obteniendo detalles del movil: ', id)
    }
}

export const postPhone = async ({ id, selectedColorCode, selectedStorageCode }) => {
    const data = {
        'id':  id,
        'colorCode': selectedColorCode,
        'storageCode': selectedStorageCode
    }

    try{
        return await fetch(`${URL}/cart`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(data)
        })
            .then(response => response.json())
            .then(data => data)
    }catch (error){
        throw new Error('Error agregando el producto al carrito')
    }
}