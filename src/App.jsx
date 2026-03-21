import React from 'react'
import { GlobalProvider } from './context/GlobalState'

const App = () => {
  return (
    <GlobalProvider>
      <div className="container">
        App
      </div>
    </GlobalProvider>
  )
}

export default App