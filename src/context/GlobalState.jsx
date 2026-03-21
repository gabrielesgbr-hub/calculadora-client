import React, {createContext, useReducer, useEffect} from "react"
import AppReducer from './AppReducer'

//Estado Inicial
const inicialState = {
    movimientos: [],
    loading: true,
    error: null
}

//url de la API
const API_URL = 'https://calculadora-server.onrender.com/api/movimientos'

//Creamos el contexto
export const GlobalContext = createContext(initialState)

//Creamos el provider
export const GlobalProvider = ({children}) => {
    const [state, dispatch] = useReducer(AppReducer, initialState)

    //Caargar la lista de gastos al abrir la app
    useEffect(()=> {
        getMovimientos()
    }, [])

    //Actions
    async function getMovimientos() {
        try{
            const response = await fetch (`${API_URL}`, {method: 'GET'})
            const data = await response.json()

            dispatch({
                type:'GET_MOVIMIENTOS',
                payload: data
            })

        } catch (error) {
            dispatch({
                type: 'ERROR_MOVIMIENTOS',
                payload: error.message
            })
        }        
    }

    async function addMovimiento(movimiento) {
        try {
            const response = await fetch (`${API_URL}`, {
                method: 'POST',
                headers: {
                    'content-Type': 'application/json'
                },
                body : JSON.stringify(movimiento)
            })
            
            const data = await response.json()

            dispatch({
                type:'ADD_MOVIMIENTO',
                payload: data
            })

        } catch (error) {
            dispatch({
                type: 'ERROR_MOVIMIENTOS',
                payload: error.message
            })            
        }
    }

    async function deleteMovimiento(id) {
        try {
            const response = await fetch(`${API_URL}/${id}`, {method:'DELETE'})
            dispatch({
                type:'DELETE_MOVIMIENTO',
                payload: id
            })
        } catch (error) {
            dispatch({
                type: 'ERROR_MOVIMIENTOS',
                payload: error.message
            })            
        }
    }

    return(<GloBalContext.Provider value = {{
        movimientos: state.movimientos,
        loading: state.loading,
        error: state.error,
        deleteMovimiento,
        addMovimiento
    }}>
        {children}
    </GloBalContext.Provider>)
}