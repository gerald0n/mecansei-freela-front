import LoginPage from './pages/Login/LoginPage'
import RegisterPage from './pages/Register/RegisterPage'
import { Routes, Route, useLocation } from 'react-router-dom'
import { useState, createContext } from 'react'
import HomePage from './pages/Homepage/HomePage'
import ProductPage from './pages/Product/ProductPage'
import AddProductPage from './pages/AddProductPage.jsx/AddProductPage'
import MyProductsPage from './pages/MyProductsPage/MyProductsPage'

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

   const [infos, setInfos] = useState({
      street_address: '',
      zip_code: '',
      optional_description: '',
      city: '',
      is_avaible: true
   })

   return (
      <AppContext.Provider
         value={{
            user,
            setUser,
            infos,
            setInfos
         }}
      >
         <Routes location={useLocation()} key={useLocation().pathname}>
            <Route path="/" element={<LoginPage />} />
            <Route path="/cadastro" element={<RegisterPage />} />
            <Route path="/homepage" element={<HomePage />} />
            <Route path="products/:id" element={<ProductPage />} />
            <Route path="/newProduct" element={<AddProductPage />} />
            <Route path='/products/me' element={<MyProductsPage />}></Route>
         </Routes>
      </AppContext.Provider>
   )
}

export default App
