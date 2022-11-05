import styled from 'styled-components'

export const ImgWrapper = styled.div`
    border-radius: 10px;
    display: block;
    height: 0; // altura de cero para utilizar el truco del padding
    overflow: hidden; // para que no se escape nada de lo que no deba verser
    padding: 56.25% 0 0 0; //truco para tener la misma relacion de aspecto.
    position: relative;
    width: 100%;
`

export const Img = styled.img`
    box-shadow: 0 10px 14px rgba(0, 0, 0, .2);
    height: 100%;
    object-fit: cover; // se adapta al espacio que tiene
    position: absolute; // posicion absoluta 
    top: 0; // con altura 0
    width: 100%;
`

export const Button = styled.button`
    display: flex; 
    align-items: center;
    padding-top: 8px;    
    & svg { // el svg que este dentro de button. & hace referencia al icono anterior
        margin-right: 4px;
    }
`
