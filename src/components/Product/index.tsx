import { useDispatch } from 'react-redux'
import { remove } from '../../list/reducers/cart'
import { ProductStyle } from './style'
import { useAPI } from '../../hooks/useAPI'

const Product = () => {
  const dispatch = useDispatch()
  const items = useAPI() // Usando o hook para obter os itens

  const removeItem = (id: number) => {
    dispatch(remove(id))
  }

  return (
    <>
      {items.map((item) => (
        // eslint-disable-next-line react/jsx-key
        <ProductStyle>
          <div>
            <span>{item.id}</span>
            <h2>{item.nome}</h2>
          </div>
          <h3>R$ 8,59</h3>
          <h4>4x</h4>
          <img
            onClick={() => removeItem(item.id)}
            src="https://img.icons8.com/ios-glyphs/24/filled-trash.png"
          />
        </ProductStyle>
      ))}
    </>
  )
}

export default Product
