import { useDispatch } from 'react-redux'
import { Product } from '../../store/types/types'
import { add } from '../../store/redurcers/lista'

type Props = {
  id: number
  nome: string
  foto: string
  prod: Product
}

const Product = ({ id, nome, foto, prod }: Props) => {
  const dispatch = useDispatch()

  const addProduct = () => {
    dispatch(add(prod))
  }

  return (
    <div onClick={addProduct}>
      <span>{id}</span>
      <div>
        <img src={foto} />
        <h2>{nome}</h2>
      </div>
    </div>
  )
}

export default Product
