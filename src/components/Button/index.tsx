import { styled } from 'styled-components'

type Props = {
  texto: string
  onClick?: () => void // O tipo correto para onClick é uma função que não retorna nada (void)
}

const Button = ({ texto, onClick }: Props) => {
  return <ButtonStyle onClick={onClick}>{texto}</ButtonStyle>
}

const ButtonStyle = styled.button`
  background-color: #000;
  width: 100%;
  opacity: 0.85;
  border-color: #000;
  border-radius: 28px;
  border-style: none;
  text-transform: uppercase;
  font-size: 0.875rem;
  padding: 8px 16px;
  color: #fff;
  box-shadow:
    0 4px 4px -2px rgba(0, 0, 0, 0.2),
    0 2px 2px 0 rgba(0, 0, 0, 0.14),
    0 4px 5px 0 rgba(0, 0, 0, 0.12);

  &:hover {
    background-color: #fff;
    border: 1px solid #000;
    color: #000;
  }
`

export default Button
