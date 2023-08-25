import styled from 'styled-components'

export const Modal = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  display: none;

  &.is-open {
    display: flex;
  }

  header {
    display: flex;
    justify-content: center;

    h3 {
      color: #fff;
      font-size: 40px;
      margin-top: 48px;
    }
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

export const List = styled.div`
        background-color: #fff;
        box-shadow: 4px 4px 12px 4px #000000;
        overflow-y: auto;
        width: 480px;
        height: 75vh;
        margin: 64px auto;
        padding: 24px;
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


        ul {
        margin: 32px auto;
        width: 100%;
      }
`
