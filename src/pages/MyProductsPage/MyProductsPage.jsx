import styled from 'styled-components'
import Sidebar from '../../components/Sidebar'
import ProductThumbnail from '../../components/ProductThumbnail'
import { useState } from 'react'
import { useEffect } from 'react'
import { productsMe } from '../../services/api'

export default function MyProductsPage() {
   const [products, setProducts] = useState([])

   useEffect(() => {
      if (localStorage.length > 0) {
         const authToken = localStorage.getItem('token')
         const data = productsMe(authToken)

         data.then((response) => setProducts(response.data))
      }
   }, [])
   return (
      <Container>
         <Sidebar />

         <h1>Meus produtos</h1>

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
   width: 100%;
   display: flex;
   flex-direction: column;
   gap: 1rem;

   justify-content: space-between;
   align-items: center;

   h1 {
      font-size: 2rem;
      font-weight: 700;
      text-align: center;
      margin-block: 2rem;
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
