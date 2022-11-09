import React from 'react'
import { Link, Image } from './styles'

function Category ({ cover, path, emoji }) {
  return (
    <Link to={path}>
      <Image src={cover} />
      {emoji}
    </Link>
  )
}

export { Category }
