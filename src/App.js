import React from 'react'
import { GlobalStyle } from './styles/GlobalStyles'
import { Logo } from './components/Logo'
import { PhotoCardSinglePhoto } from './container/PhotoCardSiglePhoto'
import { Home } from './pages/Home'
import { Route, Routes, BrowserRouter } from 'react-router-dom'

function App () {
  // URLSeachParams nos sirve para recuperar la URL como una variable.
  // window.location.search es URL.
  // el metodo get nos permite obtener el detail de la URL
  const urlParams = new window.URLSearchParams(window.location.search)
  const detailId = urlParams.get('detail')

  return (
    <>
      <GlobalStyle />
      <Logo />
      {detailId && <PhotoCardSinglePhoto id={detailId} />}
      {!detailId &&
        <BrowserRouter>
          <Routes>
            <Route path='/' element={<Home />} />
            <Route path='/:id' element={<Home />} />
          </Routes>
        </BrowserRouter>}
    </>
  )
}

export default App
