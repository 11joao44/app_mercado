import styled from 'styled-components'
import { color } from '../../styles'

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
  opacity: 0.75;
  z-index: -1;
`

export const CartStyle = styled.div`
  background-color: ${color.corFundo};
  box-shadow: 0 0 16px 8px #000000;
  overflow-y: auto;
  width: 560px;
  margin: 128px auto;
  padding: 24px 40px;
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

  h2 {
    text-align: center;
  }
`

export const Header = styled.header`
  display: flex;
  align-items: center;
  justify-content: space-between;

  img {
    width: 40px;
    height: 40px;
    cursor: pointer;
  }

  a {
    text-decoration: none;
    border: 1px solid #000;
    border-radius: 8px;
    padding: 4px 8px;
  }
`

export const Produto = styled.div`
  background-color: ${color.corContainer};
  margin: 32px 0;
  padding: 16px;
  border-radius: 4px;
  display: flex;
  align-items: center;
  justify-content: space-around;
  gap: 16px;
  font-size: 18px;

  p {
    margin: 2px 0;
  }
`

export const Total = styled.p`
  text-align: center;
  font-size: 24px;
  margin: 32px;
`
export const Foto = styled.img`
  width: 80px;
  height: 80px;
  border-radius: 8px;
`
export const Lixeira = styled.img`
  width: 24px;
  height: 24px;
  cursor: pointer;
`
