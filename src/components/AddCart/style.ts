import { styled } from 'styled-components'

export const AddPriceStyle = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
`
export const CampoStyle = styled.div`
  margin: 64px 0;
  max-width: 360px;
  width: 100%;
  height: 480px;
  border: 1px solid #000;
  border-radius: 8px;
  box-shadow: 4px 4px 12px 4px gray;
  flex-direction: column;
  display: flex;
  align-items: center;
  justify-content: space-around;
  padding: 0 32px;

  ul {
    li {
      img {
        width: 200px;
        height: 180px;
      }
    }
  }
`
