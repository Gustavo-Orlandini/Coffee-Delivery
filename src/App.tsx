import { BrowserRouter } from 'react-router-dom'
import { ToastContainer } from 'react-toastify'
import { Router } from './components/Router'
import { CoffeeContextProvider } from './contexts/CoffeeContext'
import { FormContextProvider } from './contexts/FormContext'
import 'react-toastify/dist/ReactToastify.min.css'


export function App() {
  return (

    <BrowserRouter>
      <CoffeeContextProvider>
        <FormContextProvider>
          <Router />
        </FormContextProvider>
      </CoffeeContextProvider>
      <ToastContainer />
    </BrowserRouter>
  )
}
