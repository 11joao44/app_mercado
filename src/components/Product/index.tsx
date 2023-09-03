import { useDispatch, useSelector } from 'react-redux'
import { Product } from '../../store/types/types'
import { add } from '../../store/reducers/lista'
import { RootReducer } from '../../store'

type Props = {
  id: number
  nome: string
  foto: string
  prod: Product
}

const Product = ({ id, nome, foto, prod }: Props) => {
  const dispatch = useDispatch()

  const { addedToCart } = useSelector((state: RootReducer) => state.cart)

  const addProduct = () => {
    if (addedToCart.includes(id)) {
      alert('O produto já está no carrinho')
    } else {
      dispatch(add(prod))
    }
  }

  return (
    <div onClick={addProduct}>
      <span>{id}</span>
      <div>
        <h2>{nome}</h2>
        <img src={foto} />
      </div>
    </div>
  )
}

export default Product
