import { Container, FormLogin, Input, InputButton, RegisterLink } from '../../styles/Form.style'
import { useContext, useEffect } from 'react'
import App, { AppContext } from '../../App'
import { useNavigate } from 'react-router-dom'

import { motion } from 'framer-motion'
import { signIn } from '../../services/api.js'
import Logo from '../../components/Logo'

export default function Login() {
   const { user, setUser } = useContext(AppContext)

   useEffect(() => {
      setUser({
         fullname: '',
         email: '',
         phone_number: '',
         cpf: '',
         password: '',
         confirmPassword: ''
      })

      /*

      // VERIFICAR
      if (localStorage.length > 0) {
         let local = localStorage.getItem('user')
         local = JSON.parse(local)

          signIn(local.email, local.password).then((response) => {
            setUser(response.data)
            setContentButton(animationForm)
            setDisabledForm(true)
            successNotification(`Seja bem-vindo, ${local.name}!`)
            setTimeout(() => navigate('/hoje'), 1000)
         }) 
      }
      */
   }, [])

   const navigate = useNavigate()

   function login() {
      event.preventDefault()

      signIn(user.email, user.password)
         .then((response) => {
            localStorage.setItem('token', response.data.token)
            navigate('/homepage')
         })
         .catch((error) => {
            alert(error.response.data)
         })
   }

   return (
      <motion.div
         initial={{ opacity: 0 }}
         animate={{ opacity: 1 }}
         transition={{ duration: 0.5 }}
         style={{
            height: '100vh',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center'
         }}
      >
         <Container>
            <Logo />
            <FormLogin onSubmit={login}>
               <h2>Acesse sua conta</h2>
               <label htmlFor="email">Email</label>
               <Input
                  type="email"
                  value={user.email}
                  onChange={(e) => setUser({ ...user, email: e.target.value })}
                  required
               />
               <label htmlFor="password">Senha</label>
               <Input
                  type="password"
                  value={user.password}
                  onChange={(e) => setUser({ ...user, password: e.target.value })}
                  required
               />
               <InputButton type="submit" required>
                  Entrar
               </InputButton>
            </FormLogin>
            <RegisterLink onClick={() => navigate('/cadastro')}>Não tenho conta</RegisterLink>
         </Container>
      </motion.div>
   )
}
