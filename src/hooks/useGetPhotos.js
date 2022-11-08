import { gql, useQuery } from '@apollo/client'

// gql nos permite transformar la peticion la query en string.
// query es la peticion para obtener la información, puedes verla dentro del playground en el endpoint de la peticion.
// hacemos la peticion getphotos y obtenermos photos con todos esas key.
const getPhotos = gql`
  query getPhotos($categoryId: ID) {
    photos(categoryId: $categoryId) {
      id
      categoryId
      src
      likes
      userId
      liked
    }
  }
`

export const useGetPhotos = categoryId => {
  // utilizamos useQuery para hacer la peticion.
  // usamos el segundo parametro varibles para obtener variables de la peticion.
  const { loading, error, data } = useQuery(getPhotos, { variables: { categoryId } })
  return { loading, error, data }
}
