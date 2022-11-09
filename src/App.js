import React from 'react'
import { GlobalStyle } from './styles/GlobalStyles'
import { Logo } from './components/Logo'
import { Home } from './pages/Home'
import { Detail } from './pages/Detail'
import { Route, Routes, BrowserRouter } from 'react-router-dom'

function App () {
  return (
    <>
      <BrowserRouter>
        <GlobalStyle />
        <Logo />
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='pet/:id' element={<Home />} />
          <Route path='/detail/:detailId' element={<Detail />} />
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
