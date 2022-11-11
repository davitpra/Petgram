import { useMutation } from '@apollo/client'

export const useMuationWithGql = (CONSTANT) => {
  const [mutation, { error: mutationError, loading: mutationLoading }] = useMutation(CONSTANT)
  return { mutation, mutationLoading, mutationError }
}
