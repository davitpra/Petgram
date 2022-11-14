import React, { useContext, useState } from 'react'
import { MdFavoriteBorder, MdFavorite } from 'react-icons/md'
import { Button, Error } from './styled'
import { Context } from '../../context/Context'

export function FavButton ({ liked, likes, mutation }) {
  const [errorMsg, setErrorMsg] = useState(false)
  const Icon = liked ? MdFavorite : MdFavoriteBorder
  const { isAuth } = useContext(Context)

  const onClick = () => {
    mutation()
    setErrorMsg(true)
  }

  return (
    <>
      <Button onClick={onClick}>
        <Icon size='32px' />{likes} likes!
        {errorMsg && !isAuth && <Error> Es necesario registrarse</Error>}
      </Button>
    </>
  )
}
