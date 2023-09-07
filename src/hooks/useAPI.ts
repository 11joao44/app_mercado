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

  return { addProduct } // Retorne a função addProduct dentro de um objeto
}
