import { ProductStyle } from "./style"

type Props = {
  id: number
  nome: string
}


const Product = ({id, nome}: Props) => {

  return (
    <>
    <ProductStyle key={id}>
      <h2>{nome}</h2>
    </ProductStyle>
    </>
  )
}

export default Product
