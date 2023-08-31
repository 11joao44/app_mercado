import { styled } from 'styled-components'

export const AddPriceStyle = styled.div`
  h2 {
    text-align: center;
  }
`
export const CampoStyle = styled.div`
  background-image: url(https://mizuonimanga.files.wordpress.com/2012/09/naruto-601-cover.png);
  background-size: cover;
  margin: 120px auto;
  max-width: 360px;
  width: 100%;
  height: 640px;
  border: 1px solid #000;
  border-radius: 8px;
  box-shadow: 4px 4px 12px 4px gray;
  padding: 0 16px;
  flex-direction: column;
  display: flex;
  justify-content: center;

  ul {
    li {
      flex-direction: column;
      display: flex;
      align-items: center;
      justify-content: center;
      gap: 16px;
      height: 100%;
      text-align: center;

      img {
        width: 280px;
        height: 260px;
        border-radius: 8px;
      }

      button {
        padding: 8px 16px;
        border-radius: 8px;
        outline: none;
        border: 1px solid #000;
      }
    }
  }
`

export const Titulo = styled.h2`
  background-color: #fff;
  border-radius: 8px;
  padding: 4px 8px;
  width: 100%;
`

export const InputLabel = styled.div`
  input {
    display: block;
    margin: 8px auto;
    padding: 8px 16px;
    border: 1px solid #000;
    outline: none;
    border-radius: 8px;
  }
`
