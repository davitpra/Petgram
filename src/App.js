import React from 'react'
import { ListOfCategories } from './components/ListOfCategories'
import { GlobalStyle } from './styles/GlobalStyles'
import { ListOfPhotoCards } from './container/ListOfPhotoCards'
import { Logo } from './components/Logo'
import { PhotoCardSinglePhoto } from './container/PhotoCardSiglePhoto'

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
      {
        detailId
          ? <PhotoCardSinglePhoto id={detailId} />
          : <>
            <ListOfCategories />
            <ListOfPhotoCards categoryId={3} />
            </>
      }
    </>
  )
}

export default App
