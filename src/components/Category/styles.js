import styled from 'styled-components'
import { Link as LinkRouter } from 'react-router-dom'

export const Link = styled(LinkRouter)`
  display: flex;
  flex-direction: column;
  text-align: center;
  text-decoration: none;
  width: 75px;
  `
export const Image = styled.img`
  border: 1px solid #ddd;
  box-shadow: 0px 10px 14px rgba (0, 0, 0, .2);
  border-radius: 50%;
  height: auto;
  overflow: hidden; // para evitar que aparesca las cosas que sobresalen
  object-fit: cover; // para que nuestra imagen no se deforme y ocupe bien su puesto
  height: 75px;
  width: 75px;
`
