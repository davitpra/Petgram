import React from 'react'
import { Helmet } from 'react-helmet'
import { Div, Title, Subtitle } from './styles'

export function Meta ({ children, metaTitle = '', title = '', subtitle = '' }) {
  return (
    <>
      <Helmet>
        <title>{metaTitle} | Petgram</title>
        <meta name={subtitle} content={subtitle} />
      </Helmet>
      <Div>
        {title && <Title>{title}</Title>}
        {subtitle && <Subtitle>{subtitle}</Subtitle>}
        {children}
      </Div>
    </>
  )
}
