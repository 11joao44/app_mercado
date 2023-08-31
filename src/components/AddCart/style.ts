import { styled } from 'styled-components'

export const AddPriceStyle = styled.div`
  h2 {
    text-align: center;
  }
`
export const CampoStyle = styled.div`
  background-image: url(https://mizuonimanga.files.wordpress.com/2012/09/naruto-601-cover.png);
  background-size: cover;
  margin: 88px auto;
  max-width: 336px;
  width: 100%;
  height: 640px;
  border: 1px solid #000;
  border-radius: 8px;
  box-shadow: 4px 4px 12px 4px gray;
  flex-direction: column;
  display: flex;

  ul {
    li {
      flex-direction: column;
      display: flex;
      align-items: center;
      justify-content: center;
      gap: 8px;
      padding: 40px 0;
      width: 100%;
      height: 100%;
      text-align: center;

      img {
        width: 100%;
        height: 264px;
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
    width: 100%;
    margin: 8px auto;
    padding: 8px 16px;
    border: 1px solid #000;
    border-radius: 8px;
    outline: none;
  }
`
