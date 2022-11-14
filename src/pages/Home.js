import React from 'react'
import { useParams } from 'react-router'
import { ListOfCategories } from '../components/ListOfCategories'
import { ListOfPhotoCards } from '../container/ListOfPhotoCards'
import { Helmet } from 'react-helmet'

export function Home () {
  const params = useParams()
  return (
    <>
      <Helmet>
        <title> Tu app de fotos de mascotas | Petgram</title>
        <meta name='description' content='Encuentra las mejores fotos de tus animales favoritos' />
      </Helmet>
      <ListOfCategories />
      <ListOfPhotoCards categoryId={params.id} />
    </>
  )
}
