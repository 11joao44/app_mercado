import { useAPI } from '../../hooks/useAPI'
import { ListStyle, Modal, Overlay } from './style'
import { useDispatch, useSelector } from 'react-redux'
import { RootReducer } from '../../store'
import { closeList } from '../../store/reducers/lista'
import Product from '../Product'
import { alteraTexto } from '../../store/reducers/filtro'

const ProductList = () => {
  const items = useAPI()
  const dispatch = useDispatch()

  const { isOpenList } = useSelector((state: RootReducer) => state.lista)
  const { texto } = useSelector((state: RootReducer) => state.filtro)

  const closeLista = () => {
    dispatch(closeList())
  }

  const filtraProduto = () => {
    if (!items) {
      return []
    }

    return items.filter((item) =>
      item.nome.toLowerCase().includes(texto.toLowerCase())
    )
  }

  if (!items) {
    return <h3>Carregando...</h3>
  }

  return (
    <Modal className={isOpenList ? 'is-open' : ''}>
      <Overlay onClick={closeLista} />
      <ListStyle>
        <input
          type="text"
          placeholder="Pesquisar"
          value={texto}
          onChange={(evento) => dispatch(alteraTexto(evento.target.value))}
        />
        <ul>
          {filtraProduto().map((item) => (
            <li
              key={item.id}
              onClick={() => {
                closeLista()
              }}
            >
              <Product
                id={item.id}
                nome={item.nome}
                foto={item.foto}
                prod={item}
              />
            </li>
          ))}
        </ul>
      </ListStyle>
    </Modal>
  )
}

export default ProductList
