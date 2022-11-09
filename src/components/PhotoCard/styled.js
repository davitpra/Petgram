import styled from 'styled-components'
import { fadeIn } from '../../styles/fadeIn'

export const Article = styled.article`
  min-height: 200px;
`
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
    ${fadeIn()} // EJECUTAMOS LA FUNCION DE ANIMACION FadeIn
    box-shadow: 0 10px 14px rgba(0, 0, 0, .2);
    height: 100%;
    object-fit: cover; // se adapta al espacio que tiene
    position: absolute; // posicion absoluta 
    top: 0; // con altura 0
    width: 100%;
`
