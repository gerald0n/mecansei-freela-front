import axios from 'axios'

/* const USER_TOKEN = 'u8MlXsm5Fu0Q0epdCuMQG1cQ' */
/* const Auth = 'Bearer '.concat(USER_TOKEN) */
const REGISTER = 'signup'
const LOGIN = 'signin'
const GET_USER = 'user'
const GET_PRODUCTS = 'products/all'
const GET_PRODUCT_ONE = 'products/'
const GET_USER_INFOS = 'user/infos'
const ADD_PRODUCT = 'products/add'
const DEFAULT_URL = `http://localhost:5000/`

export const signUp = (user) => {
   const data = axios.post(DEFAULT_URL.concat(REGISTER), user)
   return data
}

export const signIn = (email, password) => {
   const data = axios.post(DEFAULT_URL.concat(LOGIN), {
      email: email,
      password: password
   })
   return data
}

export const getUser = (token) => {
   const data = axios.get(DEFAULT_URL.concat(GET_USER), {
      headers: { Authorization: `Bearer ${token}` }
   })

   return data
}

export const getProducts = () => {
   const data = axios.get(DEFAULT_URL.concat(GET_PRODUCTS))

   return data
}

export const getProductOne = (id) => {
   const data = axios.get(DEFAULT_URL.concat(GET_PRODUCT_ONE + id))

   return data
}

export const getUserInfos = (token) => {
   const data = axios.get(DEFAULT_URL.concat(GET_USER_INFOS), {
      headers: { Authorization: `Bearer ${token}` }
   })

   return data
}

export const addNewProduct = (product, token) => {
   const data = axios.post(
      DEFAULT_URL.concat(ADD_PRODUCT),

      { ...product, is_avaible: true },
      {
         headers: { Authorization: `Bearer ${token}` }
      }
   )
   return data
}
