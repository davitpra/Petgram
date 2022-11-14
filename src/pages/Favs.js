import React from 'react'
import { Meta } from '../components/Meta/index.js'
import { GetFavorites } from '../container/GetFavorites.js'

export function Favs () {
  return (
    <>
      <Meta
        metaTitle='Favoritos'
        title='Tus favoritos'
        subtitle='Separa las fotos que te gustan con un like'
      />
      <GetFavorites />
    </>
  )
}
