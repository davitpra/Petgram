import React from 'react'
import { ListOfFavs } from '../../components/ListOfFavs'
import { useGetFavorites } from '../../hooks/useGetFavoritesPhotos'

export const GetFavorites = () => {
  const { loading, data, error } = useGetFavorites()
  if (loading) return <p>Loading...</p>
  if (error) return <p>Error...</p>
  const { favs } = data

  return <ListOfFavs favs={favs} />
}
