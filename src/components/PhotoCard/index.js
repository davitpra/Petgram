import React, { useRef, useEffect, useState } from 'react'
import { Article, ImgWrapper, Img, Button } from './styles'
import { MdFavoriteBorder, MdFavorite } from 'react-icons/md'

const DEFAULT_IMAGE = 'https://res.cloudinary.com/midudev/image/upload/w_300/q_80/v1560262103/dogs.png'

export function PhotoCard ({ id, likes = 0, src = DEFAULT_IMAGE }) {
  const key = `like-${id}`
  const [show, setShow] = useState(false)
  const [like, setlike] = useState(() => {
    try {
      const value = window.localStorage.getItem(key)
      return JSON.parse(value)
    } catch (e) {
      return false
    }
  })

  const element = useRef(null)

  useEffect(() => {
    Promise.resolve(
      typeof window.IntersectionObserver !== 'undefined'
        ? window.IntersectionObserver
        : import('intersection-observer')
    ).then(() => {
      const observer = new window.IntersectionObserver(function (entries) {
        if (entries[0].isIntersecting) {
          setShow(true)
          observer.disconnect()
        }
      })
      observer.observe(element.current)
    })
  }, [element])

  const togglelike = (value) => {
    try {
      window.localStorage.setItem(key, value)
      setlike(value)
    } catch (e) {
      return false
    }
  }

  const Icon = like ? MdFavorite : MdFavoriteBorder

  return (
    <Article ref={element}>
      {show &&
        <>
          <a href={`detail/${id}`}>
            <ImgWrapper>
              <Img src={src} />
            </ImgWrapper>
          </a>
          <Button onClick={() => togglelike(!like)}>
            <Icon size='32px' />{likes} likes!
          </Button>
        </>}
    </Article>
  )
}
