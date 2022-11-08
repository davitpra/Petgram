import { gql, useQuery } from '@apollo/client'

// gql nos permite transformar la peticion la query en string.
// query es la peticion para obtener la información, puedes verla dentro del playground en el endpoint de la peticion.
// hacemos la peticion getphotos y obtenermos photos con todos esas key.
const GET_SINGLE_PHOTO = gql`
  query getSinglePhoto($id: ID!) {
    photo(id: $id) {
      id
      categoryId
      src
      likes
      liked
      userId
    }
  }
`

export const useGetSinglePhoto = id => {
  // utilizamos useQuery para hacer la peticion.
  // usamos el segundo parametro varibles para obtener variables de la peticion.
  const { loading, error, data } = useQuery(GET_SINGLE_PHOTO, { variables: { id } })
  return { loading, error, data }
}
