import React from 'react'
import { PhotoCardSinglePhoto } from '../container/PhotoCardSiglePhoto'
import { useParams } from 'react-router-dom'

export function Detail () {
  const params = useParams()
  return (
    <PhotoCardSinglePhoto id={params.detailId} />
  )
}
