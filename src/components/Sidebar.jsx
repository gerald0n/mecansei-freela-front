import styled from 'styled-components'
import Logo from './Logo'

export default function Sidebar() {
   return (
      <Container>
         <ul>
            <li>
               <Logo size="p" />
            </li>
            <li>Produtos</li>
            <li>Desapegar</li>
            <li>Meus produtos</li>
            <li>Sair</li>
         </ul>
      </Container>
   )
}

const Container = styled.div`
   display: flex;
   align-items: center;
   padding-inline: 1rem;

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
