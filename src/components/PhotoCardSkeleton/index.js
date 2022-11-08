import React from 'react'
import { IconSkeleton, LikeSkeleton, ContainerButtonSkeleton, ImgSkeleton, ContainerPhotoCardSkeleton } from './styled'

export const PhotoCardSkeleton = props => {
  return (
    <>
      {
      [1, 2, 3].map(item =>
        <ContainerPhotoCardSkeleton key={item}>
          <ImgSkeleton />
          <ContainerButtonSkeleton>
            <IconSkeleton />
            <LikeSkeleton />
          </ContainerButtonSkeleton>
        </ContainerPhotoCardSkeleton>
      )
    }
    </>
  )
}
