import axios from 'axios'

/* const USER_TOKEN = 'u8MlXsm5Fu0Q0epdCuMQG1cQ' */
/* const Auth = 'Bearer '.concat(USER_TOKEN) */
const REGISTER = 'signup'
const LOGIN = 'signin'
const GET_USER = 'user'
const GET_PRODUCTS = 'products/all'
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
   const data = axios.get(DEFAULT_URL.concat(GET_USER), {headers: {'Authorization': `Bearer ${token}`}})

   return data
}

export const getProducts = () => {
   const data = axios.get(DEFAULT_URL.concat(GET_PRODUCTS))

   return data
}



