import React from 'react'
import { ContainerCategorySkeleton, CategoryImage, CategoryTitle } from './styled'

export const CategorySkeleton = props => {
  console.log(props)
  return (
    <>
      {
      [1, 2, 3, 4, 5, 6].map(item =>
        <ContainerCategorySkeleton key={item}>
          <CategoryImage light={props.light} key={item} />
          <CategoryTitle light={props.light} key={item} />
        </ContainerCategorySkeleton>
      )
    }
    </>
  )
}
