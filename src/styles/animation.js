import { keyframes, css } from 'styled-components'

const fadeInKeyframes = keyframes` // efecto de desenfoque y zoom in
  from {
    filter: blur(5px);
    opacity: 0;
  }

  to {
    filter: blur(0);
    opacity: 1;
  }
`

export const fadeIn = ({ time = '1s', type = 'ease' } = {}) =>
  // css nos permite aplicar css en una funcion para
  css`animation: ${time} ${fadeInKeyframes} ${type}; 
  `
