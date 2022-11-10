import React from 'react'
import { GlobalStyle } from './styles/GlobalStyles'
import { Logo } from './components/Logo'
import { NavBar } from './components/NavBar'
import { BrowserRouter } from 'react-router-dom'
import { LayOut } from './router/LayOut'

function App () {
  return (
    <>
      <BrowserRouter>
        <GlobalStyle />
        <Logo />
        <LayOut />
        <NavBar />
      </BrowserRouter>
    </>
  )
}

export default App
