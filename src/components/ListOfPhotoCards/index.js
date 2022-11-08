import React from 'react'
import { useQuery, gql } from '@apollo/client'
import { PhotoCard } from '../PhotoCard'

// gql nos permite transformar la peticion la query en string.
// query es la peticion para obtener la información, puedes verla dentro del playground en el endpoint de la peticion.
// hacemos la peticion getphotos y obtenermos photos con todos esas key.
const getPhotos = gql`
  query getPhotos {
    photos {
      id
      categoryId
      src
      likes
      userId
      liked
    }
  }
`

export function ListOfPhotoCards () {
  const { loading, error, data } = useQuery(getPhotos)

  if (error) {
    return <h2>Internal Server Error</h2>
  }
  if (loading) {
    return <h2>Loading...</h2>
  }

  return (
    <ul>
      {data.photos.map((photo) => (
        <PhotoCard key={photo.id} {...photo} />
      ))}
    </ul>
  )
};
