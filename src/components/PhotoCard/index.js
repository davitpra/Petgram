import React, { useRef, useEffect, useState } from 'react'
import { Article, ImgWrapper, Img, Button } from './styles'
import { MdFavoriteBorder } from 'react-icons/md'

const DEFAULT_IMAGE = 'https://res.cloudinary.com/midudev/image/upload/w_300/q_80/v1560262103/dogs.png'

export function PhotoCard ({ id, likes = 0, src = DEFAULT_IMAGE }) {
  const [show, setShow] = useState(false)

  const element = useRef(null)

  useEffect(() => {
    const observer = new window.IntersectionObserver(function (entries) {
      if (entries[0].isIntersecting) {
        setShow(true)
        observer.disconnect()
        console.log(entries[0].isIntersecting)
      }
    })
    observer.observe(element.current)
  }, [element])

  return (
    <Article ref={element}>
      {show &&
        <>
          <a href={`detail/${id}`}>
            <ImgWrapper>
              <Img src={src} />
            </ImgWrapper>
          </a>
          <Button>
            <MdFavoriteBorder size='32px' />{likes} likes!
          </Button>
        </>}
    </Article>
  )
}
