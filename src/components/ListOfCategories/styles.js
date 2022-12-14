import styled, { css } from 'styled-components'
import { bounceDown } from '../../styles/bouceDown'

export const List = styled.ul`
  display: flex;
  overflow: scroll;
  width: 100%;
  &::-webkit-scrollbar {
    display: none; // le quita el scrollbar que aparece
    }
  ${props => props.fixed && css`
  ${bounceDown()}
  background: #fff;
  border-radius: 60px;
  box-shadow: 0 0 20px rgba(0, 0, 0, 0.3);
  left: 0;
  margin: 0 auto;
  max-width: 400px;
  padding: 5px;
  position: fixed;
  right: 0;
  top: 0;
  transform: scale(.8);
  z-index: 1;
  `}
`

export const Item = styled.li`
  padding: 0 8px;
  display: flex;
  flex-direction: row;
`
