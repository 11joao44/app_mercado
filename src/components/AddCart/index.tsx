import { useDispatch, useSelector } from 'react-redux'
import * as S from './style'
import { RootReducer } from '../../store'
import { removeItem, openList, openCart } from '../../store/reducers/lista' // Corrija a importação para 'reducers' em vez de 'redurcers'
import Button from '../Button'

import * as C from '../../store/reducers/cart'
import { postAPI } from '../../hooks/useAPI'
import { useState } from 'react'
import { Product } from '../../store/types/types'

const AddCart = () => {
  const { editedData } = useSelector((state: RootReducer) => state.cart)
  const { produtos } = useSelector((state: RootReducer) => state.lista)
  const dispatch = useDispatch()
  const { addProduct } = postAPI()

  const [newProduct, setNewProduct] = useState<Product>({
    id: 200,
    nome: '',
    foto: '',
    preco: 0,
    unidade: 0
  })

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

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()

    try {
      await addProduct(newProduct)

      // Limpe o estado após a adição bem-sucedida
      setNewProduct({
        id: 200,
        nome: '',
        foto: '',
        preco: 0,
        unidade: 0
      })
    } catch (error) {
      console.error('Erro ao adicionar o produto:', error)
    }
  }

  return (
    <S.AddPriceStyle>
      <S.CampoStyle>
        {produtos.length === 0 ? (
          <S.ButtonDiv>
            <S.Form>
              <h2>Adicionar Novo Produto</h2>
              <form onSubmit={handleSubmit}>
                <S.InputLabelAdd>
                  <input
                    type="text"
                    value={newProduct.nome}
                    onChange={(e) =>
                      setNewProduct({ ...newProduct, nome: e.target.value })
                    }
                    placeholder="Nome do Produto"
                    required
                  />
                  <input
                    type="text"
                    value={newProduct.foto}
                    onChange={(e) =>
                      setNewProduct({ ...newProduct, foto: e.target.value })
                    }
                    placeholder="Foto do Produto"
                    required
                  />
                  <input
                    type="number"
                    value={newProduct.preco}
                    onChange={(e) =>
                      setNewProduct({ ...newProduct, preco: +e.target.value })
                    }
                    placeholder="Preço do Produto"
                    required
                  />
                  <input
                    type="number"
                    value={newProduct.unidade}
                    onChange={(e) =>
                      setNewProduct({ ...newProduct, unidade: +e.target.value })
                    }
                    placeholder="Unidade do Produto"
                    required
                  />
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
