import styled from 'styled-components'
import { color } from '../../styles'
//import { color } from '../../styles'

export const Modal = styled.div`
  position: fixed;
  top: 0;
  width: 100%;
  height: 100%;
  display: flex;
  z-index: 5;
  transition: all ease-in-out 0.5s;

  &.is-open {
    left: 0;
  }

  @media screen and (max-width: 2560px) {
    left: -2552px;
  }

  @media screen and (max-width: 1600px) {
    left: -1552px;
  }

  @media screen and (max-width: 1024px) {
    left: -920px;
  }

  @media screen and (max-width: 767px) {
    left: -424px;
  }
`

export const Back = styled.img`
  top: 12px;
  right: 16px;
  position: absolute;
  width: 40px;
  cursor: pointer;
`
export const Clean = styled.img`
  top: 16px;
  left: 24px;
  position: absolute;
  width: 32px;
  cursor: pointer;
`

export const ListStyle = styled.div`
  background-color: ${color.corFundo};
  box-shadow: 0 0 16px 8px #000000;
  overflow-y: auto;
  width: 100%;
  height: 100vh;
  border-radius: 8px;

  @media screen and (max-width: 2560px) {
    padding: 40px 240px;
  }

  @media screen and (max-width: 1600px) {
    padding: 40px 120px;
  }

  @media screen and (max-width: 1024px) {
    padding: 40px 96px;
  }

  @media screen and (max-width: 767px) {
    padding: 40px 16px;
  }

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
    width: 60%;
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
