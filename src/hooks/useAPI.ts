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
