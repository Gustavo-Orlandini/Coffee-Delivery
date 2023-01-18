import { BrowserRouter } from 'react-router-dom'
import { Router } from './components/Router'
import { CoffeeContextProvider } from './contexts/CoffeeContext'
import { FormContextProvider } from './contexts/FormContext'


export function App() {
  return (

    <BrowserRouter>
      <CoffeeContextProvider>
        <FormContextProvider>
          <Router />
        </FormContextProvider>
      </CoffeeContextProvider>
    </BrowserRouter>
  )
}
