import { color } from './../../styles'
import styled from 'styled-components'

export const ProductStyle = styled.li`
  width: 100%;
  background: ${color.corContainer};
  border-radius: 8px;
  box-shadow: 2px 4px 8px 2px ${color.corText3};
  padding: 16px 32px;
  overflow: hidden;
  margin: 32px 0;
  display: flex;
  align-items: center;
  justify-content: space-between;
  font-size: 16px;
  color: ${color.corText3};

  h4 {
    border: 1px solid ${color.corText3};
    padding: 4px 8px;
    border-radius: 8px;
  }

  div {
    display: flex;
    align-items: center;
    gap: 16px;
  }
`
