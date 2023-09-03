import { useDispatch, useSelector } from 'react-redux'
import * as S from './style'
import { RootReducer } from '../../store'
import { removeItem, openList, openCart } from '../../store/reducers/lista' // Corrija a importação para 'reducers' em vez de 'redurcers'
import Button from '../Button'

import * as C from '../../store/reducers/cart'

const AddCart = () => {
  const { editedData } = useSelector((state: RootReducer) => state.cart)
  const { produtos } = useSelector((state: RootReducer) => state.lista)
  const dispatch = useDispatch()

  const handleDataChange = (
    productId: number,
    newPrice: number,
    newUnit: number
  ) => {
    // Atualize o Redux para refletir as mudanças
    dispatch(C.addToEditedData({ productId, price: newPrice, unit: newUnit }))
  }

  const removeCartItem = (productId: number) => {
    dispatch(removeItem(productId))
  }

  const cancelItem = (productId: number) => {
    dispatch(C.removeFromCart(productId))
    dispatch(C.removeFromEditedData(productId))
  }

  const handleAddToCart = (productId: number) => {
    const data = editedData[productId]

    if (data) {
      dispatch(C.addToCart(productId))
    }
  }

  const openLista = () => {
    dispatch(openList())
  }
  const openCartt = () => {
    dispatch(openCart())
  }

  return (
    <S.AddPriceStyle>
      <S.CampoStyle>
        {produtos.length === 0 ? (
          <S.ButtonDiv>
            <S.Form>
              <h2>Adicionar Novo Produto</h2>
              <form>
                <S.InputLabelAdd>
                  <label>Nome do Produto</label>
                  <input type="text" required />
                </S.InputLabelAdd>
                <button type="submit">Adicionar Produto</button>
              </form>
            </S.Form>
            <Button onClick={openLista} texto="Lista de compras" />
            <Button onClick={openCartt} texto="Carrinho de compras" />
          </S.ButtonDiv>
        ) : null}
        <ul>
          {produtos.map((item) => (
            <li key={item.id}>
              <S.Capa src={item.foto} alt={item.nome} />
              <S.Titulo>{item.nome}</S.Titulo>
              <S.InputLabel>
                <input
                  type="number"
                  value={editedData[item.id]?.price || ''}
                  placeholder="Preço"
                  onChange={(e) =>
                    handleDataChange(
                      item.id,
                      +e.target.value,
                      editedData[item.id]?.unit || item.unidade
                    )
                  }
                />
                <input
                  type="number"
                  value={editedData[item.id]?.unit || ''}
                  placeholder="Unidade"
                  onChange={(e) =>
                    handleDataChange(
                      item.id,
                      editedData[item.id]?.price || item.preco,
                      +e.target.value
                    )
                  }
                />
              </S.InputLabel>
              <S.Opcao>
                <img
                  src="https://img.icons8.com/48/metro/ok.png"
                  onClick={() => {
                    handleAddToCart(item.id)
                    removeCartItem(item.id)
                  }}
                />
                <img
                  onClick={() => {
                    cancelItem(item.id)
                    removeCartItem(item.id)
                  }}
                  src="https://img.icons8.com/48/metro/cancel.png"
                />
              </S.Opcao>
            </li>
          ))}
        </ul>
      </S.CampoStyle>
    </S.AddPriceStyle>
  )
}

export default AddCart
