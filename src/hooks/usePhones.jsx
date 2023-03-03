import { useState,  useRef, useMemo, useCallback, useEffect } from 'react'
import { fetchPhones } from '../services/phones.js'
export function usePhones ({ search }) {
    const [phones, setPhones] = useState([])
    const [loading, setLoading] = useState(false)
    const [apiError, setError] = useState(null)
    const previousResults =  useRef(phones)

    const getPhones = useCallback( async (search) => {
        if(search === previousResults.current) return
        try{
            setLoading(true)
            setError(null)
            previousResults.current = search
            const newPhones = await fetchPhones()
            setPhones(newPhones)
        }catch (e) {
            setError(e.message)
        } finally {
            setLoading(false)
        }
    }, [search])

    useEffect(() => {
        getPhones()
    }, [])


    const searchedPhones = useMemo(() => [...phones].filter(
        phone => 
            phone.brand.toLowerCase().includes(search)
         || phone.model.toLowerCase().includes(search)
        ,[phones]))
    


    return { phones: searchedPhones, getPhones, loading, apiError }
}
