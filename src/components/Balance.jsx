import React, {useContext} from 'react'
import {GlobalContext} from '../context/GlobalState'

const Balance = () => {
    const {movimientos} = useContext(GlobalContext)
    //obtener todos los importes de nuestros gastos
    const importe = movimientos.map(movimiento => movimiento.importe)

    //calcular el total
    const total = importe.reduce((acc, item) => (acc += item), 0).toFixed(2)

  return (
    <>
        <div>Balance</div>
        <h1>${total}</h1>
    </>
  )
}

export default Balance