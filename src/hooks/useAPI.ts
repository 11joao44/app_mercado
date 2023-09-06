import { useEffect, useState } from 'react'
import axios from 'axios'
import { Product } from '../store/types/types'

export function useAPI() {
  const [items, setItems] = useState<Product[]>([])

  useEffect(() => {
    axios
      .get<Product[]>('https://api-mercado.vercel.app/api/produtos')
      .then((response) => {
        setItems(response.data)
      })
      .catch((error) => {
        console.error('Erro ao obter os itens da API:', error)
      })
  }, [])

  return items
}

export function postAPI() {
  // eslint-disable-next-line react-hooks/rules-of-hooks
  const [items, setItems] = useState<Product[]>([])

  const addProduct = async (newProduct: Product) => {
    try {
      const response = await axios.post<Product>(
        'https://api-mercado.vercel.app/api/produtos',
        newProduct
      )
      // Adicionar o novo produto à lista após a adição bem-sucedida
      setItems([...items, response.data])
    } catch (error) {
      console.error('Erro ao adicionar o produto:', error)
    }
  }

  // Função para enviar o carrinho de compras para a API
  const postCartToAPI = async (cartItems: Product[]) => {
    try {
      const response = await axios.post(
        'https://api-mercado.vercel.app/api/historico_compras',
        cartItems
      )
      // Você pode adicionar tratamento de resposta aqui, se necessário
      return response.data
    } catch (error) {
      console.error('Erro ao enviar o carrinho de compras:', error)
      throw error
    }
  }

  return { addProduct, postCartToAPI } // Retorne a função addProduct dentro de um objeto
}
