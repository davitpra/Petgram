import { useQuery } from '@apollo/client'
import { GET_FAVORITES } from '../Constant/getFavoritesPhotos'

export function useGetFavorites () {
  const { loading, data, error } = useQuery(GET_FAVORITES, {
    fetchPolicy: 'network-only'
  }
  )
  return { loading, data, error }
}
