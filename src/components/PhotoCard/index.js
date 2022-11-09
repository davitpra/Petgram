import React from 'react'
import { Article, ImgWrapper, Img } from './styled'
import { FavButton } from '../FavButton'
import { useNearScreen } from '../../hooks/useNearScreen'
import { useLocalStorage } from '../../hooks/useLocalStorage'
import { useMuationToogleLike } from '../../hooks/useMutationToggleLike'
import { Link } from 'react-router-dom'

const DEFAULT_IMAGE = 'https://res.cloudinary.com/midudev/image/upload/w_300/q_80/v1560262103/dogs.png'

export function PhotoCard ({ id, likes = 0, src = DEFAULT_IMAGE }) {
  const [show, element] = useNearScreen()
  const { mutation } = useMuationToogleLike()

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
