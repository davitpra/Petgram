import React from 'react'
import { ListOfCategories } from './components/ListOfCategories'
import { GlobalStyle } from './GlobalStyles'
import { ListOfPhotoCards } from './components/ListOfPhotoCards'

function App () {
  return (
    <>
      <GlobalStyle />
      <ListOfCategories />
      <ListOfPhotoCards />
    </>
  )
}

export default App
