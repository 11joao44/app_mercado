import axios from 'axios'
import { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'

import * as S from './style'
import Button from '../Button'
import { RootReducer } from '../../store'
import * as C from '../../store/reducers/cart'
import { Product } from '../../store/types/types'
import {
  removeItem,
  openList,
  openCart,
  openAdd,
  closeAdd
} from '../../store/reducers/lista' // Corrija a importação para 'reducers' em vez de 'redurcers'

const AddCart = () => {
  const { editedData } = useSelector((state: RootReducer) => state.cart)
  const { produtos, isOpenAdd } = useSelector(
    (state: RootReducer) => state.lista
  )
  const dispatch = useDispatch()

  const [newProduct, setNewProduct] = useState<Product>({
    id: 0,
    nome: '',
    foto: '',
    preco: 0,
    unidade: 0
  })

  const adicionar = () => {
    setNewProduct((prevProduct) => ({
      ...prevProduct,
      unidade: prevProduct.unidade + 1
    }))
  }

  const remover = () => {
    if (newProduct.unidade > 0) {
      setNewProduct((prevProduct) => ({
        ...prevProduct,
        unidade: prevProduct.unidade - 1
      }))
    }
  }

  const handleDataChange = (
    productId: number,
    newPrice: number,
    newUnit: number
  ) => {
    // Atualize o Redux para refletir as mudanças
    dispatch(C.addToEditedData({ productId, price: newPrice, unit: newUnit }))

    // Atualize o localStorage para persistir as mudanças
    const updatedEditedData = { ...editedData }
    updatedEditedData[productId] = { price: newPrice, unit: newUnit }
    localStorage.setItem('editedData', JSON.stringify(updatedEditedData))
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

  const openAddPro = () => {
    dispatch(openAdd())
  }
  const closeAddPro = () => {
    dispatch(closeAdd())
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()

    try {
      // Enviar os dados do novo produto para a API
      const response = await axios.post(
        'https://api-mercado.vercel.app/api/produtos',
        newProduct
      )
      console.log('Produto adicionado com sucesso:', response.data)

      // Limpar o estado após a adição bem-sucedida
      setNewProduct({
        id: 0,
        nome: '',
        foto: '',
        preco: 0,
        unidade: 0
      })

      // Você pode atualizar a lista de produtos após a adição bem-sucedida, se necessário
    } catch (error) {
      console.error('Erro ao adicionar o produto:', error)
    }
  }

  const formatPriceForDisplay = (price: number): string => {
    // Formate o preço como desejado para exibição
    return price.toLocaleString('pt-BR', {
      minimumFractionDigits: 2,
      maximumFractionDigits: 2
    })
  }

  const handlePriceInputChange = (event: { target: { value: string } }) => {
    const numericValue =
      parseFloat(event.target.value.replace(/[^\d]/g, '')) / 100
    setNewProduct((prevProduct) => ({
      ...prevProduct,
      preco: numericValue // Mantenha o preço como número
    }))
  }

  const handleUnitChange = (productId: number, newUnit: number) => {
    // Verificar se a nova unidade é válida (maior ou igual a 0)
    if (newUnit >= 0) {
      handleDataChange(productId, editedData[productId]?.price || 0, newUnit)
    }
  }

  return (
    <S.AddPriceStyle>
      <S.CampoStyle>
        {produtos.length === 0 ? (
          <S.ButtonDiv>
            <S.Form className={isOpenAdd ? 'is-open' : ''}>
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
                  <S.InputMoney>
                    <div>
                      <span>R$:</span>
                      <input
                        type="text"
                        value={formatPriceForDisplay(newProduct.preco)}
                        onChange={handlePriceInputChange}
                        placeholder="Preço do Produto"
                        required
                      />
                    </div>
                  </S.InputMoney>
                  <S.InputCount>
                    <span onClick={remover}>-</span>
                    <input
                      type="number"
                      value={newProduct.unidade}
                      onChange={(e) =>
                        setNewProduct({
                          ...newProduct,
                          unidade: +e.target.value
                        })
                      }
                      placeholder="Unidade do Produto"
                      required
                    />
                    <span onClick={adicionar}>+</span>
                  </S.InputCount>
                </S.InputLabelAdd>
                <button type="submit">Adicionar Produto</button>
                <button onClick={closeAddPro}>Cancelar</button>
              </form>
            </S.Form>
            <S.DivButton className={isOpenAdd ? 'is-open' : ''}>
              <Button onClick={openAddPro} texto="Novo produto" />
              <Button onClick={openLista} texto="Lista de compras" />
              <Button onClick={openCartt} texto="Carrinho de compras" />
            </S.DivButton>
          </S.ButtonDiv>
        ) : null}
        <ul>
          {produtos.map((item) => (
            <li key={item.id}>
              <S.Capa src={item.foto} alt={item.nome} />
              <S.Titulo>{item.nome}</S.Titulo>
              <S.InputLabel>
                <S.InputMoneyCart>
                  <span>R$:</span>
                  <input
                    type="text"
                    value={formatPriceForDisplay(
                      editedData[item.id]?.price || 0
                    )}
                    placeholder="Preço do Produto"
                    required
                    onChange={(e) => {
                      // Aqui, você pode tratar a entrada do usuário e atualizar o estado conforme necessário
                      // Por exemplo, você pode remover vírgulas e pontos e converter para um número
                      const numericValue =
                        parseFloat(e.target.value.replace(/[^\d]/g, '')) / 100

                      // Em seguida, você pode atualizar o estado conforme necessário
                      handleDataChange(
                        item.id,
                        numericValue,
                        editedData[item.id]?.unit || 0
                      )
                    }}
                  />
                </S.InputMoneyCart>

                <S.InputCount>
                  <span
                    onClick={() =>
                      handleUnitChange(item.id, editedData[item.id]?.unit - 1)
                    }
                  >
                    -
                  </span>
                  <input
                    type="number"
                    value={editedData[item.id]?.unit || 0}
                    placeholder="0"
                    onChange={(e) =>
                      handleDataChange(
                        item.id,
                        editedData[item.id]?.price || 0,
                        parseInt(e.target.value)
                      )
                    }
                    required
                  />
                  <span
                    onClick={() =>
                      handleUnitChange(item.id, editedData[item.id]?.unit + 1)
                    }
                  >
                    +
                  </span>
                </S.InputCount>
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
