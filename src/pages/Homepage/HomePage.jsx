import styled from 'styled-components'
import Logo from '../../components/Logo'

export default function HomePage() {
   return (
      <Container>
         <div className="sidebar">
            <ul>
               <li>
                  <Logo size="p" />
               </li>
               <li>Produtos</li>
               <li>Desapegar</li>
               <li>Meus produtos</li>
               <li>Sair</li>
            </ul>
         </div>
         <div className="recentes">
            <h3>Produtos adicionados recentemente</h3>

            <div className="produtos">
               <div className="produto"></div>
               <div className="produto"></div>
               <div className="produto"></div>
               <div className="produto"></div>
               <div className="produto"></div>
            </div>
         </div>

         <div className="all-produtos">
            <h3>Todos os produtos</h3>
         </div>
      </Container>
   )
}

const Container = styled.div`
   width: 100%;
   height: 100vh;
   display: flex;
   flex-direction: column;
   gap: 1rem;

   h3 {
      font-size: 1.6rem;
   }

   .sidebar {
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
   }

   .recentes {
      height: 25rem;
      padding-left: 1rem;
      display: flex;
      flex-direction: column;
      gap: 0.5rem;
      border-bottom: 1px solid #2a2a2a23;

      .produtos {
         display: flex;
         gap: 1rem;
         overflow-x: scroll;
         scroll-behavior: smooth;
         padding-right: 1rem;

         .produto {
            min-width: 15rem;
            height: 20rem;
            background: red;
         }
      }
   }

   .all-produtos {
      padding-inline: 1rem;
      display: flex;
      flex-direction: column;
      gap: 0.5rem;
   }
`
