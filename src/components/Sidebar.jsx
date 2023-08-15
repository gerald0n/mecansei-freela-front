import styled from 'styled-components'
import Logo from './Logo'
import { useNavigate } from 'react-router-dom'

export default function Sidebar() {

   const navigate = useNavigate()
   return (
      <Container>
         <ul>
            <li>
               <Logo size="p" />
            </li>
            <li onClick={() => {
               navigate('/homepage')
            }}>Produtos</li>
            <li onClick={() => {
               navigate('/newProduct')
            }}>Desapegar</li>
            <li onClick={() => {
               navigate('/products/me')
            }}>Meus produtos</li>
            <li onClick={() => {
               localStorage.clear()
               navigate('/')
            }}>Sair</li>
         </ul>
      </Container>
   )
}

const Container = styled.div`
   display: flex;
   align-items: center;
   padding-inline: 2rem;

   width: 100%;
   height: 6rem;
   background: #ffffff;
   border-bottom: 1px solid #2a2a2a23;

   ul {
      width: 100%;
      display: flex;
      font-size: 1.6rem;
      align-items: center;
      justify-content: space-between;
      color: #4a4a4a;
      font-weight: 700;
   }
`
