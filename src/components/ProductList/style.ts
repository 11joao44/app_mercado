import styled from 'styled-components'
import { color } from '../../styles'
//import { color } from '../../styles'

export const Modal = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  display: none;
  z-index: 5;

  &.is-open {
    display: flex;
  }
`

export const Overlay = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: #000;
  opacity: 0.8;
  z-index: -1;
`

export const ListStyle = styled.div`
  background-color: ${color.corFundo};
  box-shadow: 0 0 16px 8px #000000;
  overflow-y: auto;
  height: 95vh;
  margin: 64px 0;
  padding: 24px 16px;
  border-radius: 8px;

  &::-webkit-scrollbar {
    background-color: #1d1d1d;
    width: 5px;
    border-top-right-radius: 5px;
    border-bottom-right-radius: 5px;
  }

  &::-webkit-scrollbar-thumb {
    background-color: #dedede;
    border-radius: 5px;
  }

  input {
    width: 50%;
    display: flex;
    margin: 0 auto;
    padding: 8px 16px;
    border-radius: 8px;
    border: none;
    outline: none;
    top: 16px;
    left: 5%;
    right: 5%;
    position: absolute;
  }

  ul {
    width: 100%;

    li {
      width: 100%;
      background: ${color.corContainer};
      border-radius: 8px;
      box-shadow: 2px 4px 8px 2px ${color.corText3};
      padding: 4px 16px;
      overflow: hidden;
      margin: 24px 0;
      display: flex;
      align-items: center;
      justify-content: space-between;
      font-size: 14px;
      color: ${color.corText3};
      cursor: pointer;

      div {
        display: flex;
        align-items: center;
        justify-content: space-between;
        width: 100%;
        gap: 32px;
        img {
          width: 80px;
          height: 60px;
          border-radius: 8px;
        }
      }
    }
  }
`
