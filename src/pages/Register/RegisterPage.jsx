import { Container, FormLogin, Input, InputButton, RegisterLink } from '../../styles/Form.style'

import { useContext, useEffect } from 'react'
/* import { ToastContainer } from 'react-toastify' */
import { AppContext } from '../../App'
import { useNavigate } from 'react-router-dom'
import { motion } from 'framer-motion'
import { signUp } from '../../services/api'
/* import { errorNotification, successNotification } from '../../services/notifications' */

export default function RegisterPage() {
   const { user, setUser } = useContext(AppContext)
   const navigate = useNavigate()

   useEffect(() => {
      setUser({
         fullname: '',
         email: '',
         phone_number: '',
         cpf: '',
         password: '',
         confirmPassword: ''
      })
   }, [])

   function signUpForm(e) {
      e.preventDefault()

      const data = signUp(user)
      data.then((response) => {
         alert('Cadastro efetuado com sucesso!')
         console.log(response.data)
         /* setTimeout(() => {
            setUser(response.data)
            navigate('/')
         }, 2500)  */
      })
      data.catch((error) => {
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
            <h1 className="logo">
               <span>Me</span>Cansei
            </h1>
            <FormLogin onSubmit={signUpForm}>
               <h2>crie sua conta</h2>
               <label htmlFor="name">Nome completo</label>
               <Input
                  type="text"
                  placeholder="ex.: Cleitinho do Grau da Silva"
                  value={user.fullname}
                  onChange={(e) => {
                     setUser({ ...user, fullname: e.target.value })
                  }}
                  required
               />
               <label htmlFor="cpf">CPF (somente números)</label>
               <Input
                  type="text"
                  maxLength={11}
                  placeholder="ex.: 12345678910"
                  value={user.cpf}
                  onChange={(e) => {
                     setUser({ ...user, cpf: e.target.value })
                  }}
                  required
               />
               <label htmlFor="email">E-mail</label>
               <Input
                  type="email"
                  placeholder="ex.: graudocleitin@gmail.com"
                  value={user.email}
                  onChange={(e) => {
                     setUser({ ...user, email: e.target.value })
                  }}
                  required
               />
               <label htmlFor="phone">Telefone (somente números)</label>
               <Input
                  type="text"
                  maxLength={11}
                  placeholder="ex.: 8412345678"
                  value={user.phone_number}
                  onChange={(e) => {
                     setUser({ ...user, phone_number: e.target.value })
                  }}
                  required
               />
               <label htmlFor="password">Senha</label>
               <Input
                  type="password"
                  placeholder="*********"
                  value={user.password}
                  onChange={(e) => {
                     setUser({ ...user, password: e.target.value })
                  }}
                  required
               />
               <label htmlFor="confirmPassword">Confirmação de senha</label>
               <Input
                  type="password"
                  placeholder="*********"
                  value={user.confirmPassword}
                  onChange={(e) => {
                     setUser({ ...user, confirmPassword: e.target.value })
                  }}
                  required
               />
               <InputButton data-test="signup-btn" type="submit" required>
                  Cadastrar
               </InputButton>
            </FormLogin>
            <RegisterLink onClick={() => navigate('/')}>Já tem uma conta? Faça login!</RegisterLink>
         </Container>
      </motion.div>
   )
}
