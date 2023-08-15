import styled, { css } from 'styled-components'

export const Container = styled.div`
   margin-block: 10rem;
   display: flex;
   flex-direction: column;
   align-items: center;
   justify-content: center;

   overflow: hidden;
   background: #fff;

   h2:not(h2:nth-child(1)) {
      margin-top: 4rem;
   }

   h2 {
      text-align: left;
      font-size: 1.8rem;
      font-weight: 600;
      color: #4a4a4a;
      margin-bottom: 2rem;
   }
`
export const Image = styled.img`
   width: 18rem;
   height: 18rem;
`
export const FormLogin = styled.form`
   display: flex;
   flex-direction: column;
   align-items: start;
   gap: 0.3rem;
   margin-block: 3.3rem;

   label {
      font-size: 1.4rem;
      color: #4a4a4a;
   }
`

export const RegisterLink = styled.a`
   font-style: normal;
   font-weight: 600;

   font-size: 13.976px;
   line-height: 17px;

   text-align: center;
   cursor: pointer;
   color: #61005d;

   &:hover {
      color: #260125;
   }

   ${({ disabled }) => {
      return disabled
         ? css`
              pointer-events: none;
              opacity: 0.7;
           `
         : css`
              pointer-events: all;
           `
   }};
`

export const Input = styled.input`
   width: 100%;
   height: 4.5rem;
   margin-bottom: 1rem;

   background-color: #ffffff;
   color: ${({ context }) => {
      return context === 'homepage' ? '#666666' : '#000000'
   }};
   text-align: left;

   border: 1px solid #d5d5d5;
   border-radius: 5px;
   padding-inline: 1.1rem;

   font-size: 1.6rem;
   line-height: 2.6rem;

   outline-color: #260125;

   &::placeholder {
      color: #dbdbdb;
      font-size: 1.6rem;
   }

   &:disabled {
      background: #f2f2f2;
      color: #afafaf;
   }
`

export const InputButton = styled.button`
   display: flex;
   align-items: center;
   justify-content: center;

   background-color: #61005d;
   color: #ffffff;

   width: ${({ length }) => {
      return length === 'secondary' ? '8.4rem' : '30rem'
   }};
   height: 4.5rem;
   border: 1px solid #61005d;
   border-radius: 1.6rem;
   padding-inline: 1.1rem;

   font-size: ${({ length }) => {
      return length === 'secondary' ? '1.8rem' : '2rem'
   }};
   line-height: 2.6rem;
   cursor: pointer;

   &:disabled {
      background: #52b6ff;
      opacity: 0.7;
      cursor: default;
   }
`
