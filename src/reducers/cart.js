export const cartInitialState = JSON.parse(window.localStorage.getItem('cart'))  || []

// Update localStorage with state for cart
export const updateLocalStorage = state => {
    window.localStorage.setItem('cart', JSON.stringify(state))
}

export const cartReducer = (state, action) => {
    const { type, payload } = action
    
    switch (type) {
    case 'ADD_TO_CART': {
        const { id } = payload
        const productInCartIndex = state.findIndex(item => item.id === id)

        if(productInCartIndex >= 0){
            const newState = structuredClone(state)
            newState[productInCartIndex].quantity += 1
            updateLocalStorage(newState)
            return newState
        }
   
        const newSate = [
            ...state,
            {
                ...payload,
                quantity: 1
            }
        ]
        updateLocalStorage(newSate)
        return newSate
    }
    case 'REMOVE_FROM_CART': {
        const { id } = payload
        const newSate = state.filter(item => item.id !== id)
        updateLocalStorage(newSate)
        return newSate
    } 

    case 'CLEAR_CART': {
        updateLocalStorage(cartInitialState)
        return cartInitialState
    }    
           
    }
    return state
}