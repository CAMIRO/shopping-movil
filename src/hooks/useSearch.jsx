import { useEffect, useState, useRef } from 'react'

export function useSearch () {
    const [search, updateSearch] = useState('')
    const [error, setError] = useState(null)
    const isFirstInput = useRef(true)
  
    useEffect(() => {
        if (isFirstInput.current) {
            isFirstInput.current = search === ''
            return
        }
        if (search === '') {
            setError('Introduce un valor')
            return
        }
        if (search.match(/^\d+$/)) {
            setError('No se puede buscar un móvil con solo números')
            return
        }
        setError(null)
    }, [search])
  
    return { search, updateSearch, error }
}