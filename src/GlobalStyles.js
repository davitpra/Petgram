import { createGlobalStyle } from 'styled-components'

// utilizamos createGlobalStyles para crear un componente GlobalStyle
export const GlobalStyle = createGlobalStyle`
  html {
    box-sizing: border-box;// utilizara el pading para calcular el ancho de los elementos
    font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
  }

  *, *:before, *:after {
    box-sizing: inherit; // con esto nos aseguramos que todos los elementos utilicen el border-box
  }

  ul, li, h1, h2, h3, p, button {
    margin: 0; // reseteamos todos los elementos para que no tengan margin o padding
    padding: 0;
  }

  ul {
    list-style: none; // le quitamos el punto a las listas
  }

  button: {
    background: transparent;
    border: 0;
    outline: 0;
  }

  body {
    background: #fefefe;
    height: 100vh; // utilice toda la altura del viewport
    margin: 0 auto;
    max-width: 500px; // le damos la apariencia de Movile
    overscroll-behavior: none; // evita que haga rebotes cuando haga scroll
    width: 100%;
  }

  #app {
    box-shadow: 0 0 10px rgba(0, 0, 0, 0.05); // muy pequena sombra
    overflow-x: hidden; // no se pueda mover en horizontal
    min-height: 100vh;
    padding-bottom: 10px; // un pequeno padding abajo para empujar el contenido
  }
`
