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

  const adicionarProduto = async (novoProduto: Product) => {
    try {
      const response = await axios.post<Product>(
        'https://api-mercado.vercel.app/api/produtos',
        novoProduto
      )

      if (response.status === 201) {
        // Produto adicionado com sucesso
        setItems((prevItems) => [...prevItems, response.data])
      } else {
        console.error('Erro ao adicionar o produto à API')
      }
    } catch (error) {
      console.error('Erro de solicitação ao adicionar o produto:', error)
    }
  }

  return items
}
