import React from 'react'
import { PhotoCardSinglePhoto } from '../container/PhotoCardSiglePhoto'
import { useParams } from 'react-router-dom'
import { Meta } from '../components/Meta'

export function Detail () {
  const params = useParams()
  return (
    <Meta metaTitle='Fotografia' title={`Fotografía ${params.detailId}`}>
      <PhotoCardSinglePhoto id={params.detailId} />
    </Meta>
  )
}
