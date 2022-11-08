import styled, { css } from 'styled-components'
import { skeletonStyle } from '../../styles/skeletonStyle'

export const ContainerPhotoCardSkeleton = styled.div`
    display: flex;
    flex-direction: column;
    min-height: 200px;
    padding-bottom: 8px;
    border: 0;
`
export const ImgSkeleton = styled.img`
    width: 100%;
    height: 250px;
    border-radius: 5%;
    ${
        props => css`
            ${skeletonStyle(props.light)}
        `
    }
    background-color: red;
`
export const ContainerButtonSkeleton = styled.div`
    display: flex;
    flex-direction: row;
    padding-top: 8px;
    padding-bottom: 8px;
`

export const IconSkeleton = styled.div`
    width: 32px;
    height: 32px;
    border-radius: 50%;
    margin-right: 4px;
    ${
        props => css`
            ${skeletonStyle(props.light)}
        `
    }
`

export const LikeSkeleton = styled.div`
    width: 26px;
    height: 15px;
    align-items: center;
    ${
        props => css`
            ${skeletonStyle(props.light)}
        `
    }
`
