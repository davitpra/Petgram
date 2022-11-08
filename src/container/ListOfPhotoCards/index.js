import React from 'react'
import { useGetPhotos } from '../../hooks/useGetPhotos'
import { PhotoCard } from '../../components/PhotoCard'
import { PhotoCardSkeleton } from '../../components/PhotoCardSkeleton'

export function ListOfPhotoCards ({ categoryId }) {
  const { loading, error, data } = useGetPhotos(categoryId)

  if (error) {
    return <h2>Internal Server Error</h2>
  }
  if (loading) {
    return <PhotoCardSkeleton />
  }

  return (
    <ul>
      {data.photos.map((photo) => (
        <PhotoCard key={photo.id} {...photo} />
      ))}
    </ul>
  )
};
