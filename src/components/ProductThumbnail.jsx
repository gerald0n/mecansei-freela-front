import { useNavigate } from 'react-router-dom'
import styled from 'styled-components'

export default function ProductThumbnail({id, img, name, price}) {
   const navigate = useNavigate()
   return (
      <Container>
         <div className="img">
            <img
               src={img}
               alt=""
            />
         </div>
         <p>{name}</p>
         <span>R$ {price}</span>
         <button onClick={() => {
            console.log(id)
            navigate(`/products/${id}`)
         }}>Saiba mais</button>
      </Container>
   )
}

const Container = styled.div`
   min-width: 14rem;
   width: 14rem;
   height: 20rem;

   display: flex;
   flex-direction: column;
   justify-content: space-between;

   .img {
      width: 100%;
      height: 10rem;
      border-radius: 5px;
      text-align: center;
      background-color: #30080e;

      img {
         height: 100%;
      }
   }

   p,
   button,
   span {
      font-size: 1.4rem;
      font-family: 'Montserrat';
      font-weight: 500;
   }

   button {
      background: transparent;
      border: 1px solid #30080e;
      border-radius: 5px;
   }
`
