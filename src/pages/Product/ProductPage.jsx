import { useParams } from 'react-router-dom'
import Sidebar from '../../components/Sidebar'
import styled from 'styled-components'
import { useEffect, useState } from 'react'
import { getProductOne, getUser, getUserInfos } from '../../services/api'

export default function ProductPage() {
   const [product, setProduct] = useState([])
   const [infos, setInfos] = useState({})

   const { id } = useParams()

   useEffect(() => {
      const data = getProductOne(id)
      data
         .then((response) => {
            setProduct(response.data)
            const data = getUserInfos({id: response.data.id_user})
            data
            .then(response => {
               setInfos(response.data)
            })
         })
         .catch((error) => console.log(error))
   }, [])

   return (
      <Container>
         <Sidebar />

         <div className="box">
            <div className="image">
               <img src={product.image_url} alt="" />
            </div>

            <div className="infos">
               <h2>
                  R$ <span>{product.price}</span>
               </h2>
               <h3>{product.name}</h3>
               <p>Publicado em *não implementado*</p>
            </div>

            <div className="description">
               <h3>Descrição</h3>
               <p>{product.description}</p>
            </div>

            <div className="localization">
               <div>
                  <span>Endereço</span> <span>{infos.street_address}</span>
               </div>
               <div>
                  <span>CEP</span> <span>{infos.zip_code}</span>
               </div>
               <div>
                  <span>Complemento</span> <span>{infos.optional_description}</span>
               </div>
               <div>
                  <span>Cidade</span> <span>{infos.city}</span>
               </div>
            </div>

            <div className="anunciante">
               <h2>Anunciante</h2>

               <div>
                  <span>{infos.username}</span>
                  <span>CONTATO: {infos.phone}</span>
               </div>
            </div>
         </div>
      </Container>
   )
}

const Container = styled.div`
   width: 100%;
   display: flex;
   flex-direction: column;
   gap: 1rem;

   .box {
      padding-inline: 2rem;
      font-family: 'Nunito Sans';

      color: #4a4a4a;

      .infos,
      .description,
      .localization {
         border-bottom: 1px solid #272a2c2f;
         height: 14rem;
         display: flex;
         flex-direction: column;
         justify-content: space-evenly;
      }

      .infos {
         font-size: 2rem;

         p {
            font-size: 1.6rem;
            color: #999999;
         }
         h2 {
            font-size: 3.6rem;
         }
      }

      .description {
         font-size: 1.6rem;

         h3 {
            font-size: 1.8rem;
         }
      }

      .localization {
         font-size: 1.6rem;

         div {
            display: flex;
            justify-content: space-between;
         }
      }

      .anunciante {
         font-size: 1.8rem;
         font-weight: 700;
         height: 18rem;
         display: flex;
         flex-direction: column;
         justify-content: space-evenly;

         div {
            width: 100%;
            height: 10rem;
            border: 2px dotted black;
            border-radius: 5px;

            display: flex;
            flex-direction: column;
            align-items: center;
            justify-content: space-evenly;

            p {
               font-size: 1.6rem;
               color: #999999;
            }
         }
      }
   }

   .image {
      width: 100%;
      height: 34rem;
      border-radius: 5px;
      text-align: center;
      background-color: #30080e;
      margin-bottom: 5rem;

      img {
         height: 100%;
      }
   }
`
