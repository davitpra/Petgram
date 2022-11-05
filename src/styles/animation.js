import { keyframes, css } from 'styled-components'

// efecto de desenfoque y zoom in
const fadeInKeyframes = keyframes` 
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
  // css nos permite aplicar css en una funcion para exportarla
  css`animation: ${time} ${fadeInKeyframes} ${type}; 
  `
const bounceDownKeyFrames = keyframes`
  0% {
    top: -70px;
  }

  25% {
    top: 0px;
  }

  40%{
    top: 10px
  }

  65%{
    top: -3px
  }

  100% {
    top: 0px;
  }
`

export const bounceDown = ({ time = '1s', type = 'ease' } = {}) =>
  css`animation: ${time} ${bounceDownKeyFrames} ${type};`
