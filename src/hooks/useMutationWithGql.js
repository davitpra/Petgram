import { useMutation } from '@apollo/client'

export const useMuationWithGql = (CONSTANT) => {
  const [mutation, { loading: mutationLoading, error: mutationError }] = useMutation(CONSTANT)
  return { mutation, mutationLoading, mutationError }
}
