
import { useState, useCallback, useEffect } from 'react'
import { fetchPhoneDetailsCache } from '../services/phones.js'

export function usePhoneDetails (id) {
    const [phoneDetails, setPhoneDetails] = useState({})
    const [loading, setLoading] = useState(false)
    const [apiError, setError] = useState(null)

    const getPhoneDetails = useCallback( async () => {
        try{
            setLoading(true)
            setError(null)
            const newPhoneDetails = await fetchPhoneDetailsCache(id)
            setPhoneDetails(newPhoneDetails)

        }catch(e){
            setError(e.message)
        } finally {
            setLoading(false)
        }
    },[])

    useEffect(() => {
        getPhoneDetails()
    }, [])

    return { phoneDetails, getPhoneDetails, loading, apiError }
}