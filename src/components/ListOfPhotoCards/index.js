import React from 'react'
import { PhotoCard } from '../PhotoCard'

export function ListOfPhotoCards () {
  return (
    <ul>
      {[7, 8, 9, 10, 11, 12].map(id => <PhotoCard key={id} id={id} />)}
    </ul>
  )
}
