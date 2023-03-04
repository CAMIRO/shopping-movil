export const fetchPhones = async () => {
 
    try {
        const response = await fetch('https://itx-frontend-test.onrender.com/api/product')
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
