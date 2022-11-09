import React from 'react'
import { useParams } from 'react-router'
import { ListOfCategories } from '../components/ListOfCategories'
import { ListOfPhotoCards } from '../container/ListOfPhotoCards'

export function Home () {
  const params = useParams()
  return (
    <>
      <ListOfCategories />
      <ListOfPhotoCards categoryId={params.id} />
    </>
  )
}
