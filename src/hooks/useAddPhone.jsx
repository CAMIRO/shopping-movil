import { useState, useEffect } from 'react'
import { useLocation } from 'react-router-dom'

export function useAddPhone ({ colors, storages }) {
    const [selectedStorageCode, setSelectedStorageCode] = useState('')
    const [selectedColorCode, setSelectedColorCode] = useState('')

    const location = useLocation()
    const { id } = location.state

    useEffect(() => {
        if(colors && storages){
            setSelectedStorageCode(storages[0].code)
            setSelectedColorCode(colors[0].code)
        }
    }, [colors, storages])


    return { selectedStorageCode, selectedColorCode, id, setSelectedStorageCode, setSelectedColorCode  }
    
}