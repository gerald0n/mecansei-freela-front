import styled, { css } from 'styled-components'

export default function Logo({size}) {
   return (
      <Container size={size}>
         <span>Me</span>Cansei
      </Container>
   )
}

const Container = styled.div`
   ${({ size }) => {
      
      return size == 'p'
         ? css`
              font-size: 2rem;
           `
         : css`
              font-size: 4rem;
              margin-bottom: 2rem;
           `
   }}
   font-family: 'Caprasimo';
   color: #460d16;

   

   span {
      color: #fe457f;
   }
`
