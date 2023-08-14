import styled from 'styled-components'
import Sidebar from '../../components/Sidebar'
import Category from '../../components/Category'

export default function HomePage() {
   return (
      <Container>
         <Sidebar />
         <Category name={'Produtos em geral'} />
      </Container>
   )
}

const Container = styled.div`
   width: 100%;
   display: flex;
   flex-direction: column;
   gap: 1rem;
`
