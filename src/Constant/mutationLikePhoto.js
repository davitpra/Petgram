import { gql } from '@apollo/client'

export const MUTATION_LIKE_PHOTO = gql`
  mutation likePhoto($input: LikePhoto!) {
      likePhoto(input: $input) {
        id,
        liked,
        likes
      }
    }
  `
