import './Products.css'
import { Phones } from '../components/Phones.jsx'
import { usePhones } from '../hooks/usePhones.jsx'
import { useSearch } from '../hooks/useSearch.jsx'
import debounce from 'just-debounce-it'
import { useCallback } from 'react'



export function Products (){
    const { search, updateSearch, error } = useSearch()
    const { phones, getPhones, loading, apiError } = usePhones({ search })

    const debouncedGetPhones = useCallback(
        debounce(search =>{
            getPhones(search)
        },300)
        ,[getPhones])
    
    const handleSubmit = () => {
        event.preventDefault()
        getPhones(search)
    }

    const handleChange = (event) => {
        const newSearch = event.target.value
        updateSearch(newSearch)
        debouncedGetPhones(newSearch)
    }
    
    return(
        <div className='page'>
            <header>
                <form className='form' onSubmit={handleSubmit}>
                    <input 
                        onChange={handleChange} 
                        value={search} 
                        name='query' 
                        placeholder='Iphone 11, samsung a12... '
                    />
                    <button type='submit'>Buscar</button>
                </form>
                {error && <p style={{ color: 'red' }}>{error}</p>}
                {apiError && <p style={{ color: 'red' }}>{apiError}</p>}
            </header>
            <main className='products'>
                {
                    loading 
                        ? <p>Cargando...</p>
                        : <Phones phones={phones} />
                }
            </main>
        </div>
       
    )
}

