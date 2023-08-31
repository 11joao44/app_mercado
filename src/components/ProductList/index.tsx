import { useAPI } from '../../hooks/useAPI'
import { ListStyle, Modal, Overlay } from './style'
import { useDispatch, useSelector } from 'react-redux'
import { RootReducer } from '../../store'
import { closeList } from '../../store/redurcers/lista'
import Product from '../Product'
import { alteraTexto } from '../../store/redurcers/filtro'

const ProductList = () => {
  const items = useAPI()
  const dispatch = useDispatch()

  const { isOpenList } = useSelector((state: RootReducer) => state.lista)
  const { texto } = useSelector((state: RootReducer) => state.filtro)

  const closeLista = () => {
    dispatch(closeList())
  }

  const filtraProduto = () => {
    return items.filter(
      (item) => item.nome.toLowerCase().search(texto.toLowerCase()) >= 0
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
