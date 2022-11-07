import React from 'react'
import { ContainerCategorySkeleton, CategoryImage, CategoryTitle } from './styled'

export const CategorySkeleton = props => {
  return (
    <>
      {
      [1, 2, 3, 4, 5, 6].map(item =>
        <ContainerCategorySkeleton key={item}>
          <CategoryImage light={props.light} />
          <CategoryTitle light={props.light} />
        </ContainerCategorySkeleton>
      )
    }
    </>
  )
}
