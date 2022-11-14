import styled from 'styled-components'

export const Button = styled.button`
display: flex; 
align-items: center;
padding-top: 8px;    
& svg { // el svg que este dentro de button. & hace referencia al icono anterior
    margin-right: 4px;
}
`
export const Error = styled.span`
  color: red;
  font-size: 14px;
  padding-left: 4px;
`
