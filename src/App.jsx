
import LoginPage from './pages/Login/LoginPage'
import RegisterPage from './pages/Register/RegisterPage'
import { Routes, Route, useLocation } from 'react-router-dom'
import { useState, createContext } from 'react'

export const AppContext = createContext()

function App() {
   const [user, setUser] = useState({
      fullname: '',
      email: '',
      phone_number: '',
      cpf: '',
      password: '',
      confirmPassword: ''
   })

   return (
      <AppContext.Provider
         value={{
            user,
            setUser
         }}
      >
         <Routes location={useLocation()} key={useLocation().pathname}>
            <Route path="/" element={<LoginPage />} />
            <Route path="/cadastro" element={<RegisterPage />} />
         </Routes>
      </AppContext.Provider>
   )
}

export default App
