import axios from 'axios'

/* const USER_TOKEN = 'u8MlXsm5Fu0Q0epdCuMQG1cQ' */
/* const Auth = 'Bearer '.concat(USER_TOKEN) */
const REGISTER = 'signup'
const LOGIN = 'signin'
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

export const postHabit = (obj, token) => {
   const data = axios.post(DEFAULT_URL.concat(HABIT), obj, {headers: {'Authorization': `Bearer ${token}`}})

   return data
}

