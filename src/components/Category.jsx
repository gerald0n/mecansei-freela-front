import styled from 'styled-components'
import ProductThumbnail from './ProductThumbnail'
import { useEffect } from 'react'
import { useContext } from 'react'
import { AppContext } from '../App'
import { getUser, getProducts } from '../services/api'
import { useState } from 'react'

export default function Category({ name }) {
   const { user, setUser } = useContext(AppContext)
   const [products, setProducts] = useState([])

   useEffect(() => {
      if (localStorage.length > 0) {
         const authToken = localStorage.getItem('token')

         const data = getUser(authToken)
         data
            .then((response) => {
               setUser(response.data)
            })
            .catch((error) => {
               console.log(error)
            })
      } else {
         //alert(não há usuário logado)
         // voltar para login
         console.log('não há token')
      }

      const data = getProducts()
      data.then((response) => setProducts(response.data)).catch((error) => console.log(error))
   }, [])

   return (
      <Container>
         <h3>{name}</h3>

         <div className="produtos">
            {products &&
               products.map((product) => (
                  <ProductThumbnail
                     key={product.id}
                     id={product.id}
                     name={product.name}
                     img={product.image_url}
                     price={product.price}
                  />
               ))}
         </div>
      </Container>
   )
}

const Container = styled.div`
   display: flex;
   flex-direction: column;
   gap: 0.5rem;
   padding-inline: 2rem;
   /* border-bottom: 1px solid #2a2a2a23; */

   h3 {
      font-size: 1.6rem;
   }

   .produtos {
      display: flex;
      gap: 2rem;
      flex-wrap: wrap;

      &::-webkit-scrollbar {
         display: none;
      }
   }
`
