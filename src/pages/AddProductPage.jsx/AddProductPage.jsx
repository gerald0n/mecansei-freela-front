import styled from 'styled-components'
import Sidebar from '../../components/Sidebar'

import { FormLogin, Input, InputButton, RegisterLink } from '../../styles/Form.style'
import { useState } from 'react'
import { addNewProduct } from '../../services/api'
import { useNavigate } from 'react-router-dom'

export default function AddProductPage() {
   const [product, setProduct] = useState({
      name: '',
      price: '',
      description: '',
      image_url: ''
   })

   const navigate = useNavigate()
   
   function handleAddProduct(e) {
      e.preventDefault()

      const authToken = localStorage.getItem('token')

      const data = addNewProduct(product, authToken)

      data
      .then(response => {
        alert(`PRODUTO LANÇADO! CODE ${response.status}`)
        navigate('/homepage')
      })
      .catch(error => alert(error.response.data))
   }

   return (
      <Container>
         <Sidebar />

         <h1>anuncie um produto</h1>

         <FormLogin onSubmit={handleAddProduct} style={{ paddingInline: '2rem' }}>
            <label htmlFor="titulo">titulo</label>
            <Input type="text" value={product.name} onChange={(e) => setProduct({...product, name: e.target.value})} />
            <label htmlFor="descricao">descrição</label>
            <Input type="text" value={product.description} onChange={(e) => setProduct({...product, description: e.target.value})} />
            <label htmlFor="urlImage">url da imagem</label>
            <Input type="text" value={product.image_url} onChange={(e) => setProduct({...product, image_url: e.target.value})} />
            <div className="box">
               <div>
                  <label htmlFor="preco">preço (formato: 00.00)</label>
                  <Input type="text" value={product.price} onChange={(e) => setProduct({...product, price: e.target.value})} />
               </div>
               <InputButton type="submit">Desapegar</InputButton>
            </div>
         </FormLogin>
      </Container>
   )
}

const Container = styled.div`
   width: 100%;
   display: flex;
   flex-direction: column;
   gap: 1rem;

   h1 {
      font-size: 1.6rem;
      font-weight: 700;
      text-align: center;
      margin-top: 5rem;
   }

   .box {
      display: flex;
      align-items: center;
      gap: 2rem;
   }
`
