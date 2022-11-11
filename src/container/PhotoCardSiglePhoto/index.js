import React from 'react'
import { PhotoCard } from '../../components/PhotoCard'
import { PhotoCardSkeleton } from '../../components/PhotoCardSkeleton'
import { useGetSinglePhoto } from '../../hooks/useGetSinglePhoto'

export function PhotoCardSinglePhoto ({ id }) {
  const { loading, error, data } = useGetSinglePhoto(id)
  if (error) {
    return <h2>Internal Server Error</h2>
  }
  if (loading) {
    return <PhotoCardSkeleton />
  }

  return (
    <PhotoCard {...data.photo} />
  )
}
