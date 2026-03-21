import React from 'react'
import { GlobalProvider } from './context/GlobalState'
import Header from './components/Header'
import Balance from './components/Balance'
import IngresosEgresos from './components/IngresosEgresos'

const App = () => {
  return (
    <GlobalProvider>
      <Header />
      <div className="container">
        <Balance />
        <IngresosEgresos />
      </div>
    </GlobalProvider>
  )
}

export default App