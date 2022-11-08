import React from 'react'
import { PhotoCard } from '../../components/PhotoCard'
import { useGetSinglePhoto } from '../../hooks/useGetSinglePhoto'

export function PhotoCardSinglePhoto ({ id }) {
  console.log(id)
  const { loading, error, data } = useGetSinglePhoto(id)
  if (error) {
    return <h2>Internal Server Error</h2>
  }
  if (loading) {
    return <h2>Loading...</h2>
  }

  return (
    <PhotoCard {...data.photo} />
  )
}
