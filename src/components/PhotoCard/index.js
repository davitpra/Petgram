import React from 'react'
import { Article, ImgWrapper, Img } from './styled'
import { FavButton } from '../FavButton'
import { useNearScreen } from '../../hooks/useNearScreen'
import { useLocalStorage } from '../../hooks/useLocalStorage'
import { Link } from 'react-router-dom'
import { useMuationWithGql } from '../../hooks/useMutationWithGql'
import { MUTATION_LIKE_PHOTO } from '../../Constant/mutationLikePhoto'
import { DEFAULT_IMAGE } from '../../Constant/defaultImage'

export function PhotoCard ({ id, likes = 0, src = DEFAULT_IMAGE }) {
  const [show, element] = useNearScreen()
  const { mutation } = useMuationWithGql(MUTATION_LIKE_PHOTO)

  const key = `like-${id}`
  const [liked, setLiked] = useLocalStorage(key, false)

  const hangleFavClick = () => {
    !liked && mutation({ variables: { input: { id } } })
    setLiked(!liked)
  }

  return (
    <Article ref={element}>
      {show &&
        <>
          <Link to={`/detail/${id}`}>
            <ImgWrapper>
              <Img src={src} />
            </ImgWrapper>
          </Link>
          <FavButton liked={liked} likes={likes} onClick={hangleFavClick} />
        </>}
    </Article>
  )
}
