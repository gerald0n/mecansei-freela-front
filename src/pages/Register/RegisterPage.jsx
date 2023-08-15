import { Container, FormLogin, Input, InputButton, RegisterLink } from '../../styles/Form.style'

import { useContext, useEffect } from 'react'
/* import { ToastContainer } from 'react-toastify' */
import { AppContext } from '../../App'
import { useNavigate } from 'react-router-dom'
import { motion } from 'framer-motion'
import { signUp } from '../../services/api'
import Logo from '../../components/Logo'
import { useState } from 'react'
/* import { errorNotification, successNotification } from '../../services/notifications' */

export default function RegisterPage() {
   const { user, setUser, infos, setInfos } = useContext(AppContext)

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

      setInfos({
         street_address: '',
         zip_code: '',
         optional_description: '',
         city: ''
      })
   }, [])

   function signUpForm(e) {
      e.preventDefault()

      const data = signUp({...user, ...infos})
      data.then((response) => {
         alert('Cadastro efetuado com sucesso!')
         console.log(response.data)
         setTimeout(() => {
            setUser(response.data)
            navigate('/')
         }, 2500)
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
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center'
         }}
      >
         <Container>
            <Logo />
            <FormLogin onSubmit={signUpForm}>
               <h2>Olá! quem é você?</h2>
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
               <h2>Entendo... como contactamos você?</h2>
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
               <h2>Legal! E onde te achar?</h2>

               <label htmlFor="street_address">Endereço</label>
               <Input
                  type="text"
                  placeholder="ex.: av brasil, 750, centro"
                  value={infos.street_address}
                  onChange={(e) => {
                     setInfos({ ...infos, street_address: e.target.value })
                  }}
                  required
               />
               <label htmlFor="zip_code">Código Postal (somente números)</label>
               <Input
                  type="text"
                  maxLength={9}
                  placeholder="ex.: 59900-000"
                  value={infos.zip_code}
                  onChange={(e) => {
                     setInfos({ ...infos, zip_code: e.target.value })
                  }}
                  required
               />
               <label htmlFor="optional_description">Complemento</label>
               <Input
                  type="text"
                  placeholder="ex.: apto 03, prédio amarelo"
                  value={infos.optional_description}
                  onChange={(e) => {
                     setInfos({ ...infos, optional_description: e.target.value })
                  }}
                  required
               />

               <label htmlFor="city">Cidade</label>
               <Input
                  type="text"
                  placeholder="ex.: Madureira"
                  value={infos.city}
                  onChange={(e) => {
                     setInfos({ ...infos, city: e.target.value })
                  }}
                  required
               />

               <h2>Certo. Escolha uma senha...</h2>
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
