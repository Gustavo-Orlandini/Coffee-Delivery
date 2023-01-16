import { BrowserRouter } from 'react-router-dom'
import { Router } from './components/Router'
import { CoffeeContextProvider } from './contexts/CoffeeContext'


export function App() {
  return (

    <BrowserRouter>
      <CoffeeContextProvider>
        <Router />
      </CoffeeContextProvider>
    </BrowserRouter>


  )
}
