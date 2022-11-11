import { gql } from '@apollo/client'

export const LOGIN_MUTATION = gql`
  mutation login($input: UserCredentials!) {
    login (input: $input)
}
`
