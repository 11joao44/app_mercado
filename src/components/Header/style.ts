import { styled } from 'styled-components'

export const HeaderStyle = styled.header`
  background-color: rgba(0, 0, 0, 90%);
  position: fixed;
  width: 100%;
  padding: 24px;
  display: flex;
  align-items: center;
  justify-content: space-between;
`

export const Title = styled.div`
  text-align: center;
  h2 {
    color: #fff;
    font-size: 18px;
    letter-spacing: 2px;
    font-family: 'Satisfy', cursive;
  }
`

export const AbasStyle = styled.div`
  cursor: pointer;

  img {
    width: 40px;
    height: 40px;
  }
`
